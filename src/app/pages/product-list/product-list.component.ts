import { Component, OnInit, ElementRef } from '@angular/core';
import { BehaviourService } from 'src/app/_services/behaviour.service';
import { ProductListArray } from './productData';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared-modules/confirmation-dialog/confirmation-dialog.component';
import { AddproductComponent } from './addproduct/addproduct.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductListArray],
})
export class ProductListComponent implements OnInit {
  procuctArray: any = [];
  showarray: any = [];
  pushRemovedItem: any = [];
  addedData: any = {};
  storeData: any = [];
  whichStock: any;
  newLocArray:any = [];
  stockVal: string = 'in stock';
  constructor(
    private _behaviourService: BehaviourService,
    public productlist: ProductListArray,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.radioBtnClick('in stock');
    this._behaviourService.searchString.subscribe((result) => {
      let getData = JSON.parse(localStorage.getItem('productList'));
      if (result != null) {
        if (getData) {
          this.procuctArray = getData;
        }
        const data = this.procuctArray.filter(
          (element) =>
            ((element.title.toLowerCase().includes(result.toLowerCase()) ||
            element.description.toLowerCase().includes(result.toLowerCase())) &&
            element.stock == this.whichStock)
        );
        this.showarray = data;
      } else {
        this.LoadData();
        this.radioBtnClick(this.whichStock)
      }
    });
  }
  ngOnInit(): void {
  }
  cardClick(val) {
    localStorage.setItem('fordetails', JSON.stringify(val));
    this.router.navigate(['/products-list/details']);
  }
  radioBtnClick(event) {
    this.whichStock = event;
    let data;
    if (event == 'in stock') {
      data = this.procuctArray.filter((element) => element.stock == event);
    } else if (event == 'out stock') {
      data = this.procuctArray.filter((element) => element.stock == event);
    }
    this.showarray = data;
    // this.storeData = data;
  }
  LoadData() {
    let getData = JSON.parse(localStorage.getItem('productList'));
    if (getData) {
      this.procuctArray = getData;
      this.showarray = this.procuctArray;
    } else {
      this.showarray = this.productlist.procuctarray;
      this.procuctArray = this.showarray;
      localStorage.setItem('productList', JSON.stringify(this.showarray));
    }
  }
  remove(index, val) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        let getItem = JSON.parse(localStorage.getItem('productList'));
        this.procuctArray = getItem;
        let i = 0;
        const data = this.procuctArray.splice(index, 1);
        this.procuctArray.forEach(element => {
          element.index = i++
        });
        localStorage.setItem('productList', JSON.stringify(this.procuctArray));
        this.radioBtnClick(this.whichStock);
        let getdata = JSON.parse(localStorage.getItem('removedList'));
        if (getdata) {
          this.pushRemovedItem = getdata;
          this.pushRemovedItem.push(val);
        } else {
          this.pushRemovedItem.push(val);
        }
        localStorage.setItem(
          'removedList',
          JSON.stringify(this.pushRemovedItem)
        );
      }
    });
  }
  addProduct(val) {
    const dialogRef = this.dialog.open(AddproductComponent, {
      data: { title: 'Add Product' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        let getItem = JSON.parse(localStorage.getItem('productList'));
        if (getItem) {
          this.showarray = getItem;
          this.procuctArray.push(result);
          this.showarray.push(result);
          result.index = this.showarray.length - 1;
          localStorage.setItem('productList', JSON.stringify(this.showarray));
          this.radioBtnClick(this.whichStock);
        }
      }
    });
  }
  updateItem(index, val) {
    const dialogRef = this.dialog.open(AddproductComponent, {
      data: { row: val, title: 'Update Product' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        let getItem = JSON.parse(localStorage.getItem('productList'));
        if (getItem) {
          this.procuctArray = getItem;
          // this.showarray[index] = result;
          this.procuctArray[index] = result;
          result.index = index;
          localStorage.setItem('productList', JSON.stringify(this.procuctArray));
          this.radioBtnClick(this.whichStock);
        }
      }
    });
  }
}

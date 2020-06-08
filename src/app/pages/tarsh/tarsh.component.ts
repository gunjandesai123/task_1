import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared-modules/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-tarsh',
  templateUrl: './tarsh.component.html',
  styleUrls: ['./tarsh.component.scss'],
})
export class TarshComponent implements OnInit {
  trashList: any = [];
  restoreListArray: any = [];
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    const data = JSON.parse(localStorage.getItem('removedList'));
    if (data) {
      this.trashList = data;
    }
  }
  restoreList(index, val,innerIndex) {
    const productlist = JSON.parse(localStorage.getItem('productList'));
    if (productlist) {
      this.restoreListArray = productlist;
      this.restoreListArray.push(val);
    } else {
      this.restoreListArray.push(val);
    }
    let i = 0;
    this.restoreListArray.forEach(element => {
        element.index = i++;
    });
    let y = 0;
    localStorage.setItem('productList', JSON.stringify(this.restoreListArray));
    // this.trashList.forEach(element => {
    //   element.index = i++;
    // });
    this.trashList.splice(innerIndex, 1);
    localStorage.setItem('removedList', JSON.stringify(this.trashList));
  }
  removeList(index, val) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.trashList.splice(index, 1);
        localStorage.setItem('removedList', JSON.stringify(this.trashList));
      }
    });

    // const gerTrashlist = JSON.parse(localStorage.getItem('removedList'));
    // if(gerTrashlist){

    // }
  }
}

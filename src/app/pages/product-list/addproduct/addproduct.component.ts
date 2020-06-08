import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Options,LabelType } from 'ng5-slider';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss'],
})
export class AddproductComponent implements OnInit {
  minValue: number = 100;
  maxValue: number = 400;
  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 500,
    // translate: (value: number, label: LabelType): string => {
    //   switch (label) {
    //     case LabelType.Low:
    //       return '<b>Min price:</b> $' + value;
    //     case LabelType.High:
    //       return '<b>Max price:</b> $' + value;
    //     default:
    //       return '$' + value;
    //   }
    // }
  };
  imageUrl: any;
  title: string;
  price: number;
  description: string;
  detailsdescription: string;
  stock: any = 'in stock';
  locations: any = [];
  fileName: any;
  dialogData: any;
  isUpdatedata: boolean = false;
  fileobject:any;
  rating:any;
  // myForm :FormGroup
  city = [
    { name: 'Ahmedabad', value: false },
    { name: 'Surat', value: false },
    { name: 'Junagadh', value: false },
  ];
  constructor(
    private cd: ChangeDetectorRef,
    public dialogRef: MatDialogRef<AddproductComponent>,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public _data: any
  ) {
    this.dialogData = _data;
    if (_data.row) {
      let reader = new FileReader();
      this.isUpdatedata = true;
      (this.title = _data.row.title),
        (this.price = _data.row.price),
        (this.description = _data.row.description),
        (this.stock = _data.row.stock),
        this.rating = _data.row.rating,
        this.minValue = _data.row.minValue,
        this.maxValue = _data.row.maxValue,
        this.imageUrl = _data.row.imageUrl,
        this.fileName = _data.row.imageName,
      this.city.forEach((element) => {
        const diff = _data.row.locations.find((item) => item == element.name);
        if (diff == undefined) {
          element.value = false;
        } else {
          element.value = true;
          this.locations.push(element.name);
        }
      });
    }
    // this.myForm = formBuilder.group({
    //   priceRange: ['', [Validators.min(1000), Validators.max(2000)]]
    //     });
  }

  ngOnInit(): void {}
  checkbox(val, index) {
    if (val.checked) {
      this.locations.push(val.source.value);
    } else {
      this.locations.splice(index, 1);
    }
  }

  onFileInput(event, ckeditor) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    // this.fileobject = file;
    this.fileName = file.name;
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      this.cd.markForCheck();
    }
  }
  saveData(val) {
    if (this.validationCheck()) {

      let data = {
        title: this.title,
        price: this.minValue.toString() +' - '+ this.maxValue.toString() ,
        description: this.description,
        imageUrl: this.imageUrl,
        imageName: this.fileName,
        stock: this.stock,
        locations: this.locations,
        rating:this.rating,
        minValue:this.minValue,
        maxValue : this.maxValue,

      };
      this.dialogRef.close(data);
    }
  }
  validationCheck() {
    let errmsg = '';
    if (this.title == undefined) {
      errmsg += 'please enter title \n';
    }
    // if (this.price == undefined) {
    //   errmsg += 'please enter price \n';
    // } else {
    //   if (isNaN(this.price)) {
    //     errmsg += 'please enter number only in price \n';
    //   }
    // }
    if (this.description == undefined) {
      errmsg += 'please enter description \n';
    }
    else {
      if (this.description.length <= 150) {
        errmsg += 'description must be at least 150 characters long \n';
      }
    }
    if (this.rating == undefined) {
      errmsg += 'please enter rating \n';
    }
    if (this.fileName == undefined || this.fileName == '') {
      errmsg += 'please select image \n';
    }
    if (errmsg != '') {
      this.toastr.error(errmsg);
      return false;
    } else {
      return true;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  data: any;
  myThumbnail:any;
  myFullresImage:any;
  constructor(public activatedRoute: ActivatedRoute,private router: Router) {
   let getData = JSON.parse(localStorage.getItem('fordetails'));
    // this.activatedRoute.params.subscribe((data)=>{
    //   console.log(data);
      this.data = getData;
      this.myThumbnail = getData.imageUrl
      this.myFullresImage = getData.imageUrl
    // })
  }

  ngOnInit(): void {
  }
backward(){
  this.router.navigate(['/products-list']);
}
}

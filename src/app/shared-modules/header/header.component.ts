import { Component, OnInit } from '@angular/core';
import { BehaviourService } from 'src/app/_services/behaviour.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  search:string = '';
  constructor(private _behaviourService:BehaviourService) { }

  ngOnInit(): void {
  }
  searchFn(event){
    this._behaviourService.updatedDataSelection(this.search)
  }
}

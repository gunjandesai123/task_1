import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BehaviourService {
  public searchString = new BehaviorSubject<any>(null);
  // data = this.searchString.asObservable();
  constructor() { }
  updatedDataSelection(data){
    this.searchString.next(data);
  }
}

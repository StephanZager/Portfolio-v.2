import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuOpenState = new BehaviorSubject<boolean>(false);
  public menuOpen$ = this.menuOpenState.asObservable();

  constructor() { }


  openMenu() {
    this.menuOpenState.next(true);
  }


  closeMenu() {
    this.menuOpenState.next(false);
  }


  toggleMenu() {
    this.menuOpenState.next(!this.menuOpenState.value);
  }
}
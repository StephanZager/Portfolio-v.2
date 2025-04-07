import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollSubject = new BehaviorSubject<boolean>(false);
  scroll$ = this.scrollSubject.asObservable();

  setScrolled(isScrolled: boolean) {
    this.scrollSubject.next(isScrolled);
  }
}
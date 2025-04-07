import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private currentSectionSubject = new BehaviorSubject<string>('');
  currentSection$ = this.currentSectionSubject.asObservable();

  setCurrentSection(sectionId: string) {
    this.currentSectionSubject.next(sectionId);
  }
}
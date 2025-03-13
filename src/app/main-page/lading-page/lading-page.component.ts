import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { IconBarComponent } from "../../shared/icon-bar/icon-bar.component";
import { ScrollDownComponent } from "./scroll-down/scroll-down.component";

@Component({
  selector: 'app-lading-page',
  standalone: true,
  imports: [IconBarComponent, ScrollDownComponent],
  templateUrl: './lading-page.component.html',
  styleUrl: './lading-page.component.scss'
})
export class LadingPageComponent { }



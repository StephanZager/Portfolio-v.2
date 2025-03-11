import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { IconBarComponent } from "../../shared/icon-bar/icon-bar.component";

@Component({
  selector: 'app-lading-page',
  standalone: true,
  imports: [IconBarComponent],
  templateUrl: './lading-page.component.html',
  styleUrl: './lading-page.component.scss'
})
export class LadingPageComponent { }



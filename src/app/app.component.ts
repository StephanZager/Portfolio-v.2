import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from "./main-page/main-page.component";
import { HeaderComponent } from "./shared/header/header.component";
import { ProjectsComponent } from "./main-page/my-work/projects/projects.component";
import { NavigationBarComponent } from "./shared/navigation-bar/navigation-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainPageComponent, HeaderComponent, ProjectsComponent, NavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}

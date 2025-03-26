import { Routes } from '@angular/router';
import { ContactComponent } from './main-page/contact/contact.component';
import { ReferenzenComponent } from './main-page/referenzen/referenzen.component';
import { MyWorkComponent } from './main-page/my-work/my-work.component';
import { MySkillsComponent } from './main-page/my-skills/my-skills.component';
import { AboutMeComponent } from './main-page/about-me/about-me.component';
import { LadingPageComponent } from './main-page/lading-page/lading-page.component';

export const routes: Routes = [
    { path: 'ladingPage', component: LadingPageComponent },
    { path: 'aboutMe', component: AboutMeComponent },
    { path: 'mySkills', component: MySkillsComponent },
    { path: 'myWork', component: MyWorkComponent },
    { path: 'referenzen', component: ReferenzenComponent },
    { path: 'contact', component: ContactComponent },
];

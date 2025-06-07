import { Routes } from '@angular/router';
import { ContactComponent } from './main-page/contact/contact.component';
import { ReferenzenComponent } from './main-page/referenzen/referenzen.component';
import { MyWorkComponent } from './main-page/my-work/my-work.component';
import { MySkillsComponent } from './main-page/my-skills/my-skills.component';
import { AboutMeComponent } from './main-page/about-me/about-me.component';
import { LadingPageComponent } from './main-page/lading-page/lading-page.component';
import { ImprintComponent } from './legal/imprint/imprint.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PrivacyPolicyComponent } from './legal/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent }
];

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule, Routes} from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { AboutComponent } from './about/about.component';
import {UserService} from './user/user.service';

const appRoutes: Routes = [
  { path: 'general', component: GeneralComponent },
  { path: 'accessibility', component: AccessibilityComponent },
  { path: 'about', component: AboutComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GeneralComponent,
    AccessibilityComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';

import { SearchPageComponent } from './search-page/search-page.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProfessionalOverviewComponent } from './professional-overview/professional-overview.component';


@NgModule({
  declarations: [
    AppComponent,

    HomepageComponent,
    HeaderComponent,
    SearchPageComponent,
    ProjectOverviewComponent,
    ProfessionalOverviewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

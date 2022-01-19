import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { CreateProjectComponent } from './create-project/create-project.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    ProjectOverviewComponent,
    CreateProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

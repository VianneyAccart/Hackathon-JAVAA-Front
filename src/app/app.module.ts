import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProfessionalOverviewComponent } from './professional-overview/professional-overview.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProfessionalComponent } from './professional/professional.component';

import { HttpClientModule } from '@angular/common/http';

import { ProjectComponent } from './project/project.component';
import { ProductUnavoidableOverviewComponent } from './product-unavoidable-overview/product-unavoidable-overview.component';
import { ProjectSearchPageComponent } from './project-search-page/project-search-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    SearchPageComponent,
    ProjectOverviewComponent,
    ProfessionalOverviewComponent,
    SearchFormComponent,
    HomepageComponent,
    HeaderComponent,
    SearchPageComponent,
    CreateProjectComponent,
    ProjectOverviewComponent,
    ResultPageComponent,
    BlogPostComponent,
    ProductOverviewComponent,
    ProfessionalComponent,
    ProjectComponent,
    ProductUnavoidableOverviewComponent,
    ProjectSearchPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatAutocompleteModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

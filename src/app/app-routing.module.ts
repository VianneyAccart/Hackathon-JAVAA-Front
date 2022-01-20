import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProfessionalComponent } from './professional/professional.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  {
    path: "rechercher",
    component: SearchPageComponent
  },
  {
    path: "creation-projet",
    component: CreateProjectComponent
  },
  {
    path: "professional",
    component:ProfessionalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

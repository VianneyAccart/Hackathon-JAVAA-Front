import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { ProfessionalComponent } from './professional/professional.component';
import { ProjectComponent } from './project/project.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "rechercher",
    component: SearchPageComponent
  },
  {
    path: "creation-projet",
    component: CreateProjectComponent
  },
  {
    path: "resultats",
    component: ResultPageComponent
  },
  {
    path: "professionel/:id",
    component: ProfessionalComponent
  },
  {
    path: "projet/:id",
    component: ProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

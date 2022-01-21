import { Component, OnInit } from '@angular/core';
import { imagesUrl } from 'src/environments/environment';
import { ProductService } from '../shared/services/product.service';
import { ProjectService } from '../shared/services/project.service';

@Component({
  selector: 'app-project-search-page',
  templateUrl: './project-search-page.component.html',
  styleUrls: ['./project-search-page.component.css'],
})
export class ProjectSearchPageComponent implements OnInit {
  projects: any;
  imageUrl: string = imagesUrl;

  constructor(private projectsService: ProjectService) {}

  ngOnInit(): void {
    this.projectsService.getAllProjects().subscribe((data) => {
      this.projects = data;
    });
  }
}

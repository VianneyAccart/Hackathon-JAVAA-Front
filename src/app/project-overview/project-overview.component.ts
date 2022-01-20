import { Component, OnInit } from '@angular/core';
import { imagesUrl } from 'src/environments/environment';
import { ProjectService } from '../shared/services/project.service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {

  projects : any;
  imageUrl: string = imagesUrl;

  constructor(private projectsService: ProjectService) { 
  }

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe(response => {
      this.projects = response;
      console.log(this.projects);
    });
  }
}

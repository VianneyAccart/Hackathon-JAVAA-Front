import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { imagesUrl } from 'src/environments/environment';
import { ProjectService } from '../shared/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  
  routeSub: Subscription | undefined;
  project : any;
  imageUrl: string = imagesUrl;

  constructor(private projectsService: ProjectService, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.projectsService.getProjectById(params["id"]).subscribe(response => {
        this.project = response;
      });
    })
  }
}

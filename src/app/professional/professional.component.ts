import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { imagesUrl } from 'src/environments/environment';
import { ProfessionalService } from '../shared/services/professional.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  routeSub: Subscription | undefined;
  professional : any;
  imageUrl: string = imagesUrl;

  constructor(private professionalService: ProfessionalService, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.professionalService.getProfessionalById(params["id"]).subscribe(response => {
        this.professional = response;
      });
    })
  }
}

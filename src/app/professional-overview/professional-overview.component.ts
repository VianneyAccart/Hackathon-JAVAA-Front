import { Component, OnInit } from '@angular/core';
import { imagesUrl } from 'src/environments/environment';
import { Professional } from '../shared/model/professional';
import { ProfessionalService } from '../shared/services/professional.service';

@Component({
  selector: 'app-professional-overview',
  templateUrl: './professional-overview.component.html',
  styleUrls: ['./professional-overview.component.css']
})
export class ProfessionalOverviewComponent implements OnInit {
  professionals : any;
  imageUrl: string = imagesUrl;

  constructor(private professionalService: ProfessionalService) { 
  }

  ngOnInit(): void {
    this.professionalService.getProfessionals().subscribe(response => {
      this.professionals = response;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Professional } from '../shared/model/professional';

@Component({
  selector: 'app-professional-overview',
  templateUrl: './professional-overview.component.html',
  styleUrls: ['./professional-overview.component.css']
})
export class ProfessionalOverviewComponent implements OnInit {
  professionals : Professional[] | undefined;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  projectForm = this.fb.group({
    category : [''],
    professionnal: [''],
    photos: [''],
    products: ['']
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}

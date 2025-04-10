import { Component, OnInit } from '@angular/core';
import { ProductbreadcrumbComponent } from "../../shared/productbreadcrumb/productbreadcrumb.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-forgetpassword',
  imports: [CommonModule, ProductbreadcrumbComponent, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }
}
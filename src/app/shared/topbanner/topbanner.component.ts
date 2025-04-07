import { Component, OnInit, Input } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeadingComponent } from '../heading/heading.component';
import { IMAGE_PATHS } from '../constants/api-paths';
@Component({
  selector: 'app-topbanner',
  imports: [NgFor, RouterModule, HeadingComponent,NgIf],
  templateUrl: './topbanner.component.html',
  styleUrl: './topbanner.component.css'
})
export class TopbannerComponent implements OnInit {
  @Input() topbanner: any;
  @Input() title1: string = '';
  @Input() title2: string = '';
  @Input() iscenter: boolean = false;
  imagePath = IMAGE_PATHS;
  ngOnInit(): void {
    this.title1 = this.title1;
    this.title2 = this.title2;
    this.topbanner = this.topbanner;
    this.iscenter = this.iscenter;
  }

}

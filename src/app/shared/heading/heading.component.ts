import { Component ,Input , OnInit} from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-heading',
  imports: [NgIf],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent implements OnInit {
  @Input() title1: string = '';
  @Input() title2: string = '';
  @Input() href: string = '';
  @Input() buttonText: string = '';
  @Input() iscenter: boolean =false;
  @Input() isWhite: boolean =false;



  ngOnInit(): void {
    this.title1 = this.title1;
    this.title2 = this.title2;
    this.href = this.href;
    this.buttonText = this.buttonText;
    this.iscenter = this.iscenter;
    this.isWhite = this.isWhite;
  }
  }

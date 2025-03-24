import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-banners',
  imports: [],
  templateUrl: './banners.component.html',
  styleUrl: './banners.component.css'
})
export class BannersComponent implements OnInit {
  @Input() banner: string = "";
  ngOnInit(): void {
    this.banner = this.banner;
  }
}

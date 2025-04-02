import { Component,Input,OnInit } from '@angular/core';
import { IMAGE_PATHS } from '../constants/api-paths';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-banners',
  imports: [RouterModule],
  templateUrl: './banners.component.html',
  styleUrl: './banners.component.css'
})
export class BannersComponent implements OnInit {
  @Input() banner: any = "";
    imagePath = IMAGE_PATHS.banners;

  ngOnInit(): void {
    this.banner = this.banner;
  }
}

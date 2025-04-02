import { Component,OnInit ,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMAGE_PATHS } from '../constants/api-paths';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-featurebanner',
  imports: [CommonModule, RouterModule],
  templateUrl: './featurebanner.component.html',
  styleUrl: './featurebanner.component.css'
})
export class FeaturebannerComponent implements OnInit {
  @Input() banner : any;
  imagePath = IMAGE_PATHS.banners;
// bannner : string[] = [
//   "../../../assets/images/featurebanner/1.png",
//   "../../../assets/images/featurebanner/2.png",
//   "../../../assets/images/featurebanner/3.png"
// ]
ngOnInit(): void {
  this.banner = this.banner;
}
}

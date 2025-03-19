import { Component } from '@angular/core';

@Component({
  selector: 'app-featurebanner',
  imports: [],
  templateUrl: './featurebanner.component.html',
  styleUrl: './featurebanner.component.css'
})
export class FeaturebannerComponent {
bannner : string[] = [
  "../../../assets/images/featurebanner/1.png",
  "../../../assets/images/featurebanner/2.png",
  "../../../assets/images/featurebanner/3.png"
]
}

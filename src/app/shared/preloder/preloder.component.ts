import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-preloder',
  imports: [CommonModule],
  templateUrl: './preloder.component.html',
  styleUrl: './preloder.component.css'
})
export class PreloaderComponent implements OnInit {
  isLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
    // Simulate loading time
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
} 
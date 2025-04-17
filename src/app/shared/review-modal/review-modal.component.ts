import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-review-modal',
    standalone: true,
    imports: [CommonModule, FormsModule, MatDialogModule, MatButtonModule, MatInputModule, MatIconModule],
    templateUrl: './review-modal.component.html',
    styleUrl: './review-modal.component.css'
})
export class ReviewModalComponent {
    @Output() submit = new EventEmitter<any>();
    @Output() close = new EventEmitter<void>();

    rating: number = 0;
    title: string = '';
    review: string = '';

    setRating(value: number) {
        this.rating = value;
    }

    submitReview() {
        if (this.rating && this.title && this.review) {
            this.submit.emit({
                rating: this.rating,
                title: this.title,
                review: this.review
            });
        }
    }

    closeModal() {
        this.close.emit();
    }
} 
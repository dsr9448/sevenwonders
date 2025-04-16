import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
interface CompareItem {
    id: number;
    category: string;
    subcategory: string;
    productName: string;
    brand: string;
    model: string;
    price: number;
    sprice: number;
    image: string;

}
@Injectable({
  providedIn: 'root'
})
export class CompareService {
    private compareItemsSubject = new BehaviorSubject<any[]>([]);
    compareItems$ = this.compareItemsSubject.asObservable();

    constructor(private snackBar: MatSnackBar) {}
    
    addToCompare(item: CompareItem) {
        const currentItems = this.compareItemsSubject.value;
        const existingItem = currentItems.find(i => i.id === item.id && i.category === item.category && i.subcategory === item.subcategory && i.productName === item.productName && i.brand === item.brand && i.model === item.model);

        if (existingItem) {
            this.snackBar.open('Item already in compare', 'Close', {
                duration: 3000,
                horizontalPosition: 'right',
                verticalPosition: 'top',
                panelClass: ['snackbar-container'],
            });
        } else {    
            this.compareItemsSubject.next([...currentItems, item]);
            this.snackBar.open('Item added to compare', 'Close', {
                duration: 3000,
                horizontalPosition: 'right',
                verticalPosition: 'top',
                panelClass: ['snackbar-container'],
            }); 
        }
    }
    removeFromCompare(item: CompareItem) {
        const currentItems = this.compareItemsSubject.value;
        const updatedItems = currentItems.filter(i => i.id !== item.id);
        this.compareItemsSubject.next(updatedItems);
    }
}

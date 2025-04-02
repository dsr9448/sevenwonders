import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'https://seven.wodo.digital';

  constructor(private http: HttpClient) {}

  getHomepageData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/homepage`);
  }
  getCategoryData(slug: string ): Observable<any> {
    return this.http.get(`${this.baseUrl}/category-api/${slug}`);
  }
}

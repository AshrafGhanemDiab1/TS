import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MultipleGetRequestService {
  private cachedData: any;

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    // If data is already cached, return it
    if (this.cachedData) {
      return of(this.cachedData);
    }

    // Otherwise, make a GET request to the API
    return this.http.get<any>('YOUR_API_URL').pipe(
      map((response) => {
        this.cachedData = response;
        return response;
      }),
      catchError((error) => {
        throw error;
      })
    );
  }
}

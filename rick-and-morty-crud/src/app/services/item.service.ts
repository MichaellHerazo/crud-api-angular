import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/items/';
  }

  getListItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.myAppUrl + this.myApiUrl);
  }

  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(this.myAppUrl + this.myApiUrl + id);
  }

  saveItem(item: Item): Observable<void> {
    return this.http.post<void>(this.myAppUrl + this.myApiUrl, item);
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(this.myAppUrl + this.myApiUrl + id);
  }

  updateItem(id: number, item: Item): Observable<void> {
    return this.http.put<void>(this.myAppUrl + this.myApiUrl + id, item);
  }
}

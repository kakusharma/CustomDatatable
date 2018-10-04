import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class DataService<T> {
    constructor(private http: HttpClient) { }
    getData(url: string): Observable<T[]> {
        return this.http.get<T[]>(url);
    }
}

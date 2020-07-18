import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MyHttpService {
    constructor(private httpClient: HttpClient) { }
    httpConnection(requestType, url) {
        let httpHeader = new HttpHeaders({
            'Content-Type':'application/json; charset=utf-8'
        });
        if (requestType.toUpperCase() == 'GET') {
            return this.httpClient.get(url);
        }
        return null;
    }
}
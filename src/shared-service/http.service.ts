import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType} from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { getTNode } from '@angular/core/src/render3/util';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    apiURL = ''; // http://localhost:3002/api/v1
    constructor(
        private http: Http,
        private https: HttpClient
    ) {
        this.apiURL = environment.apiURL;
    }

     uploadImage(image: File): Observable<Response> {
        const formData =  new FormData();
        formData.append('image', image);
        return this.http.post('/api/v1/userinfo/image_url', formData);
    }

    async get(path: string) {
        const resp = await this.http.get(this.apiURL + path, this.headers).toPromise();
        return resp.json();
    }
    async post(path: string, payload: any) {
        const resp = await this.http.post(this.apiURL + path, payload, this.headers).toPromise();
        return resp.json();
    }
    async put(path: string, payload: any) {
        const resp = await this.http.put(this.apiURL + path, payload, this.headers).toPromise();
        return resp.json();
    }

    async delete(path: string) {
        const resp = await this.http.delete(this.apiURL + path, this.headers).toPromise();
        return resp.json();
    }
    // logout
    async logout() {
        const resp: any = await this.http.get(this.apiURL + 'user/logout', this.headers).toPromise();
        if (resp.statusCode === 200) {
            localStorage.removeItem('id_token');
        }
        return resp.json();
    }
    get headers() {
        const token = localStorage.getItem('id_token') || null;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        if (token) {
            headers.append('Authorization', 'Bearer ' + token);
        }
        return {
            headers,
            withCredentials: true
        };
    }
}


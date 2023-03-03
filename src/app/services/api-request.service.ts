import { API_PATH } from './../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  constructor(private http: HttpClient) { }

  index(url: string) {
    return this.http.get(API_PATH + url)
  }

  show(url: string, id: number) {
    return this.http.get(API_PATH + url + "/" + id)
  }

  store(url: string, data: any) {
    return this.http.post(API_PATH + url, data)
  }

  update(url: string, data: any, id: number) {
    return this.http.put(API_PATH + url + "/" + id, data)
  }

  destroy(url: string, id: number) {
    return this.http.delete(API_PATH + url + "/" + id)
  }

  paginate(url: string) {
    return this.http.get(url)
  }

  search(url: string, data: any) {
    return this.http.post(API_PATH + url, data)
  }
}

import { API_PATH } from './../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  constructor(private http: HttpClient) { }

  index(url: string) {
    return this.http.get(API_PATH + url).pipe(map((response:any)=>{
      return response
    }))
  }

  show(url: string, id: number) {
    return this.http.get(API_PATH + url + "/" + id).pipe(map((response:any)=>{
      return response
    }))
  }

  getmodels(url: string, id: number, url2: string) {
    return this.http.get(API_PATH + url + "/" + id + "/" + url2).pipe(map((response:any)=>{
      return response
    }))
  }

  store(url: string, data: any) {
    return this.http.post(API_PATH + url, data).pipe(map((response:any)=>{
      return response
    }))
  }

  update(url: string, data: any, id: number) {
    return this.http.put(API_PATH + url + "/" + id, data).pipe(map((response:any)=>{
      return response
    }))
  }

  destroy(url: string, id: number) {
    return this.http.delete(API_PATH + url + "/" + id).pipe(map((response:any)=>{
      return response
    }))
  }

  paginate(url: string) {
    return this.http.get(url).pipe(map((response:any)=>{
      return response
    }))
  }

  search(url: string, data: any) {
    return this.http.post(API_PATH + url, data).pipe(map((response:any)=>{
      return response
    }))
  }

  download(url: string) {
    return this.http.get(API_PATH + url, {
      responseType: 'blob' as 'json'
    });
  }
}

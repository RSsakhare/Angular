import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private httpref:HttpClient) { }

  resturl="http://localhost:3000/posts";
  getPost():Observable<any[]> {     return this.httpref.get<any>(this.resturl);  }

  delete(id:number){
    return this.httpref.delete(this.resturl+'/'+id);
  }

  createPost(post: any) {
    return this.httpref.post(this.resturl, post);
  }
  updatePost(id: number, post: any) {
    return this.httpref.put(this.resturl + '/' + id, post);
  }
}

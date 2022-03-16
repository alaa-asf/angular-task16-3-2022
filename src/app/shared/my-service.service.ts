import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  apiGet = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.apiGet);
  }

  deleteData(id: any) {
    return this.http.delete(this.apiGet + '/' + id);
  }

  updateData(data: any) {
    return this.http.put(this.apiGet + `/${data.id}`, data);
  }
}

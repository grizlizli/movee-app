import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private readonly endpointUrl = "https://one-framework.herokuapp.com/api";

  constructor(private http: HttpClient) {}

  get<T>(entity: string, params?): Observable<T | any> {
    return this.http.get(`${this.endpointUrl}/${entity}`);
  }

  post(path: string, params?) {
    //
  }
}

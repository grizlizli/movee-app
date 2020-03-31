import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";

const MOVIES_ENDPOINT = "movie";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  private _movies$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private apiService: ApiService) {}

  getMovies() {
    return this.apiService
      .get(MOVIES_ENDPOINT)
      .pipe(tap(data => console.log(data)));
  }
}

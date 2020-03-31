import { Component, OnInit } from "@angular/core";
import { MoviesService } from "./services/movies.service";

@Component({
  selector: "afr-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getMovies().subscribe(data => console.log(data));
  }
}

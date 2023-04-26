import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  totalSeries: number = 0;
  average: number = 0;
  message: string = "";
  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.series.forEach((serie) => {
        this.totalSeries += serie.seasons;
      });
      this.average = this.totalSeries/series.length;
      this.message = `Average number of seasons: ${this.average}`;
    });
  }

  ngOnInit(): void {
    this.getSeries();
  }

}

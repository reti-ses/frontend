import { Component, OnInit } from '@angular/core';
import { NewsComponent } from '../../news/news.component';
import { News } from 'src/app/models/News';

@Component({
  selector: 'app-card-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [News]
})
export class NewsCardComponent implements OnInit {

  carouselInterval = 5000;

  news = News.news

  constructor() {
  }  

  ngOnInit() {
  }

}

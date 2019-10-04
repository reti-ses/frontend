import { Component, OnInit, Injectable } from '@angular/core';
import { News } from '../../models/News'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [News]
})
export class NewsComponent implements OnInit {

  news = News.news

  constructor() { }

  ngOnInit() {
  }

}

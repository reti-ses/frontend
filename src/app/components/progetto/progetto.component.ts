import { Component, OnInit } from '@angular/core';
import { News } from '../../models/News'

@Component({
  selector: 'app-progetto',
  templateUrl: './progetto.component.html',
  styleUrls: ['./progetto.component.scss'],
  providers: [News]
})
export class ProgettoComponent implements OnInit {

  news = News.news

  constructor() { }

  ngOnInit() {
  }

}

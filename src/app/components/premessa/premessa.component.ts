import { Component, OnInit } from '@angular/core';
import { News } from '../../models/News'

@Component({
  selector: 'app-premessa',
  templateUrl: './premessa.component.html',
  styleUrls: ['./premessa.component.scss'],
  providers: [News]
})
export class PremessaComponent implements OnInit {

  news = News.news

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { News } from '../../models/News'

@Component({
  selector: 'app-programma-sociale',
  templateUrl: './programma-sociale.component.html',
  styleUrls: ['./programma-sociale.component.scss'],
  providers: [News]
})
export class ProgrammaSocialeComponent implements OnInit {

  news = News.news

  constructor() { }

  ngOnInit() {
  }

}

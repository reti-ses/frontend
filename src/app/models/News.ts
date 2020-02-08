import { Injectable } from '@angular/core';
import * as moment from 'moment/moment';

@Injectable()
export class News {
    static news = [
        {
            title: '&laquo;BENESSERE e Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(new Date(2020, 0, 19)).format('DD-MM-YYYY'),
            link: 'https://www.youtube.com/watch?v=8YbBkujwVa0'
        }, 
        {
            title: '&laquo;BISOGNI UMANI e Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(new Date(2020, 1, 7)).format('DD-MM-YYYY'),
            link: 'https://www.youtube.com/watch?v=eOWgTYHPUBM'
        }
    ];
}
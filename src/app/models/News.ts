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
        }, 
        {
            title: '&laquo;GIUSTIZIA SOCIALE e Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(new Date(2020, 5, 10)).format('DD-MM-YYYY'),
            link: 'https://www.youtube.com/watch?v=tbLrAFlAROw'
        }, 
        {
            title: '&laquo;SOLIDARIET&Agrave; e Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(new Date(2020, 5, 12)).format('DD-MM-YYYY'),
            link: 'https://www.youtube.com/watch?v=lvvSh0edEwY'
        }, 
        {
            title: '&laquo;MODERAZIONE e Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(new Date(2020, 6, 2)).format('DD-MM-YYYY'),
            link: 'https://www.youtube.com/watch?v=K-ZVJRnrTiY'
        }, 
        {
            title: '&laquo;SOSTENIBILIT&Agrave; e Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(new Date(2020, 6, 2)).format('DD-MM-YYYY'),
            link: 'https://www.youtube.com/watch?v=5lBQQNJIHbM'
        }, 
        {
            title: '&laquo;NECESSIT&Agrave; SOCIALI PRIORITARIE e Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(new Date(2020, 6, 2)).format('DD-MM-YYYY'),
            link: 'https://www.youtube.com/watch?v=NMG7VDp3pO4'
        }, 
        {
            title: '&laquo;FIDUCIA COMUNITARIA e Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(new Date(2020, 6, 2)).format('DD-MM-YYYY'),
            link: 'https://www.youtube.com/watch?v=KCQjHZIX5UE'
        }
    ];
}
import { Injectable } from '@angular/core';
import * as moment from 'moment/moment';

@Injectable()
export class News {
    static news = [
        {
            title: '1 &laquo;BENESSERE e Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(new Date(2020, 0, 19)).format('DD-MM-YYYY'),
            link: 'https://www.youtube.com/watch?v=8YbBkujwVa0'
        }, 
        {
            title: '2 &laquo;BISOGNI UMANI e Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(new Date(2020, 1, 7)).format('DD-MM-YYYY'),
            link: 'https://www.youtube.com/watch?v=eOWgTYHPUBM'
        }, 
        {
            title: '3 &laquo;GIUSTIZIA SOCIALE e Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(new Date(2020, 4, 10)).format('DD-MM-YYYY'),
            link: 'https://www.youtube.com/watch?v=tbLrAFlAROw'
        }, 
        {
            title: '4 &laquo;SOLIDARIET&Agrave; e Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(new Date(2020, 4, 12)).format('DD-MM-YYYY'),
            link: 'https://www.youtube.com/watch?v=lvvSh0edEwY'
        }, 
        {
            title: '5 &laquo;MODERAZIONE e Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(new Date(2020, 5, 2)).format('DD-MM-YYYY'),
            link: 'https://www.youtube.com/watch?v=K-ZVJRnrTiY'
        }, 
        {
            title: '6 &laquo;SOSTENIBILIT&Agrave; e Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(new Date(2020, 5, 2)).format('DD-MM-YYYY'),
            link: 'https://www.youtube.com/watch?v=5lBQQNJIHbM'
        }, 
        {
            title: '7 &laquo;NECESSIT&Agrave; SOCIALI PRIORITARIE e Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(new Date(2020, 5, 2)).format('DD-MM-YYYY'),
            link: 'https://www.youtube.com/watch?v=NMG7VDp3pO4'
        }, 
        {
            title: '8 &laquo;FIDUCIA COMUNITARIA e Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(new Date(2020, 5, 2)).format('DD-MM-YYYY'),
            link: 'https://www.youtube.com/watch?v=KCQjHZIX5UE'
        },
        {
            title: '9 &laquo;Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(new Date(2020, 5, 29)).format('DD-MM-YYYY'),
            link: 'https://www.youtube.com/watch?v=MAl9ZsMlj1E'
        }, 
        {
            title: '10 &laquo;BENEFICIARI Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(new Date(2020, 5, 29)).format('DD-MM-YYYY'),
            link: 'https://www.youtube.com/watch?v=p_jJqAf3f88'
        }, 
        {
            title: '11 &laquo;ATTIVIT&Agrave; Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(new Date(2020, 6, 1)).format('DD-MM-YYYY'),
            link: 'https://www.youtube.com/watch?v=NLheWCL8GjM'
        }, 
        {
            title: '12 &laquo;SISTEMA ECONOMICO Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(new Date(2020, 6, 2)).format('DD-MM-YYYY'),
            link: 'https://www.youtube.com/watch?v=0fqWaOpkQL0'
        }, 
        {
            title: '13 &laquo;GUADAGNI E PREVIDENZA Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(new Date(2020, 6, 2)).format('DD-MM-YYYY'),
            link: 'https://www.youtube.com/watch?v=8uc1nF2S_ZI'
        }, 
        {
            title: '14 &laquo;FINANZIAMENTI Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(new Date(2020, 6, 2)).format('DD-MM-YYYY'),
            link: 'https://www.youtube.com/watch?v=LKcXWVUHft8'
        },
        {
            title: '15 &laquo;BELLEZZA Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(new Date(2020, 6, 2)).format('DD-MM-YYYY'),
            link: 'https://www.youtube.com/watch?v=vAo0OgBWeaI'
        }
    ];
}
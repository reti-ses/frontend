import { Injectable } from '@angular/core';
import * as moment from 'moment/moment';

@Injectable()
export class News {
    static news = [
        {
            title: 'VIDEO &laquo;BENESSERE e Comunit&agrave; Reti SES&raquo;',
            subtitle: '&Egrave; disponibile il video su YouTube',
            date: moment(Date.now()).format('YYYY-MM-DD')
        }, /*
        {
            title: 'Seconda notizia',
            subtitle: 'descrizione seconda notizia',
            date: moment(Date.now()).format('YYYY-MM-DD')
        },
        {
            title: 'Terza notizia',
            subtitle: 'descrizione terza notizia',
            date: moment(Date.now()).format('YYYY-MM-DD')
        },
        {
            title: 'Quarta notizia',
            subtitle: 'descrizione quarta notizia',
            date: moment(Date.now()).format('YYYY-MM-DD')
        } */
    ];
}
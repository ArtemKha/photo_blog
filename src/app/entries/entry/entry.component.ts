import {Component} from '@angular/core'

@Component ({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css'],
})

export class EntryComponent {
    title: string = 'My First Photo'
    photo: string = 'http://placehold.it/800x500?text=Angular Promo'
    description: string = 'A description of My First Photo'
    comments: any[] = [
        {name: 'Vladimir', comment: 'An incredable expirence'},
        {name: 'Alina', comment: 'An incredable view'},
        {name: 'Olga', comment: 'An incredable life'},
    ]
}
import { Component, OnChanges, Input,
         Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'ai-star', //selector is added only when we need to nest the component
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingChanged: EventEmitter<any> = new EventEmitter<any>();

    ngOnChanges(): void{
        /* The ngOnChanges lifecycle event only watches for 
        *  changes to input properties.
        *  Currently we've got one input property (rating).
        *
        *  The total width of all the 5 stars is 86px,
        *  Therefore 86/5 gives us the width of 1 star.
        * 
        */
        this.starWidth = this.rating * 86/5;
    }

    onClick(): void{
        this.ratingChanged.emit({
            rating: this.rating,
            starWidth: this.starWidth
        });
    }
}
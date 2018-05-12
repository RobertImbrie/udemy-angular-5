import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    initialClasses: string;
    @HostBinding('class') class;
    @HostListener('click') toggleClass(eventData: Event) {
        if ( this.class ) {
            this.class = '';
        } else {
            this.class = 'open';
        }
    }
}

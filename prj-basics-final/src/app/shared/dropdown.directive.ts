import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    initialClasses: string;
    @HostBinding('class.open') isOpen = false;
    @HostListener('click') toggleClass(eventData: Event) {
        this.isOpen = !this.isOpen;
    }
}

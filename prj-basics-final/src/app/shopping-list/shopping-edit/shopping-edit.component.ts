import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() add    = new EventEmitter<{name: string, amount: number}>();
  @Output() delete = new EventEmitter();
  @Output() clear  = new EventEmitter();
  @ViewChild('name') name: ElementRef;
  @ViewChild('amount') amount: ElementRef;

  onAdd() {
    this.add.emit({
      name: this.name.nativeElement.value,
      amount: this.amount.nativeElement.value
    });
  }

  onDelete() {
    this.delete.emit();
  }

  onClear() {
    this.clear.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}

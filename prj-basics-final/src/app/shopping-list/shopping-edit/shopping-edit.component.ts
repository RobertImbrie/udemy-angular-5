import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() add    = new EventEmitter<{name: string, amount: number}>();
  @Output() delete = new EventEmitter();
  @Output() clear  = new EventEmitter();

  name: string;
  amount: number;

  onAdd() {
    console.log(this.name + ' ' + this.amount);
    this.add.emit({ name: this.name, amount: this.amount });
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

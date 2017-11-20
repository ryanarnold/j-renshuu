
// Angular modules
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.css']
})
export class CategoryButtonComponent implements OnInit {
  @Input() private text: string;
  @Input() private title: string;
  private toggled: boolean;
  @Output() onToggled = new EventEmitter<boolean>();

  toggleState() {
    if (this.toggled) {
      this.toggled = false;
    } else {
      this.toggled = true;
    }
    this.onToggled.emit(this.toggled);
  }

  ngOnInit() {
  }
}

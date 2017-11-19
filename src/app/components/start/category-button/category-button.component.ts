
// Angular modules
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.css']
})
export class CategoryButtonComponent implements OnInit {
  @Input() private text: string;
  private toggled: boolean;

  toggleState() {
    if (this.toggled) {
      this.toggled = false;
    } else {
      this.toggled = true;
    }
  }

  ngOnInit() {
    
  }
}

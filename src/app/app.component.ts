import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Move_Responsive';
  currentPosition = {currentX: 45, currentY: 45};


  left() {
    if (this.currentPosition.currentX > 0.4) {
      this.currentPosition.currentX = this.currentPosition.currentX - 0.4;
    } else {
      this.currentPosition.currentX = 0;
    }
    console.log(this.currentPosition);
    // this.currentPosition = {currentX: x, currentY: y};
  }

  right() {
    if (this.currentPosition.currentX < 89.6) {
      this.currentPosition.currentX = this.currentPosition.currentX + 0.4;
      console.log(this.currentPosition);
    } else {
      this.currentPosition.currentX = 90;
    }
    // this.currentPosition = {currentX: x, currentY: y};
  }

  up() {
    if (this.currentPosition.currentY > 0.4) {
      this.currentPosition.currentY = this.currentPosition.currentY - 0.4;
    } else {
      this.currentPosition.currentY = 0;
    }
    console.log(this.currentPosition);
    // this.currentPosition = {currentX: x, currentY: y};
  }
  down() {
    if (this.currentPosition.currentY < 89.6) {
      this.currentPosition.currentY = this.currentPosition.currentY + 0.4;
    } else {
      this.currentPosition.currentY = 90;
    }
    console.log(this.currentPosition);
    // this.currentPosition = {currentX: x, currentY: y};
  }
  reset(){
    this.currentPosition = {currentX: 45, currentY: 45};
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skintreatments',
  templateUrl: './skintreatments.component.html',
  styleUrls: ['./skintreatments.component.css']
})
export class SkintreatmentsComponent implements OnInit {
  public laser = false;
  show=true;
  showMore1 = false;
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  stars: number[] = [1, 2, 3, 4, 5];
selectedValue: number = 0;
isMouseover = true;

countStar(star: number) {
  this.isMouseover = false;
  this.selectedValue = star;
}

 addClass(star: number) {
  if (this.isMouseover) {
    this.selectedValue = star;
  }
 }

 removeClass() {
   if (this.isMouseover) {
      this.selectedValue = 0;
   }
  }
}
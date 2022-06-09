import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dermafacial',
  templateUrl: './dermafacial.component.html',
  styleUrls: ['./dermafacial.component.css']
})
export class DermafacialComponent implements OnInit {
  public laser = false;
  show=true;
  showMore1 = false;
  constructor() { }

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
  ngOnInit(): void {
  }

}

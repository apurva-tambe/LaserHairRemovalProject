import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laserhairreduction',
  templateUrl: './laserhairreduction.component.html',
  styleUrls: ['./laserhairreduction.component.css']
})
export class LaserhairreductionComponent implements OnInit {
  public laser = false;
  show=true;
  showMore1 = false;
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
  constructor() { }

  ngOnInit(): void {
  }

}

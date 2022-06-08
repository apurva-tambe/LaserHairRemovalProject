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

  ngOnInit(): void {
  }

}

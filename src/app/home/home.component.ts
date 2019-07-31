import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogList = [
    {
      title: 'First Blog',
      id: 1
    },
    {
      title: 'Second Blog',
      id: 2
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

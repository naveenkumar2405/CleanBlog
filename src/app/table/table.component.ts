import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
tableList;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.http.get('https://5d11e88684e9060014576734.mockapi.io/tableData')
    .toPromise()
    .then((response) => {
this.tableList=response;
    },
    (error) => {
      console.log(error)
    }
    );
}
}

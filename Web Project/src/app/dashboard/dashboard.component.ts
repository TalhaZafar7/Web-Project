import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  url: string = "http://www.mocky.io/v2/5c7be5bd2f00007d23e59fad";
  url2: string = "http://www.mocky.io/v2/5c7be6602f00007d23e59fae";
 
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  test: string;
  test2: string;
  response: any;
  response2: any;
  assign_list() {
      this.http.get(this.url).subscribe( e => this.response = JSON.stringify(e));
      this.test2 = "OK";
      return false;
  }

  stud_list() {
    this.http.get(this.url2).subscribe( e => this.response2 = JSON.stringify(e) );
    this.test = "OK";
    return false;
  }

}

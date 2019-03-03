import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  output: any;

  validate() {
    this.http.get("http://www.mocky.io/v2/5c76d4923200003521f463fc", {responseType: 'text'}).subscribe( e => this.output = JSON.stringify(e));
    return false;
  }
  


}

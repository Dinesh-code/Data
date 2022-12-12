import { Component } from '@angular/core';
import { ApiCallService } from './services/api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  dataOf: ApiData[] = [];
  constructor(private servive: ApiCallService) { }
  title = 'appasign';

  ngOnInit() {

    this.servive.getData().subscribe((result1) => {
      this.dataOf = result1;
      console.log(this.dataOf);

    })
  }
}
class ApiData {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;

  constructor(id: number, name: string, email: string, gender: string, status: string) {

    this.id = id
    this.name = name
    this.email = email
    this.gender = gender
    this.status = status

  }
}

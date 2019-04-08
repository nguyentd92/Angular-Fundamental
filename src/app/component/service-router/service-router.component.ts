import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-service-router',
  templateUrl: './service-router.component.html',
  styleUrls: ['./service-router.component.scss']
})
export class ServiceRouterComponent implements OnInit {

  users$: User[];  
  apiUrl = 'http://jsonplaceholder.typicode.com/users';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.setUrl(this.apiUrl);
    return this.dataService.getUsers().subscribe(data => this.users$ = data);
  }

}

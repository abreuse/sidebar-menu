import {Component, Inject, OnInit, Output} from '@angular/core';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit() {
  }

  saveName(name: string) {
    this.userService.setUsername(name);
    console.log(this.userService.getUsername());
  }

  print(value: string) {
    console.log(value);
  }
}

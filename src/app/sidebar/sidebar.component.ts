import { Component, OnInit } from '@angular/core';
import {Menu} from '../menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public menus: Array<Menu>;

  constructor() { }

  ngOnInit() {
    this.menus = new Array<Menu>();
    this.menus.push(
      new Menu('General', '/general'),
      new Menu('Accessibility', '/accessibility'),
      new Menu('About', '/about')
    );
  }
}

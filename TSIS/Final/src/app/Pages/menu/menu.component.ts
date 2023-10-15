import { Component, OnInit } from '@angular/core';
import {IMenu} from '../../model';
import {ProviderService} from '../../provider.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu: IMenu[] = [];
  constructor(private providerService: ProviderService) { }

  getMenu(): void {
    this.providerService.getMenu().subscribe(menu => {
      this.menu = menu;
    } );
    console.log(this.menu);
  }

  ngOnInit(): void {
    this.getMenu();
  }

}

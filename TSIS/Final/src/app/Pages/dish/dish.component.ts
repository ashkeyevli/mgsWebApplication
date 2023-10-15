import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {ProviderService} from '../../provider.service';
import {IDish, IMenu, IOrder, LoginResponse, User} from '../../model';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  dishes: IDish[];
  menu: IMenu[];
  user: User[];
  username: string;
  logged = false;
  public  menuId = +this.route.snapshot.paramMap.get('id');

  constructor(private providerService: ProviderService,
              private route: ActivatedRoute) { }

  getDishes(): void {
    this.providerService.getDishes(this.menuId).subscribe
    (dishes => {
      this.dishes = dishes;
    } );

  }
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
    this.getDishes();
    this.getUserStatus();

  }

  getUserStatus(){
    this.providerService.getUser(localStorage.getItem('name')).subscribe(user => {
      this.user = user;
    });
  }

  createDish(){
    localStorage.setItem('selectedMenu', this.menuId.toString());
  }

  deleteDish(dish: IDish){
    this.dishes = this.dishes.filter(h => h !== dish);
    this.providerService.deleteDish(dish).subscribe(res => { });
  }

}

import { Component, OnInit } from '@angular/core';
import {IDish} from '../../model';
import {ProviderService} from '../../provider.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-dish-edit',
  templateUrl: './dish-edit.component.html',
  styleUrls: ['./dish-edit.component.scss']
})
export class DishEditComponent implements OnInit {
  dish: IDish;
  public name = '';
  public price = 0;
  public imageUrl = '';
  public description = '';
  public menuId = localStorage.getItem('selectedMenu');
  public  dishId = +this.route.snapshot.paramMap.get('dishId');


  constructor(private providerService: ProviderService,
              private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getDish();
      }


  getDish(): void {

    this.providerService.getDish(this.dishId).subscribe(dish => {this.dish = dish;    this.name = this.dish.name;
                                                                 this.price = this.dish.price;
                                                                 this.imageUrl = this.dish.imageUrl;
                                                                 this.description = this.dish.description; } );

  }

  putDish(): void{

    this.providerService.putDish(this.dishId, this.name, this.price, this.imageUrl, this.description, this.menuId).subscribe(res => {});
    this.location.back();
  }

}

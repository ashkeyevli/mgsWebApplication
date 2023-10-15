import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../../provider.service';
import {IDish} from '../../model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-dish-create',
  templateUrl: './dish-create.component.html',
  styleUrls: ['./dish-create.component.scss']
})
export class DishCreateComponent implements OnInit {
  public name = '';
  public price = '';
  public imageUrl = '';
  public description = '';
  menuId = '';
  dish: IDish[] = [];

  constructor(private provider: ProviderService, private location: Location) { }

  ngOnInit(): void {
    this.menuId = localStorage.getItem('selectedMenu');
  }

  create(){
    this.provider.postDish(this.name, this.price, this.imageUrl, this.description, this.menuId).subscribe(res => {this.dish.push(res); });
    this.location.back();
  }

}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './Pages/menu/menu.component';
import {DishComponent} from './Pages/dish/dish.component';
import {DishItemComponent} from './Pages/dish-item/dish-item.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {OrderComponent} from './Pages/order/order.component';
import {DishCreateComponent} from './Pages/dish-create/dish-create.component';
import {DishEditComponent} from './Pages/dish-edit/dish-edit.component';
import {StartPageComponent} from './Pages/start-page/start-page.component';
import {RestaurantReviewComponent} from './Pages/restaurant-review/restaurant-review.component';

const routes: Routes = [
  { path: '', component: StartPageComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'menu/:id/dishes', component: DishComponent},
  { path: 'dishes/create', component: DishCreateComponent},
  { path: 'dishes/:dishId/edit', component: DishEditComponent},
  { path: 'dishes/:dishId', component: DishItemComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'order', component: OrderComponent},
  { path: 'review', component: RestaurantReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

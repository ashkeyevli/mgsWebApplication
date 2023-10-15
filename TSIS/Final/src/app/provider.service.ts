import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IDish, IMenu, IOrder, LoginResponse, User} from './model';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient ){
  }

  private menuUrl = 'http://192.168.99.100:8000/api/menu/';

  postUser(login: any, pass: any, name: any, nEmail: any): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('http://192.168.99.100:8000/api/register/', {
      username: login,
      password: pass,
      first_name: name,
      email: nEmail
    }, this.httpOptions);
  }


  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`http://192.168.99.100:8000/api/login/`, {
      username,
      password
    });
  }


  getMenu(): Observable<IMenu[]> {
    const url = this.menuUrl;

    return this.http.get<IMenu[]>(url);

  }
  getUser(username: string): Observable<User[]> {
    return this.http.get<User[]>(`http://192.168.99.100:8000/api/user?username=${username}`);

  }
  getDishes(menuId: number): Observable<IDish[]> {
    const url = `http://192.168.99.100:8000/api/menu/${menuId}/dishes/`;
    console.log(url);
    console.log(this.http.get(url));
    return this.http.get<IDish[]>(url);
  }

  postDish(name, price, imageUrl, description, menu, count= 1): Observable<IDish>{
    return this.http.post<IDish>(`http://192.168.99.100:8000/api/dishes/`, {
      name,
      price,
      imageUrl,
      description,
      menu,
      count
    });
  }

  putDish(dishId, name, price, imageUrl, description, menu): Observable<IDish>{
    return this.http.put<IDish>(`http://192.168.99.100:8000/api/dishes/${dishId}/`, {
      name,
      price,
      imageUrl,
      description,
      menu
    });
    console.log(dishId, name, price, imageUrl, description, menu);
  }

  getDish(dishId: number): Observable<IDish> {
    const url = `http://192.168.99.100:8000/api/dishes/${dishId}/`;
    return this.http.get<IDish>(url);
  }



  getOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>('http://192.168.99.100:8000/api/orders/');
  }

  postOrder(dish: IDish): Observable<IOrder> {
    return this.http.post<IOrder>('http://192.168.99.100:8000/api/orders/', dish, this.httpOptions);
  }


  deleteOrder(order: IOrder | number): Observable<IOrder> {
    const id = typeof order === 'number' ? order : order.id;
    return this.http.delete<IOrder>(`http://192.168.99.100:8000/api/orders/${id}`, this.httpOptions);

  }
  deleteOrders(): Observable<IOrder[]> {
    return this.http.delete<IOrder[]>('http://192.168.99.100:8000/api/orders/', this.httpOptions);

  }

  deleteDish(dish: IDish | number): Observable<IDish> {
    const id = typeof dish === 'number' ? dish : dish.id;
    return this.http.delete<IDish>(`http://192.168.99.100:8000/api/dishes/${id}`, this.httpOptions);
  }
}



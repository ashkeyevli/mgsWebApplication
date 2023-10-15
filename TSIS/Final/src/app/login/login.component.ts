import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../provider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login = '';
  public password = '';
  logged = false;

  constructor(private provider: ProviderService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      this.logged = true;
      window.location.replace('http://192.168.99.100:80/menu');
    }
  }
  clear() {
    this.login = '';
    this.password = '';
  }

  auth() {
    if (!this.login || !this.password) {
      alert('Please, fill all linws');
      this.clear();
    } else if (this.login && this.password) {
      this.provider.login(this.login, this.password).subscribe(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('name', this.login);
        this.logged = true;
        this.clear();
        alert('You logged in successfully!');
        window.location.replace(`http://192.168.99.100:80/menu`);
      });
    } else {
      alert('Wrong login or password! Try again!');
    }
  }

}

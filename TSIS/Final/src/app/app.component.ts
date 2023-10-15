import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Final';
  logged = false;
  name = '';
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
      this.name = localStorage.getItem('name');
    }
  }

  logout() {
    localStorage.clear();
    this.logged = false;
    window.location.reload();
  }
}

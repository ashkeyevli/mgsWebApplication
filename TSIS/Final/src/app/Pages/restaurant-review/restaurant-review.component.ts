import { Component, OnInit } from '@angular/core';
import {IDish, IMenu, IReview} from "../../model";
import {ProviderService} from "../../provider.service";

@Component({
  selector: 'app-restaurant-review',
  templateUrl: './restaurant-review.component.html',
  styleUrls: ['./restaurant-review.component.css']
})

export class RestaurantReviewComponent implements OnInit {
  reviews: any[] = [];
  public username = '';
  public rating = 0;
  public comment = '';
  constructor(private providerService: ProviderService) { }

  newReview: any = {
    username: '',
    rating: '',
    comment: ''
  };
  getMenu(): void {
    // this.reviews = [
    //   { username: 'John Doe', rating: 4, comment: 'Great food and service!' },
    //   { username: 'Jane Smith', rating: 5, comment: 'Amazing experience!' }
    //   // Add more existing reviews as needed
    // ];
    this.providerService.getReviews().subscribe(reviews => {
      this.reviews = reviews;
    } );
  }

  ngOnInit(): void {
    this.getMenu();
  }

  submitReview( ) {
    this.providerService.postReview(this.username, this.rating, this.comment)
      .subscribe(review =>  {
        this.reviews.push(review); });
  }
}

export interface IDish {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  menu: number;
  count: number;

}

export interface IMenu {
  id: number;
  name: string;
  image_url_menu: string;
}


export interface LoginResponse {
  token: string;
  id: number;
  username: string;
  password: string;
  first_name: string;
  email: string;
}

export interface User {
  username: string;
  password: string;
  first_name: string;
  email: string;
  is_staff: boolean;

}
export interface IOrder {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  count: number;
  user_id: LoginResponse;
}
export interface IReview {
  id: number;
  username: string;
  rating: number;
  comment: string;
}


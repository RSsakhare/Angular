import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  constructor() { }
  getList(){
    return[
      { 'name': 'David', 'gender': 'Male', 'country': 'US', 'degree': 'MS' },
  { 'name': 'Emma', 'gender': 'Female', 'country': 'UK', 'degree': 'PhD' },
  { 'name': 'Liam', 'gender': 'Male', 'country': 'Canada', 'degree': 'BS' },
  { 'name': 'Olivia', 'gender': 'Female', 'country': 'Australia', 'degree': 'BA' },
  { 'name': 'Noah', 'gender': 'Male', 'country': 'Germany', 'degree': 'MS' },
  { 'name': 'Ava', 'gender': 'Female', 'country': 'India', 'degree': 'MSc' },
  { 'name': 'William', 'gender': 'Male', 'country': 'France', 'degree': 'MBA' },
  { 'name': 'Sophia', 'gender': 'Female', 'country': 'Italy', 'degree': 'BCom' },
  { 'name': 'James', 'gender': 'Male', 'country': 'Japan', 'degree': 'MA' },
  { 'name': 'Isabella', 'gender': 'Female', 'country': 'Brazil', 'degree': 'BSc' }
    ]
  }
}

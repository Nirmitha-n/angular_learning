import { CommonModule } from '@angular/common';
import { createInjectableType } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  constructor(private router: Router){}

cities: string[] =['Bangalore', 'Chennai', 'Hyderabad', 'Pune'];
selectedCity: string ='';

cards =[
  {title: 'Find Doctor', desc:'Serach specialists'},
  {title: 'Book Appointment', desc: 'Schedule visit'},
  {title: 'Medical Records', desc: 'View history'},
  {title: 'Emergency', desc: 'Quick help'}
]

logout(){
  localStorage.removeItem('user');
  this.router.navigate(['/login']);
}
}





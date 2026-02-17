import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fetch-api',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './fetch-api.html',
  styleUrl: './fetch-api.css',
})
export class FetchApi {
  // student ={
  //   name: '',
  //   email:'' 
  // }
  
  // url : (string) = 'https://jsonplaceholder.typicode.com/users'

  // users: any[] = [];
  // constructor(private http: HttpClient){}
  

  // ngOnInit(){
  //   this.http.get(this.url)
  //   .subscribe((data : any) =>{
  //     this.users = data;
  //   });
  // }

  //   register(){
  //     this.http.post(this.url, this.student)
  //     .subscribe((response: any ) =>{
        
  //       alert("User registered successfully!");

  //       this.users.push(response);
  //       this.student = {name: '', email: ''};
  //     });
  //   }
}

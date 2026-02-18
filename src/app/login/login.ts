import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, 
            CommonModule,
            RouterModule
            ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private router: Router){}
    user = {
      pnumber : '',
      password : ''
    };

    showPassword : boolean = false;

    togglePassword(){
      this.showPassword = !this.showPassword;
    }

    login (form : any){
      if(form.invalid){
        alert("Invalid Credentials!");
        return;
      }
      const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
      
      if(
        storedUser.pnumber === this.user.pnumber &&
        storedUser.password === this.user.password
      ){
        alert("Login Succesful!");
        this.router.navigate(['/dashboard']);
      }
      else{
        alert("Mobile number or password is incorrect")
      }
      
      form.resetForm();
    }
        
      
}

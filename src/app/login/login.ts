import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

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
      }

      else{
        console.log(form.value);
        alert("Logined succesfully!");
      }

      form.resetForm();
    }
        
      
}

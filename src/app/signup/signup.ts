import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  constructor(private router: Router){}


  users = {
    fname:'',
    email: '',
    pnumber:'',
    password: '',
    cpassword: '',
  };

  acceptTerms:boolean = false;

  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  togglePassword(){
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(){
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  register(form: any){
    if(form.invalid || !this.acceptTerms){
      alert("Please fill all fields and accept terms!");
    }
    else{
      localStorage.setItem('user', JSON.stringify(this.users))
      console.log(form.value)
      alert("User registered successfully!");
    }
    form.resetForm();
    this.acceptTerms = false;
    this.router.navigate(['/login']);
    
}
  
}

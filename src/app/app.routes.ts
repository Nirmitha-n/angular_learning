import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';

export const routes: Routes = [
    { path: 'register', component: Signup },
    { path: 'login', component: Login },

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];


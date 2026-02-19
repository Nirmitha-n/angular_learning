import { Routes } from '@angular/router';
import { authGuardGuard } from './guards/auth-guard-guard';

export const routes: Routes = [
    { path: 'register',  loadComponent:() => import('./signup/signup').then((c) => c.Signup )},
    { path: 'login', loadComponent: () => import('./login/login').then((c)=>c.Login) },
    {path:'dashboard', loadComponent:()=> import('./dashboard/dashboard').then((c)=>c.Dashboard), canActivate:[authGuardGuard]},

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];


import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Product } from './product/product';
import { Event } from './event/event';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'products', component: Product },
    { path: 'events', component: Event },
];

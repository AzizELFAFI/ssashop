import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Product } from './product/product';

@Component({
  selector: 'app-root',
  imports: [Home, Navbar, Footer, Product, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProjectSSA');
}

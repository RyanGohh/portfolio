import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { Navbar } from "./shared/navbar/navbar";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  template: `
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>`,
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('Portfolio');
}

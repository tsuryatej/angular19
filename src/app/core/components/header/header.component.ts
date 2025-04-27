import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navTitle: string = 'angular'
  navItems = [
    { name: 'Home', link: '/home' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' }
  ];
  rightNavItems = [
    { name: 'Login', link: '/login' },
    { name: 'Register', link: '/register', class: "btn btn-primary btn-sm" },
  ]
}

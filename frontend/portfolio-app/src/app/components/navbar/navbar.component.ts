import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isOpen = false;

  links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/research', label: 'Research' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/cv', label: 'CV' },
    { path: '/contact', label: 'Contact' }
  ];

  toggle() { this.isOpen = !this.isOpen; }
  close() { this.isOpen = false; }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  name: string = '';
  mockProducts = [
    {
      id: 1,
      name: 'Royal Gold Series',
      description: 'Premium handcrafted luxury watch.',
      price: 129999,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
    },
    {
      id: 2,
      name: 'Black Edition',
      description: 'Elegant modern design.',
      price: 94999,
      image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3'
    },
    {
      id: 3,
      name: 'Classic Silver',
      description: 'Timeless perfection.',
      price: 79999,
      image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name') || 'User';
  }
}

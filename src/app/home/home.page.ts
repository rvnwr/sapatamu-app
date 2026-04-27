import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Gunakan Router

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor(private router: Router) {} // Injeksi Router

  pilihTemplate(id: string) {
    // Navigasi kasar lewat URL browser langsung
    window.location.href = '/editor/' + id;
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AdminRoutingModule } from './components/admin/admin-routing.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AdminRoutingModule],
  template: `<a [routerLink]="['admin']">Admin</a
    ><router-outlet></router-outlet>`,
})
export class AppComponent {}

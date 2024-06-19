import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AdminRoutingModule } from './components/admin/admin-routing.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AdminRoutingModule],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {}

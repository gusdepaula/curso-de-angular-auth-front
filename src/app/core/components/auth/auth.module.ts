import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignComponent } from './pages/sign/sign.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthRoutingModule, SignComponent],
})
export class AuthModule {}

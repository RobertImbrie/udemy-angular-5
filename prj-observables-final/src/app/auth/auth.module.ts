import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent
    ],
    imports: [
        FormsModule,
        AuthRoutingModule
    ],
    exports: [
        FormsModule
    ],
    providers: [
        AuthService,
        AuthGuard
    ],
})
export class AuthModule {}

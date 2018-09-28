import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms'
import { RestserviceService } from './restservice.service';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path:'login',
      component:LoginComponent
    },
    {
      path:'register',
      component:RegistrationComponent
    }
  ])
  ],
  providers: [RestserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

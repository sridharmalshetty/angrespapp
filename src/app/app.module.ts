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
import { UserServiceService } from './user-service.service';
import { CountryServiceService  } from './country-service.service'; 
import { ArticleServicService } from './article-servic.service';
import { AdminServiceService } from './admin-service.service';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CountryComponentComponent } from './country-component/country-component.component';
import { ArticleComponentComponent } from './article-component/article-component.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { InsertdateComponent } from './insertdate/insertdate.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent,
    UsercomponentComponent,
    HomeComponentComponent,
    CountryComponentComponent,
    ArticleComponentComponent,
    AdminComponentComponent,
    InsertdateComponent
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
    },{
      path:'home',
      component:HomeComponentComponent
    },{
      path:'user',
      component:UsercomponentComponent,
      children:[{
        'path':'add',
        component:InsertdateComponent
      }]
       
    },{
      path:'country',
      component:CountryComponentComponent
    },{
      path:'article',
      component:ArticleComponentComponent
    },{
      path:'admin',
      component:AdminComponentComponent
    }
  ])
  ],
  providers: [RestserviceService,UserServiceService, CountryServiceService, ArticleServicService, AdminServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

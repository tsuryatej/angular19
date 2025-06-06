import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { LoginComponent } from './shared/components/login/login.component';
import { LogoutComponent } from './shared/components/logout/logout.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { CodeDemoComponent } from './shared/components/code-demo/code-demo.component';
import { AboutComponent } from './shared/components/about/about.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { HomeComponent } from './shared/components/home/home.component';
import { EmployeesComponent } from './shared/components/employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ButtonComponent,
    CodeDemoComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

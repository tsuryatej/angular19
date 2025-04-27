import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

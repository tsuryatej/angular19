import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeDemoComponent } from './shared/components/code-demo/code-demo.component';
import { HeaderComponent } from './core/components/header/header.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { AboutComponent } from './shared/components/about/about.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { LoginComponent } from './shared/components/login/login.component';
import { HomeComponent } from './shared/components/home/home.component';
import { EmployeesComponent } from './shared/components/employees/employees.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'code-demo', component:CodeDemoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

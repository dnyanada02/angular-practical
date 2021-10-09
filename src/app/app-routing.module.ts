import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { LearnComponent } from './learn/learn.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{
  path:' ',component:AppComponent
},
{
  path:'login',component:LoginComponent
},
{
  path:'about',component:AboutComponent
},
{
  path:'intro',component:IntroComponent
},
{
  path:'learn',component:LearnComponent
},
{
  path:'home',component:HomeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

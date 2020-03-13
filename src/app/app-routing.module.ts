import { SplashComponent } from './components/main/splash/splash.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'welcome-card', component: WelcomeCardComponent },
  { path: '**', component: SplashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

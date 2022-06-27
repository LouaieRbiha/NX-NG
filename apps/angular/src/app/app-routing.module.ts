import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('@ng-peaqock/auth').then(m => m.AuthModule)
  },
  {
    path: 'basics',
    loadChildren: () => import('@ng-peaqock/basics').then(m => m.BasicsModule),
  },
  {
    path: 'change-detection',
    loadChildren: () => import('@ng-peaqock/change-detection').then(m => m.ChangeDetectionModule),
  },
  {
    path: 'dependency-injection',
    loadChildren: () => import('@ng-peaqock/dependency-injection').then(m => m.DependencyInjectionModule),
  },
  {
    path: 'ng-zone',
    loadChildren: () => import('@ng-peaqock/ng-zone').then(m => m.NgZoneModule),
  },
  {
    path: 'rxjs',
    loadChildren: () => import('@ng-peaqock/rxjs').then(m => m.RxjsModule),
  },
  {
    path: 'scam',
    loadChildren: () => import('@ng-peaqock/scam').then(m => m.ScamModule),
  },
  {
    path: 'smart-dumb',
    loadChildren: () => import('@ng-peaqock/smart-dumb').then(m => m.SmartDumbModule),
  },
  {
    path: 'state',
    loadChildren: () => import('@ng-peaqock/state').then(m => m.StateModule)
  },
  {
    path: 'view-encapsulation',
    loadChildren: () => import('@ng-peaqock/view-encapsulation').then(m => m.ViewEncapsulationModule),
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

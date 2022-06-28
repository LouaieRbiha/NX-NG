import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('@ng-peaqock/auth').then(m => m.AuthModule),
    title: 'Auth',
  },
  {
    path: 'basics',
    loadChildren: () => import('@ng-peaqock/basics').then(m => m.BasicsModule),
    title: 'Basics',
  },
  {
    path: 'change-detection',
    loadChildren: () => import('@ng-peaqock/change-detection').then(m => m.ChangeDetectionModule),
    title: 'Change Detection',
  },
  {
    path: 'dependency-injection',
    loadChildren: () => import('@ng-peaqock/dependency-injection').then(m => m.DependencyInjectionModule),
    title: 'Dependency Injection',
  },
  {
    path: 'ng-zone',
    loadChildren: () => import('@ng-peaqock/ng-zone').then(m => m.NgZoneModule),
    title: 'Ng Zone',
  },
  {
    path: 'rxjs',
    loadChildren: () => import('@ng-peaqock/rxjs').then(m => m.RxjsModule),
    title: 'Rxjs',
  },
  {
    path: 'scam',
    loadChildren: () => import('@ng-peaqock/scam').then(m => m.ScamModule),
    title: 'Scam',
  },
  {
    path: 'smart-dumb',
    loadChildren: () => import('@ng-peaqock/smart-dumb').then(m => m.SmartDumbModule),
    title: 'Smart Dumb',
  },
  {
    path: 'state',
    loadChildren: () => import('@ng-peaqock/state').then(m => m.StateModule),
    title: 'State',
  },
  {
    path: 'testing',
    loadChildren: () => import('@ng-peaqock/testing').then(m => m.TestingModule),
    title: 'Testing',
  },
  {
    path: 'view-encapsulation',
    loadChildren: () => import('@ng-peaqock/view-encapsulation').then(m => m.ViewEncapsulationModule),
    title: 'View Encapsulation',
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

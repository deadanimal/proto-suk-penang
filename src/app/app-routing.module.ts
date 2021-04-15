import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PagesLayoutComponent } from './layouts/pages-layout/pages-layout.component';
import { PresentationComponent } from './examples/presentation/presentation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: [{
      path: "pages",
      loadChildren: "./pages/pages.module#PagesModule"
    },
    ]
  },
  {
    path: 'presentation',
    component: PresentationComponent
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: './core/admin/admin.module#AdminModule'
      },
      {
        path: 'user',
        loadChildren: './core/user/user.module#UserModule'
      },
      {
        path: 'global',
        loadChildren: './core/global/global.module#GlobalModule'
      },
      {
        path: 'training-coordinator',
        loadChildren: './core/training-coordinator/training-coordinator.module#TrainingCoordinatorModule'
      },
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
      },
      {
        path: 'examples',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

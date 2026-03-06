import { Routes } from '@angular/router';
import { Admin } from './dashboards/admin/admin';
import { User } from './dashboards/user/user';

export const routes: Routes = [
  { path: 'admin', component: Admin },
  { path: 'user', component: User },
  { path: '', redirectTo: 'user', pathMatch: 'full' }
];

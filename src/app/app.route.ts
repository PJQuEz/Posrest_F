import { NgModule } from '@angular/core';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageComponent } from './manage/manage.component';
import { ListComponent } from './list/list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'member',
    component: ManageComponent
  },
  {
    path: '**',
    component: ListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventTemplateComponent } from './event-template/event-template.component';

const routes: Routes = [
  {
    path: '',
    component: EventTemplateComponent,
    children: [
      { path: '', component: EventListComponent}, 
      { path: ':id', component:  EventDetailComponent }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class EventRoutingModule { }

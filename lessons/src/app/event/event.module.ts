import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { EventRoutingModule } from './event-routing.module';
import { EventItemComponent } from './event-item/event-item.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventTemplateComponent } from './event-template/event-template.component';
import { EventFilterComponent } from './event-filter/event-filter.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [EventListComponent, EventItemComponent, EventDetailComponent, EventTemplateComponent, EventFilterComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule
  ]
})
export class EventModule { }

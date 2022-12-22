import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskTrackerComponent } from './pages/task-tracker/task-tracker.component';
import { TaskItemComponent } from './pages/task-tracker/task-item/task-item.component';
import { InputItemComponent } from './pages/task-tracker/input-item/input-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskTrackerComponent,
    TaskItemComponent,
    InputItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

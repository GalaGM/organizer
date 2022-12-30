import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskTrackerComponent } from './pages/task-tracker/task-tracker.component';
import { TaskItemComponent } from './pages/task-tracker/task-item/task-item.component';
import { InputItemComponent } from './pages/task-tracker/input-item/input-item.component';
import { HeaderComponent } from './components/header/header.component';
import { MoodBoardComponent } from './pages/mood-board/mood-board.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskTrackerComponent,
    TaskItemComponent,
    InputItemComponent,
    HeaderComponent,
    MoodBoardComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

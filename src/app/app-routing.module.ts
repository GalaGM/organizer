import { TaskTrackerComponent } from './pages/task-tracker/task-tracker.component';
import { MoodBoardComponent } from './pages/mood-board/mood-board.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: TaskTrackerComponent},
  {path: 'mood-board', component: MoodBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

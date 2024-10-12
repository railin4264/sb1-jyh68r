import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
})
export class ProgressComponent {
  exercisesCompleted = 10;
  caloriesBurned = 150;
}
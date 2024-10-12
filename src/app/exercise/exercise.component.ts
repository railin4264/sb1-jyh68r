import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { accelerometer, AccelerometerData } from '@nativescript/core/ui/accelerometer';
import { device } from '@nativescript/core/platform';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
})
export class ExerciseComponent implements OnInit {
  currentExercise = 'Sentadillas';
  feedbackMessage = 'Prepárate para comenzar';

  constructor(private router: Router) {}

  ngOnInit() {
    this.startExerciseDetection();
  }

  startExerciseDetection() {
    if (accelerometer.isAvailable()) {
      accelerometer.startAccelerometerUpdates((data: AccelerometerData) => {
        this.analyzeMovement(data);
      }, { sensorDelay: 'ui' });
    } else {
      this.feedbackMessage = 'El acelerómetro no está disponible en este dispositivo.';
    }
  }

  analyzeMovement(data: AccelerometerData) {
    const totalAcceleration = Math.sqrt(data.x * data.x + data.y * data.y + data.z * data.z);
    
    if (totalAcceleration > 1.5) {
      this.feedbackMessage = '¡Buen movimiento! Mantén el ritmo.';
    } else if (totalAcceleration < 0.5) {
      this.feedbackMessage = 'Muévete más. ¡Tú puedes!';
    } else {
      this.feedbackMessage = 'Mantén la postura. Lo estás haciendo bien.';
    }
  }

  finishExercise() {
    accelerometer.stopAccelerometerUpdates();
    this.router.navigate(['/home']);
  }
}
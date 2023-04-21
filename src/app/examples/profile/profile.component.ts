import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    constructor() { }

    ngOnInit() {}

}
export const QUESTIONS = [  {    question: 'What is the capital of France?',    answers: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris'
  },
  {
    question: 'What is the largest continent in the world?',
    answers: ['Africa', 'Europe', 'Asia', 'South America'],
    correctAnswer: 'Asia'
  },
  {
    question: 'What is the tallest mammal in the world?',
    answers: ['Horse', 'Giraffe', 'Elephant', 'Gorilla'],
    correctAnswer: 'Giraffe'
  }
];

export class QuizComponent {
  questions = QUESTIONS;
  selectedAnswers = {};

  onAnswerSelected(question, answer) {
    this.selectedAnswers[question.question] = answer;
  }

  showResults() {
    let correctAnswers = 0;
    for (let question of this.questions) {
      if (this.selectedAnswers[question.question] === question.correctAnswer) {
        correctAnswers++;
      }
    }
    alert(`You got ${correctAnswers} out of ${this.questions.length} questions correct!`);
  }
}


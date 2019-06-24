import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, Platform } from 'ionic-angular';
import { Data } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {
len: number
isTablet: boolean

  @ViewChild('slides') slides: any;

    slideOptions: any;
    flashCardFlipped: boolean = false;
    score: number = 0;
    questions: any;

    constructor(public navCtrl: NavController, public dataService: Data, platform: Platform) {
      this.isTablet= platform.is("tablet")
      console.log(this.isTablet)

    }

    ionViewDidLoad() {

        this.dataService.load().then((data) => {
          

            data.map((question) => {

                let originalOrder = question.answers;
                question.answers = this.randomizeAnswers(originalOrder);
                return question;

            });     

            this.questions = data;
            this.len = this.questions.length
            
        });


        

    }

    ionViewWillEnter(){
      for(let question of this.questions){
          for(let answer of question.answers){
            if(answer.selected && answer.correct){
              this.score++;
            }
          }
        }
    }

    selectAnswer(answer, question){

      answer.selected = true;
      for(let answer of question.answers){
        answer.disabled = true
      }
      if(answer.correct){
        this.score++;
      }
      question.flashCardFlipped = true;

  }

  randomizeAnswers(rawAnswers: any[]): any[] {

    for (let i = rawAnswers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = rawAnswers[i];
        rawAnswers[i] = rawAnswers[j];
        rawAnswers[j] = temp;
    }

    return rawAnswers;

}

restartQuiz() {

  for(let question of this.questions){
    question.flashCardFlipped = false;
    for(let answer of question.answers){
      answer.selected = false
      answer.disabled = false
      console.log(answer.disabled)
    }
  }
  this.score = 0;
  this.slides.slideTo(0, 1000)
}

getScore(){
  this.score=0;
  for(let question of this.questions){
    for(let answer of question.answers){
      if(answer.selected && answer.correct){
        this.score++;
      }
    }
  }

}

nextSlide(){
  this.slides.slideNext();
}

prevSlide(){
  this.slides.slidePrev();
}

continue(){
  this.slides.slideNext();
}

restart(){
  this.slides.slideNext();
  this.restartQuiz();
}

}




//################################ COUNT FINAL POINTS 
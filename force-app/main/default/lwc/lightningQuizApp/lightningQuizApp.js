import { LightningElement } from 'lwc';

export default class LightningQuizApp extends LightningElement {
    selected={}  // stores options 
    correctAnswers = 0;

    get allNotSelected() {
       return !(Object.keys(this.selected).length === this.examQuestions.length)
    }

    examQuestions = [
        {
            id: 'Question One',
            question: 'What is Maya?',
            answers: {
                a: 'Dog',
                b: 'Cat',
                c: 'Kangaroo',
                d: 'Giraffe'
            },
            correctAnswer: 'a'
        },
        {
            id: 'Question Two',
            question: "What is Maya's favorite thing?",
            answers: {
                a: 'Treats',
                b: 'Getting a bath',
                c: 'Walks',
                d: 'Taking medication'
            },
            correctAnswer: 'a'
        },
        {
            id: 'Question Three',
            question: 'When dad comes home, how is Maya?',
            answers: {
                a: 'Tired',
                b: 'Sleepy',
                c: 'Difficult',
                d: 'Super excited'
            },
            correctAnswer: 'd'
        }
    ]

    changeHandler(event) {
        const {name, value} = event.target; // destructuring
        this.selected = {...this.selected, [name]: value}
    }

    submitHandler(event) {
        event.preventDefault();
        let correct = this.examQuestions.filter(item => this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length;
        console.log('correct answers', this.correctAnswers);
    }

    resetHandler() {
        this.selected = {}
        this.correctAnswers = 0;
    }
}
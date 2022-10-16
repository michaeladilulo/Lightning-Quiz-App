import { LightningElement } from 'lwc';

export default class LightningQuizApp extends LightningElement {
    selected={}  // stores options 
    submittedExamQuestions = false;
    correctAnswers = 0;

    get isScoredFull() { // if 3/3 questions answered correct show green, else show red
        return `slds-text-heading_small ${this.examQuestions.length === this.correctAnswers ? 
        `slds-text-color_success` : `slds-text-color_error`}` 

    }

    get allNotSelected() {
       return !(Object.keys(this.selected).length === this.examQuestions.length) // used for enable button
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
        this.selected = {...this.selected, [name]: value} // spreading selected and inserting name and value
    }

    submitHandler(event) {
        event.preventDefault();
        // correct = filter items selected against the correct answer
        let correct = this.examQuestions.filter(item => this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length;
        this.submittedExamQuestions = true;
    }

    resetHandler() { // resets it back to original state of app
        this.selected = {}
        this.correctAnswers = 0;
        this.submittedExamQuestions = false;
    }
}
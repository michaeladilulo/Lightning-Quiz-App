import { LightningElement } from 'lwc';

export default class LightningQuizApp extends LightningElement {
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
}
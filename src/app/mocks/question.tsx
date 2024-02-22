'use client'
import { IQuestionItem } from "../components/question/list/QuestionLinst"

export const data = ():IQuestionItem[] =>{
    return [{
    "question": "Is there a free trial?",
    "summary": "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    "active": true
},
{
    "question": "Can I change my plan later?",
    "summary": "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    "active": false
},
{
    "question": "What is your cancellation policy?",
    "summary": "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    "active": false
},
{
    "question": "Can other info be added to an invoice?",
    "summary": "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    "active": false
}]
}
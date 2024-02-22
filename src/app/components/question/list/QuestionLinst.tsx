'use client'
import QuestionContent from "../content/QuestionContent";

export interface IQuestionItem {
    question: string;
    summary: string;
    active: boolean;
}

interface IQuestionList {
    data: () => IQuestionItem[]
}
export default function QuestionList({data}: IQuestionList) {
    return data().map((element,index) => (
        <div key={index} className="py-5 border-b">
        <QuestionContent quetion={element.question} summary={element.summary} displaySummary={element.active}/>
        </div>
    ));
}
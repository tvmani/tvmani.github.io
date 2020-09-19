export default class  Question {
  constructor(firstNum, secondNum, operation, submittedAnswer, submissionTime) {
    this.firstNum = firstNum;
    this.secondNum = secondNum;
    this.operation = operation;
    this.submittedAnswer = submittedAnswer;
    this.submissionTime = submissionTime;
    this.expectedAnswer = null;
    this.result = null;
  }
  static questionWithAnswers(question, expectedAnswer){
    let qsWithAnswer = new Question(question.firstNum, question.secondNum, question.operation, question.submittedAnswer, question.submissionTime);
    qsWithAnswer.expectedAnswer = expectedAnswer;
    qsWithAnswer.result = null;
    return qsWithAnswer;
  }
  static questionWithResult(question, expectedAnswer, result){
    let qsWithResult = this.questionWithAnswers(question, expectedAnswer);
    qsWithResult.result = result;
    return qsWithResult;
  }  
}

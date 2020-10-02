export default class Question {
  constructor(firstNum, secondNum, operation, submittedAnswer, submissionTime) {
    this.firstNum = firstNum;
    this.secondNum = secondNum;
    this.operation = operation;
    this.submittedAnswer = submittedAnswer;
    if (
      typeof submissionTime === "string" ||
      typeof submissionTime === "number"
    ) {
      this.submissionTime = new Date(submissionTime);
    } else {
      this.submissionTime = submissionTime;
    }
    this.expectedAnswer = null;
    this.result = null;
  }

  get dateInString() {
    if (this.submissionTime != null && this.submissionTime.getTime != null) {
      return new Date(
        this.submissionTime.getTime() - this.submissionTime.getTimezoneOffset() * 60000
      ).toISOString().split("T")[0];
    }
    return '1970-01-01'
  }

  static fromJson(jsonObject) {
    return new Question(
      jsonObject.firstNum,
      jsonObject.secondNum,
      jsonObject.operation,
      jsonObject.submittedAnswer,
      jsonObject.submissionTime
    );
  }

  static questionWithAnswers(question, expectedAnswer) {
    let qsWithAnswer = new Question(
      question.firstNum,
      question.secondNum,
      question.operation,
      question.submittedAnswer,
      question.submissionTime
    );
    qsWithAnswer.expectedAnswer = expectedAnswer;
    qsWithAnswer.result = null;
    return qsWithAnswer;
  }
  static questionWithResult(question, expectedAnswer, result) {
    let qsWithResult = this.questionWithAnswers(question, expectedAnswer);
    qsWithResult.result = result;
    return qsWithResult;
  }
}

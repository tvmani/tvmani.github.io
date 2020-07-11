export default class PracticeSession {
  constructor(name) {
    let sid = new Date().toISOString();
    sid = `Practice_${name}@${sid}`;
    this.sid = sid;
    this.questions = [];
  }

  // Getter
  get length() {
    return this.questions.length;
  }

  get getQuestions() {
    const qs = this.questions;
    return [...qs];
  }

  getQuestion(index) {
    return this.questions[index];
  }

  submitQuestion(question) {
    this.questions.push(question);
  }
}
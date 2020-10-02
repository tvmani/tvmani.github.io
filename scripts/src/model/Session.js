export default class  Session {  

  /**
   * Sample session id - "Practice_Kavin@2020-09-15T09:03:23.133Z"
   * @param {*} id 
   * @param {*} student 
   * @param {*} date 
   * @param {*} time 
   * @param {*} mathFunction 
   */
  constructor(id, student, dateTime, mathFunction) {
    this.id=id;
    this.student = student;
    this.dateTime = dateTime;
    this.mathFunction = mathFunction;
  }

  set mathFunction(functionName) {
    this.functionName = functionName;
  }

  get excerciseName() {
    return this.mathFunction;
  }

  get mathFunction() {
    return this.mathFunction;
  }

  get getTime() {
    return this.dateTime.getTime();
  }

  get dateInString() {
    return new Date(this.dateTime.getTime() - (this.dateTime.getTimezoneOffset() * 60000 )).toISOString().split("T")[0];
  }

  get timeInString(){
    return this.dateTime.toTimeString().split(' ')[0];
  }


  static createSession(sessionKey){
    const name = sessionKey.split("@")[0].split("_")[1];
    const datetimeString  = sessionKey.split("@")[1].split("~")[0];
    const dateTime = new Date(datetimeString)
    const mathFunction  = sessionKey.split("@")[1].split("~")[1];
    return new Session(sessionKey, name, dateTime, mathFunction);
  }  

  
}

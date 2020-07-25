document.getElementById("yourName").value ==> test
Object.keys(localStorage).filter( i => i.indexOf("Practice")!=-1).map(t => t.split("@"))


const evaluate = q => Math.random() < 0.5;
let sessions = Object.keys(localStorage).filter( i => i.indexOf("Practice_"+document.getElementById("yourName").value+"@")!=-1);
let pastSessions = sessions.map(t => t.split("@"))
let daysOfPractice = pastSessions.map(a => Date.parse(a[1])).map( t => { let date = new Date(); date.setTime(t); return date;});
daysOfPractice.sort( (t1,t2) => t1-t2)

let appreciation = {}
appreciation.totalPracticeSessions=daysOfPractice.length;

let allAttemptedQuestions = sessions.map(session => JSON.parse(localStorage.getItem(session)));
let sucessfulQuestions = allAttemptedQuestions.map(qs => qs.filter(q => evaluate(q)))
let failedQuestions = allAttemptedQuestions.map(qs => qs.filter(q => !evaluate(q)))
let failedNumbers = failedQuestions.map(qs => qs.map(q =>  [ q.firstNum, q.secondNum ])).filter(q => q.length > 0)
let successfulNumbers = sucessfulQuestions.map(qs => qs.map(q =>  [ q.firstNum, q.secondNum ])).filter(q => q.length > 0)

failedNumbers.flat().flat();
successfulNumbers.flat().flat();
let masteredNumbers = _.countBy(successfulNumbers);
let prNumbers = _.countBy(failedNumbers);



function addScript(scriptUrl) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = scriptUrl;
  document.head.appendChild(script);
 }

 addScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.js')
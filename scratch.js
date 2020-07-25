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



0: Array [ "Practice_test", "2020-07-24T13:47:38.391Z" ]
1: Array [ "Practice_test", "2020-07-13T11:26:22.241Z" ]
10: Array [ "Practice_sdsd", "2020-07-11T04:28:21.128Z" ]
11: Array [ "Practice_test", "2020-07-11T00:43:36.320Z" ]
12: Array [ "Practice_test", "2020-07-13T15:24:18.375Z" ]
13: Array [ "Practice_test", "2020-07-11T04:24:20.458Z" ]
14: Array [ "Practice_test", "2020-07-16T11:21:29.591Z" ]
15: Array [ "Practice_test", "2020-07-15T11:21:52.993Z" ]
16: Array [ "Practice_test", "2020-07-13T11:29:01.762Z" ]
17: Array [ "Practice_test", "2020-07-15T11:22:12.749Z" ]
18: Array [ "Practice_test", "2020-07-24T13:42:57.770Z" ]
19: Array [ "Practice_sdsd", "2020-07-11T00:36:02.258Z" ]
2: Array [ "Practice_test", "2020-07-24T13:42:16.150Z" ]
20: Array [ "Practice_dfd", "2020-07-12T05:44:42.443Z" ]
21: Array [ "Practice_test", "2020-07-13T11:56:41.451Z" ]
22: Array [ "Practice_test", "2020-07-13T11:29:35.689Z" ]
23: Array [ "Practice_gg", "2020-07-11T00:37:49.631Z" ]
24: Array [ "Practice_test", "2020-07-15T04:12:33.765Z" ]
25: Array [ "Practice_test", "2020-07-13T11:56:56.707Z" ]
26: Array [ "Practice_test", "2020-07-11T00:35:31.969Z" ]
27: Array [ "Practice_t", "2020-07-11T01:30:06.218Z" ]
28: Array [ "Practice_t", "2020-07-11T00:45:10.490Z" ]
29: Array [ "Practice_sds", "2020-07-12T05:47:23.525Z" ]
3: Array [ "Practice_t", "2020-07-11T00:46:35.334Z" ]
30: Array [ "Practice_test", "2020-07-24T13:48:54.908Z" ]
31: Array [ "Practice_test23", "2020-07-12T05:46:54.071Z" ]
32: Array [ "Practice_tersd", "2020-07-11T01:28:15.499Z" ]
33: Array [ "Practice_test", "2020-07-12T05:47:36.743Z" ]
34: Array [ "Practice_test", "2020-07-12T05:44:09.131Z" ]
35: Array [ "Practice_test", "2020-07-13T11:30:32.840Z" ]
36: Array [ "Practice_test", "2020-07-24T13:29:20.160Z" ]
37: Array [ "Practice_Kavin", "2020-07-12T05:41:45.856Z" ]
38: Array [ "Practice_t", "2020-07-11T01:28:17.917Z" ]
39: Array [ "Practice_test", "2020-07-13T11:29:31.139Z" ]
4: Array [ "Practice_test", "2020-07-11T04:26:06.747Z" ]
40: Array [ "Practice_test", "2020-07-12T05:44:51.148Z" ]
41: Array [ "Practice_test", "2020-07-12T05:44:33.298Z" ]
5: Array [ "Practice_test", "2020-07-12T05:43:43.947Z" ]
6: Array [ "Practice_test", "2020-07-15T11:04:58.162Z" ]
7: Array [ "Practice_test", "2020-07-13T11:57:19.057Z" ]
8: Array [ "Practice_test", "2020-07-25T00:20:06.417Z" ]
9: Array [ "Practice_test", "2020-07-24T13:45:29.739Z" ]
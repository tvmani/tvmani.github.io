# tvmani.github.io

## How to run test case
```bash
jest --watch --verbose false session.test.js
jest --watch --verbose false random.test.js
jest --watch --verbose false generator.test.js
jest --watch --verbose false analyzer.test.js
jest --watch --verbose false model\AnswerTips.test.js
```

## How to clone localStorage from dailyInfo int local
```bash
# visit dailyProactice and in console print JSON.stringify(localStorage), and copy that into a variable in local developmetn
var ls = content
Object.keys(ls).forEach(key =>  console.log(ls[key]));
Object.keys(ls).forEach(key => localStorage.setItem(key, ls[key]));
```

## Git commands used before commit
```
git checkout origin/master
git diff origin/master  --name-only
git diff origin/master  -- scripts/generator.js
git diff origin/master  -- scripts/math_operation.js
git diff origin/master  -- scripts/ui_tools.js
```
### Latex

* [Latex](https://www.latex4technics.com/)
* [Technical Writing with LaTeX](https://gate.nmr.mgh.harvard.edu/wiki/whynhow/images/e/e6/LaTeX_Mahanand.pdf)


### Sample links
* [Interactive Cube](https://github.com/tvmani/tvmani.github.io/blob/master/interactive_cube.html)
* [Interactive Cube](https://htmlpreview.github.io/?https://github.com/tvmani/tvmani.github.io/blob/master/interactive_cube.html)

## List of tasks

- [x] [Basic domain creation](https://dhinamorumurai.info/)
- [x] [Hosting using gitub](https://dhinamorumurai.info/)
- [x] [Student name]()
- [X] [Indepdenent Javascript]()
- [X] [Allow multiple kids name]()
- [] [Color code change based on result]()
- [] [Generate diagrams]()
- [] [Add additional kids learning games that are already build]()
- [] [Recognition for acheivement]()
  - [] [Message showing that "you own" moving around in screen]()
  - [] [Message showing that "you own" zooming big from small]()
  - [] [Celebration gold papers falling down in the screen]()
    - [] [Falling papers](https://www.cssscript.com/demo/confetti-falling-animation/)
  - [] [Allow kids to change to color once they win something]()
  - [] [Show them number of gold-coins they saved]()

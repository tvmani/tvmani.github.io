let app = {}
let learned_something_count = 0

function start() {
    let quiz_mode = 'quiz'; //allowed values: quiz review
    let answers = document.getElementsByClassName('answer');
    app.rows = Array.from(document.getElementsByClassName('row'));
    /* add "next question" button to each row except the last row*/
    for (row of app.rows) {
        var div = document.createElement("div");
        div.id = "buttons-under"
        let next_question = `<button class="next-question"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.5em" height="1.5em" style="vertical-align: -0.375em;-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);margin: 0 0 0 -.3em;" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M16.707 13.293a.999.999 0 0 0-1.414 0L13 15.586V8a1 1 0 1 0-2 0v7.586l-2.293-2.293a.999.999 0 1 0-1.414 1.414L12 19.414l4.707-4.707a.999.999 0 0 0 0-1.414z" fill="white"></path></svg>next question</button>`
        let learned_something = ` <button class="learned-something">I learned something! <span class="star">★</span></button>`
        if (row === app.rows[app.rows.length - 1]) {
            div.innerHTML = learned_something;
        } else {
            div.innerHTML = next_question + learned_something;
            div.querySelector('.next-question').onclick = function () {
                show_next_row();
                this.closest('.row').classList.add('done');
            }
        }
        div.querySelector('.learned-something').onclick = function () {
            let star = this.querySelector('.star');
            if (star !== undefined && star !== null && (star.classList.contains("learned") === false)) {
                learned_something_count++;
                show_score_message(quiz_mode);
            }
            console.log(learned_something_count)
            star.classList.add('learned');
            star.classList.add('barrelRoll');
            setTimeout(function () {
                star.classList.remove('barrelRoll');
            }, 300);
        }
        row.appendChild(div);
    }

    document.getElementById('button-start').onclick = function () {
        show_next_row();
        this.setAttribute('style', 'visibility: hidden');
    }

    document.getElementById('button-reveal-all').onclick = function () {
        document.querySelector('body').classList.add('all-revealed');
        this.parentElement.setAttribute('style', 'visibility: hidden');
        quiz_mode = 'review';
        show_score_message(quiz_mode)
    }
}

function show_score_message(quiz_mode) {
    let message = ""

    if(quiz_mode === 'review' && learned_something_count === 0) {
        message = "You are in review mode!"
    }
    else if (learned_something_count === 0 && mode === 'quiz') {
        message = "Wow! You know all questions in this quiz!!"
    } else {
        message = "Wow! You have learned " + learned_something_count + " new items in this quiz!!"
    }
    document.getElementById("question_score").innerHTML = "<p>" + message + "</p>";
}

function show_next_row() {
    if (app.rows.length > 0) {
        let row = app.rows.shift();
        row.classList.add('revealed')
        row.scrollIntoView({behavior: 'smooth', alignToTop: true});
        row.getElementsByClassName('answer')[0].onclick = function (event) {
            this.classList.add('revealed')
            this.parentElement.classList.add('question-revealed');
        }
        show_score_message('quiz')

    }

}


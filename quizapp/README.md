# DailyPractice Quiz 🏅

This app was adapted from [this quiz app](https://github.com/bonham000/react-quiz-app) and then again from [this multiple choice quiz app for freeCodeCamp](https://github.com/bonham000/multiple-choice-questions) provides a practice testing and development environment for freeCodeCamp's multiple-choice interview questions.

**[It's running live here for you to practice on.](https://app-time-lessons.surge.sh/)**

These are quiz lessons to help you learn the basic concepts of JavaScript and programming.

---

The challenges all live in the `src/challenges` directory. Each category has a separate `JSON` file which is structured similar to the other challenge seed files in the core freeCodeCamp repository. To contribute a challenge, simply make a pull request with your challenge question(s) in the appropriate seed file.

To run this project locally:

```sh
yarn install
yarn start
```

To see more details on making a contribution, please see `CONTRIBUTING.md`.

We are tracking and organizing these questions in the issues on this repository. Please go there to see what progress is being made and where you can help out if you are interested in helping.

## Build and Run

```bash

    npm run build

    # After build is successful
    yarn global add serve

    # serve the files through local web server
    serve -s build
```

http://192.168.99.1:5000  

http://192.168.1.11:5000  

## Todo list

- [] Quiz generation from CSV/XLSX file
- [] Quiz generation from CSV file, which has reference to image files path in local system?
- [] Quiz generation from CSV file, which has reference to image files path in url?
- [] Save the quiz result for the user in local storage
- [] prompt user name?
  * There might be multiple users doing quiz from same system or mobile
- [] quiz index page - school/programmer/developer/general/tamil/english categories?


### Quiz generation from CSV/XLSX file

1. Input -> Process -> Output
2. CSV/XLSX file -> Process -> javascript source code file
3. Try with only one question and answer
4. Try with two question and answer
5. Try with full file

### Quiz Improvement 1 - adding images

Requirement:

 1. Question could contain one image
 2. Answer could contain one or more images
 3. Question could contain one or more images


Analysis:

 1. How to represent an image in an excel file?
  * absolute path of the image?
  * relative path of the image?
  * reporting errors on the generation of json, if image file is not present?
  * 


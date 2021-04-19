# Vue.js Assigment

This test is designed to evaluate general the candidates' front-end skills, such as understanding of HTML elements and outline, principles of CSS cascade, and VueJS knowledge.

It consists of a simple web app that relies upon the free APIs provided by [reqres.in](https://reqres.in/) The expected total time to solve the assignments is 2 to 3 hours. Please read through the assignment descriptions before starting.

## Tasks

The purpose of this assignment is to complete the web app, by doing the following tasks:

- Divide parts of the app/markup into components as you see fit;
- Add validation to the text fields of the form;
- Redirect to the users route after signing in;
- Display an error in case the API doesn't authorize the user;
- Add a loading while the login request is ongoing;
- Use Vuex state management to save the session and the list of users;
- Create pagination to load more results in the Users page;
- Create a Sign up page that will use the following endpoint to register new users: POST [https://reqres.in/api/users](https://reqres.in/api/users).

If you have time:

- Improve the UI. Any framework is allowed;
- Create a user's detail page, reachable after clicking on one user from the Users page. You can fill this page with dummy info.

## Evaluation

We will evaluate you on the following parameters:

- Ability to write code that is clean, readable and easy to maintain.
- Ability to organise your code in a good project structure.
- Knowledge of Vue.js, the basic workings of the library and core plugins such as Vuex.

## Setup

Install node modules

```zsh
yarn install
```

Run local site for development

```zsh
yarn run serve
```

Site available at http://localhost:8080/

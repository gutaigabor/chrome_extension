# Admin messages - A Chrome extension app

## The task

./TASK.md

## Installation

### Mock server

``` run in ./mock_api_server: 'npm install -g json-server' ```

### Frontend

1) ``` run in 'root': 'npm install' ```
2) Enable development mode in Chrome's extension panel

## Start

1) Start mock BE: ``` run in ./mock_api_server: 'json-server --watch data.json --port 3001' ```
2) Build extension: ``` run in 'root': 'npm run build' ```
3) Load extension from './extension-folder'
4) Extension name: Admin Message Extension

## Tests

1) Run example tests: ``` run in 'root': 'yarn test' ```

## Architectural decisions

1) I used Vite + React + Typescript, because this mix is easy to set up, and nice to handle smaller tasks with great support. Typescript is more user friendl then plain Javascript.
2) I used Tailwind CSS for design, because it is easy to integrate and easy to use. It has pre-made components to sample from
3) I used RTK (redux toolkit) for state management, because it has the most support, it contains REST api communication functionality with queries and mutations that can be used fast and easily
4) I used redux-persist to save data into chrome local storage (for the popup context)
5) I used Jest and React Testing Library for some example unit test, because they are easy to set up, and can produce value under a short time

## Future improvements

1) Use .env variables for more clear variable handling
2) Use sounds for messages and add volume preference in settings
3) Publish to Chrome Extension Marketplace
4) Create a Github pipeline to make testing and publishing / deploying automatic
5) Finish sender user funcionality and add actual name, role and avatar of the Admin user

## Time allocation

- I was able to finish the core functionality and adding unit tests in around 2 hours
- I was working on additional features in around an other 2 hours:
    - message priorities
    - create Options menu
    - documentation
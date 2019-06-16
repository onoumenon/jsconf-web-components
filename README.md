# jsconf-demo

From MDN:

## "Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps."

For more information about Web Components, visit the [MDN's page](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

There are two separate demos in this repo.

To run the to-do demo, cd into the relevant folder and run this in the command line:

`npx http-server`

To run the chat demo, cd into the relevant folder, and run:

`npm i`
`npm start`

To integrate with front-end frameworks like Vue or React,

- Include a script in package.json for post-installation of webcomponents-bundle and custom-elements-es5-adapter
- Don't save over React/ Vue/ etc keywords

# React Boilerplate yarn

## History commands

```
$ create-react-app <project>
$ cd <project>
$ yarn add prettier eslint-config-prettier eslint-plugin-prettier --save-dev
- copy .eslintrc file to project
$ `cp ~/Documents/react/boilerplate/.eslintrc ~/workspace/<project>/.eslintrc`
```

## React-router

https://reacttraining.com/react-router/web/guides/quick-start

```console
$ yarn add react-router-dom
$ `cp ~/Documents/react/boilerplate/BasicRouter.js ~/workspace/<project>/App.js`
```

- Create Missing Components and Folders
- mkdir src/container/
- mkdir src/container/Home
- mkdir src/container/Contact
- mkdir src/container/NotFound
- touch src/container/Home/Home.js
- touch src/container/Home/Home.test.js
- touch src/container/Contact/Contact.js
- touch src/container/Contact/Contact.test.js
- touch src/container/NotFound/NotFound.js
- touch src/container/NotFound/NotFound.test.js

## redux

```
$ yarn add redux react-redux
```

## Enzyme

http://airbnb.io/enzyme/docs/installation/react-16.html

```
$ yarn add -D enzyme enzyme-adapter-react-16
$ yarn add --dev react-test-renderer
```

package.json:

```
"jest": {
    "collectCoverageFrom": [
      "src/**/*.{js,sx}",
      "!src/index.js",
      "!src/setupTest.js",
      "!index.js",
      "!src/store/store.js"
    ],
    "snapshotSerializers": ["enzyme-to-json/serializer"]
  }
```

Create setupTest.js
`$ touch src/setupTest.js`
... continue

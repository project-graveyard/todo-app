# TodoApp

* Firebase
  * Real-time database
* Hosted online:
  * Firebase: [click here](https://mytodo-ep.web.app)
* Has full CRUD(Create, Read, Update, Delete) functionality
* Material UI for the design
* React js as frontend
  * Used hooks

In the project directory, you can run:

### `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Note: After cloning the repository, add firebase.js into the src/ folder\
Write the following code:
```js
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    // Enter your personal firebase api configuration here
})

const db = firebaseApp.firestore()
// const auth = firebaseApp.auth()
// const storage = firebaseApp.storage()


export { db }
```

## Archive Notice!!

There are no active developments in this project.

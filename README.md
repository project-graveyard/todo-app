# TodoApp

* Firebase
  * Real-time database
* Hosted online:
  * Firebase: [click here](https://mytodo-ep.web.app)
  * Netlify: [click here](https://mytodo-ep.netlify.app)
* Has full CRUD(Create, Read, Update, Delete) functionality
* Material UI for the design
* React js as frontend
  * Used hooks



In the project directory, you can run:

### `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<!--
### Directory history
* [State of Todo app without material ui](https://github.com/ExciteProgrammer/todo-app/tree/e0c137ede133128ec7b3b474db7753f824b24c96)
* [State Todo app with material ui](https://github.com/ExciteProgrammer/todo-app/tree/2d9dc82a8e57b1e7ddf6d512ed08458b5a162791)
* [Fully functional CRUD state](https://github.com/ExciteProgrammer/todo-app/tree/8d629f9d1b7551c56c2a9f7be6f5ea1690aff367)](url)
-->

Note: After cloning the repository, add firebase.js into the src/ folder\
Write the following code:\
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

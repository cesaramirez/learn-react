import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD9WzKT2w2If9o9oYx46HPFQAUvfLGPNII",
  authDomain: "catch-of-the-day-c.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-c.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;

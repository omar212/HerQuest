var firebase = require("firebase");

const config = {
  apiKey: "AIzaSyCn9Im-ZLpNQHlX5UeFnCbJwgcS4eNQAVk",
authDomain: "herquest-bf202.firebaseapp.com",
databaseURL: "https://herquest-bf202.firebaseio.com",
projectId: "herquest-bf202",
storageBucket: "herquest-bf202.appspot.com",
messagingSenderId: "57553091853"
};
firebase.initializeApp(config);

export default (firebase);

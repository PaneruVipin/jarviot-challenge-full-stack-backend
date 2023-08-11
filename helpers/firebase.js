const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyCLm5Buw3TY14rlC3tSYrP5eR53KeBmIb0",
  authDomain: "for-drive-report-395606.firebaseapp.com",
  databaseURL: "https://for-drive-report-395606-default-rtdb.firebaseio.com",
  projectId: "for-drive-report-395606",
  storageBucket: "for-drive-report-395606.appspot.com",
  messagingSenderId: "271158158089",
  appId: "1:271158158089:web:a8d30adadfd664bb70e9d8",
};

const db = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  return db;
};
module.exports = db;

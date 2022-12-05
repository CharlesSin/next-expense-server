import { fireConfig, fireConfig_personal, fireConfig_adoptpet, fireConfig_babycare, fireConfig_chatroom } from "../config/firebase.config.js";

// let firestoreDb = fireConfig.firestore();
// let firestoreDb = fireConfig_personal.firestore();

// let firestoreDb = fireConfig_adoptpet.firestore(); // Account2021
let firestoreDb = fireConfig_babycare.firestore(); // account2020

// Backup data from firebase.
export async function backupAccountData(collectionName) {
  const firestoreDb = collectionName === "account2020" ? fireConfig_babycare.firestore() : fireConfig_adoptpet.firestore();
  const querySnapshot = await firestoreDb.collection(`${collectionName}`).get();

  let accountObj = [];

  querySnapshot.forEach((doc) => {
    const documentItem = doc.data();
    documentItem.id = doc.id;
    accountObj.push(documentItem);
  });

  return accountObj;
}

export async function saveBackupLogger(saveFileName, year) {
  const dataSet = {
    filename: saveFileName,
    backupDate: `${new Date().toISOString().slice(0, 10)}`,
    backTime: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
  };

  await fireConfig_chatroom.firestore().collection("backuplogger").doc(year).set(dataSet);
}

// Method Example.
// backupAccountData("Account2021");

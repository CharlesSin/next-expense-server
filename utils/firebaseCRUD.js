import moment from "moment";
import momenttz from "moment-timezone";

import { fireConfig_adoptpet } from "../config/firebase.config";
import dateConverter from "./dateConverter";
import { timestampConverter } from "./timestampConverter";

const firestoreDb = fireConfig_adoptpet.firestore();

// Create New Data insert into Firebase Cloud Firestore.
export async function createNewData(collectionName, data) {
  let d = dateConverter(`${data.date}`, "YYYY-MM-D", "D-MMM-YYYY");
  if (!d) {
    return "error";
  }
  let timestamp = timestampConverter(d, "D-MMM-YYYY");
  let doc_id = `${timestamp}_${Math.floor(Math.random() * 10000)}`;
  const dataSet = {
    date: d,
    item: data.item,
    pay: data.pay,
    price: parseFloat(data.price).toFixed(2),
    category: data.category,
    type: data.type,
    timestamp: parseInt(timestamp),
  };

  let docRef = await firestoreDb.collection(`${collectionName}`).doc(doc_id).set(dataSet);
  return doc_id;
}

// Method Example.
// createNewData("Collection Name", dataObj);

// Read Data from Firebase Cloud Firestore. Fliter by date.
export async function readAccountData(collectionName, fromDate = "", endDate = "") {
  const start = fromDate === "" ? moment(momenttz(moment()).tz("Asia/Taipei").format()).format("X") : moment(fromDate).format("X");
  const end = endDate === "" ? moment(momenttz(moment()).tz("Asia/Taipei").format()).format("X") : moment(endDate).format("X");

  const querySnapshot = await firestoreDb.collection(`${collectionName}`).where("timestamp", ">=", parseInt(start)).where("timestamp", "<=", parseInt(end)).get();
  let expenseData = [];
  querySnapshot.forEach((doc) => {
    let data = { id: doc.id, data: doc.data() };
    expenseData.push(data);
  });
  return expenseData;
}

// Method Example.
// readAccountData("2020-09-11", "2020-09-14");
// readAccountData("2020-12-01", "2020-12-12");
// readAccountData("", "");
// readAccountData();
// readAccountData(
//   `${moment().year()}-${moment().month() + 1}-01`,
//   `${moment().year()}-${moment().month() + 1}-${moment().date()}`
// );

// Delete Data from Firebase Cloud Firestore. Delete by documents ID.
export async function removeAccountData(collectionName, id) {
  await firestoreDb.collection(`${collectionName}`).doc(`${id}`).delete();
  return id;
}

// Method Example.
// removeAccountData("1600012800_5240");

// Update Data into Firebase Cloud Firestore.
export async function updateAccountData(collectionName, id, data) {
  removeAccountData(collectionName, id);
  createNewData(collectionName, data);
  return "Update Successful";
}

// Method Example.
// updateAccountData(id, dataObj);

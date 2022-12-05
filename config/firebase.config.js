// import firebase module.
import admin from "firebase-admin";

// firebase config object.
const adoptpet_service = {
  type: process.env.FIREBASE_TYPE,
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, "\n") : undefined,
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_AUTH_URI,
  token_uri: process.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDE_X509_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
};

const adoptpet_DATABASEURL = process.env.FIREBASE_DATABASE_URL;

const adoptpetAppConfig = {
  credential: admin.credential.cert(adoptpet_service),
  databaseURL: adoptpet_DATABASEURL,
};

// firebase init
export const fireConfig_adoptpet = admin.initializeApp(adoptpetAppConfig, "adoptpet");

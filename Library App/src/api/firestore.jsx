import axios from "axios";

const PROJECT_ID = "najjar-d130a";
const API_KEY = "AIzaSyCzGYLfHwtWftYp7EseBQoHznikGT87Kyc";

const firestore = axios.create({
  baseURL: `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`,
  params: {
    key: API_KEY,
  },
});

export default firestore;

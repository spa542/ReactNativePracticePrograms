import { Platform } from "react-native";

const liveHost = "https://us-central1-mealstogo-5a3c0.cloudfunctions.net/";
const localHost = "http://localhost:5001/mealstogo-5a3c0/us-central1/";
const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = false;
export const host = isDevelopment || isAndroid ? localHost : liveHost;

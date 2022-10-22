import { initializeApp } from "firebase/app";
import {getFirestore, query, where, collection, getDocs} from "firebase/firestore";

/// INITIALIZE fire FIREBASE and FIRESTORE
const firebaseConfig = {
    apiKey: "AIzaSyDPGmgTxlAsVkakZrGbs8NTF2r0RcWu_ig",
    authDomain: "luminous-lambda-364207.firebaseapp.com",
    projectId: "luminous-lambda-364207",
    storageBucket: "luminous-lambda-364207.appspot.com",
    messagingSenderId: "518969290682",
    appId: "1:518969290682:web:d7be744cb378ec83d4f783"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore()
///  INITIALIZE FIREBASE and FIRESTORE
/// FETCHING FUNCTIONS

const allUnitsCollection = collection(firestore, "/units/")

fetchAllUnits().then((x)=> console.log(x))
export async function fetchAllUnits() {
    return new Promise(function(resolve, reject) {
        getDocs(allUnitsCollection).then(snapshot => {
            let array = [];
            snapshot.forEach(elem => array.push(elem.id))
            resolve(fetchAllUnitsDataObj(array))
        })
    })
}

function getCollection(propertyID, collectionID) {
    return new Promise(function(resolve, reject){
        resolve({one: 23})
    })

}

export async function fetchAllUnitsDataObj(idArray) {
    return new Promise(function(resolve, reject) {
        getDocs(allUnitsCollection).then(snapshot => {
            let returnObj = {};
            for (let elem in idArray){
                returnObj[idArray[elem]] = getAllDataSpecificProperty(idArray[elem])
            }
            resolve(returnObj)
        })
    })
}

export async function getAllDataSpecificProperty(propertyID){
    return new Promise(function(resolve, reject){
        propertyID = "18572 Cull Canyon Rd"
        let returnObj = {info: getCollection(propertyID, "info"), payments: getCollection(propertyID,"payments") }
        resolve(returnObj)
    })
}


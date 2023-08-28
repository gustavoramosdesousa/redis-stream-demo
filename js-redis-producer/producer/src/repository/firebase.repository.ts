import {initializeApp} from 'firebase/app';
import {API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID} from '../private';
import {
  collection,
  addDoc,
  getDocs,where,
  query,
  getFirestore,
  DocumentData,
  onSnapshot,
  doc,getDoc
} from 'firebase/firestore';

const firebase_config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};

const app = initializeApp(firebase_config);
const db = getFirestore(app);
console.log("firebase","firebase foi inicializado.");

const getQuery = (generic_collection:string) =>{
  var q = query(collection(db, generic_collection));
  return q;
}

type criteria={
  field:string;
  value:any;
};
/**
 * Retorna a lista de documentos de um dado banco
 * @param games_collection: Coleção de onde o documento será recuperado 
 * @param criterias: conjunto de critérios de busca 
 * @returns lista de documentos
 */
const getDocumentById = async (generic_collection:string, id:string) => {
  var doc_ref = doc(db, generic_collection, id); 
  var doc_snap = await getDoc(doc_ref);
  return doc_snap;
};

/**
 * Realiza a inserção de um documento genérico na dada coleção
 * @param generic_collection: Coleção no qual o documento será inserido 
 * @param new_generic: Objeto genérico que será salvo na dada coleção 
 * @returns referência do novo documento
 */
const addDocument = async (generic_collection:string, new_generic:{} ) => {
  //console.log('firebase: addDocument');
  const doc_ref = await addDoc(collection(db, generic_collection), new_generic);
  return doc_ref;
};

export{addDocument, getQuery, getDocumentById};
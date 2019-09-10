declare interface IFirestoreService extends FirebaseFirestore.Firestore {}



declare class DocumentReference<T = {[props: string]: any}> {
  set(
    data: T | FirebaseFirestore.DocumentData,
    options?: FirebaseFirestore.SetOptions
  ): Promise<FirebaseFirestore.WriteResult>
}

declare class CollectionReference<T = {[props: string]: any}> {

  doc(collectionPath: string): DocumentReference
}


// type User = {
//   first: String,
//   last: String,
//   born: number
// };
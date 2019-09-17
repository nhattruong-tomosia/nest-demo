import {
  CollectionReference,
  DocumentReference,
  DocumentSnapshot,
  FieldPath,
  Firestore,
  Precondition,
  Timestamp,
  UpdateData,
  WriteResult
} from '@google-cloud/firestore'

export interface ICollectionReference extends CollectionReference {}

export interface CollectionReferenceTest<T extends {}> {
  readonly id: string;
  readonly firestore: Firestore;
  readonly parent: CollectionReference;
  readonly path: string;
  collection(collectionPath: string): CollectionReference;
  listCollections() : Promise<CollectionReference[]>;

  create(data: IDocumentData): Promise<WriteResult>;
  update(data: T | UpdateData, precondition?: Precondition): Promise<WriteResult>;
  update(field: string|FieldPath, value:any, ...moreFieldsOrPrecondition: any[]): Promise<WriteResult>;
  delete(precondition?:Precondition): Promise<WriteResult>;
  get: () => Promise<IQuerySnapshot<T>>

  onSnapshot(onNext: (snapshot: DocumentSnapshot) => void, onError?: (error: Error) => void): () => void;
  isEqual(other: DocumentReference): boolean;
}

interface IQuerySnapshot<T> {
  docs: IQueryDocumentSnapshot[];
  empty: boolean;
  forEach: (callback: (result: IQueryDocumentSnapshot) => void, thisArg?: any) => void;
  size: number;
}

interface IQueryDocumentSnapshot {
  readonly exists: boolean;
  readonly ref: DocumentReference;
  readonly id: string;
  readonly createTime?: Timestamp;
  readonly updateTime?: Timestamp;
  readonly readTime: Timestamp;
  data: () => IDocumentData | undefined;
  get(fieldPath: string|FieldPath): any;
  isEqual(other: IQueryDocumentSnapshot): boolean;
}

interface IDocumentData {

}

// export interface DocumentReference<SC = {[props: string]: any}> {
//   set(
//     data: SC | FirebaseFirestore.DocumentData,
//     options?: FirebaseFirestore.SetOptions
//   ): Promise<FirebaseFirestore.WriteResult>
// }

// export interface CollectionReference<SC = {[props: string]: any}> {
//   doc(collectionPath: string): DocumentReference<SC> | FirebaseFirestore.DocumentReference;
//   get(): Promise<FirebaseFirestore.QuerySnapshot>
// }

// export interface IFirestoreService {
//   db: FirebaseFirestore.Firestore;
//   getCollection: <SC>(collectionName: string) => CollectionReference<SC> | FirebaseFirestore.CollectionReference
// }

// export interface ICollectionBase<T extends Object> {
//   db: FirebaseFirestore.Firestore;
//   collection: CollectionReference
//   findAll?: () => T[] | Promise<T[]>
// }

// export type DocumentResult<T> = {
//   [P in keyof T]: T[P]
// } & {
//   _id: string
// }


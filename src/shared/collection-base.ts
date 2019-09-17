// import { Injectable, Inject, Optional } from '@nestjs/common'

// @Injectable()
// export abstract class CollectionBase<T extends Object> implements ICollectionBase<T> {
//   public db: FirebaseFirestore.Firestore;
//   public collection: CollectionReference;

//   constructor(
//     @Optional() public collectionName: string,
//     @Inject('IFirestoreService') public firestoreService: IFirestoreService,
//   ) {
//     this.db = firestoreService.db
//     this.collection = firestoreService.getCollection<T>(collectionName)
//   }

//   async findAll(): Promise<T[]> {
//     console.log(this.firestoreService)
//     const snapshot = await this.collection.get()
//     if (snapshot.empty) {
//       return []
//     }

//     let result: DocumentResult<T>[] = []

//     snapshot.forEach((doc) => {
//       result = [
//         ...result,
//         {
//           _id: doc.id,
//           ...(doc.data() as T)
//         }
//       ]
//     })
//     return result
//   }
// }

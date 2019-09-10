import { Module, Global, Provider } from '@nestjs/common';
import { Firestore } from '@google-cloud/firestore'

const FirestoreService: Provider = {
  provide: 'IFirestoreService',
  useFactory: () => {
    return new Firestore({
      projectId: 'nest-demo-7a590',
      keyFilename: './nest-demo-7a590-firebase-adminsdk-16nat-84cff4b8b7.json',
    })
  }
}


@Global()
@Module({
  providers: [FirestoreService],
  exports: [FirestoreService],
})
export class FirestoreModule {}

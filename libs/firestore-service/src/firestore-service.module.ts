import { Module, DynamicModule, Provider, Inject, Global } from '@nestjs/common'
import { Firestore } from '@google-cloud/firestore'
// import { FirestoreServiceService } from './firestore-service.service'



const FIRESTORE_INSTANCE = 'FIRESTORE_INSTANCE'
const FIRESTORE_DEFAULT_INSTANCE = 'FIRESTORE_DEFAULT_INSTANCE'



const getConnectionToken = (dbName: string) => `${FIRESTORE_INSTANCE}__Connection__${dbName}`
const getCollectionToken = (collectionName: string) => `${FIRESTORE_INSTANCE}__Collection__${collectionName}`

export const InjectConnection = (dbName: string) => Inject(getConnectionToken(dbName))
export const InjectCollection = (collectionName: string) => Inject(getCollectionToken(collectionName))



@Global()
@Module({})
export class FirestoreServiceModule {
  static forRoot(projectId: string, keyFilename: string, dbName: string = FIRESTORE_DEFAULT_INSTANCE): DynamicModule {
    const rootProvider: Provider = {
      provide: getConnectionToken(dbName),
      useFactory: () => {
        return new Firestore({
          projectId: projectId,
          keyFilename: keyFilename,
        })
      },
    }
    return {
      module: FirestoreServiceModule,
      providers: [rootProvider],
      exports: [rootProvider]
    }
  }

  static forFeature<T = {}>(collectionName: string, dbName: string = FIRESTORE_DEFAULT_INSTANCE): DynamicModule {
    const provider: Provider = {
      provide: getCollectionToken(collectionName),
      useFactory: (db: Firestore) => {
        return db.collection(collectionName)
      },
      inject: [getConnectionToken(dbName)],
    }
    return {
      module: FirestoreServiceModule,
      providers: [provider],
      exports: [provider],
    }
  }
}

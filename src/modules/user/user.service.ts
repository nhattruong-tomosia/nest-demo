import { Injectable, Inject } from '@nestjs/common';
import { InjectCollection, ICollectionReference } from '@app/firestore-service'
import CONSTANT from '@app/constant'

@Injectable()
export class UserService {
  constructor(
    @InjectCollection(CONSTANT.COLLECTION_USERS) private readonly userCollection: ICollectionReference,
  ) {}

  async findAll() {
    const result = await this.userCollection.get()
    if (!result.empty) {
      const arr = result.docs.map((item) => ({
        id: item.id,
        ...item.data()
      }))
      return arr
    }
    return []
  }

  create(user: User) {
    return this.userCollection.doc().set(user)
  }
}

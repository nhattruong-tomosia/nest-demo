import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject('IFirestoreService') private readonly firestoreService: IFirestoreService
  ) {}

  login(emailOrUsername: String, password: String) {
    return `${Math.floor(Math.random() * 10000)}${emailOrUsername}`
  }

  async signUp() {
    // this.firestoreService.db.collection('users').doc('alovelace');
    let colection = this.firestoreService.collection('users')
    let docRef = colection.doc('alovelace');
    let setAda = await docRef.set({
      first: 'Ada',
      last: 'Lovelace',
      born: 1815
    });
    console.log(setAda)
  }
}


import { Injectable } from '@nestjs/common';

type User = {
  userId: number,
  name: string,
  pass: string
}
@Injectable()
export class UserService {
  private readonly users: User[]

  constructor() {
    this.users = [
      {
        userId: 1,
        name: "Minh Nhat",
        pass: "mnhattt"
      },
      {
        userId: 2,
        name: "Anh Khoa",
        pass: "mnhattt"
      }
    ]
  }

  findAll() {
    return this.users
  }

  findById(id: number) {
    return this.users.find(u => u.userId === id)
  }

  create(user: User) {
    this.users.push(user)
  }
}

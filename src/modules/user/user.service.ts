import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  users = [
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

  findAll() {
    return this.users
  }

  findById(id: number) {
    return this.users.find(u => u.userId === id)
  }
}

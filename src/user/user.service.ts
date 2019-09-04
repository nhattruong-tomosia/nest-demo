import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  users = [
    {
      id: 1,
      name: "Minh Nhat",
      pass: "mnhattt"
    },
    {
      id: 2,
      name: "Anh Khoa",
      pass: "mnhattt"
    }
  ]

  findAll() {
    return this.users
  }

  findById(id: number) {
    return this.users.find(u => u.id === id)
  }
}

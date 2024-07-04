import { Injectable } from '@nestjs/common';
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      name: 'John',
      email: 'john@gmail.com',
      password: '123455',
    },
    {
      id: 2,
      name: 'MaHadi',
      email: 'mahadi@gmail.com',
      password: '123455',
    },
  ];

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email == email);
  }
}

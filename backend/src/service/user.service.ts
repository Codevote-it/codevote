import { Injectable } from '@nestjs/common';
import { DatastoreRepository } from '../lib/datastore.repository';
import { GithubUser } from '../lib/github.strategy';
import * as jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server-express';
import { Ctx } from '../context';
import { User } from '../generated/graphql';

export interface JwtPayload {
  id: string;
  username: string;
}

@Injectable()
export class UserRepository extends DatastoreRepository<User> {
  constructor() {
    super('User');
  }
}

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async login(user: GithubUser): Promise<string> {
    await this.userRepository.save({
      id: user.id,
      username: user.username,
      displayName: user.displayName,
      profileImageUrl: user.photos?.[0]?.value,
    });
    return this.createToken(user);
  }

  @Authenticated()
  async getLoggedInUser(ctx: Ctx): Promise<User> {
    const user = await this.userRepository.get(ctx.user!.id);
    if (!user) {
      throw Error(`No user with id ${ctx.user?.id} found`);
    }
    return user;
  }

  async getUser(userId: string): Promise<User | undefined> {
    return this.userRepository.get(userId);
  }

  async getUsers(userIds: string[]): Promise<User[]> {
    return this.userRepository.getMultiple(userIds);
  }

  private createToken(payload: JwtPayload): string {
    return jwt.sign(
      {
        data: {
          id: payload.id,
          username: payload.username,
        },
      },
      process.env.JWT_SECRET!,
      { expiresIn: '150 days' },
    );
  }

  static decode(token: string): JwtPayload {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    return decoded.data;
  }
}

export function Authenticated() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalFunction = descriptor.value;
    descriptor.value = function (...args) {
      if (!args?.[0]?.user?.id) {
        throw new AuthenticationError('You need to be authenticated for this');
      }
      return originalFunction.apply(this, args);
    };
  };
}

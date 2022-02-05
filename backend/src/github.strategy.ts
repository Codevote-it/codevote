import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-github2';
import { User } from './types';

interface GithubUser {
  id: string;
  displayName: string;
  username: string;
  photos: [{ value: string }];
}

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor() {
    super({
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: oauthCallback,
    });
  }

  async validate(
    accessToken,
    _,
    user: GithubUser,
    _done: (err: any, obj: any) => void,
  ): Promise<User> {
    return {
      id: user.id,
      username: user.username,
      displayName: user.displayName,
      profileImageUrl: user.photos[0]?.value,
    };
  }
}

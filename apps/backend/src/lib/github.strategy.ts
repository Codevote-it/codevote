import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-github2';
import { oauthCallback } from '../constants';

export interface GithubUser {
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
  ): Promise<GithubUser> {
    return user;
  }
}

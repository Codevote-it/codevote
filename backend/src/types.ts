export interface User {
  id: string;
  displayName?: string;
  username?: string;
  profileImageUrl?: string;
}

export interface CodeVote {
  id: string;
  snippet1: string;
  snippet2: string;
  creator: User;
}

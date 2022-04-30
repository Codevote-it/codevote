export interface CreatorInterface {
  id: string;
  displayName: string;
  username: string;
  profileImageUrl: string;
}

export interface CodevoteInterface {
  id: string;
  createdAt: string;
  snippet1: SnippetInterface;
  snippet2: SnippetInterface;
  creator: CreatorInterface;
}

export interface SnippetInterface {
  id: string;
  title: string;
  content: string;
  votes: {
    id: string;
    createdAt: string;
    user: CreatorInterface;
  }[];
  voteCount: number;
}

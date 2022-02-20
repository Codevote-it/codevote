export interface CodevoteInterface {
  id: string;
  createdAt: string;
  snippet1: SnippetInterface;
  snippet2: SnippetInterface;
  creator: {
    id: string;
    displayName: string;
    username: string;
    profileImageUrl: string;
  };
}

export interface SnippetInterface {
  title: string;
  content: string;
}

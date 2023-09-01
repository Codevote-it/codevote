export interface EditCodevoteRequest {
  id: string;
  input: {
    snippet1: SnippetInputInterface;
    snippet2: SnippetInputInterface;
  };
}

export interface SnippetInputInterface {
  title: string;
  content: string;
}

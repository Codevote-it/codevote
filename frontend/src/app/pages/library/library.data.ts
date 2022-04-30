import { SnippetInterface } from '@app/data';

export interface LibraryDataInterface {
  title: string;
  segment: string;
  description: string;
  snippet: SnippetInterface;
}

export const libraryData: LibraryDataInterface[] = [
  {
    title: 'Button',
    segment: 'button',
    description: 'Button component for clicking',
    snippet: {
      id: '',
      title: 'button.component.ts',
      content: '<app-button>click me</app-button>',
      votes: [],
      voteCount: 0,
    },
  },
  {
    title: 'Column',
    segment: 'col',
    description: 'Column component for creating columns in rows',
    snippet: {
      id: '',
      title: 'col.component.ts',
      content: '<app-col>[ HTML input ]</app-col>',
      votes: [],
      voteCount: 0,
    },
  },
  {
    title: 'Container',
    segment: 'container',
    description:
      'Container component wraps the app with header, footer, and content.',
    snippet: {
      id: '',
      title: 'container.component.ts',
      content: '<app-container>[ content ]</app-container>',
      votes: [],
      voteCount: 0,
    },
  },
  {
    title: 'Creator',
    segment: 'creator',
    description:
      'Creator component displays information about the snippet creator.',
    snippet: {
      id: '',
      title: 'creator.component.ts',
      content: '<app-creator>[ content ]</app-creator>',
      votes: [],
      voteCount: 0,
    },
  },
  {
    title: 'Footer',
    segment: 'footer',
    description: 'Footer component for the bottom layout',
    snippet: {
      id: '',
      title: 'footer.component.ts',
      content: '<app-footer></app-footer>',
      votes: [],
      voteCount: 0,
    },
  },
  {
    title: 'Input',
    segment: 'input',
    description: 'Input component for text input',
    snippet: {
      id: '',
      title: 'input.component.ts',
      content: '<app-input></app-input>',
      votes: [],
      voteCount: 0,
    },
  },
  {
    title: 'Modal',
    segment: 'modal',
    description: 'Modal component for creating modals',
    snippet: {
      id: '',
      title: 'modal.component.ts',
      content: '<app-modal>[ content ]</app-modal>',
      votes: [],
      voteCount: 0,
    },
  },
  {
    title: 'Navigation List',
    segment: 'navigation-list',
    description:
      'Navigation List component for displaying a vertical button list',
    snippet: {
      id: '',
      title: 'navigation-list.component.ts',
      content: '<app-navigation-list>[ content ]</app-navigation-list>',
      votes: [],
      voteCount: 0,
    },
  },
  {
    title: 'Row',
    segment: 'row',
    description:
      'Row component for creating rows. Rows can be used in combination with cols.',
    snippet: {
      id: '',
      title: 'row.component.ts',
      content: '<app-row>[ content ]</app-row>',
      votes: [],
      voteCount: 0,
    },
  },
  {
    title: 'Section',
    segment: 'section',
    description: 'Section component for creating sections',
    snippet: {
      id: '',
      title: 'section.component.ts',
      content: '<app-section>[ content ]</app-section>',
      votes: [],
      voteCount: 0,
    },
  },
  {
    title: 'Snippet',
    segment: 'section',
    description: 'Snippet component for creating code snippets',
    snippet: {
      id: '',
      title: 'snippet.component.ts',
      content: '<app-snippet>[ content ]</app-snippet>',
      votes: [],
      voteCount: 0,
    },
  },
  {
    title: 'User Profile',
    segment: 'user-profile',
    description: 'User Profile component for creating a user (creator) profile',
    snippet: {
      id: '',
      title: 'user-profile.component.ts',
      content: '<app-user-profile></app-user-profile>',
      votes: [],
      voteCount: 0,
    },
  },
];

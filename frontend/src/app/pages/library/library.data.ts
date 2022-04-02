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
      title: 'button.component.ts',
      content: '<app-button>click me</app-button>',
    },
  },
  {
    title: 'Column',
    segment: 'col',
    description: 'Column component for creating columns in rows',
    snippet: {
      title: 'col.component.ts',
      content: '<app-col>[ HTML input ]</app-col>',
    },
  },
  {
    title: 'Container',
    segment: 'container',
    description:
      'Container component wraps the app with header, footer, and content.',
    snippet: {
      title: 'container.component.ts',
      content: '<app-container>[ content ]</app-container>',
    },
  },
  {
    title: 'Creator',
    segment: 'creator',
    description:
      'Creator component displays information about the snippet creator.',
    snippet: {
      title: 'creator.component.ts',
      content: '<app-creator>[ content ]</app-creator>',
    },
  },
  {
    title: 'Footer',
    segment: 'footer',
    description: 'Footer component for the bottom layout',
    snippet: {
      title: 'footer.component.ts',
      content: '<app-footer></app-footer>',
    },
  },
  {
    title: 'Input',
    segment: 'input',
    description: 'Input component for text input',
    snippet: {
      title: 'input.component.ts',
      content: '<app-input></app-input>',
    },
  },
  {
    title: 'Modal',
    segment: 'modal',
    description: 'Modal component for creating modals',
    snippet: {
      title: 'modal.component.ts',
      content: '<app-modal>[ content ]</app-modal>',
    },
  },
  {
    title: 'Navigation List',
    segment: 'navigation-list',
    description:
      'Navigation List component for displaying a vertical button list',
    snippet: {
      title: 'navigation-list.component.ts',
      content: '<app-navigation-list>[ content ]</app-navigation-list>',
    },
  },
  {
    title: 'Row',
    segment: 'row',
    description:
      'Row component for creating rows. Rows can be used in combination with cols.',
    snippet: {
      title: 'row.component.ts',
      content: '<app-row>[ content ]</app-row>',
    },
  },
  {
    title: 'Section',
    segment: 'section',
    description: 'Section component for creating sections',
    snippet: {
      title: 'section.component.ts',
      content: '<app-section>[ content ]</app-section>',
    },
  },
  {
    title: 'Snippet',
    segment: 'section',
    description: 'Snippet component for creating code snippets',
    snippet: {
      title: 'snippet.component.ts',
      content: '<app-snippet>[ content ]</app-snippet>',
    },
  },
  {
    title: 'User Profile',
    segment: 'user-profile',
    description: 'User Profile component for creating a user (creator) profile',
    snippet: {
      title: 'user-profile.component.ts',
      content: '<app-user-profile></app-user-profile>',
    },
  },
];

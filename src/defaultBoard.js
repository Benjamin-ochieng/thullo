// import { Cuid } from './utils';
import { Cuid } from './utils';

export default {
  name: 'Devchallanges Board',
  lists: [
    {
      name: '🤔 Backlog',
      tasks: [
        {
          id: Cuid(),
          cover: '',
          name: '✋🏿 Move anything that is actually started here',
          description:
            " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          labels: ['Concept'],
          members: [],
        },
        {
          id: Cuid(),
          cover:
            'https://images.unsplash.com/photo-1569098644584-210bcd375b59?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRvJTIwZG8lMjBsaXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          name: 'Github jobs challange',
          description: '',
          labels: ['Technical', 'Design'],
          members: [],
        },
      ],
    },
    {
      name: '🚧 In progress',
      tasks: [
        {
          id: Cuid(),
          cover:
            'https://images.unsplash.com/photo-1621570361070-896021ba01cc?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          name: '&#x1F590; Move anything "ready" here',
          description: '',
          labels: ['Technical', 'Design'],
          members: [],
        },
        {
          id: Cuid(),
          cover:
            'https://images.unsplash.com/photo-1623852755382-a2c201f73c18?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          name: 'Unsplash challanges Backend',
          description: '',
          labels: ['Frontend', 'Concept'],
          members: [],
        },
        {
          id: Cuid(),
          cover:
            'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          name: 'Read Atomic Habits in the next 30 days',
          description: '',
          labels: ['Technical'],
          members: [],
        },
        {
          id: Cuid(),
          cover:
            'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          name: 'Read Atomic Habits in the next 30 days',
          description: '',
          labels: ['Technical'],
          members: [],
        },
      ],
    },
    {
      name: '⚙ In review',
      tasks: [
        {
          id: Cuid(),
          cover:
            'https://images.unsplash.com/photo-1552581234-26160f608093?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmV2aWV3fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          name: 'Move anything submitted here',
          description: '',
          labels: ['Technical'],
          members: [],
        },
        {
          id: Cuid(),
          cover:
            'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmV2aWV3fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Add final touches to Windbnb solution',
          labels: ['Full-stack', 'Design'],
          members: [],
        },
      ],
    },
    {
      name: '🙌🏾 Completed',
      tasks: [
        {
          id: Cuid(),
          cover:
            'https://images.unsplash.com/photo-1547357247-65c96cee979f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          name: 'Move anything done here',
          description: '',
          labels: ['Technical'],
          members: [],
        },
      ],
    },
  ],
};

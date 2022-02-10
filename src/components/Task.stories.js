import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import Task from './Task';

// 스토리북에 컴포넌트에 대해 알리기 위해 export 를 아래처럼 해준다. 
// component - 컴포넌트 자체,   title - 스토리북앱의 사이드바에서 구성요소를 참조하는 방법
export default {
  component: Task,
  title: 'Task',
};

const Template = (props) => <Task {...props} />;

export const Default = Template.bind({});

Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};

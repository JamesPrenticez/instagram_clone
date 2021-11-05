import { atom } from 'recoil';

export const addTaskState = atom({
    key: 'addTaskState',
    default: "",
  });

export const tasksState = atom({
    key: 'tasksState',
    default: [],
  });
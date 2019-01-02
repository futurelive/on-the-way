import { Map } from 'immutable';
import * as types from '../constants/types/register';

const defaultStore = Map({
  recentEdit: [
    {
      title: 'React函数式编程',
      knowledgeName: '前端积累',
      knowledgeId: 1,
      articleId: 1,
      userName: 'Eric',
      updateTime: '2019-01-01',
    },
    {
      title: 'React函数式编程',
      knowledgeName: '前端积累',
      knowledgeId: 2,
      articleId: 2,
      userName: 'Eric',
      updateTime: '2019-01-01',
    },
    {
      title: 'React函数式编程',
      knowledgeName: '前端积累',
      knowledgeId: 3,
      articleId: 3,
      userName: 'Eric',
      updateTime: '2019-01-01',
    },
    {
      title: 'React函数式编程',
      knowledgeName: '前端积累',
      knowledgeId: 4,
      articleId: 4,
      userName: 'Eric',
      updateTime: '2019-01-01',
    },
    {
      title: 'React函数式编程',
      knowledgeName: '前端积累',
      knowledgeId: 5,
      articleId: 5,
      userName: 'Eric',
      updateTime: '2019-01-01',
    },
  ],
  suggest: [
    {
      title: '什么是语雀',
      cover: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      userName: 'eric',
      knowledgeId: 1,
      articleId: 1,
    },
    {
      title: '语雀的天空',
      cover: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      userName: 'eric',
      knowledgeId: 23,
      articleId: 232,
    },
    {
      title: '服务协议',
      cover: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      userName: 'eric',
      knowledgeId: 123,
      articleId: 2232,
    },
  ],
  recentEvent: [
    {
      user: '小布丁',
      userIcon: 'https://cdn.nlark.com/yuque/0/2019/jpeg/84141/1546403284683-c38e5b6a-81c3-4f39-8f75-153bcab7e640.jpeg',
      userId: 111,
      updateTime: '2019-01-01',
      title: 'React函数式编程',
      knowledgeName: '前端积累',
      knowledgeId: 1,
      articleId: 1,
      type: 'add',
      // add or update
    },
    {
      user: '小布丁',
      userIcon: 'https://cdn.nlark.com/yuque/0/2019/jpeg/84141/1546403284683-c38e5b6a-81c3-4f39-8f75-153bcab7e640.jpeg',
      userId: 222,
      updateTime: '2019-01-01',
      title: 'React函数式编程',
      knowledgeName: '前端积累',
      knowledgeId: 1,
      articleId: 2,
      type: 'add',
      // add or update
    },
    {
      user: '小布丁',
      userIcon: 'https://cdn.nlark.com/yuque/0/2019/jpeg/84141/1546403284683-c38e5b6a-81c3-4f39-8f75-153bcab7e640.jpeg',
      userId: 333,
      updateTime: '2019-01-01',
      title: 'React函数式编程',
      knowledgeName: '前端积累',
      knowledgeId: 1,
      articleId: 3,
      type: 'add',
      // add or update
    },
  ],
});

export default (state = defaultStore, action) => {
  switch (action.type) {
    case types.updateRegister:
      return state.set(action.key, action.payload);
    default:
      return state;
  }
};

import { Map } from 'immutable';
import * as types from '../constants/types/register';

const defaultStore = Map({
  recentEdit: [
    {
      title: 'React函数式编程',
      knowledgeName: '前端积累',
      knowledgeId: 1,
      userName: 'Eric',
      updateTime: '2019-01-01',
    },
    {
      title: 'React函数式编程',
      knowledgeName: '前端积累',
      knowledgeId: 2,
      userName: 'Eric',
      updateTime: '2019-01-01',
    },
    {
      title: 'React函数式编程',
      knowledgeName: '前端积累',
      knowledgeId: 3,
      userName: 'Eric',
      updateTime: '2019-01-01',
    },
    {
      title: 'React函数式编程',
      knowledgeName: '前端积累',
      knowledgeId: 4,
      userName: 'Eric',
      updateTime: '2019-01-01',
    },
    {
      title: 'React函数式编程',
      knowledgeName: '前端积累',
      knowledgeId: 5,
      userName: 'Eric',
      updateTime: '2019-01-01',
    },
  ],
  suggest: [
    {
      title: '什么是语雀',
      cover: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      userName: 'eric',
      knowledgeId: 1,
      articleId: 1,
    },
    {
      title: '语雀的天空',
      cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      userName: 'eric',
      knowledgeId: 23,
      articleId: 232,
    },
    {
      title: '服务协议',
      cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      userName: 'eric',
      knowledgeId: 123,
      articleId: 2232,
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

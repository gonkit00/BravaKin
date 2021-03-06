import * as Types from './config/types';

export const saveInstagramToken = (access_token) => ({
  type: Types.SAVE_INSTAGRAM_TOKEN,
  access_token
});

export const addHashtag = (hashtag) => ({
  type: Types.ADD_HASHTAG,
  hashtag
});

export const addPeople = (people) => ({
  type: Types.ADD_PEOPLE,
  people
});

export const addUser = (user) => ({
  type: Types.ADD_USER,
  user
});

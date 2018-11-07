export const outFactory = item => ({
  username: item.get('userName'),
  password: item.get('password'),
});
export const inFactory = item => ({
  username: item.userName,
  password: item.password,
});

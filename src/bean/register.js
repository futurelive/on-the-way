export const outFactory = item => ({
  username: item.get('userName'),
  password: item.get('password'),
  phone: item.get('phoneNumber'),
});
export const inFactory = item => ({
  username: item.userName,
  password: item.password,
  code: item.phoneNumber,
});

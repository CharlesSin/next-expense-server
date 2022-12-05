import users from "../mock/users";

export default function findUser(userName, userPass) {
  const vaildUser = users.filter((item) => {
    return item.username === userName && item.password === userPass;
  });
  return vaildUser.length > 0 ? true : false;
}

// Mock Role
const ROLE = {
  ADMIN: "admin",
  BASIC: "basic",
};

// Mock User
export default const users = [
  {
    id: Math.floor(Math.random() * 1000),
    name: "admin",
    email: "admin@gmail.com",
    password: "admin",
    role: ROLE.ADMIN,
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: "tester",
    email: "tester@gmail.com",
    password: "tester",
    role: ROLE.BASIC,
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: "fakeuser",
    email: "fakeuser@gmail.com",
    password: "fakeuser",
    role: ROLE.BASIC,
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: "charles",
    email: "charlessin@gmail.com",
    password: "0909784116",
    role: ROLE.BASIC,
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: "eugene",
    email: "eugeneyiew@gmail.com",
    password: "93112808",
    role: ROLE.BASIC,
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: "chris",
    email: "chrissin@gmail.com",
    password: "chrissin",
    role: ROLE.BASIC,
  },
];

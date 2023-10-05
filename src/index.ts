import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';
import { UserList } from './views/UserList';

// import { UserEdit } from './views/UserEdit';
// import { User } from './models/User';

// const rootEl = document.getElementById('root');

// const user = User.buildUser({ id: 1 });
// user.fetch();

// if (rootEl) {
//   const userEdit = new UserEdit(rootEl, user);
//   userEdit.render();

//   console.log(userEdit);
// } else {
//   throw new Error('Root element not found');
// }

const rootUrl = 'http://localhost:3000/users';
const users = new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
  User.buildUser(json)
);

users.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();

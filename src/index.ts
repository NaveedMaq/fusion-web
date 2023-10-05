import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const rootEl = document.getElementById('root');

const user = User.buildUser({ id: 1 });
user.fetch();

if (rootEl) {
  const userEdit = new UserEdit(rootEl, user);
  userEdit.render();

  console.log(userEdit);
} else {
  throw new Error('Root element not found');
}

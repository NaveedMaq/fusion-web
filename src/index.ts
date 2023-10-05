import { UserForm } from './views/UserForm';
import { User } from './models/User';

const rootEl = document.getElementById('root');

const user = User.buildUser({ name: 'NAME', age: 20 });

if (rootEl) {
  const userForm = new UserForm(rootEl, user);
  userForm.render();
} else {
  throw new Error('Root element not found');
}

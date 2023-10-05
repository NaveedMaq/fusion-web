import { UserForm } from './views/UserForm';
import { User } from './models/User';

const parentEl = document.getElementById('root');

const user = User.buildUser({ name: 'NAME', age: 20 });
if (parentEl) {
  const userForm = new UserForm(parentEl, user);
  userForm.render();
}

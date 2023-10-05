import { UserForm } from './views/UserForm';

const root = document.getElementById('root');
if (root) {
  const userForm = new UserForm(root);
  userForm.render();
}

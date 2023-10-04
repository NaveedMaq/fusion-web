import { User } from './models/User';

const user = new User({ name: 'Apple', age: 20 });

user.on('change', () => {});
user.on('change', () => {
  console.log('changed');
});

user.on('asdfa', () => {});

console.log(user);

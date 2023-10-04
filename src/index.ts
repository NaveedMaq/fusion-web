import { User } from './models/User';

const user = new User({ id: 1 });

user.set({ name: 'naveed', age: 20 });

user.save();

setTimeout(() => {
  console.log(user);
}, 4000);

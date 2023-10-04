import { User } from './models/User';

const user = new User({ id: 1 });

user.set({ name: 'naveed', age: 20 });

user.save();

user.events.on('change', () => console.log('change'));
user.events.trigger('change');
user.events.trigger('change');

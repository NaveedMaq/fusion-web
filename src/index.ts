import { User } from './models/User';

const userCollection = User.buildUserCollection();
userCollection.fetch();

userCollection.on('change', () => {
  console.log(userCollection);
});

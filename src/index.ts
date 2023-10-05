import { Collection } from './models/Collection';

const userCollection = new Collection('http://localhost:3000/users');

userCollection.fetch();

userCollection.on('change', () => {
  console.log(userCollection);
});

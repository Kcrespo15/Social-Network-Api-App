const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomThought, getRandomName, getReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // drop existing thoughts and users
  await Thought.deleteMany({});
  await User.deleteMany({});
  // create array of thoughts to add to database
  const thoughts = [];
  for (let i=0; i<3; i++) {
    const reactions = getReactions(2);
    const thoughtText = getRandomThought();
    const username = getRandomName();

    thoughts.push({
      thoughtText,
      username,
      reactions
    })
  }

  // seed database with thought data
  await Thought.collection.insertMany(thoughts);
  // seed database with user data
  await User.collection.insertOne({
    username: 'Kcrespo',
    email: 'kevincrespo15@gmail.com'
  })

  await User.collection.insertOne({
    username: 'aljones',
    email: 'aljones@comcast.net'
  })

  console.info('Seeding complete!');
  process.exit(0);
});
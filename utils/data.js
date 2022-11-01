const names = [
    'jjhonny',
    'lskathy',
    'kcrespo',
    'tgotti',
    'naruto',
    'jackattack',
    'jimmyjj'
]

const thoughts = [
    'I want to get a new turtle',
    'Cant wait to play soccer!',
    'I wonder if its rainning today',
    'Halloween costume ideas?',
    'Wheres the best place to practice coding?',
    'Lets take a photo on our trip!',
    'How should i style my resume?',
    'Check out this funny meme',
    'Vacation ideas ?',
    'What team are you watching this weekend?',
]

const possibleReactions = [
    'That is dope!',
    'No way!',
    'Direct message me!',
    'Tell me!',
    'Are you serious?!'
]

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
// get a random thought
const getRandomThought = () => getRandomArrItem(thoughts);
// get a randome name
const getRandomName = () => getRandomArrItem(names);

// Create the reactions that will be added to each thought
const getReactions = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(possibleReactions),
        username: getRandomName(),
      });
    }
    return results;
  };

  module.exports = { getRandomThought, getRandomName, getReactions };
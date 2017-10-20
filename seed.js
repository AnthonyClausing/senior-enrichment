const db = require('./db');

const Students = require('./db/models/students');

const Campuses = require('./db/models/campuses');



const campuses = [

  {
    name: 'What Technical School',
    imageUrl: "https://i.imgur.com/6qmnxKm.jpg"
  },

  {
    name: 'Hero Academy',
    imageUrl: "https://imgur.com/6mamikZ.jpg"
  },

  {
    name: 'New Beginnings Community College',
    imageUrl: "https://imgur.com/mVUz0hk.png"
  },

  {
    name: 'Sand Castles in the Sand',
    imageUrl: "https://i.imgur.com/VHKk8eB.jpg"
  },
  {
    name: "Brown University",
    imageUrl: "https://imgur.com/mVUz0hk.png"
  },
  {
    name:'It\'s Your Parents\'s Money University',
    imageUrl: "https://i.imgur.com/sACLAkP.jpg"
  }

];

const id = () => Math.round(Math.random() * (campuses.length - 1)) + 1



const students = [{

  name: 'Jimmy',

  email: 'Jimbo@gmail.com',
  
  campusId: id()
}, {

  name: 'Bane',

  email: 'BigGuy@4u.com',

  campusId: null

}, {

  name: 'Stef',

  email: 'ItspronouncedSteve@gmail.com',

  campusId: id()

}, {

  name: 'Batman',

  email: 'BruceWayne@gmail.com',

  campusId: id()

}, {

  name: 'Elliotttt',

  email: 'NotET@gmail.com',

  campusId: id()

}, {

  name: 'Fira',

  email: 'Wata@gmail.com',

  campusId: null

}, {

  name: 'Henry',

  email: 'henry@gmail.com',

  campusId: null

}, {

  name: 'Mercy',

  email: 'HeroesNeverDie@gmail.com',

  campusId: id()

}, {

  name: 'Milton',

  email: 'Bradley@gmail.com',
  
  campusId: id()

}, {

  name: 'Murphy',

  email: 'murphy@gmail.com',

  campusId: null

}, {

  name: 'Ruffi',

  email: 'IhateMyParents@gmail.com',

  campusId: id()

}, {

  name: 'Hiro',

  email: 'IAMHIRO@gmail.com',

  campusId: id()

}, {

  name: 'Cheem',

  email: 'Cheemo@gmail.com',

  campusId: id()

}, {

  name: 'Reese',

  email: 'Pieces@gmail.com',

  campusId: id()

}, {

  name: 'Stacey',

  email: 'ImSorryImNotMyMom@gmail.com',

  campusId: id()

}, {

  name: 'JD',

  email: 'Dr.Acula@SacredHeart.com',

  campusId: id()

}, {

  name: 'Bilbo',

  email: 'Swaggins@gmail.com',

  campusId: id()

}, {

  name: 'Odin',

  email: 'Odin@gmail.com',

  campusId: id()

}];



const seed = () =>

Promise.all(campuses.map(campus =>
  
          Campuses.create(campus))
  )

    .then(() =>
    Promise.all(students.map(student =>
      
          Students.create(student))

      ));



const main = () => {

  console.log('Syncing db...');

  db.sync({ force: true })

    .then(() => {

      console.log('Seeding database...');

      return seed();

    })

    .catch(err => {

      console.log('Error while seeding');

      console.log(err.stack);

    })

    .then(() => {

      db.close();

      return null;

    });

};



main();
const mongoose = require(`mongoose`);
const db = require(`../models`);

// This file empties the User collection and inserts the users below
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/anthomdb`, {
    useNewUrlParser: true
});

const userSeed = [
    {
        username: `Andrea`,
        password: `mothra`,
        email: `rippedmuscles@aol.com`
    },
    {
        username: `Maximo`,
        password: `King Ghidorah`,
        email: `lazerbeemz@aol.com`
    },
    {
        username: `Randy`,
        password: `Megaguirus`,
        email: `karatekid@aol.com`
    },
    {
        username: `Marie`,
        password: `Gigan`,
        email: `psyduck@aol.com`
    }
];

db.User.remove({})
.then(() => db.User.collection.insertMany(userSeed))
.then(data => {
    console.log(`${data.result.n } records inserted!`);
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
})
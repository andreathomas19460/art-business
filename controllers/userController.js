const db = require(`../models`);

// Defining methods for the booksController
module.exports = {
    findAll: (req, res) => {
        db.User.find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
const User = require("./User");
const Article = require('./Article');
const Troll = require('./Troll')


User.hasMany(Article,{
    foreignKey: 'user_id',
    onDelete: "CASCADE"
});

Article.belongsTo(User, {
    foreignKey: 'user_id';
});

Troll.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = { User, Project };


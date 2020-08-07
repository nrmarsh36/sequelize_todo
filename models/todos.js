module.exports = function(sequelize, DataTypes) {
    const Todo = sequelize.define('Todo', {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [2, 10]}
        },
        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    });
    return Todo;
};
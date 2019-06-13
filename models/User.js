module.exports = function User(SQL, TYPES) {
  const User = SQL.define('User', {
    id: {
      type: TYPES.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: TYPES.STRING,
    dob: TYPES.DATE
  })
  User.associate = models => models.User.hasMany(models.Job)
  return User
}

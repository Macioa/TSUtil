module.exports = function(SQL, TYPES) {
  const Company = SQL.define('Company', {
    id: {
      type: TYPES.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: { type: TYPES.STRING, allowNull: false },
    founded: TYPES.DATE
  })
  Company.associate = models => models.Company.hasMany(models.Job)
  return Company
}

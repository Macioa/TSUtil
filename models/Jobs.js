module.exports = function Job(SQL, TYPES) {
  const Job = SQL.define('Job', {
    id: {
      type: TYPES.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: TYPES.STRING
    },
    avgSalary: {
      type: TYPES.DOUBLE,
      default: 30000
    }
  })
  Job.associate = models => models.Job.hasMany(models.Company)
  return Job
}

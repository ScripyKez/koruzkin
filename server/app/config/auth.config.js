module.exports = {
  secret: process.env.DB_NAME,
  jwtExpiration: 3600,
  jwtRefreshExpiration: 86400,
}

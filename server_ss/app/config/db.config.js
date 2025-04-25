const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = {
  DB_HOST: "202.181.148.53",
  DB_USER: "root",
  DB_PASSWORD: "123456",
  DB_NAME: "bezkoder_db",
  DB_PORT: "27017",

  NODE_DOCKER_PORT: "8080",
}

module.exports = {
  url: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
}

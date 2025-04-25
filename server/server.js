const express = require("express")
const cors = require("cors")
const cookieSession = require("cookie-session")

const dbConfig = require("./app/config/db.config")

const app = express()

// parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.use(
  cookieSession({
    name: "bezkoder-session",
    keys: ["COOKIE_SECRET"], // should use as secret environment variable
    httpOnly: true,
  })
)

app.use(
  cors({
    origin: "*",
  })
)

const db = require("./app/models")
const Role = db.role

const uri = `mongodb://${dbConfig.USERNAME}:${dbConfig.PASSWORD}@${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}?authSource=admin`

db.mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.")
    initial()
  })
  .catch(err => {
    console.error("Connection error", err)
    console.error(uri)
    process.exit()
  })

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." })
})

// routes
require("./app/routes/auth.routes")(app)
require("./app/routes/user.routes")(app)
require("./app/routes/task.routes")(app)

// set port, listen for requests
const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save(err => {
        if (err) {
          console.log("error", err)
        }

        console.log("added 'user' to roles collection")
      })

      new Role({
        name: "moderator",
      }).save(err => {
        if (err) {
          console.log("error", err)
        }

        console.log("added 'moderator' to roles collection")
      })

      new Role({
        name: "admin",
      }).save(err => {
        if (err) {
          console.log("error", err)
        }

        console.log("added 'admin' to roles collection")
      })
    }
  })
}

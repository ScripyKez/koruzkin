const controller = require("../controllers/task.controller")

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept")
    next()
  })

  app.post("/api/task", controller.createTask)

  // app.post("/api/task", controller.signin)

  // app.post("/api/task", controller.signout)

  // app.post("/api/task", controller.refreshToken)
}

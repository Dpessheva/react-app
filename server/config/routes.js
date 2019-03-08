const authRoutes = require('../routes/auth')
const furnitureRoutes = require('../routes/furniture')
const statsRoutes = require('../routes/stats')
const ordersRoutes = require('../routes/order')

module.exports = (app) => {
  app.use('/auth', authRoutes)
  app.use('/furniture', furnitureRoutes)
  app.use('/stats', statsRoutes)
  app.use('/orders', ordersRoutes)
}

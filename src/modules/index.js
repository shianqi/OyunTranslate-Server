import fs from 'fs'
import path from 'path'
import Router from 'koa-router'

function initRouter (app) {
  fs.readdirSync(__dirname).forEach((file) => {
    const modPath = path.join(__dirname, file)
    if (fs.statSync(modPath).isDirectory()) {
      const router = require(`${modPath}/router`)
      const routes = router.default
      const baseUrl = `${router.baseUrl}`

      const instance = new Router({ prefix: baseUrl })

      routes.forEach((config) => {
        const {
          method = '',
          route = '',
          handlers = []
        } = config

        const lastHandler = handlers.pop()
        instance[method.toLowerCase()](route, async (ctx) => {
          try {
            await lastHandler(ctx)
          } catch (err) {
            throw err
          }
        })
        app.use(instance.routes())
        app.use(instance.allowedMethods())
      })
    }
  })
}

export default initRouter

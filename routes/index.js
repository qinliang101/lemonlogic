const router = require('koa-router')()
const { query } = require('../config/mysql')

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})

router.get('/getUserInfo', async (ctx, next) => {
    console.warn(ctx.query.uid)
    const uid = ctx.query.uid
    const user = await query(`select * from account where uid = ${uid};`)
    ctx.body = user[0]
})

module.exports = router

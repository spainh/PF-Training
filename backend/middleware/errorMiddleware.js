/*
 *  Middleware is a function that has
 *  access to the request  response cycle...
 * EX)
 *    appendFile.use((req, res, next) => {
 *     console.log('HELLO')
 *     console.log(req.oringinalUrl)
 *     next()
 *    })
 */

// MIDDLEWARE
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

const errorHandler = (err, req, res, next) => {
  // if error is 200 set it to 500 else it is what it is
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    // if in not in production then no stack else get stack from error obj
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  })
}

export { notFound, errorHandler}

const clri = require('./../index.js')

const runStuff = () =>
  clri.run(`echo 'nice'`)
    .then(() => clri.run(`curl example.com`))
    .then(() => clri.run(`echo 'done with example curl'`))
    .then(() => clri.run(`curl google.com`))
    .then(() => clri.run(`echo 'done with google curl'`))

const wow = () => console.log('ALL DONE')

runStuff()
  .then(() => wow())

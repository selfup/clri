# Command Line Runner Interface (clri)

Provides an easy way to run command line instructions with JavaScript using Node.

## Examples:

### Promise Based Synchronous Calls

```javascript
const clri = require('clri')

const runStuff = () =>
  clri.run(`echo 'first!'`)
    .then(() => clri.run(`curl example.com`))
    .then(() => clri.run(`echo 'done with example curl'`))
    .then(() => clri.run(`curl google.com`))
    .then(() => clri.run(`echo 'done with google curl'`))

const wow = () => console.log('ALL DONE')

runStuff()
  .then(() => wow())
```

Arrow functions implicitly return when not using curly braces.

If you use use regular functions or curly braces with arrow functions, remember to `return` so that the `.then` calls can chain correctly

### Async

```javascript
const clri = require('clri')

clri.exec(`git status`)
```

### More than one script (in a single call)

```javascript
const clri = require('clri')

let scripts = [
  `git status`,
  `git add .`,
  `git commit -m 'clri'`
]

clri.exec(scripts)

// *****************************************************************************
// This will turn the array of commands into a "&&" separated string
// It will look like: "git status && git add . && git commit -m 'clri'"
// *****************************************************************************
```

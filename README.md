# Command Line Runner Interface (clri)

Provide an easy way to run command line instructions with NodeJS.

## Examples:

### One Script

```javascript
const clri = require('clri')

clri.exec(`git status`)
```

**One script with && clauses**

```javascript
const clri = require('clri')

clri.exec(`git status && git add . && git commit -m "clri"`)
```

### More than one script

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

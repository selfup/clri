# Command Line Runner Interface (clri)

Provide an easy way to run command line instructions with NodeJS.

### Example

**One script**

```javascript
const clri = require('clri')

clri.exec(`git status`)
```

**One script with && clauses**

```javascript
const clri = require('clri')

clri.exec(`git status && git add . && git commit -m "clri"`)
```

**Two scripts**

```javascript
const clri = require('clri')

clri.exec(
  `git status && git add . && git commit -m "clri"`,
  `echo '# New README' >> README.md && git status`
)
```

*The exec function can take as many arguments as one would need to make*

### A more verbose example

```javascript
const clri = require('clri')

clri.exec(
  `git status`,
  `echo "# New README" >> README.md`,
  `git status`
)
```

### Warnings

This library uses node, and node runs asynchronously.

Currently I do not wait for each script to finish before running the next one.

The best method would be to use "&&" in one continuous script

**Small example of how to do this in organized fashion**

```javascript
const clri = require('clri')

// This will turn the array of commands into a "&&" separated string
let scripts = [
  `git status`,
  `git add .`,
  `git commit -m 'clri'`
].join(" && ")
// It will look like: "git status && git add . && git commit -m 'clri'"

clri.exec(scripts)
```

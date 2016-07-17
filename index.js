const e = require('child_process').exec

class CommandLineRunnerInterface {
  get end() {
    return `\nExecuted script(s)`
  }

  runner(command) {
    e(command, (error, stdout, stderr) => {
        if (stdout)         console.log(`${stdout} ${this.end}`)
        if (stderr)         console.log(`${stderr} ${this.end}`)
        if (error !== null) console.log(`exec error: ${error} ${this.end}`)
    })
  }

  exec(scripts) {
    if (Array.isArray(scripts)) return this.runner(scripts.join(" && "))
                                       this.runner(scripts)
  }
}

const clri = new CommandLineRunnerInterface

let scripts = [
  `git status`,
  `git add .`,
  `git commit -m 'clri'`
]

clri.exec(scripts)

// module.exports = new CommandLineRunnerInterface


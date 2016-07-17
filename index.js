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

  exec() {
    const scripts = Array.from(arguments)
    for (let i = 0; i < scripts.length; i++) {
      this.runner(scripts[i])
    }
  }
}

module.exports = new CommandLineRunnerInterface

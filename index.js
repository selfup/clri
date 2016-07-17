const e = require('child_process').exec

class CommandLineRunnerInterface {
  get end() {
    return `\nExecuted script(s)`
  }

  runner(command) {
    return e(command, (error, stdout, stderr) => {
        if (stdout)         this.output = `${stdout} ${this.end}`
        if (stderr)         this.output = `${stderr} ${this.end}`
        if (error !== null) this.output = `exec error: ${error} ${this.end}`
        console.log(this.output)
    })
  }

  exec(scripts) {
    if (Array.isArray(scripts)) {
      return Promise.resolve(this.runner(scripts.join(" && ")))
    }
    return Promise.resolve(this.runner(scripts))
  }
}

module.exports = new CommandLineRunnerInterface

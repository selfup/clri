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
    console.log("BEFORE", scripts);
    console.log(scripts.length);
    if (scripts.length > 1) scripts.join(" && ")
    console.log("AFTER", scripts);
    this.runner(scripts.join(" && "))
  }
}

module.exports = new CommandLineRunnerInterface

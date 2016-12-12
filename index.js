const childExec = require('child_process').exec

class Clri {
  constructor() {
    this.runAsync = this.runAsync.bind(this)
  }

  runAsync(command) {
    return childExec(command, (error, stdout, stderr) => {
      if (stdout) console.log(stdout)
      if (stderr) console.log(stderr)
      if (error !== null) console.log(error)
    })
  }

  exec(scripts) {
    if (typeof scripts === 'string') this.runAsync(scripts)
    if (Array.isArray(scripts)) this.runAsync(scripts.join(' && '))
  }

  run(command) {
    const child = this.runAsync(command)

    return new Promise((resolve, reject) => {
      child.addListener('error', reject);
      child.addListener('exit', resolve);
    })
  }
}

module.exports = new Clri

// learning about the os module.

const os = require('os')
const systemReq = os.uptime()

const osProps= {
    name :os.type(),
    release : os.release(),
    totalMen : os.totalmem()

}

console.log(osProps)

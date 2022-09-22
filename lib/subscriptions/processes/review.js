var Emmiter = require("events").EventEmitter;
var util = require("util");


var ReviewProcess = function(args) {

    var callback =function () {}
    this.ensureAppIsValid = function (app) {
        if(app.isValid()) {
            console.log('app is valid')
            this.emit("validated", app)
        } else {
            this.emit("invalid", app.validationMessage())
        }
    }

    this.findNextMission = (app) => {
        app.mission = {
            commander:null,
            pilot: null,
            MAVPilot: null,
            passengers: []
        }
        this.emit("mission-selected", app)
    }

    this.roleIsAvailable = (app) => {
        this.emit("role-available", app)
    }

    this.ensureRoleCompatible = (app) => {
        this.emit("role-compatible", app)
    }

    this.acceptApplication = function (app)  {
        callback(null, {
            success: true,
            message: "Welcome to mars program"
        })
    }

    this.denyApplication = (message) => {
        callback(null, {
            success: false,
            message: message
        })
    }

    this.processApplication = function (app, next)  {
        this.emit("application-received", app);
        callback = next;
    }


    this.on("application-received", this.ensureAppIsValid);
    this.on("validated", this.findNextMission);
    this.on("mission-selected", this.roleIsAvailable);
    this.on("role-available", this.ensureRoleCompatible);
    this.on("role-compatible", this.acceptApplication);

    this.on("invalid", this.denyApplication)



}

util.inherits(ReviewProcess, Emmiter)
module.exports =ReviewProcess

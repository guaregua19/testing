var _ = require("underscore")._;

var MembershipApplication = function (args) {

    _.extend(this,args)


    this.emailIsValid = () => {
        return this.email && this.email.length > 3 && this.email.indexOf("@") > -1
    }

    this.heightIsValid = () => {
        return this.height && this.height > 60 && this.height < 75;
    }

    this.ageIsValid = () => {
        return this.age && this.age < 100 && this.age > 15;
    }

    this.weightIsValid = () => {
        return this.weight && this.weight > 100 && this.weight < 300;
    }

    this.nameIsValid = () => {
        return this.first && this.last
    }


    this.validationMessage = () => {
        if(this.isValid()) {
            return "Application is valid!"
        } else if(!this.emailIsValid()) {
            return "Email is invalid"
        } else if(!this.ageIsValid()) {
            return "Age is invalid"
        } else if(!this.heightIsValid()) {
            return "Height is invalid"
        } else if(!this.weightIsValid()) {
            return "Wight is invalid"
        } else if(!this.nameIsValid()) {
            return "Name is invalid"
        }
    }

    this.isValid = () => {
        return this.emailIsValid() && this.heightIsValid()
                && this.ageIsValid() && this.weightIsValid()
    }
 };

 module.exports = MembershipApplication;
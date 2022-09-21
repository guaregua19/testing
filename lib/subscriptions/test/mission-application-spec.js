var assert = require("assert");
var MembershipApplication = require("../mission-application")
describe("Membership application requirement ", () => {

    var validApplication ;

    before(() => {
        validApplication = new MembershipApplication({
            first: "Test",
            last: "User",
            email: "guaregua@gmail.com",
            age: 30,
            height: 66,
            weight: 180
        })
    })

    describe("Validations successful if", () => {
        it("All validators successful", () => {
            assert(validApplication.isValid(), "Application is not valid")
        })
        it("Email is 4 or more chars and countains an @ symbol", () => {
            assert(validApplication.emailIsValid(), "Email invalid")
        })
        it("Height si between 60 and 75 inches", () => {
            assert(validApplication.heightIsValid(), "Height invalid")
        })
        it("Age is between 15 and 100", () => {
            assert(validApplication.ageIsValid(), "Age invalid")
        })
        it("Weight is between 100 and 300", () => {
            assert(validApplication.weightIsValid(), "Weight invalid")
        })
        it("First and lastname are provided", () => {
            assert(validApplication.nameIsValid(), "Name invalid")
        })
    })
})
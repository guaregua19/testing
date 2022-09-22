var assert = require("assert")
var ReviewProcess = require("../processes/review")
var MembershipApplication = require("../models/mission-application")

describe("Processing the Review", function () {
    describe("Receiving a valid application", function () {
        var decision;
        before(function (done) {
             validApplication = new MembershipApplication({
                first: "Test",
                last: null,
                email: "guaregua@gmail.com",
                age: 30,
                height: 66,
                weight: 180
            });
            var review = new ReviewProcess();
            review.processApplication(validApplication,  function (err, result) {
                decision = result;
                done();
            });
        });
        it('returns success', () => {
            assert(decision.success,decision.message)
        });
    });

})
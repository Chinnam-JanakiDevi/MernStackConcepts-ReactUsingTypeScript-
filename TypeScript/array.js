var myArr = [1, 2, 3, 4, 5];
myArr[2] = 10;
console.log(myArr);
var person = {
    names: "xyz",
    roll: 34,
    address: {
        city: "nrt",
        state: "ap"
    }
};
var AppStage;
(function (AppStage) {
    AppStage[AppStage["INIT"] = 0] = "INIT";
    AppStage[AppStage["PAYMENT_DONE"] = 1] = "PAYMENT_DONE";
    AppStage[AppStage["TEST_DONE"] = 2] = "TEST_DONE";
    AppStage[AppStage["FINISHED"] = 3] = "FINISHED";
})(AppStage || (AppStage = {}));
var currentStage = AppStage.INIT;
console.log(currentStage); //0 -> 0 is index
var MyPerson = /** @class */ (function () {
    function MyPerson() {
        this.name = "janaki";
    }
    return MyPerson;
}());
var myperson = new MyPerson();
console.log(myperson.name);

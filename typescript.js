"use strict";
exports.__esModule = true;
// typescript.ts:4:5 - error TS2451: Cannot @redeclare block-scoped variable
var message = 'Message';
// variables declare
var name = 'kawsar ibn siraj';
var integer = 1200000;
var isBool = false;
var fullName = "hi, this is " + name;
var n = null;
var u = undefined;
var numberOfArray = [1, 2, 3, 4, 5];
var numberOfArray2 = [10, 20, 30, 40, 50];
// you should must use one @number and then one @object by recycle other you will get errors
var arrayNumberObj = [1, { key: 'value' }];
// you should must use one @string and then one @object by recycle other you will get errors
var arrayStringObj = ['string', {}];
// create custom types @enum
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var Color2;
(function (Color2) {
    Color2[Color2["yellow"] = 10] = "yellow";
    Color2[Color2["pink"] = 11] = "pink";
    Color2[Color2["black"] = 12] = "black";
})(Color2 || (Color2 = {}));
var color = Color.red;
var color2 = Color2.black;
// randomValue by any keyword
var randomValue = 'random';
randomValue = 2000;
// unknown
var unknown = 'unknown';
unknown.toUpperCase();
function hasNumber(number) {
    if (typeof number) {
        return number;
    }
}
if (hasNumber(50)) {
    console.log('its perfect function');
}
else {
    console.log('OOPS......');
}

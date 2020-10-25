"use strict";
exports.__esModule = true;
var HexMap = /** @class */ (function () {
    function HexMap(width, height) {
        this.map = [];
        this.width = width;
        this.height = height;
        this.map = [];
        this.initMap();
    }
    HexMap.prototype.get = function (x, y) {
        return this.map[(x * this.height) + y];
    };
    HexMap.prototype.initMap = function () {
        for (var h = 0; h < this.height; h++) {
            this.map.push("");
            for (var w = 0; w < this.width; w++) {
                this.map.push("");
            }
        }
    };
    return HexMap;
}());
exports["default"] = HexMap;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tile_1 = __importDefault(require("./tile"));
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
            this.map.push(new tile_1.default());
            for (var w = 0; w < this.width; w++) {
                this.map.push(new tile_1.default());
            }
        }
    };
    return HexMap;
}());
exports.default = HexMap;

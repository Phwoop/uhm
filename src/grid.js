"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var honeycomb_grid_1 = __importDefault(require("honeycomb-grid"));
var Grid = /** @class */ (function () {
    function Grid(map, res) {
        this.width = map.width;
        this.height = map.height;
        console.log(this, map);
        this.map = map;
        this.hex = honeycomb_grid_1.default.extendHex({
            size: res
        });
        this.grid = honeycomb_grid_1.default.defineGrid(this.hex);
        this.rect = this.grid.rectangle({ width: this.width, height: this.height });
    }
    Grid.prototype.drawAll = function (cb) {
        var all = this.rect.map(function (hex) {
            return hex.toPoint();
        });
        cb(this.hex().corners(), all);
    };
    Grid.prototype.draw = function (cb) {
        var _this = this;
        var counter = 0;
        this.rect.forEach(function (hex) {
            var point = hex.toPoint();
            var corners = hex.corners().map(function (corner) { return corner.add(point); });
            var row = Math.floor(Math.abs((counter) / _this.width));
            //let col = row[counter % (this.width -1)]
            cb(corners, _this.map.get(row, counter % _this.width));
            counter++;
        });
    };
    return Grid;
}());
exports.default = Grid;

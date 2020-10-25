"use strict";
exports.__esModule = true;
var honeycomb_grid_1 = require("honeycomb-grid");
var HexGrid = /** @class */ (function () {
    function HexGrid(map, res) {
        this.width = map.width;
        this.height = map.height;
        console.log(this, map);
        this.map = map;
        this.hex = honeycomb_grid_1.extendHex({
            size: res
        });
        this.grid = honeycomb_grid_1.defineGrid(this.hex);
        this.rect = this.grid.rectangle({ width: this.width, height: this.height });
    }
    HexGrid.prototype.drawAll = function (cb) {
        var all = this.rect.map(function (hex) {
            return hex.toPoint();
        });
        cb(this.hex().corners(), all);
    };
    HexGrid.prototype.draw = function (cb) {
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
    return HexGrid;
}());
exports["default"] = HexGrid;

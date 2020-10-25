import Honeycomb, {GridFactory, Hex, HexFactory} from 'honeycomb-grid'
import HexMap from './map';

export default class Grid {
  private width : number;
  private height: number;
  private map: HexMap;

  private hex : HexFactory<{size: number}>;
  private grid: GridFactory<Hex<{size: number}>>;
  private rect: Honeycomb.Grid;
  
  constructor(map : HexMap, res: number){
    this.width = map.width;
    this.height = map.height;
    console.log(this, map)
    this.map = map;


    this.hex = Honeycomb.extendHex({
      size: res
    })
    this.grid = Honeycomb.defineGrid(this.hex);
    this.rect = this.grid.rectangle({width: this.width, height: this.height})
  }

  drawAll(cb: any){
    let all = this.rect.map(hex => {
      return hex.toPoint()
    })
    cb(this.hex().corners(), all)
  }

  draw(cb: any){
    let counter = 0;
    this.rect.forEach(hex => {
      const point = hex.toPoint()
      const corners = hex.corners().map(corner => corner.add(point))


      let row = Math.floor(Math.abs((counter ) / this.width))

      //let col = row[counter % (this.width -1)]
      cb(corners, this.map.get(row, counter % this.width) ) 
      counter++;
    })
  }
}


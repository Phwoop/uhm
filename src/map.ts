import HexTile from "./tile";

export default class HexMap {
  public width: number;
  public height: number;

  private map : Array<HexTile> = [];

  constructor(width : number, height : number){
    this.width = width;
    this.height = height;

    this.map = []
    this.initMap()
  }

  get(x: number, y:number){
    return this.map[(x*this.height)+ y]
  }

  initMap(){
    for(var h = 0; h < this.height; h++){
      this.map.push(new HexTile())
      for(var w = 0; w < this.width; w++){
        this.map.push(new HexTile())
      }
    }
  }
}

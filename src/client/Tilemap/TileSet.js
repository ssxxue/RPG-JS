import { spritesheets } from '../Sprite/Spritesheets'

export default class TileSet {

    constructor(tileSet) {

        this.firstGid = 0;
        this.margin = 0;
        this.spacing = 0;
        this.tileHeight = 0;
        this.tileWidth = 0;
        this.image = {
            height: 0,
            source: '',
            width: 0,
        };
        this.tileOffset = {}

        Object.assign(this, tileSet)
        
        const spritesheet = spritesheets.get(this.name)

        const texture = PIXI.Texture.from(spritesheet.image);
        this.baseTexture = texture.baseTexture;
        this.textures = [];

        for (
            let y = this.margin;
            y < this.image.height;
            y += this.tileHeight + this.spacing
        ) {
            for (
                let x = this.margin;
                x < this.image.width;
                x += this.tileWidth + this.spacing
            ) {
                this.textures.push(
                    new PIXI.Texture(
                        this.baseTexture,
                        new PIXI.Rectangle(x, y, this.tileWidth, this.tileHeight)
                    )
                );
            }
        }
    }
}
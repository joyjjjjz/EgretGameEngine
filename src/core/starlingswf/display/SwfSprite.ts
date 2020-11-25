/**
 * Created by zmliu on 14-5-11.
 */
// export namespace starlingswf {

import { SwfMovieClip } from "./SwfMovieClip";

    /**Sprite*/
    export class SwfSprite extends egret.DisplayObjectContainer {
        public getTextField(name: string): egret.TextField {
            return <egret.TextField>this.getChildByName(name);
        }
        public getMovie(name: string): SwfMovieClip {
            return <SwfMovieClip>this.getChildByName(name);
        }
        public getSprite(name: string): SwfSprite {
            return <SwfSprite>this.getChildByName(name);
        }
        public getImage(name: string): egret.Bitmap {
            return <egret.Bitmap>this.getChildByName(name);
        }
    }
// }

import { App } from "../../core/App";
import { StarlingSwfMovieClip } from "../../core/starlingswf/game/StarlingSwfMovieClip";
/**
 * Created by yangsong on 15-3-27.
 * StarlingSwf测试
 */
export class StarlingSwfTest {
    public constructor() {
        //StarlingSwf使用
        App.StarlingSwfFactory.addSwf("bossMC", RES.getRes("bossMC_swf_json"), RES.getRes("bossMC_json"));
        var mc: StarlingSwfMovieClip = App.StarlingSwfFactory.makeMc("boss_whiteBear");
    }
}

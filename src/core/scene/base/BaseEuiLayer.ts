/**
 * Created by yangsong on 15-1-7.
 */
export class BaseEuiLayer extends eui.UILayer {
    public constructor() {
        super();
        this.percentWidth = 100;
        this.percentHeight = 100;
        this.touchEnabled = false;
    }
}

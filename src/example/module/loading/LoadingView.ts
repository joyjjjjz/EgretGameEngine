import { BaseEuiView } from "../../../core/mvc/view/BaseEuiView";
import { BaseController } from "../../../core/mvc/controller/BaseController";
/**
 * Created by egret on 15-1-7.
 */
export class LoadingView extends BaseEuiView {
    public constructor($controller: BaseController, $parent: eui.Group) {
        super($controller, $parent);
        this.skinName = "resource/skins/LoadingUISkin.exml";
    }
    public txtMsg: eui.Label;
    public setProgress(current: number, total: number): void {
        this.txtMsg.text = "资源加载中..." + current + "/" + total;
    }
}

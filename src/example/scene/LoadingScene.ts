import { App } from "../../core/App";
import { LayerManager } from "./LayerManager";
import { BaseScene } from "../../core/scene/base/BaseScene";
import { ViewConst } from "../consts/ViewConst";
/**
 * Created by egret on 15-1-7.
 */
export class LoadingScene extends BaseScene {
    /**
     * 构造函数
     */
    public constructor() {
        super();
    }
    /**
     * 进入Scene调用
     */
    public onEnter(): void {
        super.onEnter();
        //添加该Scene使用的层级
        this.addLayer(LayerManager.UI_Main);
        //初始打开Loading页面
        App.ViewManager.open(ViewConst.Loading);
    }
    /**
     * 退出Scene调用
     */
    public onExit(): void {
        super.onExit();
    }
}

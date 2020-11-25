import { BaseController } from "../../../core/mvc/controller/BaseController";
import { ShopView } from "./ShopView";
import { LayerManager } from "../../scene/LayerManager";
import { App } from "../../../core/App";
import { ViewConst } from "../../consts/ViewConst";
/**
 * Created by egret on 15-1-7.
 */
export class ShopController extends BaseController {
    private shopView: ShopView;
    public constructor() {
        super();
        this.shopView = new ShopView(this, LayerManager.UI_Popup);
        App.ViewManager.register(ViewConst.Shop, this.shopView);
    }
}

import { BaseController } from "../../../core/mvc/controller/BaseController";
import { FactoryView } from "./FactoryView";
import { LayerManager } from "../../scene/LayerManager";
import { App } from "../../../core/App";
import { ViewConst } from "../../consts/ViewConst";
/**
 * Created by egret on 15-1-7.
 */
export class FactoryController extends BaseController {
    private factoryView: FactoryView;
    public constructor() {
        super();
        this.factoryView = new FactoryView(this, LayerManager.UI_Popup);
        App.ViewManager.register(ViewConst.Factory, this.factoryView);
    }
}

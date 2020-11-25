import { BaseController } from "../../../core/mvc/controller/BaseController";
import { WarehouseView } from "./WarehouseView";
import { LayerManager } from "../../scene/LayerManager";
import { App } from "../../../core/App";
import { ViewConst } from "../../consts/ViewConst";
/**
 * Created by egret on 15-1-7.
 */
export class WarehouseController extends BaseController {
    private warehouseView: WarehouseView;
    public constructor() {
        super();
        this.warehouseView = new WarehouseView(this, LayerManager.UI_Popup);
        App.ViewManager.register(ViewConst.Warehouse, this.warehouseView);
    }
}

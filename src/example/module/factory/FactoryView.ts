import { BasePanelView } from "../base/BasePanelView";
import { BaseController } from "../../../core/mvc/controller/BaseController";
/**
 * Created by egret on 15-1-7.
 */
export class FactoryView extends BasePanelView {
    public constructor(controller: BaseController, parent: eui.Group) {
        super(controller, parent);
        this.icon = "icon_factory_tittle";
    }
}

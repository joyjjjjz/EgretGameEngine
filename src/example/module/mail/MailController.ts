import { BaseController } from "../../../core/mvc/controller/BaseController";
import { MailView } from "./MailView";
import { LayerManager } from "../../scene/LayerManager";
import { App } from "../../../core/App";
import { ViewConst } from "../../consts/ViewConst";
/**
 * Created by egret on 15-1-7.
 */
export class MailController extends BaseController {
    private mailView: MailView;
    public constructor() {
        super();
        this.mailView = new MailView(this, LayerManager.UI_Popup);
        App.ViewManager.register(ViewConst.Mail, this.mailView);
    }
}

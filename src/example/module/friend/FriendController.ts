import { BaseController } from "../../../core/mvc/controller/BaseController";
import { FriendView } from "./FriendView";
import { LayerManager } from "../../scene/LayerManager";
import { App } from "../../../core/App";
import { ViewConst } from "../../consts/ViewConst";
/**
 * Created by egret on 15-1-7.
 */
export class FriendController extends BaseController {
    private friendView: FriendView;
    public constructor() {
        super();
        this.friendView = new FriendView(this, LayerManager.UI_Popup);
        App.ViewManager.register(ViewConst.Friend, this.friendView);
    }
}

import { BaseController } from "../../../core/mvc/controller/BaseController";
import { HomeProxy } from "./HomeProxy";
import { HomeView } from "./HomeView";
import { LayerManager } from "../../scene/LayerManager";
import { App } from "../../../core/App";
import { ViewConst } from "../../consts/ViewConst";
/**
 * Created by yangsong on 15-1-6.
 */
export class HomeController extends BaseController {
    private proxy: HomeProxy;
    private homeView: HomeView;
    public constructor() {
        super();
        this.proxy = new HomeProxy(this);
        this.homeView = new HomeView(this, LayerManager.UI_Main);
        App.ViewManager.register(ViewConst.Home, this.homeView);
    }
}

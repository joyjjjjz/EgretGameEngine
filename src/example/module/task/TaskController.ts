import { BaseController } from "../../../core/mvc/controller/BaseController";
import { TaskView } from "./TaskView";
import { DailyView } from "./DailyView";
import { LayerManager } from "../../scene/LayerManager";
import { App } from "../../../core/App";
import { ViewConst } from "../../consts/ViewConst";
/**
 * Created by egret on 15-1-7.
 */
export class TaskController extends BaseController {
    private taskView: TaskView;
    private dailyView: DailyView;
    public constructor() {
        super();
        this.taskView = new TaskView(this, LayerManager.UI_Popup);
        App.ViewManager.register(ViewConst.Task, this.taskView);
        this.dailyView = new DailyView(this, LayerManager.UI_Popup);
        App.ViewManager.register(ViewConst.Daily, this.dailyView);
    }
}

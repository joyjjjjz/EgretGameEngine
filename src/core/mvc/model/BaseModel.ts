import { BaseController } from "../controller/BaseController";
/**
 * Created by yangsong on 15-11-20.
 * Model基类
 */
export class BaseModel {
    private _controller: BaseController;
    /**
     * 构造函数
     * @param $controller 所属模块
     */
    public constructor($controller: BaseController) {
        this._controller = $controller;
        this._controller.setModel(this);
    }
}

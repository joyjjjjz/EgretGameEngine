import { BaseProxy } from "../../../core/mvc/proxy/BaseProxy";
import { BaseController } from "../../../core/mvc/controller/BaseController";
/**
 * Created by egret on 15-1-6.
 */
export class HomeProxy extends BaseProxy {
    public constructor($controller: BaseController) {
        super($controller);
    }
}

import { BaseModel } from "../../../core/mvc/model/BaseModel";
import { BaseController } from "../../../core/mvc/controller/BaseController";
/**
 * Created by yangsong on 15-11-20.
 */
export class LoginModel extends BaseModel {
    public userInfo: any;
    /**
     * 构造函数
     * @param $controller 所属模块
     */
    public constructor($controller: BaseController) {
        super($controller);
    }
}

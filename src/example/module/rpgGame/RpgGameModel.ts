import { BaseModel } from "../../../core/mvc/model/BaseModel";
import { BaseController } from "../../../core/mvc/controller/BaseController";
/**
 * Created by yangsong on 2017/10/11.
 */
export class RpgGameModel extends BaseModel {
    public mapId: number;
    public playerData: any;
    public monsterNum: number;
    public constructor($controller: BaseController) {
        super($controller);
    }
}

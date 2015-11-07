/**
 * Created by Administrator on 2015/11/5.
 */

var Cardbk = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile(s_Nine5);
        //this.setTouchEnabled(true);
        //cc.Director.getInstance().getTouchDispatcher().addTargetedDelegate(this, 0, true);
        //cc.registerTargetedDelegate(cc.MENU_HANDLER_PRIORITY-1,true,this);

    }
});

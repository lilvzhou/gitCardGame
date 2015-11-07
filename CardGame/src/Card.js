/**
 * Created by Administrator on 2015/11/3.
 */
var Card = cc.Sprite.extend({
    ctor:function(){
        this._super();
        this.initWithFile(s_Nine1);
        //this.setTouchEnabled(true);
        //cc.Director.getInstance().getTouchDispatcher().addTargetedDelegate(this, 0, true);
        //cc.registerTargetedDelegate(cc.MENU_HANDLER_PRIORITY-1,true,this);

    }
/*
    onExit: function () {

        cc.unregisterTouchDelegate(this);
        this._super();
    },

    onTouchBegan: function (touch, event) {
        if (cc.rectContainsPoint(this.getBoundingBox(), touch.getLocation())) {
            this.setVisible(false);
            var bkCard = cc.Sp
            cc.log("Dont touch me!!!");
            return true;
        } else {
            return false;
        }
    }*/
});

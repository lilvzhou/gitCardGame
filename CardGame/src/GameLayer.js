/**
 * Created by Administrator on 2015/11/5.
 */
var GameLayer = cc.Layer.extend({
    GameCard: null,
    GameCardBk: null,
    ctor:function () {

        // 1. super init first
        this._super();

        //init data
       this.initLayerData();
    },
    initLayerData:function(){

        //add background
        var backGround = cc.Sprite.create(s_Bg);
        this.addChild(backGround,g_GameZOder.bg);
        var size = backGround.getContentSize();
        backGround.setAnchorPoint(cc.p(0,0));
        backGround.setPosition(cc.p(0,0));

        //add card
        this.GameCard = new Card();
        this.GameCard.setAnchorPoint(cc.p(0.5,0));
        this.GameCard.setPosition(cc.p(202,100));
        this.addChild(this.GameCard, g_GameZOder.ui);

        //add cardbk
        this.GameCardBk = new Cardbk();
        this.GameCardBk.setAnchorPoint(cc.p(0.5,0));
        this.GameCardBk.setPosition(cc.p(202,100));
        this.GameCardBk.setVisible(false);
        this.addChild(this.GameCardBk, g_GameZOder.ui);
        //set touch enable
        this.setTouchEnabled(true);
    },
    onTouchesEnded:function(touches, event){

        this.onClickFlag = false;
    },

    onTouchesBegan:function(touches,event){
        var touch = touches[0];
        var location = touch.getLocation();
        if(cc.rectContainsPoint(this.GameCard.getBoundingBox(),location)){
            if(this.GameCard.isVisible()){
                this.GameCard.setVisible(false);
                this.GameCardBk.setVisible(true);
            }
            else{
                this.GameCard.setVisible(true);
                this.GameCardBk.setVisible(false);
            }
            this.onClickFlag = true;
        }
    }
});

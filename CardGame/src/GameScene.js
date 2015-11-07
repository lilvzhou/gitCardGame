/**
 * Created by Administrator on 2015/11/3.
 */

var g_GameZOder = {bg:0, ui:1,front:100}; // game display z-order
var GameScene = cc.Scene.extend({
    gmLayer: null,

    onEnter:function(){
        this._super();

        //init data
        this.initData();

    },

    initData:function(){
        //add layer
        //this.GameLayer = cc.Layer.create();
        this.gmLayer = new GameLayer();
        this.addChild(this.gmLayer);

        //add background
       /* var backGround = cc.Sprite.create(s_Bg);
        this.GameLayer.addChild(backGround,g_GameZOder.bg);
        var size = backGround.getContentSize();
        backGround.setAnchorPoint(cc.p(0,0));
        backGround.setPosition(cc.p(0,0));

        //add card
        this.GameCard = new Card();
        this.GameCard.setAnchorPoint(cc.p(0.5,0));
        this.GameCard.setPosition(cc.p(202,0));
        this.GameLayer.addChild(this.GameCard, g_GameZOder.ui);*/
    }
});

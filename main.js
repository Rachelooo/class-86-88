var canvas= new fabric.Canvas("myCanvas");

block_width=30;
block_height=30;

player_x=10;
player_y=10;

var imgblocks="";
var imgplayer="";

function playerupdate(){
    fabric.Image.fromURL("player.png",function(IMG){
        imgplayer=IMG;

        imgplayer.scaleToWidth(150);
        imgplayer.scaleToHeight(150);
        imgplayer.set({
            top:player_y,
            left:player_x
        });
canvas.add(imgplayer);
    });

}
function blockupdate(Getimg){
    fabric.Image.fromURL(Getimg,function(IMG){
        imgblocks=IMG;

        imgblocks.scaleToWidth(block_width);
        imgblocks.scaleToHeight(block_height);
        imgblocks.set({
            top:player_y,
            left:player_x
        });
canvas.add(imgblocks);
    });

}

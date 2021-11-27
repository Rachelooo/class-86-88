var canvas= new fabric.Canvas("myCanvas");

block_width=30;
block_height=30;

player_x=10;
player_y=10;

var imgblocks="";
var imgplayer="";

function playerupdate(){
    fabric.Image.fromURL("player.png", function(Img){
        imgplayer=Img;

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
    fabric.Image.fromURL(Getimg,function(Img){
        imgblocks=Img;

        imgblocks.scaleToWidth(block_width);
        imgblocks.scaleToHeight(block_height);
        imgblocks.set({
            top:player_y,
            left:player_x
        });
canvas.add(imgblocks);
    });

}
window.addEventListener("keydown",Mykeydown);
function Mykeydown(e){
keypressed=e.keyCode;
console.log(keypressed);
if(e.shiftKey == true && keypressed=='80'){
    console.log("p and shift are pressed together");
    block_width=block_width+10;
    block_height=block_height+10;
    document.getElementById("currentwidth").innerHTML= block_width;
    document.getElementById("currentheight").innerHTML= block_height;
}
if(e.shiftKey && keypressed=='77'){
    console.log("m and shift are pressed together");
    block_width=block_width-10;
    block_height=block_height-10;
    document.getElementById("currentwidth").innerHTML= block_width;
    document.getElementById("currentheight").innerHTML= block_height;  
}

if(keypressed=='67'){
blockupdate("cloud.jpg");
console.log("c");
}

if(keypressed=='68'){
blockupdate("dark_green.png");
console.log("d");
 }

if(keypressed=='71'){
blockupdate("ground.png");
console.log("g");
}

if(keypressed=='76'){
blockupdate("light_green.png");
console.log("l");
}

if(keypressed=='82'){
blockupdate("roof.jpg");
console.log("r");
}

if(keypressed=='84'){
blockupdate("trunk.jpg");
console.log("t");
}

if(keypressed=='85'){
blockupdate("uniqu.png");
console.log("u");
}

if(keypressed=='87'){
blockupdate("wall.jpg");
 console.log("w");
}

if(keypressed=='89'){
blockupdate("yellow_wall.png");
 console.log("y");
}
if(keypressed=='38'){
    up();
     console.log("up");
    }
    if(keypressed=='37'){
        left();
         console.log("left");
        }
        if(keypressed=='39'){
            right();
             console.log("right");
            }
            if(keypressed=='40'){
                down();
                 console.log("down");
                }
    
}

function up(){
    if (player_y>=0){

        player_y= player_y-block_height;
        console.log("block image height is equal to" +block_height);
        console.log("When up arrow is pressed x = " + player_x +" ,Y= "+player_y);
        canvas.remove(imgplayer);
        playerupdate();
    }
}
function down(){
    if (player_y<=500){

        player_y= player_y+block_height;
        console.log("block image height is equal to" +block_height);
        console.log("When down arrow is pressed x = " + player_x +" ,Y= "+player_y);
        canvas.remove(imgplayer);
        playerupdate();
    }
}
function right(){
    if (player_x<=600){

        player_x= player_x+block_width;
        console.log("block image width is equal to" +block_width);
        console.log("When right arrow is pressed x = " + player_x +" ,Y= "+player_y);
        canvas.remove(imgplayer);
        playerupdate();
    }
}
function left(){
    if (player_x>=0){

        player_x= player_x-block_width;
        console.log("block image width is equal to" +block_width);
        console.log("When left arrow is pressed x = " + player_x +" ,Y= "+player_y);
        canvas.remove(imgplayer);
        playerupdate();
    }
}


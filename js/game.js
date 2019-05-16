// ---------------定数---------------
var BLOCK_SIZE = 24;
var BLOCK_RAWS = 22;
var BLOCK_COLS = 12;
var SCREEN_WIDTH = BLOCK_SIZE * BLOCK_COLS;
var SCREEN_HEIGHT = BLOCK_SIZE * BLOCK_RAWS;
var GAME = 1;
var GAMEOVER = 0;
var EFFECT = 2;
var NON_BLOCK = 2;
var NORMAL_BLOCK = 1;
var LOCK_BLOCK = 2;
var CLEAR_BLOCK = 3;
var WALL = 9;
var EFFECT_ANIMATION = 2;
var BACK_COLOR = "#ddd";
var GAMEOVER_COLOR = "#fff";
var BLOCK_COLOR = "#000";
var LOCK_COLOR = "#333";
var WALL_COLOR = "#666";
var ERROR_COLOR = "#f00";
var EFFET_COLOR1 = "#fff";
var EFFET_COLOR2 = "#000";
var NEXTLEVEL = 10;

// ---------------グローバル変数---------------
var canvas = null;
var g = null;
var stage = new Array(BLOCK_COLS);
var field = new Array(BLOCK_COLS);
var blockSize;
var speed;
var frame;
var block = new Array();
var oBlock = new Array();
var blockType;
var x, y;
var sx, sy;
var mode;
var timer1;
var fps;
var clerLine;
var effectState = {flipFlop: 0, speed: 0, count: 0};

// ---------------初期化---------------
function init(){
  clearTimeout(timer1);
  fps = 30;
  clerLine = 0;
  $("#canvas").attr("width", SCREEN_WIDTH);
  $("#canvas").attr("height", SCREEN_WIDTH);
}

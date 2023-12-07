let player;
let platform;
let enemy;
let enemySpeed = 2;

function setup() {
  new Canvas(600, 400);
  world.gravity.y = 10;

  player = new Sprite();
  player.color = "blue";
  player.width = 25;
  player.height = 25;
  player.x = 100;
  player.y = 300;
  player.mass = 2;
  player.hp = 100;
  player.dmgWindow = 5;

  platform = new Sprite();
  platform.color = "green";
  platform.w = width;
  platform.h = 50;
  platform.y = 400;
  platform.collider = "static";

  platform2 = new Sprite();
  platform2.color = "purple";
  platform2.w = 150;
  platform2.h = 25;
  platform2.x = 500;
  platform2.y = 300;
  platform2.collider = "static";

  platform3 = new Sprite();
  platform3.color = "purple";
  platform3.w = 150;
  platform3.h = 25;
  platform3.x = 250;
  platform3.y = 250;
  platform3.collider = "static";

  enemy = new Sprite();
  enemy.color = "red";
  enemy.x = 500;
  enemy.y = 275;
  enemy.w = 25;
  enemy.h = 25;
  enemy.collider = "kinematic";

  coin = new Sprite();
  coin.color = "yellow";
  coin.x = 250;
  coin.y = 200;
  coin.diameter = 20;
  coin.collider = "staic";
}

function draw() {
  clear();
  background(220);

  //player collect coin code
  if (player.overlaps(coin)) coin.remove();

  //health bar code
  fill(200, 0, 0);
  rect(475, 25, player.hp, 25);
  fill(0);
  text(player.hp, 510, 30, 100, 25);

  //enemy damages player code
  if (player.overlaps(enemy)) player.hp -= 20;
  print(player.hp);

  //bounce code for the enemy
  if (enemy.x > 565) {
    enemySpeed = -enemySpeed;
  } else if (enemy.x < 435) {
    enemySpeed = -enemySpeed;
  }
  enemy.vel.x = enemySpeed;

  //this controls the players movement
  if (kb.pressing("left")) player.vel.x = -5;
  else if (kb.pressing("right")) player.vel.x = 5;
  else player.vel.x = 0;

  if (player.vel.y == 0) {
    if (kb.pressing("space")) {
      player.vel.y = 27;
    }
  }

  //basically reset the player
  if (player.hp == 0 || player.x > width || player.x < 0) {
    player.x = 100;
    player.y = 300;
    player.vel.x = 0;
    player.vel.y = 0;
    player.hp = 100;
  }
}

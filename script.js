$(document).ready(function() {
  //Prevent page moving left, right, up, or down with arrow keys.
  window.addEventListener('keydown', function(e) {
    if ((e.keycode >= 37) && (e.keycode <= 40)) {
      e.preventDefault();
    }
  });
  
  //Put code AFTER this line
  document.write("<canvas id='canvas' />"); var createMap = function (data, size, gap) { gap = gap || 0; var rects = []; for (var y = 0; y < data.length; y++) for (var x = 0; x < data[y].length; x++) if (data[y][x]) rects.push({ c: data[y][x], x: x * size, y: y * size, w: size - gap, h: size - gap }); return rects; }; var bitMap = [ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ,0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1], [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1], [1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1], [1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1], [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] ]; function collides(a, b) { var x = a.x < b.x + b.w && a.x + a.w > b.x; var y = a.y < b.y + b.h && a.y + a.h > b.y; return x && y; } var rects = createMap(bitMap, 40); var keys = []; document.onkeydown = document.onkeyup = function (e) { keys[e.which || e.keyCode] = e.type === 'keydown'; }; var player = { x: 0, y: 0, w: 20, h: 20, velocity: { x: 0, y: 0 }, onFloor: false }; player.move = function () { var p = this; var vx = this.velocity.x; var vy = this.velocity.y; var x = {}; var y = {}; var i = rects.length; while (i--) { var rect = rects[i]; x.x = p.x + vx; x.y = p.y; x.w = p.w; x.h = p.h; y.x = p.x; y.y = p.y + vy; y.w = p.w; y.h = p.h; if (collides(x, rect)) { if (vx < 0) vx = rect.x + rect.w - p.x; if (vx > 0) vx = rect.x - p.x - p.w; } if (collides(y, rect)) { if (vy < 0) vy = rect.y + rect.h - p.y; if (vy > 0) vy = rect.y - p.y - p.h; } } this.x += vx; this.y += vy; }; var player2 = {}; for(var key in player) player2[key] = player[key]; player2.x = window.innerWidth - player.w; function Game(canvas) { this.canvas = canvas; this.ctx = canvas.getContext('2d'); this.width = canvas.width = 1325; this.height = canvas.height = 900; } Game.prototype.update = function () { player.velocity.x = 10 * (!!keys[39] - !!keys[37]); player.velocity.y++; player.velocity.x = 10 * (!!keys[39] - !!keys[37]); player.velocity.y++; var expectedY = player.y + player.velocity.y; player.move(); player.onFloor = expectedY > player.y; if (expectedY !== player.y) player.velocity.y = 0; if (player.onFloor && keys[38]) { player.velocity.y = -20; } }; Game.prototype.draw = function (ctx) { ctx.fillStyle = '#eee'; ctx.fillRect(0, 0, this.width, this.height); ctx.fillStyle = '#d00'; ctx.fillRect(player.x, player.y, player.w, player.h); ctx.fillStyle = '#0ae'; ctx.fillRect(player2.x, player2.y, player2.w, player2.h); ctx.fillStyle = '#bbb'; for (var i = 0; i < rects.length; i++) { var r = rects[i]; ctx.fillRect(r.x, r.y, r.w, r.h); } }; Game.prototype.start = function () { var self = this, ctx = this.ctx; (function gameLoop() { self.update(ctx); self.draw(ctx); setTimeout(gameLoop, 2000 / 60); }()); }; var canvas = document.getElementById('canvas'); var game = new Game(canvas); game.start();
});

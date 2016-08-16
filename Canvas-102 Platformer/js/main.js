//this game will have only 1 state
var GameState = {
    


};

//initiate the Phaser framework
var game = new Phaser.Game(360, 592, Phaser.AUTO);
game.state.add('GameState', GameState);
game.state.start('GameState');


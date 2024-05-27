const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');
const log = console.log;

const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

const globalVars = require('./gameVariables.js');
const gameController = require("./controllers/game.controller.js")
const playerController = require("./controllers/player.controller.js")

app.get('/test_json', (req,res)=>{res.status(200).json({code:200,msg:"Ok"})});

app.get('/random', (req,res) =>{
    var playerTurn = Math.random() < 0.5 ? 1 : 2;;
    return res.status(200).json({code: 200,msg:playerTurn})
})

app.get('/dice', (req,res) =>{
    if(globalVars.gameState == null){
        return res.status(400).json({code:400,msg:"Cannot execute coin toss."})
    }

    if(globalVars.gameState == globalVars.PLAYING || globalVars.gameState == globalVars.ENDING){
        return res.status(400).json({code:400,msg:"Game is not in setting state, cannot toss coin."})
    }

    if(globalVars.playerStart != 0){
        return res.status(400).json({code:400,msg:"First turn already decided, cannot toss coin."})
    }

    globalVars.playerStart = Math.random() < 0.5 ? 1 : 2;

    var firstMessage = "Player " + globalVars.playerStart + " will start the game."
    return res.status(200).json({code: 200,msg:firstMessage})
});

app.get('/game/create', gameController.game_create);
app.get('/game/resume', gameController.game_resume);
app.get('/game/status', gameController.game_status);

app.get('/player/:playerNumber', playerController.player_resume);

// Iniciar el servidor
app.listen(3000, () => {
    log('Server listening to port 3000');
});
const log = console.log;
const globalVars = require('./../gameVariables.js');

module.exports.player_resume = async (req, res) => {
    if(isNaN(req.params.playerNumber)){
        return res.status(400).json({code:400,msg:"Param is not a number."})
    }

    var playerToSee = parseInt(req.params.playerNumber, 10);
    if (isNaN(playerToSee) || (playerToSee !== 1 && playerToSee !== 2)) {
        return res.status(400).json({code:400, msg:'Invalid number. Please provide either 1 or 2.'});
    }

    var tablero = null
    if(playerToSee == 1){
        tablero = globalVars.tableroPlayer1
    }else{
        tablero = globalVars.tableroPlayer2
    }

    return res.status(200).json({
        code: 200, 
        tableroPlayer: tablero
    });
}

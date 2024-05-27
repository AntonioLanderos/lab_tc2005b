const log = console.log;
const globalVars = require('./../gameVariables.js');

module.exports.game_create = async (req, res) => {
    globalVars.tableroPlayer1 = null;
    globalVars.tableroPlayer2 = null;

    globalVars.playerStart = 0;
    globalVars.gameState = globalVars.SETTING;


    return res.status(200).json({code: 200, msg: "A new game has been settled."});
}

module.exports.game_resume = async (req, res) => {
    return res.status(200).json({
        code: 200, 
        tableroPlayer1: globalVars.tableroPlayer1,
        tableroPlayer2: globalVars.tableroPlayer2,
        playerStart: globalVars.playerStart,
        gameState: globalVars.gameState
    });
}

module.exports.game_status = async (req, res) => {
    return res.status(200).json({
        code: 200, 
        status: globalVars.gameState
    });
}
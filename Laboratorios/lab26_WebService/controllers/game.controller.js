// Variables globales
const globalVars = {
    SETTING: "SETTING",
    PLAYING: "PLAYING",
    ENDING: "ENDING",

    playerStart: 0,
    gameState: null,

    tableroPlayer1: null,
    tableroPlayer2: null,
};

// Crear un nuevo juego
module.exports.game_create = async (req, res) => {
    globalVars.tableroPlayer1 = Array(10).fill(0).map(() => Array(10).fill(0));
    globalVars.tableroPlayer2 = Array(10).fill(0).map(() => Array(10).fill(0));
    globalVars.playerStart = 0;
    globalVars.gameState = globalVars.SETTING;

    return res.status(200).json({ code: 200, msg: "A new game has been settled." });
};

// Colocar los barcos
module.exports.place_ships = async (req, res) => {
    const player = parseInt(req.params.playerid, 10);
    const ships = req.body.ships;

    if (globalVars.gameState !== globalVars.SETTING) {
        return res.status(400).json({ code: 400, msg: "Cannot place ships. The game is not in the setting state." });
    }

    if (![1, 2].includes(player)) {
        return res.status(400).json({ code: 400, msg: "Invalid player number. Please provide either 1 or 2." });
    }

    if (!ships || ships.length !== 10) {
        return res.status(400).json({ code: 400, msg: "Invalid ship data." });
    }

    let tablero = player === 1 ? globalVars.tableroPlayer1 : globalVars.tableroPlayer2;

    // Validar y colocar los barcos
    const isValidPlacement = (ship) => {
        for (let cell of ship) {
            const { x, y } = cell;
            if (x < 0 || x >= 10 || y < 0 || y >= 10 || tablero[x][y] !== 0) {
                return false;
            }
        }
        return true;
    };

    for (let ship of ships) {
        if (!isValidPlacement(ship)) {
            return res.status(400).json({ code: 400, msg: "Invalid ship placement." });
        }
        for (let cell of ship) {
            const { x, y } = cell;
            tablero[x][y] = 1;
        }
    }

    if (player === 1) {
        globalVars.tableroPlayer1 = tablero;
    } else {
        globalVars.tableroPlayer2 = tablero;
    }

    // Si ambos jugadores han colocado sus barcos, cambia el estado del juego a PLAYING
    if (globalVars.tableroPlayer1.flat().includes(1) && globalVars.tableroPlayer2.flat().includes(1)) {
        globalVars.gameState = globalVars.PLAYING;
    }

    return res.status(200).json({ code: 200, msg: `Ships placed for player ${player}.`, map: tablero });
};

// Obtener el estado del juego
module.exports.game_status = async (req, res) => {
    return res.status(200).json({
        code: 200,
        status: globalVars.gameState,
        playerStart: globalVars.playerStart,
        tableroPlayer1: globalVars.tableroPlayer1,
        tableroPlayer2: globalVars.tableroPlayer2
    });
};

// Tomar un turno para atacar
module.exports.take_turn = async (req, res) => {
    if (globalVars.gameState !== globalVars.PLAYING) {
        return res.status(400).json({ code: 400, msg: "Cannot take turn. The game is not in the playing state." });
    }

    const player = globalVars.playerStart;
    const { x, y } = req.body;

    if (isNaN(x) || isNaN(y) || x < 0 || x > 9 || y < 0 || y > 9) {
        return res.status(400).json({ code: 400, msg: "Invalid coordinates." });
    }

    let tablero = player === 1 ? globalVars.tableroPlayer2 : globalVars.tableroPlayer1;

    if (!tablero) {
        return res.status(400).json({ code: 400, msg: "Opponent's ships not set." });
    }

    const hit = tablero[x][y] === 1;

    if (hit) {
        tablero[x][y] = 2; // Marcar como golpeado
        return res.status(200).json({ code: 200, msg: "Hit!", map: tablero });
    } else {
        globalVars.playerStart = player === 1 ? 2 : 1; // Cambiar de turno
        return res.status(200).json({ code: 200, msg: "Miss!", map: tablero });
    }
};

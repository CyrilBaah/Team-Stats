const team = {
    _players: [{
            firstName: "Pablo",
            lastName: "Sanchez",
            age: 11
        },
        {
            firstName: "Josh",
            lastName: "Peters",
            age: 38
        },
        {
            firstName: "David",
            lastName: "Brett",
            age: 25
        },
    ],

    _games: [{
            opponent: "Broncos",
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: "Knight",
            teamPoints: 8,
            opponentPoints: 6
        },
        {
            opponent: "Queen",
            teamPoints: 3,
            opponentPoints: 5
        },
    ],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer: function (firstName, lastName, age) {
        const newPlayer = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this._players.push(newPlayer);
    },

    addGame: function (opponentName, teamPoints, opponentPoints) {
        const newGame = {
            opponent: opponentName,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };
        this._games.push(newGame);
    },

};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Outlaws', 1, 3);
team.addGame('Gladiators', 3, 1);
team.addGame('Mayhem', 3, 0);

console.log(team.players);
console.log();
console.log(team.games);
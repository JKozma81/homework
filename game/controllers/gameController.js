module.exports = checkForWin = (table, char) => {
    const winConditions = [
        [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 0, y: 2 }
        ],
        [
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 1, y: 2 }
        ],
        [
            { x: 2, y: 0 },
            { x: 2, y: 1 },
            { x: 2, y: 2 }
        ],
        [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 }
        ],
        [
            { x: 0, y: 1 },
            { x: 1, y: 1 },
            { x: 2, y: 1 }
        ],
        [
            { x: 0, y: 2 },
            { x: 1, y: 2 },
            { x: 2, y: 2 }
        ],
        [
            { x: 0, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 2 }
        ],
        [
            { x: 2, y: 0 },
            { x: 1, y: 1 },
            { x: 0, y: 2 }
        ]
    ];


    let win = false;

    for (let i = 0; i < winConditions.length; i++) {
        win = winConditions[i].every(coord => table[coord['x']][coord['y']] === char);
        if (win) {
            return { win, winnerChar: char }
        }

    }
    return { win }
}

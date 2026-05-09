const sourceCatalog = [
  {
    name: "NCAA Statistics: Division I men's lacrosse rankings",
    type: "NCAA statistics/rankings",
    url: "https://stats.ncaa.org/rankings?division=1&sport_code=MLA",
    credit: "Used for NCAA category context and national ranking references."
  },
  {
    name: "Duke University Athletics",
    type: "Official school cumulative statistics",
    url: "https://goduke.com/sports/mens-lacrosse/stats/2026",
    credit: "Team totals and player scoring rows."
  },
  {
    name: "Cornell University Athletics",
    type: "Official school cumulative statistics",
    url: "https://cornellbigred.com/sports/mens-lacrosse/stats",
    credit: "Team totals, goalie totals, game highs, and comparison tables."
  },
  {
    name: "Syracuse University Athletics",
    type: "Official school cumulative statistics",
    url: "https://cuse.com/sports/mens-lacrosse/stats/2026",
    credit: "Team totals and player scoring rows."
  },
  {
    name: "Adelphi University Athletics",
    type: "Official school cumulative statistics",
    url: "https://aupanthers.com/sports/mens-lacrosse/stats/2026",
    credit: "Team totals, player scoring rows, and goalie totals."
  },
  {
    name: "Mercy University Athletics",
    type: "Official school cumulative statistics",
    url: "https://mercyathletics.com/sports/mens-lacrosse/stats/2026",
    credit: "Team totals, player scoring rows, and goalie totals."
  },
  {
    name: "Rollins College Athletics",
    type: "Official school cumulative statistics",
    url: "https://rollinssports.com/sports/mlax/stats/2026",
    credit: "Team totals, player scoring rows, and goalie totals."
  },
  {
    name: "Stevens Institute of Technology Athletics",
    type: "Official school cumulative statistics",
    url: "https://stevensducks.com/sports/mens-lacrosse/stats/2026",
    credit: "Team totals, player scoring rows, and goalie totals."
  },
  {
    name: "Rochester Institute of Technology Athletics",
    type: "Official school cumulative statistics",
    url: "https://ritathletics.com/sports/mens-lacrosse/stats/2026",
    credit: "Team totals, player scoring rows, and goalie totals."
  },
  {
    name: "SUNY Polytechnic Institute Athletics",
    type: "Official school cumulative statistics",
    url: "https://wildcats.sunypoly.edu/sports/mens-lacrosse/stats?clean=true",
    credit: "Team totals and visible player scoring rows."
  }
];

const teams = [
  {
    id: "duke",
    division: "D1",
    name: "Duke Blue Devils",
    school: "Duke University",
    conference: "ACC",
    record: "9-4",
    games: 13,
    asOf: "May 6, 2026",
    sourceIds: [0, 1],
    stats: {
      goals: 191,
      assists: 106,
      points: 297,
      shots: 655,
      shotPct: 0.292,
      shotsOnGoal: 344,
      sogPct: 0.525,
      goalsAllowed: 113,
      saves: 120,
      savePct: 0.515,
      groundBalls: 459,
      turnovers: 187,
      causedTurnovers: 117,
      opponentTurnovers: 228,
      opponentCausedTurnovers: 76,
      faceoffsWon: 193,
      faceoffsLost: 155,
      faceoffPct: 0.555,
      manUpGoals: 15,
      penalties: "37-27:00"
    },
    players: [
      { name: "Benn Johnston", role: "Attack", gp: "13-13", goals: 35, assists: 8, points: 43, groundBalls: 32, turnovers: 12, causedTurnovers: 5, extra: "132 shots" },
      { name: "Max Sloat", role: "Attack", gp: "13-13", goals: 32, assists: 6, points: 38, groundBalls: 4, turnovers: 11, causedTurnovers: 0, extra: "2 game-winning goals" },
      { name: "Michael Ortlieb", role: "Midfield", gp: "13-13", goals: 21, assists: 15, points: 36, groundBalls: 17, turnovers: 15, causedTurnovers: 0, extra: "31 shots on goal" },
      { name: "Aidan Maguire", role: "Defense/LSM", gp: "13-0", goals: 3, assists: 6, points: 9, groundBalls: 32, turnovers: 3, causedTurnovers: 13, extra: "Defensive leader" },
      { name: "Cal Girard", role: "Faceoff", gp: "13-0", goals: 2, assists: 1, points: 3, groundBalls: 82, turnovers: 6, causedTurnovers: 1, extra: "122-93 faceoffs" }
    ],
    goalies: [
      { name: "Team goalkeeping", minutes: "Team total", goalsAllowed: 113, saves: 120, savePct: 0.515, record: "9-4" }
    ],
    notes: [
      "Duke's team-save total is derived from opponent shots on goal minus opponent goals on the official cumulative-stat page.",
      "The NCAA ranking page was used as a category reference for scoring offense, scoring defense, saves per game, ground balls, caused turnovers, and turnovers."
    ]
  },
  {
    id: "cornell",
    division: "D1",
    name: "Cornell Big Red",
    school: "Cornell University",
    conference: "Ivy League",
    record: "8-3",
    games: 11,
    asOf: "May 6, 2026",
    sourceIds: [0, 2],
    stats: {
      goals: 142,
      assists: 90,
      points: 232,
      shots: 441,
      shotPct: 0.322,
      shotsOnGoal: 262,
      sogPct: 0.594,
      goalsAllowed: 111,
      saves: 134,
      savePct: 0.547,
      groundBalls: 360,
      turnovers: 188,
      causedTurnovers: 74,
      opponentTurnovers: 168,
      opponentCausedTurnovers: 91,
      faceoffsWon: 168,
      faceoffsLost: 122,
      faceoffPct: 0.579,
      clears: "218-245",
      clearPct: 0.89,
      manUpGoals: 14,
      manUpChances: 22,
      manUpPct: 0.636,
      penalties: "30-25:00"
    },
    players: [
      { name: "Matthew Tully", role: "Goalie", gp: "11-11", goals: 0, assists: 0, points: 0, groundBalls: "-", turnovers: "-", causedTurnovers: "-", extra: "127 saves, .540 save percentage" },
      { name: "Tim Piacentini", role: "Goalie", gp: "3-0", goals: 0, assists: 0, points: 0, groundBalls: "-", turnovers: "-", causedTurnovers: "-", extra: "7 saves, .700 save percentage" },
      { name: "Willem Firth", role: "Attack", gp: "Game highs", goals: "-", assists: "-", points: "-", groundBalls: "-", turnovers: "-", causedTurnovers: "-", extra: "Single-game highs included 9 points and 5 goals" },
      { name: "Ryan Goldstein", role: "Attack", gp: "Game highs", goals: "-", assists: "-", points: "-", groundBalls: "-", turnovers: "-", causedTurnovers: "-", extra: "Single-game high of 5 assists" },
      { name: "Michael Melkonian / Jack Cascadden", role: "Faceoff", gp: "Game highs", goals: "-", assists: "-", points: "-", groundBalls: 10, turnovers: "-", causedTurnovers: "-", extra: "Listed as individual ground-ball high leaders" }
    ],
    goalies: [
      { name: "Matthew Tully", minutes: "645:57", goalsAllowed: 108, saves: 127, savePct: 0.54, record: "8-3" },
      { name: "Tim Piacentini", minutes: "13:52", goalsAllowed: 3, saves: 7, savePct: 0.7, record: "0-0" },
      { name: "Cornell total", minutes: "659:49", goalsAllowed: 111, saves: 134, savePct: 0.547, record: "8-3" }
    ],
    notes: [
      "Cornell's official page provided full team totals, goalie totals, game-by-game comparison rows, and game-high leaders.",
      "Some offensive player entries are shown as game-high references because the captured official source emphasized goalie totals and high-stat callouts."
    ]
  },
  {
    id: "syracuse",
    division: "D1",
    name: "Syracuse Orange",
    school: "Syracuse University",
    conference: "ACC",
    record: "10-3",
    games: 13,
    asOf: "May 6, 2026",
    sourceIds: [0, 3],
    stats: {
      goals: 171,
      assists: 103,
      points: 274,
      shots: 525,
      shotPct: 0.326,
      shotsOnGoal: 318,
      sogPct: 0.606,
      goalsAllowed: 130,
      saves: 166,
      savePct: 0.561,
      groundBalls: 383,
      turnovers: 166,
      causedTurnovers: 91,
      opponentTurnovers: 175,
      opponentCausedTurnovers: 71,
      faceoffsWon: 180,
      faceoffsLost: 163,
      faceoffPct: 0.525,
      manUpGoals: 20,
      penalties: "52-45:00"
    },
    players: [
      { name: "Joey Spallina", role: "Attack", gp: "13-13", goals: 25, assists: 35, points: 60, groundBalls: 18, turnovers: 29, causedTurnovers: 4, extra: "Team points leader" },
      { name: "Michael Leo", role: "Attack", gp: "13-13", goals: 24, assists: 18, points: 42, groundBalls: 10, turnovers: 23, causedTurnovers: 0, extra: "80 shots" },
      { name: "Finn Thomson", role: "Attack/Midfield", gp: "13-13", goals: 26, assists: 9, points: 35, groundBalls: 17, turnovers: 17, causedTurnovers: 4, extra: ".419 shooting percentage" },
      { name: "John Mullen", role: "Faceoff", gp: "13-0", goals: 3, assists: 2, points: 5, groundBalls: 95, turnovers: 6, causedTurnovers: 2, extra: "147-130 faceoffs" },
      { name: "Riley Figueiras", role: "Defense", gp: "13-13", goals: 0, assists: 0, points: 0, groundBalls: 44, turnovers: 4, causedTurnovers: 19, extra: "Team CT leader" }
    ],
    goalies: [
      { name: "Team goalkeeping", minutes: "Team total", goalsAllowed: 130, saves: 166, savePct: 0.561, record: "10-3" }
    ],
    notes: [
      "Syracuse save percentage is derived from the official opponent shots-on-goal and goals-allowed totals.",
      "The source page listed 2026 cumulative player rows for scoring, ground balls, turnovers, caused turnovers, and faceoffs."
    ]
  },
  {
    id: "adelphi",
    division: "D2",
    name: "Adelphi Panthers",
    school: "Adelphi University",
    conference: "NE10",
    record: "16-0",
    games: 16,
    asOf: "May 6, 2026",
    sourceIds: [4],
    stats: {
      goals: 269,
      assists: 171,
      points: 440,
      shots: 723,
      shotPct: 0.372,
      shotsOnGoal: 460,
      sogPct: 0.636,
      goalsAllowed: 98,
      saves: 169,
      savePct: 0.633,
      groundBalls: 607,
      turnovers: 269,
      causedTurnovers: 171,
      opponentTurnovers: 311,
      opponentCausedTurnovers: 131,
      faceoffsWon: 259,
      faceoffsLost: 160,
      faceoffPct: 0.618,
      clears: "295-332",
      clearPct: 0.889,
      manUpGoals: 18,
      manUpChances: 55,
      manUpPct: 0.327,
      penalties: "73-61:00"
    },
    players: [
      { name: "Braden Donnellan", role: "Attack", gp: "15-14", goals: 20, assists: 54, points: 74, groundBalls: 27, turnovers: 33, causedTurnovers: 8, extra: "Team points leader" },
      { name: "Michael Durnin", role: "Attack", gp: "16-15", goals: 47, assists: 17, points: 64, groundBalls: 28, turnovers: 25, causedTurnovers: 5, extra: "Team goals leader" },
      { name: "Kyle Lewis", role: "Attack", gp: "14-2", goals: 28, assists: 21, points: 49, groundBalls: 16, turnovers: 19, causedTurnovers: 3, extra: ".444 shooting percentage" },
      { name: "Noah Gibson", role: "Attack", gp: "16-16", goals: 40, assists: 7, points: 47, groundBalls: 19, turnovers: 23, causedTurnovers: 3, extra: "5 game-winning goals" },
      { name: "Carter Linkletter", role: "Defense", gp: "16-14", goals: 4, assists: 2, points: 6, groundBalls: 60, turnovers: 4, causedTurnovers: 34, extra: "Team CT leader" }
    ],
    goalies: [
      { name: "Christian Tomei", minutes: "658:26", goalsAllowed: 60, saves: 123, savePct: 0.672, record: "15-0" },
      { name: "Thomas Gentile", minutes: "189:45", goalsAllowed: 20, saves: 33, savePct: 0.623, record: "1-0" },
      { name: "Adelphi total", minutes: "961:45", goalsAllowed: 98, saves: 169, savePct: 0.633, record: "16-0" }
    ],
    notes: [
      "Adelphi's official page supplied team totals, player scoring, defensive stats, faceoffs, clears, and goalie totals."
    ]
  },
  {
    id: "mercy",
    division: "D2",
    name: "Mercy Mavericks",
    school: "Mercy University",
    conference: "ECC",
    record: "9-6",
    games: 15,
    asOf: "May 6, 2026",
    sourceIds: [5],
    stats: {
      goals: 198,
      assists: 132,
      points: 330,
      shots: 595,
      shotPct: 0.333,
      shotsOnGoal: 382,
      sogPct: 0.642,
      goalsAllowed: 134,
      saves: 183,
      savePct: 0.577,
      groundBalls: 560,
      turnovers: 294,
      causedTurnovers: 180,
      opponentTurnovers: 332,
      opponentCausedTurnovers: 155,
      faceoffsWon: 210,
      faceoffsLost: 170,
      faceoffPct: 0.553,
      clears: "318-370",
      clearPct: 0.859,
      manUpGoals: 19,
      manUpChances: 40,
      manUpPct: 0.475,
      penalties: "65-53:00"
    },
    players: [
      { name: "Cole Hunsberger", role: "Attack", gp: "15-15", goals: 31, assists: 36, points: 67, groundBalls: 28, turnovers: 23, causedTurnovers: 3, extra: "Team points leader" },
      { name: "Matthew Magyar", role: "Attack", gp: "15-15", goals: 35, assists: 8, points: 43, groundBalls: 26, turnovers: 26, causedTurnovers: 6, extra: "Team goals leader" },
      { name: "Jack Agres", role: "Attack", gp: "15-3", goals: 27, assists: 10, points: 37, groundBalls: 19, turnovers: 19, causedTurnovers: 4, extra: ".458 shooting percentage" },
      { name: "Michael Mitrano", role: "Faceoff", gp: "15-15", goals: 3, assists: 0, points: 3, groundBalls: 64, turnovers: 11, causedTurnovers: 0, extra: "132-247 faceoffs" },
      { name: "Nicholas Filocamo", role: "Defense", gp: "15-15", goals: 1, assists: 1, points: 2, groundBalls: 37, turnovers: 8, causedTurnovers: 21, extra: "Team CT leader" }
    ],
    goalies: [
      { name: "Cameron Dorfman", minutes: "690:02", goalsAllowed: 110, saves: 138, savePct: 0.556, record: "9-5" },
      { name: "Peter Murphy", minutes: "155:24", goalsAllowed: 19, saves: 38, savePct: 0.667, record: "0-1" },
      { name: "Mercy total", minutes: "905:26", goalsAllowed: 134, saves: 183, savePct: 0.577, record: "9-6" }
    ],
    notes: [
      "Mercy's official page supplied full team totals and individual scoring/goalkeeping tables."
    ]
  },
  {
    id: "rollins",
    division: "D2",
    name: "Rollins Tars",
    school: "Rollins College",
    conference: "Sunshine State",
    record: "7-8",
    games: 15,
    asOf: "May 6, 2026",
    sourceIds: [6],
    stats: {
      goals: 163,
      assists: 87,
      points: 250,
      shots: 638,
      shotPct: 0.255,
      shotsOnGoal: 343,
      sogPct: 0.538,
      goalsAllowed: 151,
      saves: 157,
      savePct: 0.51,
      groundBalls: 449,
      turnovers: 270,
      causedTurnovers: 130,
      opponentTurnovers: 240,
      opponentCausedTurnovers: 139,
      faceoffsWon: 225,
      faceoffsLost: 136,
      faceoffPct: 0.623,
      clears: "284-313",
      clearPct: 0.907,
      manUpGoals: 17,
      manUpChances: 55,
      manUpPct: 0.309,
      penalties: "35-24:30"
    },
    players: [
      { name: "Nate Paulo", role: "Attack", gp: "15-14", goals: 30, assists: 9, points: 39, groundBalls: 17, turnovers: 23, causedTurnovers: 5, extra: "Team points leader" },
      { name: "Aaron Williams", role: "Attack", gp: "15-0", goals: 29, assists: 7, points: 36, groundBalls: 6, turnovers: 23, causedTurnovers: 0, extra: "109 shots" },
      { name: "Logan McHugh", role: "Attack", gp: "15-2", goals: 25, assists: 4, points: 29, groundBalls: 11, turnovers: 12, causedTurnovers: 4, extra: ".379 shooting percentage" },
      { name: "Brady Greco", role: "Faceoff", gp: "14-14", goals: 0, assists: 1, points: 1, groundBalls: 70, turnovers: 7, causedTurnovers: 0, extra: "195-290 faceoffs" },
      { name: "Owen Lammy", role: "Defense", gp: "15-15", goals: 1, assists: 0, points: 1, groundBalls: 29, turnovers: 7, causedTurnovers: 21, extra: "Team CT leader" }
    ],
    goalies: [
      { name: "Colin Selters", minutes: "429:21", goalsAllowed: 80, saves: 92, savePct: 0.535, record: "4-4" },
      { name: "Nick Catino", minutes: "414:05", goalsAllowed: 60, saves: 60, savePct: 0.5, record: "3-3" },
      { name: "Rollins total", minutes: "881:51", goalsAllowed: 151, saves: 157, savePct: 0.51, record: "7-8" }
    ],
    notes: [
      "Rollins' official page supplied full team totals and individual scoring/goalkeeping tables."
    ]
  },
  {
    id: "stevens",
    division: "D3",
    name: "Stevens Ducks",
    school: "Stevens Institute of Technology",
    conference: "MAC Freedom",
    record: "17-2",
    games: 19,
    asOf: "May 6, 2026",
    sourceIds: [7],
    stats: {
      goals: 360,
      assists: 244,
      points: 604,
      shots: 1157,
      shotPct: 0.311,
      shotsOnGoal: 712,
      sogPct: 0.615,
      goalsAllowed: 130,
      saves: 224,
      savePct: 0.636,
      groundBalls: 837,
      turnovers: 235,
      causedTurnovers: 217,
      opponentTurnovers: 419,
      opponentCausedTurnovers: 103,
      faceoffsWon: 355,
      faceoffsLost: 193,
      faceoffPct: 0.648,
      clears: "388-432",
      clearPct: 0.898,
      manUpGoals: 33,
      manUpChances: 82,
      manUpPct: 0.402,
      penalties: "66-54:00"
    },
    players: [
      { name: "Matthew Pergola", role: "Attack", gp: "19-19", goals: 58, assists: 43, points: 101, groundBalls: 26, turnovers: 18, causedTurnovers: 8, extra: "Team points leader" },
      { name: "Jack Tenaglia", role: "Attack", gp: "19-17", goals: 39, assists: 55, points: 94, groundBalls: 29, turnovers: 15, causedTurnovers: 8, extra: "Team assists leader" },
      { name: "Adam DeCristofaro", role: "Attack", gp: "19-1", goals: 43, assists: 22, points: 65, groundBalls: 20, turnovers: 18, causedTurnovers: 4, extra: "145 shots" },
      { name: "Bastian Chorazykiewicz", role: "Faceoff", gp: "19-6", goals: 1, assists: 1, points: 2, groundBalls: 125, turnovers: 6, causedTurnovers: 0, extra: "200-289 faceoffs" },
      { name: "Luke Lesizza", role: "Defense", gp: "19-19", goals: 0, assists: 2, points: 2, groundBalls: 55, turnovers: 9, causedTurnovers: 57, extra: "Team CT leader" }
    ],
    goalies: [
      { name: "Michael Jannotte", minutes: "869:36", goalsAllowed: 109, saves: 173, savePct: 0.613, record: "15-2" },
      { name: "Gavin Zeldin", minutes: "144:03", goalsAllowed: 12, saves: 34, savePct: 0.739, record: "0-0" },
      { name: "Stevens total", minutes: "1082:17", goalsAllowed: 128, saves: 224, savePct: 0.636, record: "15-2" }
    ],
    notes: [
      "Stevens' official page supplied full team totals, player rows, goalie rows, and game highs."
    ]
  },
  {
    id: "rit",
    division: "D3",
    name: "RIT Tigers",
    school: "Rochester Institute of Technology",
    conference: "Liberty League",
    record: "15-4",
    games: 19,
    asOf: "May 6, 2026",
    sourceIds: [8],
    stats: {
      goals: 285,
      assists: 182,
      points: 467,
      shots: 861,
      shotPct: 0.331,
      shotsOnGoal: 555,
      sogPct: 0.645,
      goalsAllowed: 178,
      saves: 211,
      savePct: 0.542,
      groundBalls: 748,
      turnovers: 352,
      causedTurnovers: 212,
      opponentTurnovers: 370,
      opponentCausedTurnovers: 181,
      faceoffsWon: 294,
      faceoffsLost: 231,
      faceoffPct: 0.56,
      clears: "422-470",
      clearPct: 0.898,
      manUpGoals: 18,
      manUpChances: 49,
      manUpPct: 0.367,
      penalties: "72-59:30"
    },
    players: [
      { name: "Erich Acton", role: "Attack", gp: "19-19", goals: 44, assists: 29, points: 73, groundBalls: 40, turnovers: 20, causedTurnovers: 8, extra: "Team points leader" },
      { name: "Ryan Sanders", role: "Attack", gp: "19-16", goals: 46, assists: 16, points: 62, groundBalls: 21, turnovers: 31, causedTurnovers: 6, extra: "Team goals leader" },
      { name: "Ethan Harkins", role: "Attack", gp: "19-19", goals: 26, assists: 18, points: 44, groundBalls: 25, turnovers: 15, causedTurnovers: 1, extra: ".591 shooting percentage" },
      { name: "Philip Minardo", role: "Faceoff", gp: "19-0", goals: 6, assists: 1, points: 7, groundBalls: 109, turnovers: 18, causedTurnovers: 1, extra: "169-273 faceoffs" },
      { name: "Joe Holenstein", role: "Defense", gp: "19-19", goals: 3, assists: 2, points: 5, groundBalls: 69, turnovers: 6, causedTurnovers: 28, extra: "Tied team CT lead" }
    ],
    goalies: [
      { name: "Alex Zborowski", minutes: "1067:53", goalsAllowed: 164, saves: 193, savePct: 0.541, record: "13-4" },
      { name: "Chase Strychaluk", minutes: "72:07", goalsAllowed: 14, saves: 17, savePct: 0.548, record: "0-0" },
      { name: "RIT total", minutes: "1140:00", goalsAllowed: 178, saves: 211, savePct: 0.542, record: "13-4" }
    ],
    notes: [
      "RIT's official page supplied full team totals, player rows, goalie rows, and conference split tables."
    ]
  },
  {
    id: "suny-poly",
    division: "D3",
    name: "SUNY Poly Wildcats",
    school: "SUNY Polytechnic Institute",
    conference: "NAC",
    record: "6-10",
    games: 16,
    asOf: "May 6, 2026",
    sourceIds: [9],
    stats: {
      goals: 172,
      assists: 100,
      points: 272,
      shots: 651,
      shotPct: 0.264,
      shotsOnGoal: 382,
      sogPct: 0.587,
      goalsAllowed: 216,
      saves: 198,
      savePct: 0.478,
      groundBalls: 571,
      turnovers: 351,
      causedTurnovers: 141,
      opponentTurnovers: 387,
      opponentCausedTurnovers: 145,
      faceoffsWon: 146,
      faceoffsLost: 288,
      faceoffPct: 0.336,
      clears: "322-411",
      clearPct: 0.783,
      manUpGoals: 27,
      manUpChances: 84,
      manUpPct: 0.321,
      penalties: "38-30:00"
    },
    players: [
      { name: "Kai Hew", role: "Attack", gp: "15-15", goals: 21, assists: 30, points: 51, groundBalls: 29, turnovers: 32, causedTurnovers: 9, extra: "Team points leader" },
      { name: "Ryan Carroll", role: "Attack", gp: "16-13", goals: 35, assists: 12, points: 47, groundBalls: 51, turnovers: 35, causedTurnovers: 12, extra: "Team goals co-leader" },
      { name: "Luke Taylor", role: "Attack", gp: "16-16", goals: 35, assists: 11, points: 46, groundBalls: 29, turnovers: 30, causedTurnovers: 1, extra: "148 shots" },
      { name: "Cooper Fitzgerald", role: "Attack", gp: "16-16", goals: 29, assists: 4, points: 33, groundBalls: 36, turnovers: 25, causedTurnovers: 6, extra: ".414 shooting percentage" }
    ],
    goalies: [
      { name: "Team goalkeeping", minutes: "Team total", goalsAllowed: 216, saves: 198, savePct: 0.478, record: "6-10" }
    ],
    notes: [
      "SUNY Poly team saves are derived from opponent shots on goal minus opponent goals on the official cumulative-stat page.",
      "The clean source page captured team totals and visible scoring leaders; the data model can accept full goalie rows when added."
    ]
  }
];

function sourceTeam({
  id,
  division,
  name,
  school,
  conference,
  officialLevel,
  colors,
  sources,
  notes = []
}) {
  return {
    id,
    division,
    name,
    school,
    conference,
    officialLevel: officialLevel || divisionLabelsDraft[division],
    record: "Stats source added",
    games: null,
    asOf: "May 6, 2026",
    colors,
    sources,
    stats: null,
    players: [],
    goalies: [],
    notes: [
      "This team has been added to the dropdown with colors and source links. Enter verified 2025-26 team totals from the linked stat page before using it as a completed statistical profile.",
      ...notes
    ]
  };
}

const divisionLabelsDraft = {
  D1: "NCAA Division I",
  D2: "NCAA Division II",
  D3: "NCAA Division III",
  JUCO: "JUCO"
};

const requestedTeams = [
  sourceTeam({
    id: "ualbany",
    division: "D1",
    name: "UAlbany Great Danes",
    school: "University at Albany",
    conference: "America East",
    colors: { primary: "#46166B", secondary: "#EEB211", accent: "#EEB211", pillText: "#1a1026" },
    sources: [{ name: "UAlbany Athletics 2026 men's lacrosse stats", type: "Official school cumulative statistics", url: "https://ualbanysports.com/sports/mens-lacrosse/stats/2026" }]
  }),
  sourceTeam({
    id: "brown",
    division: "D1",
    name: "Brown Bears",
    school: "Brown University",
    conference: "Ivy League",
    colors: { primary: "#4E3629", secondary: "#ED1C24", accent: "#C00404", pillText: "#ffffff" },
    sources: [{ name: "Brown Athletics 2026 men's lacrosse stats", type: "Official school cumulative statistics", url: "https://brownbears.com/sports/mens-lacrosse/stats/2026" }]
  }),
  sourceTeam({
    id: "princeton",
    division: "D1",
    name: "Princeton Tigers",
    school: "Princeton University",
    conference: "Ivy League",
    colors: { primary: "#000000", secondary: "#FF8F00", accent: "#FF8F00", pillText: "#111111" },
    sources: [{ name: "Princeton Athletics 2026 men's lacrosse stats", type: "Official school cumulative statistics", url: "https://goprincetontigers.com/sports/mens-lacrosse/stats/2026" }]
  }),
  sourceTeam({
    id: "notre-dame",
    division: "D1",
    name: "Notre Dame Fighting Irish",
    school: "University of Notre Dame",
    conference: "ACC",
    colors: { primary: "#0C2340", secondary: "#C99700", accent: "#C99700", pillText: "#111111" },
    sources: [{ name: "Notre Dame Athletics men's lacrosse stats", type: "Official school cumulative statistics", url: "https://fightingirish.com/sports/mlax/stats/2026" }]
  }),
  sourceTeam({
    id: "georgetown",
    division: "D1",
    name: "Georgetown Hoyas",
    school: "Georgetown University",
    conference: "Big East",
    colors: { primary: "#041E42", secondary: "#8D817B", accent: "#8D817B", pillText: "#ffffff" },
    sources: [{ name: "Georgetown Athletics 2026 men's lacrosse stats", type: "Official school cumulative statistics", url: "https://guhoyas.com/sports/mens-lacrosse/stats/2026" }]
  }),
  sourceTeam({
    id: "denver",
    division: "D1",
    name: "Denver Pioneers",
    school: "University of Denver",
    conference: "Big East",
    colors: { primary: "#8B2332", secondary: "#C8C9C7", accent: "#C8C9C7", pillText: "#111111" },
    sources: [{ name: "Denver Athletics 2026 men's lacrosse stats", type: "Official school cumulative statistics", url: "https://denverpioneers.com/sports/mens-lacrosse/stats/2026" }]
  }),
  sourceTeam({
    id: "johns-hopkins",
    division: "D1",
    name: "Johns Hopkins Blue Jays",
    school: "Johns Hopkins University",
    conference: "Big Ten",
    colors: { primary: "#002D72", secondary: "#68ACE5", accent: "#68ACE5", pillText: "#102026" },
    sources: [{ name: "Johns Hopkins Athletics 2026 men's lacrosse stats", type: "Official school cumulative statistics", url: "https://hopkinssports.com/sports/mens-lacrosse/stats/2026" }]
  }),
  sourceTeam({
    id: "richmond",
    division: "D1",
    name: "Richmond Spiders",
    school: "University of Richmond",
    conference: "Atlantic 10",
    colors: { primary: "#000066", secondary: "#CC0000", accent: "#CC0000", pillText: "#ffffff" },
    sources: [{ name: "Richmond Athletics 2026 men's lacrosse stats", type: "Official school cumulative statistics", url: "https://richmondspiders.com/sports/mens-lacrosse/stats/2026" }]
  }),
  sourceTeam({
    id: "virginia",
    division: "D1",
    name: "Virginia Cavaliers",
    school: "University of Virginia",
    conference: "ACC",
    colors: { primary: "#232D4B", secondary: "#E57200", accent: "#E57200", pillText: "#ffffff" },
    sources: [{ name: "Virginia Athletics men's lacrosse stats", type: "Official school cumulative statistics", url: "https://virginiasports.com/sports/mlax/stats/" }]
  }),
  sourceTeam({
    id: "north-carolina",
    division: "D1",
    name: "North Carolina Tar Heels",
    school: "University of North Carolina",
    conference: "ACC",
    colors: { primary: "#13294B", secondary: "#4B9CD3", accent: "#4B9CD3", pillText: "#102026" },
    sources: [{ name: "North Carolina Athletics 2026 men's lacrosse stats", type: "Official school cumulative statistics", url: "https://goheels.com/sports/mens-lacrosse/stats/2026" }]
  }),
  sourceTeam({
    id: "towson",
    division: "D1",
    name: "Towson Tigers",
    school: "Towson University",
    conference: "CAA",
    colors: { primary: "#000000", secondary: "#FFCC00", accent: "#FFCC00", pillText: "#111111" },
    sources: [{ name: "Towson Athletics 2026 men's lacrosse stats", type: "Official school cumulative statistics", url: "https://towsontigers.com/sports/mens-lacrosse/stats/2026" }]
  }),
  sourceTeam({
    id: "monmouth",
    division: "D1",
    name: "Monmouth Hawks",
    school: "Monmouth University",
    conference: "CAA",
    colors: { primary: "#00205B", secondary: "#B2B4B2", accent: "#B2B4B2", pillText: "#111111" },
    sources: [{ name: "Monmouth Athletics 2026 men's lacrosse stats", type: "Official school cumulative statistics", url: "https://monmouthhawks.com/sports/mens-lacrosse/stats/2026" }]
  }),
  sourceTeam({
    id: "merrimack",
    division: "D1",
    name: "Merrimack Warriors",
    school: "Merrimack College",
    conference: "MAAC",
    colors: { primary: "#003A70", secondary: "#FFC72C", accent: "#FFC72C", pillText: "#111111" },
    sources: [{ name: "Merrimack Athletics 2026 men's lacrosse stats", type: "Official school cumulative statistics", url: "https://merrimackathletics.com/sports/mens-lacrosse/stats/2026" }]
  }),
  sourceTeam({
    id: "loyola-maryland",
    division: "D1",
    name: "Loyola Maryland Greyhounds",
    school: "Loyola University Maryland",
    conference: "Patriot League",
    colors: { primary: "#006747", secondary: "#B9975B", accent: "#B9975B", pillText: "#111111" },
    sources: [{ name: "Loyola Maryland Athletics 2026 men's lacrosse stats", type: "Official school cumulative statistics", url: "https://loyolagreyhounds.com/sports/mens-lacrosse/stats/2026" }]
  }),
  sourceTeam({
    id: "maryland",
    division: "D1",
    name: "Maryland Terrapins",
    school: "University of Maryland",
    conference: "Big Ten",
    colors: { primary: "#E03A3E", secondary: "#000000", accent: "#FFD200", pillText: "#111111" },
    sources: [{ name: "Maryland Athletics 2026 men's lacrosse stats", type: "Official school cumulative statistics", url: "https://umterps.com/sports/mens-lacrosse/stats/2026" }]
  }),
  sourceTeam({
    id: "salisbury",
    division: "D3",
    name: "Salisbury Sea Gulls",
    school: "Salisbury University",
    conference: "Coast-to-Coast Athletic Conference",
    colors: { primary: "#7A0019", secondary: "#C99700", accent: "#C99700", pillText: "#111111" },
    sources: [{ name: "Salisbury Athletics 2026 men's lacrosse stats", type: "Official school cumulative statistics", url: "https://suseagulls.com/sports/mens-lacrosse/stats/2026" }]
  }),
  sourceTeam({
    id: "tufts",
    division: "D3",
    name: "Tufts Jumbos",
    school: "Tufts University",
    conference: "NESCAC",
    colors: { primary: "#3172AE", secondary: "#502D0E", accent: "#7EC0EE", pillText: "#102026" },
    sources: [{ name: "Tufts Athletics 2026 men's lacrosse stats", type: "Official school cumulative statistics", url: "https://gotuftsjumbos.com/sports/mens-lacrosse/stats/2026" }]
  }),
  sourceTeam({
    id: "suny-oneonta",
    division: "D3",
    name: "SUNY Oneonta Red Dragons",
    school: "SUNY Oneonta",
    conference: "SUNYAC",
    colors: { primary: "#C8102E", secondary: "#FFB81C", accent: "#FFB81C", pillText: "#111111" },
    sources: [{ name: "SUNY Oneonta Athletics 2026 men's lacrosse stats", type: "Official school cumulative statistics", url: "https://oneontaathletics.com/sports/mens-lacrosse/stats/2026" }]
  }),
  sourceTeam({
    id: "oswego-state",
    division: "D3",
    name: "Oswego State Lakers",
    school: "SUNY Oswego",
    conference: "SUNYAC",
    colors: { primary: "#006747", secondary: "#FFB81C", accent: "#FFB81C", pillText: "#111111" },
    sources: [{ name: "Oswego State Athletics 2026 men's lacrosse stats", type: "Official school cumulative statistics", url: "https://oswegolakers.com/sports/mens-lacrosse/stats/2026" }]
  }),
  sourceTeam({
    id: "suny-cortland",
    division: "D3",
    name: "SUNY Cortland Red Dragons",
    school: "SUNY Cortland",
    conference: "SUNYAC",
    colors: { primary: "#CC0000", secondary: "#111111", accent: "#FFFFFF", pillText: "#111111" },
    sources: [{ name: "SUNY Cortland Athletics 2026 men's lacrosse stats", type: "Official school cumulative statistics", url: "https://cortlandreddragons.com/sports/mens-lacrosse/stats/2026" }]
  }),
  sourceTeam({
    id: "suny-brockport",
    division: "D3",
    name: "SUNY Brockport Golden Eagles",
    school: "SUNY Brockport",
    conference: "SUNYAC",
    colors: { primary: "#004B23", secondary: "#FFC72C", accent: "#FFC72C", pillText: "#111111" },
    sources: [{ name: "SUNY Brockport Athletics 2026 men's lacrosse stats", type: "Official school cumulative statistics", url: "https://gobrockport.com/sports/mens-lacrosse/stats/2026" }]
  }),
  sourceTeam({
    id: "suny-canton",
    division: "D3",
    name: "SUNY Canton Kangaroos",
    school: "SUNY Canton",
    conference: "North Atlantic Conference",
    colors: { primary: "#003D79", secondary: "#78BE20", accent: "#78BE20", pillText: "#111111" },
    sources: [{ name: "SUNY Canton Athletics 2026 men's lacrosse stats", type: "Official school cumulative statistics", url: "https://rooathletics.com/sports/mens-lacrosse/stats/2026" }]
  }),
  sourceTeam({
    id: "tampa",
    division: "D3",
    name: "Tampa Spartans",
    school: "University of Tampa",
    conference: "Sunshine State Conference",
    officialLevel: "NCAA Division II",
    colors: { primary: "#C8102E", secondary: "#111111", accent: "#FFFFFF", pillText: "#111111" },
    sources: [{ name: "Tampa Athletics men's lacrosse page", type: "Official school athletics page", url: "https://tampaspartans.prestosports.com/sports/mlax/headlines-featured" }],
    notes: ["Tampa is officially an NCAA Division II program, but it is placed in the D3 dropdown here because that is where it was requested."]
  }),
  sourceTeam({
    id: "hudson-valley-cc",
    division: "JUCO",
    name: "Hudson Valley Community College Vikings",
    school: "Hudson Valley Community College",
    conference: "NJCAA Region 3",
    colors: { primary: "#006747", secondary: "#FFB81C", accent: "#FFB81C", pillText: "#111111" },
    sources: [{ name: "Hudson Valley CC men's lacrosse", type: "Official school athletics page", url: "https://athletics.hvcc.edu/sports/mlax" }]
  }),
  sourceTeam({
    id: "onondaga-cc",
    division: "JUCO",
    name: "Onondaga Community College Lazers",
    school: "Onondaga Community College",
    conference: "NJCAA Region 3",
    colors: { primary: "#003057", secondary: "#00A651", accent: "#00A651", pillText: "#102026" },
    sources: [{ name: "Onondaga CC men's lacrosse stats", type: "Official school athletics stats", url: "https://onondagazers.com/sports/mlax/2025-26/stats" }]
  }),
  sourceTeam({
    id: "nassau-cc",
    division: "JUCO",
    name: "Nassau Community College Lions",
    school: "Nassau Community College",
    conference: "NJCAA Region 15",
    colors: { primary: "#002855", secondary: "#F58220", accent: "#F58220", pillText: "#111111" },
    sources: [{ name: "Nassau CC men's lacrosse stats", type: "Official school athletics stats", url: "https://nassaulions.com/sports/mlax/2025-26/stats" }]
  }),
  sourceTeam({
    id: "harford-cc",
    division: "JUCO",
    name: "Harford Community College Fighting Owls",
    school: "Harford Community College",
    conference: "NJCAA Region 20",
    colors: { primary: "#003DA5", secondary: "#C8102E", accent: "#C8102E", pillText: "#ffffff" },
    sources: [{ name: "Harford CC men's lacrosse stats", type: "Official school athletics stats", url: "https://harfordathletics.com/sports/mlax/2025-26/stats" }]
  }),
  sourceTeam({
    id: "howard-cc",
    division: "JUCO",
    name: "Howard Community College Dragons",
    school: "Howard Community College",
    conference: "NJCAA Region 20",
    colors: { primary: "#7A0019", secondary: "#FDB515", accent: "#FDB515", pillText: "#111111" },
    sources: [{ name: "Howard CC men's lacrosse stats", type: "Official school athletics stats", url: "https://howardccdragons.com/sports/mlax/2025-26/stats" }]
  }),
  sourceTeam({
    id: "ccbc-essex",
    division: "JUCO",
    name: "CCBC Essex Knights",
    school: "Community College of Baltimore County Essex",
    conference: "NJCAA Region 20",
    colors: { primary: "#004B23", secondary: "#FFC72C", accent: "#FFC72C", pillText: "#111111" },
    sources: [{ name: "CCBC Essex men's lacrosse stats", type: "Official school athletics stats", url: "https://ccbcessexknights.com/sports/mlax/2025-26/stats" }]
  }),
  sourceTeam({
    id: "herkimer-cc",
    division: "JUCO",
    name: "Herkimer County Community College Generals",
    school: "Herkimer County Community College",
    conference: "NJCAA Region 3",
    colors: { primary: "#006341", secondary: "#FFD100", accent: "#FFD100", pillText: "#111111" },
    sources: [{ name: "Herkimer College men's lacrosse stats", type: "Official school athletics stats", url: "https://herkimerathletics.com/sports/mlax/2025-26/stats" }]
  }),
  sourceTeam({
    id: "tompkins-cortland-cc",
    division: "JUCO",
    name: "Tompkins Cortland Community College Panthers",
    school: "Tompkins Cortland Community College",
    conference: "NJCAA Region 3",
    colors: { primary: "#004B23", secondary: "#FFFFFF", accent: "#FFFFFF", pillText: "#111111" },
    sources: [{ name: "Tompkins Cortland CC men's lacrosse stats", type: "Official school athletics stats", url: "https://tompkinscortlandpanthers.com/sports/mlax/2025-26/stats" }]
  }),
  sourceTeam({
    id: "mohawk-valley-cc",
    division: "JUCO",
    name: "Mohawk Valley Community College Hawks",
    school: "Mohawk Valley Community College",
    conference: "NJCAA Region 3",
    colors: { primary: "#006747", secondary: "#111111", accent: "#FFFFFF", pillText: "#111111" },
    sources: [{ name: "Mohawk Valley CC men's lacrosse stats", type: "Official school athletics stats", url: "https://mvhawks.com/sports/mlax/2025-26/stats" }]
  })
];

teams.push(...requestedTeams);

const teamColors = {
  duke: { primary: "#001A57", secondary: "#00539B", accent: "#FFFFFF", pillText: "#102026" },
  cornell: { primary: "#B31B1B", secondary: "#222222", accent: "#FFFFFF", pillText: "#102026" },
  syracuse: { primary: "#D44500", secondary: "#0F2D52", accent: "#FFFFFF", pillText: "#102026" },
  adelphi: { primary: "#4B116F", secondary: "#FFB71B", accent: "#FFB71B", pillText: "#111111" },
  mercy: { primary: "#003A70", secondary: "#FFFFFF", accent: "#FFFFFF", pillText: "#111111" },
  rollins: { primary: "#005DAA", secondary: "#F5A800", accent: "#F5A800", pillText: "#111111" },
  stevens: { primary: "#A32638", secondary: "#4B4F54", accent: "#FFFFFF", pillText: "#111111" },
  rit: { primary: "#F76902", secondary: "#513127", accent: "#FFFFFF", pillText: "#111111" },
  "suny-poly": { primary: "#005DAA", secondary: "#F58220", accent: "#F58220", pillText: "#111111" }
};

const completionData = window.statCompletions || {};
teams.forEach((team) => {
  const completion = completionData[team.id];
  if (completion) {
    const currentColors = team.colors;
    Object.assign(team, completion);
    if (currentColors) {
      team.colors = currentColors;
    }
  }
});

const divisionSelects = Array.from(document.querySelectorAll("select[data-division]"));
const dashboard = document.querySelector("#dashboard");
const sourceList = document.querySelector("#source-list");

const divisionLabels = {
  D1: "Division I",
  D2: "Division II",
  D3: "Division III",
  JUCO: "JUCO"
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatStat(value) {
  if (value === undefined || value === null || value === "") {
    return "-";
  }
  if (typeof value === "number") {
    return value.toLocaleString("en-US");
  }
  return escapeHtml(value);
}

function formatPct(value) {
  if (value === undefined || value === null) {
    return "-";
  }
  return value.toFixed(3).replace(/^0/, "");
}

function perGame(total, games) {
  return games ? total / games : 0;
}

function formatPerGame(total, games) {
  return perGame(total, games).toFixed(2);
}

function derivedUnforcedTurnovers(team) {
  return Math.max(team.stats.turnovers - team.stats.opponentCausedTurnovers, 0);
}

function scoringMargin(team) {
  return (team.games ? (team.stats.goals - team.stats.goalsAllowed) / team.games : 0).toFixed(2);
}

function barWidth(value, max) {
  return `${Math.min((value / max) * 100, 100).toFixed(1)}%`;
}

function hasFullStats(team) {
  return Boolean(team.stats && typeof team.stats.goals === "number");
}

function sourcesForTeam(team) {
  if (Array.isArray(team.sources)) {
    return team.sources;
  }

  return (team.sourceIds || []).map((sourceId) => sourceCatalog[sourceId]).filter(Boolean);
}

function sourceKey(source) {
  return `${source.name}|${source.url}`;
}

function allSources() {
  const map = new Map();
  sourceCatalog.forEach((source) => map.set(sourceKey(source), source));
  teams.forEach((team) => {
    sourcesForTeam(team).forEach((source) => map.set(sourceKey(source), source));
  });
  return Array.from(map.values());
}

function getColors(team) {
  return team.colors || teamColors[team.id] || { primary: "#0f3a35", secondary: "#17624d", accent: "#c79b3c", pillText: "#111111" };
}

function styleForTeam(team) {
  const colors = getColors(team);
  return [
    `--team-primary: ${colors.primary}`,
    `--team-secondary: ${colors.secondary}`,
    `--team-accent: ${colors.accent}`,
    `--team-pill-text: ${colors.pillText || "#111111"}`
  ].join("; ");
}

function populateSelectors() {
  divisionSelects.forEach((select) => {
    const division = select.dataset.division;
    teams
      .filter((team) => team.division === division)
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach((team) => {
        const option = document.createElement("option");
        option.value = team.id;
        option.textContent = team.name;
        select.appendChild(option);
      });
  });
}

function renderSources() {
  sourceList.innerHTML = allSources().map((source) => `
    <article class="source-card">
      <h3>${escapeHtml(source.name)}</h3>
      <p>${escapeHtml(source.type)}</p>
      <a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">Open source</a>
    </article>
  `).join("");
}

function renderEmptyState() {
  dashboard.innerHTML = `
    <div class="empty-state">
      <div>
        <p class="eyebrow">Ready to explore</p>
        <h2>Select a team to load the stat profile</h2>
        <p>
          Completed profiles include reported team totals, per-game pace, saves, ground balls, caused turnovers,
          a derived unforced-turnover estimate, player leaders, goalie stats, colors, and source credits.
        </p>
        <p class="note">
          Every listed team uses the same stat categories so the profiles compare cleanly across D1, D2, D3, and JUCO.
        </p>
      </div>
      <div class="mini-board" aria-hidden="true">
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
      </div>
    </div>
  `;
}

function makeMetricCard(label, value, detail) {
  return `
    <article class="metric-card">
      <span>${escapeHtml(label)}</span>
      <strong>${formatStat(value)}</strong>
      <small>${escapeHtml(detail)}</small>
    </article>
  `;
}

function renderBars(team) {
  const items = [
    { label: "Goals per game", value: perGame(team.stats.goals, team.games), max: 20 },
    { label: "Assists per game", value: perGame(team.stats.assists, team.games), max: 14 },
    { label: "Saves per game", value: perGame(team.stats.saves, team.games), max: 16 },
    { label: "Ground balls per game", value: perGame(team.stats.groundBalls, team.games), max: 48 },
    { label: "Caused turnovers per game", value: perGame(team.stats.causedTurnovers, team.games), max: 15 },
    { label: "Reported turnovers per game", value: perGame(team.stats.turnovers, team.games), max: 24 }
  ];

  return `
    <div class="bars">
      ${items.map((item) => `
        <div class="bar-row">
          <div class="bar-label">
            <span>${escapeHtml(item.label)}</span>
            <span>${item.value.toFixed(2)}</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill" style="--bar-width: ${barWidth(item.value, item.max)}"></div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderPlayerRows(players) {
  return players.map((player) => `
    <tr>
      <td><strong>${escapeHtml(player.name)}</strong><br><span class="note">${escapeHtml(player.role)}</span></td>
      <td>${formatStat(player.gp)}</td>
      <td>${formatStat(player.goals)}</td>
      <td>${formatStat(player.assists)}</td>
      <td>${formatStat(player.points)}</td>
      <td>${formatStat(player.groundBalls)}</td>
      <td>${formatStat(player.turnovers)}</td>
      <td>${formatStat(player.causedTurnovers)}</td>
      <td>${escapeHtml(player.extra)}</td>
    </tr>
  `).join("");
}

function renderGoalieRows(goalies) {
  return goalies.map((goalie) => `
    <tr>
      <td><strong>${escapeHtml(goalie.name)}</strong></td>
      <td>${escapeHtml(goalie.minutes)}</td>
      <td>${formatStat(goalie.goalsAllowed)}</td>
      <td>${formatStat(goalie.saves)}</td>
      <td>${formatPct(goalie.savePct)}</td>
      <td>${escapeHtml(goalie.record)}</td>
    </tr>
  `).join("");
}

function renderSourceReadyTeam(team) {
  const selectedSources = sourcesForTeam(team);
  dashboard.innerHTML = `
    <article class="team-profile" style="${styleForTeam(team)}">
      <header class="profile-header">
        <div class="profile-title">
          <p class="eyebrow">${escapeHtml(divisionLabels[team.division])}</p>
          <h2>${escapeHtml(team.name)}</h2>
          <p>${escapeHtml(team.school)} | ${escapeHtml(team.conference)} | ${escapeHtml(team.officialLevel || divisionLabels[team.division])}</p>
          <div class="pill-row">
            <span class="pill">Source-ready profile</span>
            <span class="pill">Team colors added</span>
            <span class="pill">Source links available</span>
          </div>
        </div>
        <div class="profile-meta">
          <div class="meta-stat">
            <strong>--</strong>
            <span>Goals/G</span>
          </div>
          <div class="meta-stat">
            <strong>--</strong>
            <span>Margin/G</span>
          </div>
          <div class="meta-stat">
            <strong>--</strong>
            <span>Save %</span>
          </div>
        </div>
      </header>

      <div class="profile-body source-ready">
        <section class="source-ready__panel">
          <h3>Stats Entry Checklist</h3>
          <p class="note">
            Use the linked official source page to fill this team with verified 2025-26 totals. This keeps the project honest and avoids made-up numbers.
          </p>
          <div class="stat-template" aria-label="Stats to enter">
            <span>Goals</span>
            <span>Assists</span>
            <span>Saves</span>
            <span>Ground balls</span>
            <span>Caused turnovers</span>
            <span>Total turnovers</span>
            <span>Opponent caused turnovers</span>
            <span>Faceoffs / clears</span>
          </div>
        </section>

        <section class="source-ready__panel">
          <h3>Source Notes</h3>
          ${team.notes.map((note) => `<p class="note">${escapeHtml(note)}</p>`).join("")}
          <div class="source-links">
            ${selectedSources.map((source) => `
              <a class="source-link" href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">
                ${escapeHtml(source.name)}
              </a>
            `).join("")}
          </div>
        </section>
      </div>
    </article>
  `;
}

function renderTeam(team) {
  if (!hasFullStats(team)) {
    renderSourceReadyTeam(team);
    return;
  }

  const unforcedTurnovers = derivedUnforcedTurnovers(team);
  const faceoffTotal = team.stats.faceoffsWon + team.stats.faceoffsLost;
  const selectedSources = sourcesForTeam(team);
  const dataLabel = team.dataLabel || `2025-26 season data entered from source pages checked ${team.asOf}`;
  const recordLabel = team.recordLabel || `Record: ${team.record}`;
  const gamesLabel = team.gamesLabel || `${team.games} games`;
  const statusPill = team.statusPill || "Not NCAA affiliated";

  dashboard.innerHTML = `
    <article class="team-profile" style="${styleForTeam(team)}">
      <header class="profile-header">
        <div class="profile-title">
          <p class="eyebrow">${escapeHtml(divisionLabels[team.division])}</p>
          <h2>${escapeHtml(team.name)}</h2>
          <p>${escapeHtml(team.school)} | ${escapeHtml(team.conference)} | ${escapeHtml(dataLabel)}</p>
          <div class="pill-row">
            <span class="pill">${escapeHtml(recordLabel)}</span>
            <span class="pill">${escapeHtml(gamesLabel)}</span>
            <span class="pill">${escapeHtml(statusPill)}</span>
          </div>
        </div>
        <div class="profile-meta">
          <div class="meta-stat">
            <strong>${formatPerGame(team.stats.goals, team.games)}</strong>
            <span>Goals/G</span>
          </div>
          <div class="meta-stat">
            <strong>${scoringMargin(team)}</strong>
            <span>Margin/G</span>
          </div>
          <div class="meta-stat">
            <strong>${formatPct(team.stats.savePct)}</strong>
            <span>Save %</span>
          </div>
        </div>
      </header>

      <div class="profile-body">
        <section class="metric-grid" aria-label="Key team statistics">
          ${makeMetricCard("Goals", team.stats.goals, `${formatPerGame(team.stats.goals, team.games)} per game`)}
          ${makeMetricCard("Assists", team.stats.assists, `${formatPerGame(team.stats.assists, team.games)} per game`)}
          ${makeMetricCard("Saves", team.stats.saves, `${formatPerGame(team.stats.saves, team.games)} per game`)}
          ${makeMetricCard("Ground balls", team.stats.groundBalls, `${formatPerGame(team.stats.groundBalls, team.games)} per game`)}
          ${makeMetricCard("Caused turnovers", team.stats.causedTurnovers, `${formatPerGame(team.stats.causedTurnovers, team.games)} per game`)}
          ${makeMetricCard("Derived unforced TO", unforcedTurnovers, "TO minus opponent CT")}
          ${makeMetricCard("Faceoff percentage", formatPct(team.stats.faceoffPct), `${team.stats.faceoffsWon}-${team.stats.faceoffsLost} on ${faceoffTotal} attempts`)}
          ${makeMetricCard("Clearing", formatPct(team.stats.clearPct), team.stats.clears || "0-0 clears")}
        </section>

        <div class="content-grid">
          <section class="panel">
            <h3>Season Pace</h3>
            ${renderBars(team)}
            <p class="note">
              Bar lengths are scaled for quick comparison across teams in this project dataset.
            </p>
          </section>

          <section class="panel">
            <h3>Team Totals</h3>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>${escapeHtml(team.name)}</th>
                    <th>Opponent / Context</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Goals</td><td>${formatStat(team.stats.goals)}</td><td>Allowed: ${formatStat(team.stats.goalsAllowed)}</td></tr>
                  <tr><td>Shots / SOG</td><td>${formatStat(team.stats.shots)} / ${formatStat(team.stats.shotsOnGoal)}</td><td>Shot % ${formatPct(team.stats.shotPct)} | SOG % ${formatPct(team.stats.sogPct)}</td></tr>
                  <tr><td>Turnovers</td><td>${formatStat(team.stats.turnovers)}</td><td>Opponent caused TO: ${formatStat(team.stats.opponentCausedTurnovers)}</td></tr>
                  <tr><td>Caused turnovers</td><td>${formatStat(team.stats.causedTurnovers)}</td><td>Opponent turnovers: ${formatStat(team.stats.opponentTurnovers)}</td></tr>
                  <tr><td>Man-up offense</td><td>${formatStat(team.stats.manUpGoals)} goals</td><td>${team.stats.manUpGoals}-${team.stats.manUpChances} (${formatPct(team.stats.manUpPct)})</td></tr>
                  <tr><td>Penalties</td><td>${escapeHtml(team.stats.penalties)}</td><td>${escapeHtml(team.penaltyContext || "Reported by school source")}</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section class="panel wide">
            <h3>Player Leaders and Highlights</h3>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Player</th>
                    <th>GP-GS</th>
                    <th>G</th>
                    <th>A</th>
                    <th>PTS</th>
                    <th>GB</th>
                    <th>TO</th>
                    <th>CT</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  ${renderPlayerRows(team.players)}
                </tbody>
              </table>
            </div>
          </section>

          <section class="panel wide">
            <h3>Goalie and Save Stats</h3>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Goalie / total</th>
                    <th>Minutes</th>
                    <th>GA</th>
                    <th>SV</th>
                    <th>SV%</th>
                    <th>Record</th>
                  </tr>
                </thead>
                <tbody>
                  ${renderGoalieRows(team.goalies)}
                </tbody>
              </table>
            </div>
          </section>

          <section class="panel wide">
            <h3>Source Notes</h3>
            ${team.notes.map((note) => `<p class="note">${escapeHtml(note)}</p>`).join("")}
            <p class="note">
              Unforced turnovers are shown as a derived estimate because most available NCAA and school stat pages report total turnovers and caused turnovers rather than a separate official unforced-turnover column.
            </p>
            <div class="source-links">
              ${selectedSources.map((source) => `
                <a class="source-link" href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">
                  ${escapeHtml(source.name)}
                </a>
              `).join("")}
            </div>
          </section>
        </div>
      </div>
    </article>
  `;
}

function onSelectChange(event) {
  const selectedId = event.target.value;
  divisionSelects.forEach((select) => {
    if (select !== event.target) {
      select.value = "";
    }
  });

  if (!selectedId) {
    renderEmptyState();
    return;
  }

  const team = teams.find((entry) => entry.id === selectedId);
  if (team) {
    renderTeam(team);
  }
}

populateSelectors();
renderSources();
renderEmptyState();

divisionSelects.forEach((select) => {
  select.addEventListener("change", onSelectChange);
});

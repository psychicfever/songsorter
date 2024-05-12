// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa
// 2014/6/29 Modified by nkeronkow
// 2018/11/26 Added to relick's github, changes tracked there
// github.com/relick/touhou-song-sorter

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'images/';
str_YouPath = 'https://www.youtube.com/embed/';
str_YouLink = 'https://www.youtube.com/watch?v=';

// Up to which position should images be shown for?
var int_ResultRank = 3;

// Maximum number of result rows before being broken off into another table.
var maxRows = 20;

var ary_TitleData = [
"P.C.F",
"PSYCHIC FILE I", 
"99.9 PSYCHIC RADIO",
"PSYCHIC FILE II", 
"Single", 
"Remix"]
;

// Number of columns in the selection list.
var int_Colspan = 4;

// * Music information
// [Index: Meaning]
// 0: unused
// 1: Track name
const TRACK_NAME = 1;
// 2: Array that maps to ary_TitleData, 0 = track not in title, 1 = track in title.
const TRACK_TITLES = 2;
// 3: Image filename
const TRACK_IMAGE = 3;
// 4: Youtube video ID
const TRACK_YOUTUBE_ID = 4;
// 5: Title (game/album) name
const TRACK_TITLE_NAME = 5;
// 6: Title (game/album) abbreviation
const TRACK_TITLE_ABBREV = 6;
// 7: Description of track
const TRACK_DESCRIPTION = 7;
// 8: If the *exact* same track appears in a later game then it should use [2] to specify rather than setting as arrangement.
const TRACK_IS_ARRANGEMENT = 8;
	const NOT_ARRANGEMENT = 0;
	const IS_ARRANGEMENT = 1;
// 9: Track type, Album tracks should all be marked as OTHER_THEME.
const TRACK_TYPE = 9;
	const STAGE_THEME = 1;
	const BOSS_THEME = 2;
	const STAGE_AND_BOSS_THEME = 3;
	const OTHER_THEME = 0;

var ary_SongData = [
//PCF
[1, "Hotline", [1,0,0,0,0,0], "es1-a-2w.png", "cqYuegYYP0c", "P.C.F", "P.C.F", "", 0, 0],
[1, "Choose One", [1,0,0,0,0,0], "es1-a-2w.png", "55FqGc2bW3Y", "P.C.F", "P.C.F", "", 0, 0],
[1, "Best For You", [1,0,0,0,0,0], "es1-a-2w.png", "kQRuRCq0j2s", "P.C.F", "P.C.F", "", 0, 0],
[1, "Tokyo Spiral", [1,0,0,0,0,0], "es1-a-2w.png", "st_e1bJoM5A", "P.C.F", "P.C.F", "", 0, 0],
[1, "Spread The Wings", [1,0,0,0,0,0], "es1-a-2w.png", "CqsDUSjx9r0", "P.C.F", "P.C.F", "", 0, 0],
[1, "Spark It Up", [1,0,0,0,0,0], "es1-a-2w.png", "ouSrJ0KXIYU", "P.C.F", "P.C.F", "", 0, 0],
[1, "Bitter Sweet", [1,0,0,0,0,0], "es1-a-2w.png", "XGnkTV0proU", "P.C.F", "P.C.F", "", 0, 0],
[1, "Snow Candy", [1,0,0,0,0,0], "es1-a-2w.png", "oRBu9RhHcMs", "P.C.F", "P.C.F", "", 0, 0],
[1, "PSYCHIC FEVER!!", [1,0,0,0,0,0], "es1-a-2w.png", "clurELOmptw", "P.C.F", "P.C.F", "", 0, 0],
	
//PF1
[1, "BAKU BAKU", [0,1,0,0,0,0], "es1-a-2w.png", "4QhFTHu3N-c", "PSYCHIC FILE I", "PSYCHIC FILE I", "", 0, 0],
[1, "Highlights", [0,1,0,0,0,0], "es1-a-2w.png", "Ck1iB6d3J88", "PSYCHIC FILE I", "PSYCHIC FILE I", "", 0, 0],
[1, "アシンメトリー (Asymmetry)", [0,1,0,0,0,0], "es1-a-2w.png", "N1lVtFyNqDk", "PSYCHIC FILE I", "PSYCHIC FILE I", "", 0, 0],
[1, "Nice & Slow", [0,1,0,0,0,0], "es1-a-2w.png", "J3Ge1d5k5Ag", "PSYCHIC FILE I", "PSYCHIC FILE I", "", 0, 0],
[1, "Up and Down", [0,1,0,0,0,0], "es1-a-2w.png", "nXuDvi4L_w8", "PSYCHIC FILE I", "PSYCHIC FILE I", "", 0, 0],
[1, "ForEVER", [0,1,0,0,0,0], "es1-a-2w.png", "PyxEfBtp0sE", "PSYCHIC FILE I", "PSYCHIC FILE I", "", 0, 0],

//99
[1, "Just Like Dat feat. JP THE WAVY", [0,0,1,0,0,0], "es1-a-2w.png", "pnn8AaSPlGk", "99.9 Psychic Radio", "99.9 Psychic Radio", "", 0, 0],
[1, "Psyfe Cypher", [0,0,1,0,0,0], "es1-a-2w.png", "TsutU7yYCHk", "99.9 Psychic Radio", "99.9 Psychic Radio", "", 0, 0],
[1, "Rocket (Take You Higher)", [0,0,1,0,0,0], "es1-a-2w.png", "AVK6mBS8y7w", "99.9 Psychic Radio", "99.9 Psychic Radio", "", 0, 0],

	
//PF2
[1, "Love Fire", [0,0,0,1,0,0], "es1-a-2w.png", "BPebdyHsULM", "PSYCHIC FILE II", "PSYCHIC FILE II", "", 0, 0],
[1, "IGNITION", [0,0,0,1,0,0], "es1-a-2w.png", "O9ea0o0fKS8", "PSYCHIC FILE II", "PSYCHIC FILE II", "", 0, 0],
[1, "BEE-PO", [0,0,0,1,0,0], "es1-a-2w.png", "9dVUgo1EuII", "PSYCHIC FILE II", "PSYCHIC FILE II", "", 0, 0],
[1, "Pinky Swear", [0,0,0,1,0,0], "es1-a-2w.png", "oxb8ILrxDFU", "PSYCHIC FILE II", "PSYCHIC FILE II", "", 0, 0],
[1, "DOKONI", [0,0,0,1,0,0], "es1-a-2w.png", "Ntni2wHR2RQ", "PSYCHIC FILE II", "PSYCHIC FILE II", "", 0, 0],

//SINGLE
[1, "To The Top feat. DVI", [0,1,0,0,0,0], "es1-a-2w.png", "PyxEfBtp0sE", "PSYCHIC FILE I", "PSYCHIC FILE I", "", 0, 0],
[1, "Temperature (Prod. JP THE WAVY)", [0,0,1,0,0,0], "es1-a-2w.png", "80KQMCwLzVs", "99.9 Psychic Radio", "99.9 Psychic Radio", "", 0, 0],
[1, "THE HEAT", [0,0,0,1,0,0], "es1-a-2w.png", "W9rVDHklH1E", "PSYCHIC FILE II", "PSYCHIC FILE II", "", 0, 0],
[1, "FIRE feat. SPRITE", [0,0,0,1,0,0], "es1-a-2w.png", "yKuaLiwclQU", "PSYCHIC FILE II", "PSYCHIC FILE II", "", 0, 0],
[1, "SPICE feat. F.HERO & BEAR KNUCKLE", [0,0,0,0,1,0], "es1-a-2w.png", "ZcHwy4dK69Q", "Single", "Single", "", 0, 0],
[1, "HABANERO", [0,0,0,0,1,0], "es1-a-2w.png", "AVK6mBS8y7w", "Single", "Single", "Battle of Tokyo", 0, 0],
[1, "RICH & BAD", [0,0,0,0,1,0], "es1-a-2w.png", "AVK6mBS8y7w", "Single", "Single", "Battle of Tokyo", 0, 0],

//REMIX
[1, "Hotline (Remix) feat. JP THE WAVY", [1,0,0,0,0,0], "es1-a-2w.png", "Do8xvgQuDRA", "P.C.F", "P.C.F", "Remix", 0, 0],
[1, "Highlights (Twilight Remix)", [0,0,0,0,0,1], "es1-a-2w.png", "Do8xvgQuDRA", "Remix", "Remix", "Remix", 0, 0],
[1, "Choose One (Remix) [feat. REO]", [0,0,0,0,0,1], "es1-a-2w.png", "Do8xvgQuDRA", "Remix", "Remix", "Remix", 0, 0],
];

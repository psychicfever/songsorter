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
var maxRows = 42;

// * Game and album titles
var ary_TitleData = [
"P.C.F",
"PSYCHIC FILE I", 
"99.9 PSYCHIC RADIO",
"PSYCHIC FILE II", 
"Singles", 
"Remixes"
];

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
[1, "Aikagi -unplugged ver.-", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Hoshi no Miyako.png", "ZaNuUH7anU8", "Hoshi no Miyako", "Hoshi no Miyako", "", 1, 0],
[1, "Alibi", [0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "Hoshi no Miyako.png", "gpxyLpwRrsk", "Hoshi no Miyako", "Hoshi no Miyako", "", 0, 0],
[1, "Binetsu", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Hoshi no Miyako.png", "QjFhwBNWb5c", "Hoshi no Miyako", "Hoshi no Miyako", "", 0, 0],
[1, "Caramel", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Hoshi no Miyako.png", "Q2-CWVDUJAg", "Hoshi no Miyako", "Hoshi no Miyako", "", 0, 0],
[1, "Hoshi no Miyako", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Hoshi no Miyako.png", "eya9viB-v8s", "Hoshi no Miyako", "Hoshi no Miyako", "", 0, 0],
[1, "Izon no Niwa", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Hoshi no Miyako.png", "p0ezADwaLVM", "Hoshi no Miyako", "Hoshi no Miyako", "", 0, 0],
[1, "Ringo Ame", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Hoshi no Miyako.png", "9pLCa7ZbQ78", "Hoshi no Miyako", "Hoshi no Miyako", "", 0, 0],
[1, "Sono Daisho", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Hoshi no Miyako.png", "l-_Eqrp-LLs", "Hoshi no Miyako", "Hoshi no Miyako", "", 0, 0],
[1, "Sweet?", [0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "Sweet.png", "9llwW5E5tHI", "Sweet?", "", "", 0, 0],
[1, "Toge to Neko", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Hoshi no Miyako.png", "xDPFAzrjdvU", "Hoshi no Miyako", "Hoshi no Miyako", "", 0, 0],
[1, "Yell", [0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "Hoshi no Miyako.png", "u_CIUuRlwFo", "Hoshi no Miyako", "Hoshi no Miyako", "", 0, 0],

//99
[1, "chapter 1", [0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "chapter 1.png", "545F9DRWccM", "chapter 1", "", "", 0, 0],
[1, "Hosoikoe", [0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "Hosoikoe.png", "RWTvQkZEN6U", "Hosoikoe", "", "", 0, 0],
[1, "live", [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "play.png", "5StYQbz-0_Y", "play", "play", "", 0, 0],
[1, "Milk", [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "play.png", "P4FHbqwsmL8", "play", "play", "", 0, 0],
[1, "Otegami", [0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0], "Otegami.png", "ucKuWm3P6Ao", "Otegami", "", "", 0, 0],
[1, "park", [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "play.png", "9CCVg8R5wEU", "play", "play", "", 0, 0],
[1, "Room", [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "play.png", "8J6mPjzYtNE", "play", "play", "", 0, 0],
[1, "Shiroi Blouse Kawaii Hito", [0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "play.png", "v8vT-uyqweU", "play", "play", "", 0, 0],
[1, "Shutter Speed", [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "play.png", "Ou0u88-x6wg", "play", "play", "", 0, 0],
[1, "Slow", [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "play.png", "FR50bgMjz84", "play", "play", "", 0, 0],
[1, "Wana", [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "play.png", "kNiXJAm1TY0", "play", "play", "", 0, 0],
[1, "Yogoreta Yubi", [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "play.png", "j70Mj469Pis", "play", "play", "", 0, 0],
	
/PF2
[1, "and boyfriend", [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "Sentimental Macchiato.png", "TJOsuADKwn0", "Sentimental Macchiato", "Sentimental Macchiato", "", 0, 0],
[1, "Dear Tokyo", [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Sentimental Macchiato.png", "s8St4aJIxBI", "Sentimental Macchiato", "Sentimental Macchiato", "", 0, 0],
[1, "Mascara", [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Sentimental Macchiato.png", "oDElg7X0ucQ", "Sentimental Macchiato", "Sentimental Macchiato", "", 0, 0],
[1, "Migite no Spoon to Hatsukoi to Knife", [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Sentimental Macchiato.png", "PiKEkczSEHE", "Sentimental Macchiato", "Sentimental Macchiato", "", 0, 0],
[1, "Mitsuyubi", [0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "Mitsuyubi.png", "_5MyZOA3MmM", "Mitsuyubi", "", "", 0, 0],
[1, "Namida no Ondo", [0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "Namida no Ondo.png", "-uV5PEiyxeo", "Namida no Ondo", "", "", 0, 0],
[1, "Natsukoi", [0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0], "Natsukoi.png", "t2Yh8hC32w0", "Natsukoi", "", "", 0, 0],
[1, "orion", [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Sentimental Macchiato.png", "h_ahtTJiihM", "Sentimental Macchiato", "Sentimental Macchiato", "", 0, 0],
[1, "Shougen", [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Sentimental Macchiato.png", "CgOb1kg2eJw", "Sentimental Macchiato", "Sentimental Macchiato", "", 0, 0],
[1, "smile", [0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "smile.png", "gVQ2mCPOyZY", "smile", "", "", 0, 0],
[1, "Yuukan Collection", [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Sentimental Macchiato.png", "AzKx_fr76og", "Sentimental Macchiato", "Sentimental Macchiato", "", 0, 0],

//SINGLE
[1, "capsule", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "hikari.png", "YR0zbHb5Fik", "hikari", "hikari", "", 0, 0],
[1, "Circus", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,00], "hikari.png", "aVpc43QXI8I", "hikari", "hikari", "", 0, 0],
[1, "Drama", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "hikari.png", "Hh5XHN8ov4o", "hikari", "hikari", "Fullmetal Alchemist: Prince of the Dawn Opening", 0, 1],
[1, "Hikari", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "hikari.png", "fkdaJPzbw6k", "hikari", "hikari", "", 0, 0],
[1, "Monochrome no Kiss", [0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0], "Monochrome no Kiss.png", "L3gvc189xd0", "Monochrome no Kiss", "", "Black Butler Opening 1", 0, 1],
[1, "Mousou Nikki 2", [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "hikari.png", "NhZs1mC_r5o", "hikari", "hikari", "", 0, 0],
[1, "Nakidashita Onna to Kyomukan", [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0], "Nidome no Kanojo.png", "gIdpxscOgD0", "Nidome no Kanojo", "", "", 0, 0],
[1, "Nidome no Kanojo", [0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "Nidome no Kanojo.png", "nxMNVaWi2sM", "Nidome no Kanojo", "", "", 0, 0],
[1, "Rakuen", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "hikari.png", "yEsd-5Tdhy0", "hikari", "hikari", "", 0, 0],
[1, "Tsumiki Kuzushi", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "hikari.png", "9O31M_bgxBk", "hikari", "hikari", "", 0, 0],
[1, "Uso", [0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0], "Uso.png", "sKu3LjLW4CQ", "Uso", "", "Fullmetal Alchemist: Brotherhood Ending 1", 0, 1],
	
//REMIX
[1, "Hotline (Remix) feat. JP THE WAVY", [1,0,0,0,0,0], "es1-a-2w.png", "Do8xvgQuDRA", "P.C.F", "P.C.F", "Remix", 0, 0],
[1, "Owari no Hajimari", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "Owari no Hajimari.png", "jdEVhT5z1hA", "Owari no Hajimari", "Taiki", "written for Taiki", 0, 0],
[1, "Usubeniiro no Yakusoku", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "Usubeniiro no Yakusoku.png", "i4q--jr5tB0", "Ensemble Stars! Album Series PRESENT -AKATSUKI-", "AKATSUKI", "written for AKATSUKI (Ensemble Stars!)", 0, 0],
[1, "Zakuro", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "Zakuro:Kyouki no Melody.png", "i8SX5nGvesI", "Zakuro/Kyouki no Melody", "Fantôme Iris", "written for Fantôme Iris (from ARGONAVIS)", 0, 0]
];

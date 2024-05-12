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
"Renai",
"Hoshi no Miyako",
"play",
"Sentimental Macchiato",
"hikari",
"dead stock",
"M&W",
"OUTSIDER",
"NOMAD",
"Ichiban Suki na Basho",
"Shounin Yokkyu",
"Umibe",
"SID 10th Anniversary BEST",
"SID ALL SINGLES BEST",
"SID Anime Best 2008-2017",
"Side A complete collection",
"Side B complete collection ~e.B~",
"Side B complete collection 〜e.B 2〜",
"Side B complete collection 〜e.B 3〜",
"Side B complete collection 〜e.B 4〜",
"Side B complete collection 〜e.B 5〜",
"Non-album releases",
"Concert Themes",
"Cover Songs",
"Other Artists"
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
//Renai
[1, "hotline", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Renai.png", "PQY8b94BqKc", "Renai", "Renai", "", 0, 0],
[1, "Akagami Shuffle", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Renai.png", "uIP-rKPCJ1M", "Renai", "Renai", "", 0, 0],
	
//Hoshi no Miyako
[1, "Aikagi -unplugged ver.-", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Hoshi no Miyako.png", "ZaNuUH7anU8", "Hoshi no Miyako", "Hoshi no Miyako", "", 1, 0],

//play
[1, "chapter 1", [0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "chapter 1.png", "545F9DRWccM", "chapter 1", "", "", 0, 0],
	
//Sentimental Macchiato
[1, "and boyfriend", [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "Sentimental Macchiato.png", "TJOsuADKwn0", "Sentimental Macchiato", "Sentimental Macchiato", "", 0, 0],

//hikari
[1, "capsule", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "hikari.png", "YR0zbHb5Fik", "hikari", "hikari", "", 0, 0],
	
//dead stock
[1, "cosmetic",	[0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "cosmetic.png", "Q3lzZoGd6z0", "cosmetic", "", "", 0, 0],
	
//M&W
[1, "Café de Bossa", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "M&W.png", "IUy1gOWaceo", "M&W", "M&W", "", 0, 0],

//OUTSIDER
[1, "Akaite", [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "OUTSIDER.png", "ER2Rm73wgqI", "OUTSIDER", "OUTSIDER", "", 0, 0],

//NOMAD
[1, "Butterfly Effect", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Butterfly Effect.png", "3ulJz9M1Qak", "Butterfly Effect", "", "", 0, 0],
	
//Ichiban Suki na Basho
[1, "Ichiban Suki na Basho", [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Ichiban Suki na Basho.png", "ZhF60NfXpKo", "Ichiban Suki na Basho", "", "", 0, 0],
	
//Shounin Yokkyu
[1, "Awai Ashiato", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "Shounin Yokkyu.png", "3jRDnm1CoIA", "Shounin Yokkyu", "Shounin Yokkyu", "", 0, 0],
[1, "Blood Vessel", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "Shounin Yokkyu.png", "9A7HLX47NWE", "Shounin Yokkyu", "Shounin Yokkyu", "", 0, 0],
	
//Umibe
[1, "Daisuki Dakara...", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "Umibe.png", "-Y8VqWE2SQw", "Umibe", "Umibe", "", 0, 0],
	
	
//SID ALL SINGLES BEST
[1, "ENAMEL", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0], "ENAMEL.png", "4C2AC0iH8Kc", "ENAMEL", "", "Black Butler: Book of Circus Opening", 0, 1],
	
//SID Anime Best 2008-2017
[1, "ASH", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0], "SID Anime Best 2008-2017.png", "TaeUco6mL-g", "SID Anime Best 2008-2017", "Anime Best", "Self-cover of LiSA's ASH", 1, 1],
	
//Side A complete collection
[1, "delete", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "delete.png", "zNk8xw0AwPk", "delete", "", "The Seven Deadly Sins: Wrath of The Gods Opening 2", 0, 1],
	

//Side B complete collection 〜e.B〜
[1, "Aoi Renga", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "chapter 1.png", "JtxG1-lPJGU", "chapter 1", "chapter 1", "", 0, 0],
	
//Side B complete collection 〜e.B 2〜/Side B complete collection 〜e.B 4〜
[1, "CELEBRITY", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0], "Side B complete collection 〜e.B 2〜.png", "IVlqnWcCTOo", "Side B complete collection 〜e.B 2〜", "Side B 2", "", 0, 0],

//Side B complete collection 〜e.B 3〜/Side B complete collection 〜e.B 4〜
[1, "Akikaze", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0], "Itsuka.png", "uMgQD9FjcZY", "Itsuka", "Itsuka", "", 0, 0],
	
//Side B complete collection 〜e.B 5〜
[1, "Chiisana Tsubasa", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "Garasu no Hitomi.png", "nknQ7te4YAk", "Garasu no Hitomi", "Garasu no Hitomi", "", 0, 0]
];

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
"For Other Artists"
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
[1, "Ajisai", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Renai.png", "PQY8b94BqKc", "Renai", "Renai", "", 0, 0],
[1, "Akagami Shuffle", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Renai.png", "uIP-rKPCJ1M", "Renai", "Renai", "", 0, 0],
[1, "Ao", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Renai.png", "jk8mAkFh9tU", "Renai", "Renai", "", 0, 0],
[1, "Doyoubi no Onna", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Renai.png", "_-SQ8FB9Wik", "Renai", "Renai", "", 0, 0],
[1, "Hitsuyou Aku", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Renai.png", "vyr2ANfsvYw", "Renai", "Renai", "", 0, 0],
[1, "Kara no Binsen, Sora e no Tegami", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Renai.png", "_1h7Q_DVx8I", "Renai", "Renai", "", 0, 0],
[1, "Mousou Nikki", [1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "Renai.png", "5NPgKjtm_3A", "Renai", "Renai", "", 0, 0],
[1, "Owakare no Uta", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Renai.png", "YV4bddWej9Q", "Renai", "Renai", "", 0, 0],
[1, "Rinjin", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Renai.png", "qW_F6WM9DyI", "Renai", "Renai", "", 0, 0],
[1, "Virtual Bansankai", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Renai.png", "srXskRyAAas", "Renai", "Renai", "", 0, 0],
[1, "Watashi wa Ame", [1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "Renai.png", "5k5OXVsCBS0", "Renai", "Renai", "", 0, 0],
	
//Hoshi no Miyako
[1, "Aikagi -unplugged ver.-", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Hoshi no Miyako.png", "ZaNuUH7anU8", "Hoshi no Miyako", "Hoshi no Miyako", "", 1, 0],
[1, "Alibi", [0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "Hoshi no Miyako.png", "gpxyLpwRrsk", "Hoshi no Miyako", "Hoshi no Miyako", "", 0, 0],
[1, "Binetsu", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Hoshi no Miyako.png", "QjFhwBNWb5c", "Hoshi no Miyako", "Hoshi no Miyako", "", 0, 0],
[1, "Caramel", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Hoshi no Miyako.png", "Q2-CWVDUJAg", "Hoshi no Miyako", "Hoshi no Miyako", "", 0, 0],
[1, "Hoshi no Miyako", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Hoshi no Miyako.png", "eya9viB-v8s", "Hoshi no Miyako", "Hoshi no Miyako", "", 0, 0],
[1, "Izon no Niwa", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Hoshi no Miyako.png", "p0ezADwaLVM", "Hoshi no Miyako", "Hoshi no Miyako", "", 0, 0],
[1, "Ringo Ame", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Hoshi no Miyako.png", "9pLCa7ZbQ78", "Hoshi no Miyako", "Hoshi no Miyako", "", 0, 0],
[1, "Sono Daisho", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Hoshi no Miyako.png", "l-_Eqrp-LLs", "Hoshi no Miyako", "Hoshi no Miyako", "", 0, 0],
[1, "Sweet?", [0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "Sweet.png", "9llwW5E5tHI", "Sweet?", "Hoshi no Miyako", "", 0, 0],
[1, "Toge to Neko", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Hoshi no Miyako.png", "xDPFAzrjdvU", "Hoshi no Miyako", "Hoshi no Miyako", "", 0, 0],
[1, "Yell", [0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "Hoshi no Miyako.png", "u_CIUuRlwFo", "Hoshi no Miyako", "Hoshi no Miyako", "", 0, 0],

//play
[1, "chapter 1", [0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "chapter 1.png", "545F9DRWccM", "chapter 1", "play", "", 0, 0],
[1, "Hosoikoe", [0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "Hosoikoe.png", "RWTvQkZEN6U", "Hosoikoe", "play", "", 0, 0],
[1, "live", [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "play.png", "5StYQbz-0_Y", "play", "play", "", 0, 0],
[1, "Milk", [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "play.png", "P4FHbqwsmL8", "play", "play", "", 0, 0],
[1, "Otegami", [0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0], "Otegami.png", "ucKuWm3P6Ao", "Otegami", "play", "", 0, 0],
[1, "park", [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "play.png", "9CCVg8R5wEU", "play", "play", "", 0, 0],
[1, "Room", [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "play.png", "8J6mPjzYtNE", "play", "play", "", 0, 0],
[1, "Shiroi Blouse Kawaii Hito", [0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "play.png", "v8vT-uyqweU", "play", "play", "", 0, 0],
[1, "Shutter Speed", [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "play.png", "Ou0u88-x6wg", "play", "play", "", 0, 0],
[1, "Slow", [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "play.png", "FR50bgMjz84", "play", "play", "", 0, 0],
[1, "Wana", [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "play.png", "kNiXJAm1TY0", "play", "play", "", 0, 0],
[1, "Yogoreta Yubi", [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "play.png", "j70Mj469Pis", "play", "play", "", 0, 0],
	
//Sentimental Macchiato
[1, "and boyfriend", [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "Sentimental Macchiato.png", "TJOsuADKwn0", "Sentimental Macchiato", "Sentimental Macchiato", "", 0, 0],
[1, "Dear Tokyo", [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Sentimental Macchiato.png", "s8St4aJIxBI", "Sentimental Macchiato", "Sentimental Macchiato", "", 0, 0],
[1, "Mascara", [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Sentimental Macchiato.png", "oDElg7X0ucQ", "Sentimental Macchiato", "Sentimental Macchiato", "", 0, 0],
[1, "Migite no Spoon to Hatsukoi to Knife", [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Sentimental Macchiato.png", "PiKEkczSEHE", "Sentimental Macchiato", "Sentimental Macchiato", "", 0, 0],
[1, "Mitsuyubi", [0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "Mitsuyubi.png", "_5MyZOA3MmM", "Mitsuyubi", "Sentimental Macchiato", "", 0, 0],
[1, "Namida no Ondo", [0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "Namida no Ondo.png", "-uV5PEiyxeo", "Namida no Ondo", "Sentimental Macchiato", "", 0, 0],
[1, "Natsukoi", [0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0], "Natsukoi.png", "t2Yh8hC32w0", "Natsukoi", "Sentimental Macchiato", "", 0, 0],
[1, "orion", [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Sentimental Macchiato.png", "h_ahtTJiihM", "Sentimental Macchiato", "Sentimental Macchiato", "", 0, 0],
[1, "Shougen", [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Sentimental Macchiato.png", "CgOb1kg2eJw", "Sentimental Macchiato", "Sentimental Macchiato", "", 0, 0],
[1, "smile", [0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "smile.png", "gVQ2mCPOyZY", "smile", "Sentimental Macchiato", "", 0, 0],
[1, "Yuukan Collection", [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Sentimental Macchiato.png", "AzKx_fr76og", "Sentimental Macchiato", "Sentimental Macchiato", "", 0, 0],

//hikari
[1, "capsule", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "hikari.png", "YR0zbHb5Fik", "hikari", "hikari", "", 0, 0],
[1, "Circus", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,00], "hikari.png", "aVpc43QXI8I", "hikari", "hikari", "", 0, 0],
[1, "Drama", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "hikari.png", "HJ0wFctCtoY", "hikari", "hikari", "Fullmetal Alchemist: Prince of the Dawn Opening", 0, 1],
[1, "Hikari", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "hikari.png", "fkdaJPzbw6k", "hikari", "hikari", "", 0, 0],
[1, "Monochrome no Kiss", [0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0], "Monochrome no Kiss.png", "L3gvc189xd0", "Monochrome no Kiss", "hikari", "Black Butler Opening 1", 0, 1],
[1, "Mousou Nikki 2", [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "hikari.png", "NhZs1mC_r5o", "hikari", "hikari", "", 0, 0],
[1, "Nakidashita Onna to Kyomukan", [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0], "Nidome no Kanojo.png", "gIdpxscOgD0", "Nidome no Kanojo", "hikari", "", 0, 0],
[1, "Nidome no Kanojo", [0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "Nidome no Kanojo.png", "nxMNVaWi2sM", "Nidome no Kanojo", "hikari", "", 0, 0],
[1, "Rakuen", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "hikari.png", "yEsd-5Tdhy0", "hikari", "hikari", "", 0, 0],
[1, "Tsumiki Kuzushi", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "hikari.png", "9O31M_bgxBk", "hikari", "hikari", "", 0, 0],
[1, "Uso", [0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0], "Uso.png", "sKu3LjLW4CQ", "Uso", "hikari", "Fullmetal Alchemist: Brotherhood Ending 1", 0, 1],
	
//dead stock
[1, "cosmetic",	[0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "cosmetic.png", "Q3lzZoGd6z0", "cosmetic", "dead stock", "", 0, 0],
[1, "dog run", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "dead stock.png", "1l7NXK1LDus", "dead stock", "dead stock", "", 0, 0],
[1, "Iihito", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "dead stock.png", "MppqfAMB26k", "dead stock", "dead stock", "", 0, 0],
[1, "Nigatsu", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "dead stock.png", "Hti4Wh7EtYs", "dead stock", "dead stock", "", 0, 0],
[1, "NO LDK", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "dead stock.png", "xomEvxb8cYc", "dead stock", "dead stock", "", 0, 0],
[1, "one way", [0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "one way.png", "zfdZkAdHzRM", "one way", "dead stock", "", 0, 0],
[1, "Rain", [0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0], "Rain.png", "dBL3PXI_jFo", "Rain", "dead stock", "Fullmetal Alchemist: Brotherhood Opening 5", 0, 1],
[1, "Ranbu no Melody (ALBUM MIX)", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "dead stock.png", "5ol4Trz4K9Q", "dead stock", "dead stock", "Bleach Opening 13", 1, 1],
[1, "Shelter", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "dead stock.png", "lQViBkpKtr4", "dead stock", "dead stock", "", 0, 0],
[1, "sleep", [0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0], "sleep.png", "k6bzu60JYMw", "sleep", "dead stock", "", 0, 0],
[1, "Sympathy", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "dead stock.png", "NogtvTXtgWI", "dead stock", "dead stock", "", 0, 0],
[1, "Wife", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "dead stock.png", "Cg1pLYJgDAM", "dead stock", "dead stock", "", 0, 0],
	
//M&W
[1, "Café de Bossa", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "M&W.png", "IUy1gOWaceo", "M&W", "M&W", "", 0, 0],
[1, "Dress Code", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "M&W.png", "15zOm8WdBlo", "M&W", "M&W", "", 0, 0],
[1, "Fuyu no Bench", [0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "Fuyu no Bench.png", "S2pm3IZS_yU", "Fuyu no Bench", "M&W", "", 0, 0],
[1, "Ghost Apartment", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "M&W.png", "hHNJC3qjZo0", "M&W", "M&W", "", 0, 0],
[1, "gossip!!", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "M&W.png", "ESGECvtiymk", "M&W", "M&W", "", 0, 0],
[1, "Ito", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "M&W.png", "OoCnSH2GMyE", "M&W", "M&W", "", 0, 0],
[1, "Itsuka", [0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "Itsuka.png", "R9D1fvvT2rI", "Itsuka", "M&W", "", 0, 0],
[1, "Konagona", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "M&W.png", "GLCSwHvTuCY", "M&W", "M&W", "", 0, 0],
[1, "MOM", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "M&W.png", "gXTaeT0SGTQ", "M&W", "M&W", "", 0, 0],
[1, "Nokoriga", [0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "Nokoriga.png", "a6ztMbgpYYE", "Nokoriga", "M&W", "", 0, 0],
[1, "S", [0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0], "S.png", "H3ubi9SAtIE", "S", "M&W", "", 0, 0],

//OUTSIDER
[1, "Akaite", [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "OUTSIDER.png", "ER2Rm73wgqI", "OUTSIDER", "OUTSIDER", "", 0, 0],
[1, "ANNIVERSARY", [0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0], "ANNIVERSARY.png", "W8WfH375xkQ", "ANNIVERSARY", "OUTSIDER", "Magi: The Kingdom of Magic Opening 1", 0, 1],
[1, "CANDY", [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "OUTSIDER.png", "vIYlO2QjzHY", "OUTSIDER", "OUTSIDER", "", 0, 0],
[1, "darling", [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "OUTSIDER.png", "43p7b3azAlE", "OUTSIDER", "OUTSIDER", "", 0, 0],
[1, "hug", [0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "hug.png", "MngeP5C5aP0", "hug", "OUTSIDER", "", 0, 0],
[1, "Koi ni Ochite", [0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "Koi ni Ochite.png", "5En_bulgCsg", "Koi ni Ochite", "OUTSIDER", "", 0, 0],
[1, "laser", [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "OUTSIDER.png", "ieiwzx59hlU", "OUTSIDER", "OUTSIDER", "", 0, 0],
[1, "Meiro", [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "OUTSIDER.png", "GRXVgFRgciY", "OUTSIDER", "OUTSIDER", "", 0, 0],
[1, "MUSIC", [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "OUTSIDER.png", "p1pvC7ah9bo", "OUTSIDER", "OUTSIDER", "", 0, 0],
[1, "SA-MA-LA-VA", [0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "SA-MA-LA-VA.png", "4yIiS-bqfT0", "SA-MA-LA-VA", "OUTSIDER", "", 0, 0],
[1, "V.I.P", [0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0], "V.I.P.png", "fHx_jBrOxAM", "V.I.P", "OUTSIDER", "Magi: The Labyrinth of Magic Opening 1", 0, 1],
	
//NOMAD
[1, "Butterfly Effect", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Butterfly Effect.png", "3ulJz9M1Qak", "Butterfly Effect", "NOMAD", "", 0, 0],
[1, "Futsuu no Kiseki", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "NOMAD.png", "5mICnWLsd-w", "NOMAD", "NOMAD", "", 0, 0],
[1, "Garasu no Hitomi", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "Garasu no Hitomi.png", "2JsxMStAtEw", "Garasu no Hitomi", "NOMAD", "Black Butler: Book of the Atlantic Opening", 0, 1],
[1, "KILL TIME", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "NOMAD.png", "4SLWSlC74fo", "NOMAD", "NOMAD", "", 0, 0],
[1, "NOMAD", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "NOMAD.png", "Yy7nsQxeyVA", "NOMAD", "NOMAD", "", 0, 0],
[1, "Rasen no Yume", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0]], "Rasen no Yume.png", "Kw4QmPEzxW0", "Rasen no Yume", "NOMAD", "Altair: A Record of Battles Opening 1", 0, 1],
[1, "Shitsuke", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "NOMAD.png", "ILEsCfUXjDY", "NOMAD", "NOMAD", "", 0, 0],
[1, "Snow", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "NOMAD.png", "wLYu4NeEQnw", "NOMAD", "NOMAD", "", 0, 0],
[1, "Teion", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "NOMAD.png", "XJSJ0eJirvk", "NOMAD", "NOMAD", "", 0, 0],
[1, "XYZ", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "NOMAD.png", "OceL3uiOwFo", "NOMAD", "NOMAD", "", 0, 0],
	

//mam
[1, "Blooming World", [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "es1-a-ma.png", "0NEx1Q4ihIo", "MaM", "MaM", "", 0, 0],
[1, "Festive!", [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "es1-a-ma.png", "q5VjrIkitwc", "MaM", "MaM", "", 0, 0],
[1, "Kimi Shirushi Be Ambitious!!", [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "es1-a-ma.png", "P_u-kx8r5fc", "MaM", "MaM", "", 0, 0],
[1, "RevolTrad ~Ishin-Denshin~", [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "es1-a-ma.png", "hl3XFqHeNGI", "MaM", "MaM", "with AKATSUKI", 0, 0],
[1, "See You Again", [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "es1-a-ma.png", "_3T1f9FI2l4", "MaM", "MaM", "Madara solo", 0, 1],
[1, "Tsujikaze ni Fukarete", [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "es1-a-ma.png", "SD8Z4nYnrBI", "MaM", "MaM", "with Team Ushiwakamaru", 0, 0],
[1, "Yukai Tsuukai That's Alright!", [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "es-an-ed5.png", "70fY0myPTCQ", "MaM", "MaM", "", 0, 0],
[1, "Handcraft", [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "es2-s2-ma.png", "70fY0myPTCQ", "MaM", "MaM", "", 0, 0],


//rabits
[1, "Dream Collection", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "es1-a-ra.png", "_GO6ALUuaAg", "Ra✽bits", "Ra✽bits", "", 0, 0],
[1, "FALLIN' LOVE=IT'S WONDERLAND", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "es2-s2-ra.png", "8bwAsQFJsJU", "Ra✽bits", "Ra✽bits", "", 0, 0],
[1, "Happy Coming＊Tea Time", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "es1-a-ra.png", "TloPAp6-VCU", "Ra✽bits", "Ra✽bits", "Hajime solo", 0, 1],
[1, "Higher↑ Higher↑", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "es1-a-ra.png", "_aMEkGll1YI", "Ra✽bits", "Ra✽bits", "Tomoya solo", 0, 1],
[1, "Hoppin' Season♪", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "es1-a-ra.png", "3tBBT4SqCic", "Ra✽bits", "Ra✽bits", "", 0, 0],
[1, "Joyful×Box*", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "es1-a-ra.png", "qjU-5sfKPV8", "Ra✽bits", "Ra✽bits", "", 0, 0],
[1, "Love it Love it", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "es2-s1-ra.png", "PXBxOy_H5oc", "Ra✽bits", "Ra✽bits", "", 0, 0],
[1, "Love Ra*bits Party!!", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "es1-a-ra.png", "e8jLv8OgAyk", "Ra✽bits", "Ra✽bits", "", 0, 0],
[1, "Made in Tokimeki♪", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "es-an-ed2.png", "SwvX01eQIKk", "Ra✽bits", "Ra✽bits", "", 0, 0],
[1, "Melty♡Kitchen", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "es1-a-ra.png", "bk_HIVTaWCg", "Ra✽bits", "Ra✽bits", "", 0, 0],
[1, "Milky Starry Charm", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "es1-a-ra.png", "NF-GUbzFyQ0", "Ra✽bits", "Ra✽bits", "", 0, 0],
[1, "Niichan Ouen Dan☆", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "es1-a-ra.png", "LQ0sIeRFB4Q", "Ra✽bits", "Ra✽bits", "Nazuna solo", 0, 1],
[1, "Nousagi March♪", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "es1-a-ra.png", "GT5j6TSD9Zg", "Ra✽bits", "Ra✽bits", "", 0, 0],
[1, "Start♪ Dash Dash!", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "es1-a-ra.png", "t8R214cBHkc", "Ra✽bits", "Ra✽bits", "Mitsuru solo", 0, 1],
[1, "Usagi no Mori no Ongakkai", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "es2-s2-ra.png", "e3bczktZqq4", "Ra✽bits", "Ra✽bits", "", 0, 0],


//ryuseitai
[1, "ALWAYS HERO!", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "es1-a-ry.png", "lXVnN8l3fLs", "RYUSEITAI", "RYUSEITAI", "Chiaki solo", 0, 1],
[1, "Goshoku no Shooting☆Star!!!!!", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "es1-a-ry.png", "oIW0mfNGHtU", "RYUSEITAI", "RYUSEITAI", "", 0, 0],
[1, "GROWING STARRY DAYS", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "es1-a-ry.png", "ism_onkGGjA", "RYUSEITAI", "RYUSEITAI", "", 0, 0],
[1, "Heart Heat Beat", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "es2-s2-ry.png", "oMJPsHduvzw", "RYUSEITAI", "RYUSEITAI", "", 0, 0],
[1, "IRON HEART TIGER!", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "es1-a-ry.png", "tUiH_NJTsSw", "RYUSEITAI", "RYUSEITAI", "Tetora solo", 0, 1],
[1, "Mahiru no Zanzou", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "es1-a-ry.png", "Cgh1q5hoDeA", "RYUSEITAI", "RYUSEITAI", "Midori solo", 0, 1],
[1, "Marine Blue Rendezvous", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "es1-a-ry.png", "Ic4vCJxFWwQ", "RYUSEITAI", "RYUSEITAI", "Kanata solo", 0, 1],
[1, "Meteor Scramble☆RYUSEITAI", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "es-an-ed4.png", "OcdYXjpDGOM", "RYUSEITAI", "RYUSEITAI", "", 0, 0],
[1, "Nekketsu☆Ryusei Ninpouchou", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "es2-s2-ry.png", "5S55fL7EkNU", "RYUSEITAI", "RYUSEITAI", "", 0, 0],
[1, "Ryuusei Hanabi", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "es1-a-ry.png", "QFWFl3w4zGA", "RYUSEITAI", "RYUSEITAI", "", 0, 0],
[1, "Shippuu Jinrai Shinobi Michi", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "es1-a-ry.png", "G_Bffpoc_qU", "RYUSEITAI", "RYUSEITAI", "Shinobu solo", 0, 1],
[1, "Suisei HALATION", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "es2-s1-ry.png", "RJfaCabzU1s", "RYUSEITAI", "RYUSEITAI", "", 0, 0],
[1, "SUPER NOVA REVOLU5TAR", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "es1-a-ry.png", "H3CYvlqEeec", "RYUSEITAI", "RYUSEITAI", "", 0, 0],
[1, "Tenka Muteki☆Meteoranger!", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "es1-a-ry.png", "O5l9yRTcvbk", "RYUSEITAI", "RYUSEITAI", "", 0, 0],
[1, "Unlimited☆Power!!!!!", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "es1-a-ry.png", "YS4IkIrIDrI", "RYUSEITAI", "RYUSEITAI", "", 0, 0],
[1, "Yumenosaki Ryuuseitai Uta", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "es1-a-ry.png", "u2BW406dh6Q", "RYUSEITAI", "RYUSEITAI", "", 0, 0],


//switch
[1, "Bluebird Humming♪", [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "es1-a-sw.png", "4O_k-Y39nCc", "Switch", "Switch", "Tsumugi solo", 0, 1],
[1, "Brilliant Smile", [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "es2-s2-sw.png", "vHqXE4lpLQg", "Switch", "Switch", "", 0, 0],
[1, "Easter Carnival", [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "es1-a-sw.png", "wU8L7Vktsy4", "Switch", "Switch", "", 0, 0],
[1, "Emerald Planet", [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "es1-a-sw.png", "01fVeY6ytYs", "Switch", "Switch", "", 0, 0],
[1, "Galaxy Destiny", [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "es1-a-sw.png", "cBpWvQoG0Sw", "Switch", "Switch", "", 0, 0],
[1, "I \"Witch\" You A Happy Halloween!", [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "es1-a-sw.png", "lCDORBjBBig", "Switch", "Switch", "", 0, 0],
[1, "Knockin' Fantasy", [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "es1-a-sw.png", "v5BuCUTegLU", "Switch", "Switch", "", 0, 0],
[1, "Magic for your \"Switch\"", [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "es-an-ed4.png", "LIHUyg57dA8", "Switch", "Switch", "", 0, 0],
[1, "Omoi no Kakera", [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "es2-s1-sw.png", "ELFM2WsZN-8", "Switch", "Switch", "", 0, 0],
[1, "Secret Gravity", [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "es1-a-sw.png", "xz-Ytc6ZkPk", "Switch", "Switch", "Natsume solo", 0, 1],
[1, "Temptation Magic", [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "es1-a-sw.png", "Aw5fXYnDaOk", "Switch", "Switch", "", 0, 0],
[1, "VIVID ROLE-PLAYING", [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "es1-a-sw.png", "tdwkskabtD4", "Switch", "Switch", "Sora solo", 0, 1],
[1, "A little bit UP!!", [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "es2-s2-sw.png", "6YiC_YtLEdo", "Switch", "Switch", "", 0, 0],
[1, "Romancing Cruise", [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "nopic.png", "G2fHypmzJFY", "Switch", "Switch", "", 0, 0],


//trickstar
[1, "1st SING-ALONG☆", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "es-an-ed1.png", "aE90X4shXfY", "Trickstar", "Trickstar", "", 0, 0],
[1, "BIGBANG REFLECTION!!", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "es2-s1-ts.png", "5TZBt_sw39Y", "Trickstar", "Trickstar", "", 0, 0],
[1, "BREAKTHROUGH!", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "es1-a-ts.png", "g_Ttz8FkP6E", "Trickstar", "Trickstar", "", 0, 0],
[1, "CHERRY HAPPY STREAM", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "es1-a-ts.png", "yWRmHbaY7u8", "Trickstar", "Trickstar", "", 0, 0],
[1, "DIAMOND SUMMER", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "es1-a-ts.png", "LXxCjDJfbFA", "Trickstar", "Trickstar", "", 0, 0],
[1, "Finder Girl", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "es2-s2-ts.png", "VwOt50c0PPo", "Trickstar", "Trickstar", "", 0, 0],
[1, "HEART→BEATER!!!!", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "es1-a-ts.png", "x358hbFHzqw", "Trickstar", "Trickstar", "", 0, 0],
[1, "Infinite Star", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "es1-a-ts.png", "HUNGSHzpohk", "Trickstar", "Trickstar", "", 0, 0],
[1, "MAGICIAN’S PLAY!", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "es1-a-ts.png", "uFGfBboq-pE", "Trickstar", "Trickstar", "Mao solo", 0, 1],
[1, "My Starry Point", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "es1-a-ts.png", "3E5Jbloa9yw", "Trickstar", "Trickstar", "Subaru solo", 0, 1],
[1, "Nijiiro no Seasons", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "es1-a-ts.png", "LZZRQSCZEhk", "Trickstar", "Trickstar", "", 0, 0],
[1, "ONLY YOUR STARS!", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "es1-a-ts.png", "PdH0BHKK0g8", "Trickstar", "Trickstar", "", 0, 0],
[1, "Rebellion Star", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "es1-a-ts.png", "U1KfGzBCB9Q", "Trickstar", "Trickstar", "", 0, 0],
[1, "STARSEEK WAYFARER", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "es1-a-ts.png", "YRwkFhsX7Hk", "Trickstar", "Trickstar", "Hokuto solo", 0, 1],
[1, "Unstoppable Love!", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "es2-s2-ts.png", "1gU-6gKFGCY", "Trickstar", "Trickstar", "", 0, 0],
[1, "Walking On My Sunny Road", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "es1-a-ts.png", "yky-fRPiRqQ", "Trickstar", "Trickstar", "Makoto solo", 0, 1],
[1, "Welcome to the Trickstar Night☆", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "es1-a-ts.png", "O_4IRMvdFs0", "Trickstar", "Trickstar", "", 0, 0],
[1, "Daydream×Reality", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "es2-s3-ts.png", "y8fsjS-5fNM", "Trickstar", "Trickstar", "", 0, 0],


//undead
[1, "Bloody Moon Vampire", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "es1-a-ud.png", "9RvX6Nclf6I", "UNDEAD", "UNDEAD", "Rei solo", 0, 1],
[1, "Break the Prison", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "es1-a-ud.png", "-iVRdWkVzbk", "UNDEAD", "UNDEAD", "", 0, 0],
[1, "Darkness 4", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "es1-a-ud.png", "niogqdPd3oE", "UNDEAD", "UNDEAD", "", 0, 0],
[1, "DESTRUCTION ROAD", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "es1-a-ud.png", "CdXyFBpbo-k", "UNDEAD", "UNDEAD", "", 0, 0],
[1, "Feather Heartache", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "es1-a-ud.png", "j6-YHFE0pfI", "UNDEAD", "UNDEAD", "Kaoru solo", 0, 1],
[1, "FORBIDDEN RAIN", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "es2-s2-ud.png", "5toaW6yIdTM", "UNDEAD", "UNDEAD", "", 0, 0],
[1, "Gate of the Abyss", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "es1-a-ud.png", "R_0t9JtJ0Jc", "UNDEAD", "UNDEAD", "", 0, 0],
[1, "Honey Milk wa Okonomi de", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "es1-a-ud.png", "W1buJk4Kn20", "UNDEAD", "UNDEAD", "", 0, 0],
[1, "IMMORAL WORLD", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "es-an-ed1.png", "N7E_zmX-qsw", "UNDEAD", "UNDEAD", "", 0, 0],
[1, "Melody in the Dark", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "es1-a-ud.png", "8VxrwCRrtLk", "UNDEAD", "UNDEAD", "", 0, 0],
[1, "Nightless World", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "es2-s1-ud.png", "5OHl5ysDA7o", "UNDEAD", "UNDEAD", "", 0, 0],
[1, "RIOT WOLF", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "es1-a-ud.png", "4ocS4j5cLWc", "UNDEAD", "UNDEAD", "Koga solo", 0, 1],
[1, "Saql Faith", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "es1-a-ud.png", "P7hFtEZrciU", "UNDEAD", "UNDEAD", "Adonis solo", 0, 1],
[1, "Savage Love Affair", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "es2-s2-ud.png", "A4Dh8evYhlk", "UNDEAD", "UNDEAD", "", 0, 0],
[1, "Valentine Eve's Nightmare", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "es1-a-ud.png", "e2THOAj1W1w", "UNDEAD", "UNDEAD", "", 0, 0],
[1, "Sustain Memories", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "es2-s3-ud.png", "kdkD98uA4es", "UNDEAD", "UNDEAD", "", 0, 0],


//valkyrie
[1, "Acanthe", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "es2-s2-va.png", "wFr4jJiKon8", "Valkyrie", "Valkyrie", "", 0, 0],
[1, "Cloth Waltz", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "es1-a-va.png", "GMVJzDDMBi0", "Valkyrie", "Valkyrie", "Shu solo", 0, 1],
[1, "Eternal Weaving", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "es2-s1-va.png", "fHueDPXGZX8", "Valkyrie", "Valkyrie", "", 0, 0],
[1, "Gaisenka", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "es-an-ed5.png", "oFCruJ5LkLE", "Valkyrie", "Valkyrie", "", 0, 0],
[1, "Kohaku to Ruri no Rondo", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "es1-a-va.png", "8aOpjI_dYeQ", "Valkyrie", "Valkyrie", "Mika solo", 0, 1],
[1, "Koyoi Tsuki no Yakata ni te", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "es1-a-va.png", "e8m9yS64JU8", "Valkyrie", "Valkyrie", "", 0, 0],
[1, "Last Lament", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "es1-a-va.png", "XqL9prFUGa8", "Valkyrie", "Valkyrie", "", 0, 0],
[1, "Miwaku Geki", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "es1-a-va.png", "YjGg-sqc4Pg", "Valkyrie", "Valkyrie", "", 0, 0],
[1, "Mémoire Antique", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "es1-a-va.png", "DJod-TV2daA", "Valkyrie", "Valkyrie", "", 0, 0],
[1, "Raisanka", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "es1-a-va.png", "tRbAZqEq2OU", "Valkyrie", "Valkyrie", "", 0, 0],
[1, "Sajou no Roukaku", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "es1-a-va.png", "nOQ9jwhGxTk", "Valkyrie", "Valkyrie", "Past Valkyrie", 0, 0],
[1, "Sei Shounen Yuugi", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "es1-a-va.png", "CTvcZO6u_2M", "Valkyrie", "Valkyrie", "Past Valkyrie", 0, 0],
[1, "Uruwashi no Nightingale", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "es2-s2-va.png", "iu5UOufN4XU", "Valkyrie", "Valkyrie", "", 0, 0],


//temp units
[1, "Aisle, be with you", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "es2-su-2.png", "cvZ-Tcl99Dk", "Ring.A.Bell", "Ring.A.Bell", "", 0, 0],
[1, "Crush of Judgment", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "es1-a-kn.png", "HBh-AddJRrY", "Knights Killers", "Knights Killers", "", 0, 0],
[1, "Date Plan A to Z", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "es2-su-1.png", "28tiTBvFv58", "√AtoZ", "√AtoZ", "", 0, 0],
[1, "Death Game Holic", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "es1-a-ud.png", "aP0Pjtz2PPY", "DEADMANZ", "DEADMANZ", "", 0, 0],
[1, "Eccentric Party Night", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "es1-a-sw.png", "rD6hPujfm4o", "Oddballs", "Oddballs", "", 0, 0],
[1, "Endless Vide", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "es2-fs.png", "5EU_cmTI-nk", "Fraternity", "Fraternity", "", 0, 0],
[1, "Life is so Dramatic!!", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "es2-s10.png", "DjIIjxLv0T8", "SCREEN10", "SCREEN10", "", 0, 0],
[1, "Midnight Butlers", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "es2-su-1.png", "6NoxNRXpmgo", "XXVeil", "XXVeil", "", 0, 0],
[1, "Moonlight Disco", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "es2-su-2.png", "biCFdIqQtc0", "Getto Spectacle", "Getto Spectacle", "", 0, 0],
[1, "Noir Neige", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "es2-su-2.png", "VAKVSaz28Ao", "La Mort", "La Mort", "", 0, 0],
[1, "Sweet Sweet White Song", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "es2-su-1.png", "lOqdUV0yPJI", "Branco", "Branco", "", 0, 0],
[1, "Paradigm Reversi!", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "nopic.png", "9vWEuwdc5-I", "Puffy☆Bunny", "Puffy☆Bunny", "", 0, 0],

//fusion
[1, "Artistic Partisan", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "es2-fu-3.png", "O-JxfEwOafM", "ALKALOID & Valkyrie", "ALKALOID & Valkyrie", "Fusion", 0, 0],
[1, "Crossing×Heart", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "es2-fu-4.png", "YzsH9iSka60", "Trickstar & fine", "Trickstar & fine", "Fusion", 0, 0],
[1, "LEMON SQUASH CHEERS! ", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "es2-fu-7.png", "z9N2IZQJtIc", "Crazy:B & 2wink", "Crazy:B & 2wink", "Fusion", 0, 0],
[1, "Majestic Magic", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "es2-fu-1.png", "JD6oLMTh298", "Switch & Eden", "Switch & Eden", "Fusion", 0, 0],
[1, "PERFECTLY-IMPERFECT", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "es2-fu-5.png", "eXcCTzLwsnY", "UNDEAD & AKATSUKI", "UNDEAD & AKATSUKI", "Fusion", 0, 0],
[1, "Pocket ni Uchuu", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "es2-fu-2.png", "B9Tm26HdOKk", "Ra✽bits & Double Face", "Ra✽bits & Double Face", "Fusion", 0, 0],
[1, "Seishun Emergency", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "es2-fu-6.png", "fghQp0tpITo", "RYUSEITAI & Knights", "RYUSEITAI & Knights", "Fusion", 0, 0],


//ensemble/various
[1, "Kiseki", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "es-an-op2.png", "Vi4W5PaBxGQ", "Trickstar / Eden", "Trickstar / Eden", "Anime OP2", 0, 0],
[1, "BRAND NEW STARS!!", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "es2-bns.png", "K1092eLmbko", "ES All Stars", "ES All Stars", "", 0, 0],
[1, "FUSIONIC STARS!!", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "es2-fs.png", "hG3dwZPeNjE", "Various", "Various", "", 0, 0],
[1, "Stars' Ensemble!", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "es-an-op.png", "4AgK2k-8w9Y", "ES All Stars", "ES All Stars", "Anime OP", 0, 0],
[1, "Walk with your smile", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "es2-wwys.png", "UxkL5M07QXQ", "Various", "Various", "", 0, 0],
[1, "Surprising Thanks!!", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "es2-st.png", "rHFPG5GWwQI", "Various", "Various", "", 0, 0],

//covers
[1, "U.S.A.", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "es2-co-usa.png", "uwgpvBFi28E", "Crazy:B & UNDEAD", "Crazy:B & UNDEAD", "", 0, 0],
[1, "Hamutaro Tottokouta", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "es2-co-ham.png", "Ov0MOaRTv8g", "Ra✽bits & RYUSEITAI", "Ra✽bits & RYUSEITAI", "", 0, 0]
];

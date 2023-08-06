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
[1, "Sweet?", [0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "Sweet.png", "9llwW5E5tHI", "Sweet?", "", "", 0, 0],
[1, "Toge to Neko", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Hoshi no Miyako.png", "xDPFAzrjdvU", "Hoshi no Miyako", "Hoshi no Miyako", "", 0, 0],
[1, "Yell", [0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "Hoshi no Miyako.png", "u_CIUuRlwFo", "Hoshi no Miyako", "Hoshi no Miyako", "", 0, 0],

//play
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
	
//Sentimental Macchiato
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

//hikari
[1, "capsule", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "hikari.png", "YR0zbHb5Fik", "hikari", "hikari", "", 0, 0],
[1, "Circus", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,00], "hikari.png", "aVpc43QXI8I", "hikari", "hikari", "", 0, 0],
[1, "Drama", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "hikari.png", "HJ0wFctCtoY", "hikari", "hikari", "Fullmetal Alchemist: Prince of the Dawn Opening", 0, 1],
[1, "Hikari", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "hikari.png", "fkdaJPzbw6k", "hikari", "hikari", "", 0, 0],
[1, "Monochrome no Kiss", [0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0], "Monochrome no Kiss.png", "L3gvc189xd0", "Monochrome no Kiss", "", "Black Butler Opening 1", 0, 1],
[1, "Mousou Nikki 2", [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "hikari.png", "NhZs1mC_r5o", "hikari", "hikari", "", 0, 0],
[1, "Nakidashita Onna to Kyomukan", [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0], "Nidome no Kanojo.png", "gIdpxscOgD0", "Nidome no Kanojo", "", "", 0, 0],
[1, "Nidome no Kanojo", [0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "Nidome no Kanojo.png", "nxMNVaWi2sM", "Nidome no Kanojo", "", "", 0, 0],
[1, "Rakuen", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "hikari.png", "yEsd-5Tdhy0", "hikari", "hikari", "", 0, 0],
[1, "Tsumiki Kuzushi", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "hikari.png", "9O31M_bgxBk", "hikari", "hikari", "", 0, 0],
[1, "Uso", [0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0], "Uso.png", "sKu3LjLW4CQ", "Uso", "", "Fullmetal Alchemist: Brotherhood Ending 1", 0, 1],
	
//dead stock
[1, "cosmetic",	[0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "cosmetic.png", "Q3lzZoGd6z0", "cosmetic", "", "", 0, 0],
[1, "dog run", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "dead stock.png", "1l7NXK1LDus", "dead stock", "dead stock", "", 0, 0],
[1, "Iihito", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "dead stock.png", "MppqfAMB26k", "dead stock", "dead stock", "", 0, 0],
[1, "Nigatsu", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "dead stock.png", "Hti4Wh7EtYs", "dead stock", "dead stock", "", 0, 0],
[1, "NO LDK", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "dead stock.png", "xomEvxb8cYc", "dead stock", "dead stock", "", 0, 0],
[1, "one way", [0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "one way.png", "zfdZkAdHzRM", "one way", "", "", 0, 0],
[1, "Rain", [0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0], "Rain.png", "dBL3PXI_jFo", "Rain", "", "Fullmetal Alchemist: Brotherhood Opening 5", 0, 1],
[1, "Ranbu no Melody (ALBUM MIX)", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "dead stock.png", "5ol4Trz4K9Q", "dead stock", "dead stock", "Bleach Opening 13", 1, 1],
[1, "Shelter", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "dead stock.png", "lQViBkpKtr4", "dead stock", "dead stock", "", 0, 0],
[1, "sleep", [0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0], "sleep.png", "k6bzu60JYMw", "sleep", "", "", 0, 0],
[1, "Sympathy", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "dead stock.png", "NogtvTXtgWI", "dead stock", "dead stock", "", 0, 0],
[1, "Wife", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "dead stock.png", "Cg1pLYJgDAM", "dead stock", "dead stock", "", 0, 0],
	
//M&W
[1, "Café de Bossa", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "M&W.png", "IUy1gOWaceo", "M&W", "M&W", "", 0, 0],
[1, "Dress Code", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "M&W.png", "15zOm8WdBlo", "M&W", "M&W", "", 0, 0],
[1, "Fuyu no Bench", [0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "Fuyu no Bench.png", "S2pm3IZS_yU", "Fuyu no Bench", "", "", 0, 0],
[1, "Ghost Apartment", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "M&W.png", "hHNJC3qjZo0", "M&W", "M&W", "", 0, 0],
[1, "gossip!!", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "M&W.png", "ESGECvtiymk", "M&W", "M&W", "", 0, 0],
[1, "Ito", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "M&W.png", "OoCnSH2GMyE", "M&W", "M&W", "", 0, 0],
[1, "Itsuka", [0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "Itsuka.png", "R9D1fvvT2rI", "Itsuka", "", "", 0, 0],
[1, "Konagona", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "M&W.png", "GLCSwHvTuCY", "M&W", "M&W", "", 0, 0],
[1, "MOM", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "M&W.png", "gXTaeT0SGTQ", "M&W", "M&W", "", 0, 0],
[1, "Nokoriga", [0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "Nokoriga.png", "a6ztMbgpYYE", "Nokoriga", "", "", 0, 0],
[1, "S", [0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0], "S.png", "H3ubi9SAtIE", "S", "", "", 0, 0],

//OUTSIDER
[1, "Akaite", [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "OUTSIDER.png", "ER2Rm73wgqI", "OUTSIDER", "OUTSIDER", "", 0, 0],
[1, "ANNIVERSARY", [0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0], "ANNIVERSARY.png", "W8WfH375xkQ", "ANNIVERSARY", "", "Magi: The Kingdom of Magic Opening 1", 0, 1],
[1, "CANDY", [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "OUTSIDER.png", "vIYlO2QjzHY", "OUTSIDER", "OUTSIDER", "", 0, 0],
[1, "darling", [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "OUTSIDER.png", "43p7b3azAlE", "OUTSIDER", "OUTSIDER", "", 0, 0],
[1, "hug", [0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "hug.png", "MngeP5C5aP0", "hug", "", "", 0, 0],
[1, "Koi ni Ochite", [0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "Koi ni Ochite.png", "5En_bulgCsg", "Koi ni Ochite", "", "", 0, 0],
[1, "laser", [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "OUTSIDER.png", "ieiwzx59hlU", "OUTSIDER", "OUTSIDER", "", 0, 0],
[1, "Meiro", [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "OUTSIDER.png", "GRXVgFRgciY", "OUTSIDER", "OUTSIDER", "", 0, 0],
[1, "MUSIC", [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "OUTSIDER.png", "p1pvC7ah9bo", "OUTSIDER", "OUTSIDER", "", 0, 0],
[1, "SA-MA-LA-VA", [0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "SA-MA-LA-VA.png", "4yIiS-bqfT0", "SA-MA-LA-VA", "", "", 0, 0],
[1, "V.I.P", [0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0], "V.I.P.png", "fHx_jBrOxAM", "V.I.P", "", "Magi: The Labyrinth of Magic Opening 1", 0, 1],

//NOMAD
[1, "Butterfly Effect", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Butterfly Effect.png", "3ulJz9M1Qak", "Butterfly Effect", "", "", 0, 0],
[1, "Futsuu no Kiseki", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "NOMAD.png", "5mICnWLsd-w", "NOMAD", "NOMAD", "", 0, 0],
[1, "Garasu no Hitomi", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "Garasu no Hitomi.png", "2JsxMStAtEw", "Garasu no Hitomi", "", "Black Butler: Book of the Atlantic Opening", 0, 1],
[1, "KILL TIME", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "NOMAD.png", "4SLWSlC74fo", "NOMAD", "NOMAD", "", 0, 0],
[1, "NOMAD", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "NOMAD.png", "Yy7nsQxeyVA", "NOMAD", "NOMAD", "", 0, 0],
[1, "Rasen no Yume", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "Rasen no Yume.png", "Kw4QmPEzxW0", "Rasen no Yume", "", "Altair: A Record of Battles Opening 1", 0, 1],
[1, "Shitsuke", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "NOMAD.png", "ILEsCfUXjDY", "NOMAD", "NOMAD", "", 0, 0],
[1, "Snow", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "NOMAD.png", "wLYu4NeEQnw", "NOMAD", "NOMAD", "", 0, 0],
[1, "Teion", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "NOMAD.png", "XJSJ0eJirvk", "NOMAD", "NOMAD", "", 0, 0],
[1, "XYZ", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "NOMAD.png", "OceL3uiOwFo", "NOMAD", "NOMAD", "", 0, 0],
	
//Ichiban Suki na Basho
[1, "Ichiban Suki na Basho", [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Ichiban Suki na Basho.png", "ZhF60NfXpKo", "Ichiban Suki na Basho", "", "", 0, 0],
[1, "reverb", [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Ichiban Suki na Basho.png", "YLXPwAyUpps", "Ichiban Suki na Basho", "Ichiban Suki na Basho", "", 0, 0],
[1, "Rubber Sole", [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Ichiban Suki na Basho.png", "-rjMYBu-XsQ", "Ichiban Suki na Basho", "Ichiban Suki na Basho", "", 0, 0],
[1, "Sono Mirai e", [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Ichiban Suki na Basho.png", "4VE4PH9OtrI", "Ichiban Suki na Basho", "Ichiban Suki na Basho", "", 0, 0],
[1, "VOICE", [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Ichiban Suki na Basho.png", "xUufOAE11_0", "Ichiban Suki na Basho", "Ichiban Suki na Basho", "", 0, 0],
	
//Shounin Yokkyu
[1, "Awai Ashiato", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Shounin Yokkyu.png", "3jRDnm1CoIA", "Shounin Yokkyu", "Shounin Yokkyu", "", 0, 0],
[1, "Blood Vessel", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Shounin Yokkyu.png", "9A7HLX47NWE", "Shounin Yokkyu", "Shounin Yokkyu", "", 0, 0],
[1, "Deai=Kiseki", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Shounin Yokkyu.png", "R84YwSkP9uU", "Shounin Yokkyu", "Shounin Yokkyu", "", 0, 0],
[1, "Kimiiro no Asa", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Shounin Yokkyu.png", "hIZG1WkkFPM", "Shounin Yokkyu", "Shounin Yokkyu", "", 0, 0],
[1, "Namida Ame", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Shounin Yokkyu.png", "h7FDNgRJo4E", "Shounin Yokkyu", "Shounin Yokkyu", "", 0, 0],
[1, "Positive no Mahou", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Shounin Yokkyu.png", "BsMsqMyGG2Q", "Shounin Yokkyu", "Shounin Yokkyu", "", 0, 0],
[1, "see through", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Shounin Yokkyu.png", "fgVcEZcHKmY", "Shounin Yokkyu", "Shounin Yokkyu", "", 0, 0],
[1, "Shounin Yokkyu", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Shounin Yokkyu.png", "zhbvYB3lrjE", "Shounin Yokkyu", "", "", 0, 0],
[1, "Te", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Shounin Yokkyu.png", "k9d2L8GtK6k", "Shounin Yokkyu", "Shounin Yokkyu", "", 0, 0],
[1, "Trick", [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "Shounin Yokkyu.png", "K3xCR8_0o2I", "Shounin Yokkyu", "Shounin Yokkyu", "", 0, 0],
	
//Umibe
[1, "Daisuki Dakara...", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "Umibe.png", "-Y8VqWE2SQw", "Umibe", "Umibe", "", 0, 0],
[1, "Damashi Ai", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "Umibe.png", "yXIqIbatBQg", "Umibe", "Umibe", "", 0, 0],
[1, "Ekitai", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "Umibe.png", "jyMgQ8di06I", "Umibe", "Umibe", "", 0, 0],
[1, "Gairoju", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "Umibe.png", "ke3esJtAWAQ", "Umibe", "Umibe", "", 0, 0],
[1, "Jiu no Kuchizuke", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "Jiu no Kuchizuke.png", "hV0Po_nXR7k", "Jiu no Kuchizuke", "", "Tian Guan Ci Fu Japanese Opening", 0, 1],
[1, "Juusangatsu", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "Umibe.png", "zzBYjD0uyNo", "Umibe", "Umibe", "", 0, 0],
[1, "Keibetsu", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "Umibe.png", "oiyWzm13U84", "Umibe", "Umibe", "", 0, 0],
[1, "Shiroi Koe", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "Umibe.png", "904YqMcMjqs", "Umibe", "Umibe", "", 0, 0],
[1, "Umibe", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "Umibe.png", "agy_CqAI_I4", "Umibe", "", "", 0, 0],
[1, "Yureru Natsufuku", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "Umibe.png", "1kx4o66vg48", "Umibe", "Umibe", "", 0, 0],
	
	
//SID ALL SINGLES BEST
[1, "ENAMEL", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0], "ENAMEL.png", "vDK02xlB47k", "ENAMEL", "", "Black Butler: Book of Circus Opening", 0, 1],
[1, "Hyouryuu", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0], "Hyouryuu.png", "hPOyu8jUses", "Hyouryuu", "", "", 0, 0],
[1, "Ranbu no Melody", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0], "Ranbu no Melody.png", "MSG4p7rMyn4", "Ranbu no Melody", "", "Bleach Opening 13", 0, 1],
[1, "White tree", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0], "White tree.png", "1Myel3o2w0s", "White tree", "", "", 0, 0],
[1, "Yumegokochi", [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0], "SID ALL SINGLES BEST.png", "rfFRMwZ9BxI", "SID ALL SINGLES BEST", "SID ALL SINGLES BEST", "", 0, 0],
	
//SID Anime Best 2008-2017
[1, "ASH", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0], "SID Anime Best 2008-2017.png", "TaeUco6mL-g", "SID Anime Best 2008-2017", "Anime Best", "Self-cover of LiSA's ASH", 1, 1],
	
//Side A complete collection
[1, "delete", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "delete.png", "zNk8xw0AwPk", "delete", "", "The Seven Deadly Sins: Wrath of The Gods Opening 2", 0, 1],
[1, "Houkiboshi", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "Houkiboshi.png", "nbnLUczzpe8", "Houkiboshi", "", "", 0, 0],
[1, "Kowairo", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "Kowairo.png", "L1D-Eeq_3zg", "Houkiboshi", "Houkiboshi", "", 0, 0],
[1, "siren", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "siren.png", "Lcadcmhox5U", "Houkiboshi", "Houkiboshi", "", 0, 0],
[1, "Star Forest", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "Star Forest.png", "jhWle6ItxZ4", "Star Forest", "", "", 0, 0],
	

//Side B complete collection 〜e.B〜
[1, "Aoi Renga", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "chapter 1.png", "JtxG1-lPJGU", "chapter 1", "chapter 1", "", 0, 0],
[1, "Boku, Dinner", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "Sweet.png", "ptjg182C1WE", "Sweet?", "Sweet?", "", 0, 0],
[1, "Chiisana Shiawase", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "Mitsuyubi.png", "irVJZ7zpYgw", "Mitsuyubi", "Mitsuyubi", "", 0, 0],
[1, "dummy", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "Hosoikoe.png", "j-mqqOMgMRs", "Hosoikoe", "Hosoikoe", "", 0, 0],
[1, "Hanabira", [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0], "smile.png", "k1vYhPUabdg", "smile", "smile", "", 0, 0],
[1, "Keirei Boy", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "Namida no Ondo.png", "WmufSQtWLaw", "Namida no Ondo", "Namida no Ondo", "", 0, 0],
[1, "life", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "Otegami.png", "vSkKyO3u5GM", "Otegami", "Otegami", "", 0, 0],
[1, "Memai", [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0], "Side B complete collection 〜e.B〜.png", "jDgjn3nV2wo", "Side B complete collection 〜e.B〜", "Side B 1", "", 0, 0],
[1, "Propose", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "Natsukoi.png", "PygBOMelwZY", "Natsukoi", "Natsukoi", "", 0, 0],
[1, "Re:Dreamer", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "paint pops.png", "n918aC65y9o", "paint pops", "paint pops", "", 0, 0],
	
//Side B complete collection 〜e.B 2〜/Side B complete collection 〜e.B 4〜
[1, "CELEBRITY", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0], "Side B complete collection 〜e.B 2〜.png", "IVlqnWcCTOo", "Side B complete collection 〜e.B 2〜", "Side B 2", "", 0, 0],
[1, "cut", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0], "Rain.png", "jXSOBeJrNXs", "Rain", "Rain", "", 0, 0],
[1, "Danro", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0], "Ranbu no Melody.png", "53xU1UVI62A", "Ranbu no Melody", "Ranbu no Melody", "", 0, 0],
[1, "Higasa", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0], "Uso.png", "gAt8t2910gg", "Uso", "Uso", "", 0, 0],
[1, "Kaitou Neon", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0], "one way.png", "qeNum-vbWD4", "one way", "one way", "", 0, 0],
[1, "Rainy Day", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0], "S.png", "laM4v2do84E", "S", "S", "", 0, 0],
[1, "season", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0], "Monochrome no Kiss.png", "CAf7Ry3JUl4", "Monochrome no Kiss", "Monochrome no Kiss", "", 0, 0],
[1, "Soumatou", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0], "V.I.P.png", "bdE6FskAiIs", "V.I.P", "V.I.P", "", 0, 0],
	
//Side B complete collection 〜e.B 3〜/Side B complete collection 〜e.B 4〜
[1, "Akikaze", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0], "Itsuka.png", "uMgQD9FjcZY", "Itsuka", "Itsuka", "", 0, 0],
[1, "Graduation", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0], "Nokoriga.png", "IExZrH499wA", "Nokoriga", "Nokoriga", "", 0, 0],
[1, "Otori", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0], "Fuyu no Bench.png", "5nu-eoIqSng", "Fuyu no Bench", "Fuyu no Bench", "", 0, 0],
[1, "SENSE", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0], "Side B complete collection 〜e.B 3〜.png", "RGg1lwlSpkk", "Side B complete collection 〜e.B 3〜", "Side B 3", "", 0, 0],
[1, "Sugu Soba de", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0], "cosmetic.png", "x40NxBYQoks", "cosmetic", "cosmetic", "", 0, 0],
[1, "Utahime", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0], "sleep.png", "AtxGdZZWkl8", "sleep", "sleep", "", 0, 0],
[1, "Zetsubou no Hata", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0], "Koi ni Ochite.png", "iyBbNIY98do", "Koi ni Ochite", "Koi ni Ochite", "", 0, 0],
	
//Side B complete collection 〜e.B 5〜
[1, "Chiisana Tsubasa", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "Garasu no Hitomi.png", "nknQ7te4YAk", "Garasu no Hitomi", "Garasu no Hitomi", "", 0, 0],
[1, "Kagee", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "ENAMEL.png", "jiO6eIh0pYA", "ENAMEL", "ENAMEL", "", 0, 0],
[1, "Shoukyakuro", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "SA-MA-LA-VA.png", "MIJ8o_p4CWM", "SA-MA-LA-VA", "SA-MA-LA-VA", "", 0, 0],
[1, "Suna no Shiro", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "ANNIVERSARY.png", "C2drKn5oJYo", "ANNIVERSARY", "ANNIVERSARY", "", 0, 0],
[1, "Unmei no Hito", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "Hyouryuu.png", "OQMoTxohyZY", "Hyouryuu", "Hyouryuu", "", 0, 0],

	
//Non-album releases
[1, "Aikagi", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "paint pops.png", "rdkoXydaR_A", "paint pops", "paint pops", "", 0, 0],
[1, "Ao", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "Ryutsu-ban.png", "6LaaZSJXJHg", "Kaijou-ban/Tsuhan-ban/Ryutsu-ban", "1st Maxi Single CD", "Old arrangement, limited release", 1, 0],
[1, "Dekisokonai", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "", "Pjt14FfHW2k", "", "", "Live exclusive", 0, 0],
[1, "Junkan", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "Yoshigai Manabu 17-sai (Mushoku).png", "So5IfdwgrXk", "Yoshigai Manabu 17-sai (Mushoku)", "Yoshigai Manabu 17-sai (Mushoku)", "Debut single, limited release", 0, 0],
[1, "Natsukoi (G/S Remix)", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "SA-MA-LA-VA.png", "UhnmQepR6XA", "SA-MA-LA-VA", "SA-MA-LA-VA", "", 1, 0],
[1, "Neurosis Party", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "Ryutsu-ban.png", "PEMNKMlbLz8", "Ryutsu-ban", "1st Maxi Single CD", "Limited release", 0, 0],
[1, "Watashi wa Ame", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "Ryutsu-ban.png", "6P9CAsCmiIA", "Kaijou-ban/Tsuhan-ban/Ryutsu-ban", "1st Maxi Single CD", "Old arrangement, limited release", 1, 0],
[1, "White tree (Piano version)", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "White tree.png", "NAun4x-u2Cc", "White tree", "White tree", "", 1, 0],
[1, "Yoshigai Manabu 17-sai (Mushoku)", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "Yoshigai Manabu 17-sai (Mushoku).png", "a4Ox-dKtE1I", "Yoshigai Manabu 17-sai (Mushoku)", "Yoshigai Manabu 17-sai (Mushoku)", "Debut single, limited release", 0, 0],
	
	
//Concert Themes
[1, "Colors", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "Colors.png", "KDOqwhkRbmk", "Colors", "Concert theme", "15th anniversary tour theme", 0, 0],
[1, "Legendary", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "Legendary.png", "TerPRtycOX0", "Legendary", "Concert theme", "15th anniversary tour grand final theme", 0, 0],
[1, "Prologue of NOMAD", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "Prologue of NOMAD.png", "PfsWZqMmT7w", "Prologue of NOMAD", "Concert theme", "NOMAD tour theme", 0, 0],
[1, "residence", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "residence.png", "HI5CKtHoPQw", "residence", "Concert theme", "2021 live tour theme", 0, 0],
[1, "Prologue 〜Umibe〜", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "Prologue 〜Umibe〜.PNG", "y534F9oExbc", "Prologue 〜Umibe〜", "Concert theme", "Umibe tour theme", 0, 0],
	
		
//Cover Songs
[1, "Akatsuki Yami", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "Akatsuki Yami.png", "Rm963Aa3BVg", "Tribute of MUCC", "MUCC cover", "Original by MUCC", 0, 0],
[1, "JUSTY", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "JUSTY.png", "i5Nun3lK2xE", "HOTEI with FELLOWS - ALL TIME SUPER GUEST", "BOØWY cover", "Original by BOØWY", 0, 0],
[1, "Shout at the Devil", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "Shout at the Devil.png", "l8MmjIRXXzY", "L'Arc〜en〜Ciel Tribute", "L'Arc-en-Ciel cover", "Original by L'Arc-en-Ciel", 0, 0],
[1, "Wish", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "Wish.png", "cymEbFrc3fs", "LUNA SEA Memorial Cover Album -Re:birth-", "LUNA SEA cover", "Original by LUNA SEA", 0, 0],
[1, "Yasashii Higeki", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "Yasashii Higeki.png", "2iADpPM3L3M", "FUCK THE BORDERLINE", "Kuroyume cover", "Original by Kuroyume", 0, 0],
	
		
//Other Artists
[1, "Amagami", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "Amagami.png", "7WQ9xnsv9kA", "Sweet Bite", "Kuzuha", "written for Kuzuha (NIJISANJI)", 0, 0],
[1, "ASH", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "ASH.png", "nv9lr6pOeOQ", "ASH", "LiSA", "written for LiSA; Fate/Apocrypha Opening 2", 0, 1],
[1, "Gin no Yuri", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "Gin no Yuri.png", "0kNOdsYCDgQ", "Gin no Yuri", "Fantôme Iris", "written for Fantôme Iris (from ARGONAVIS)", 0, 0],
[1, "histoire", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "histoire.png", "kGsd10-WEAo", "histoire", "Fantôme Iris", "written for Fantôme Iris (from ARGONAVIS)", 0, 0],
[1, "Kage to Hikari", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "miroir.png", "XAX1UsoNETE", "miroir", "Fantôme Iris", "written for Fantôme Iris (from ARGONAVIS)", 0, 0],
[1, "Kagen no Tsukiyo", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "Kagen no Tsukiyo.png", "", "Kagen no Tsukiyo", "Fantôme Iris", "written for Fantôme Iris (from ARGONAVIS)", 0, 0],
[1, "Kyouki no Melody", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "Zakuro:Kyouki no Melody.png", "VZmh0qZkKrI", "Zakuro/Kyouki no Melody", "Fantôme Iris", "written for Fantôme Iris (from ARGONAVIS)", 0, 0],
[1, "miroir", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "miroir.png", "LWKVMYu_PWA", "miroir", "Fantôme Iris", "written for Fantôme Iris (from ARGONAVIS)", 0, 0],
[1, "Owari no Hajimari", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "Owari no Hajimari.png", "jdEVhT5z1hA", "Owari no Hajimari", "Taiki", "written for Taiki", 0, 0],
[1, "Usubeniiro no Yakusoku", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "Usubeniiro no Yakusoku.png", "i4q--jr5tB0", "Ensemble Stars! Album Series PRESENT -AKATSUKI-", "AKATSUKI", "written for AKATSUKI (Ensemble Stars!)", 0, 0],
[1, "Zakuro", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "Zakuro:Kyouki no Melody.png", "i8SX5nGvesI", "Zakuro/Kyouki no Melody", "Fantôme Iris", "written for Fantôme Iris (from ARGONAVIS)", 0, 0]
];

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
"Side B complete collection 〜e.B〜",
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
//2wink
[1, "2wink Introduction", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-2w.png", "HOqNYSMBRR0", "2wink", "2wink", "", 0, 0],
[1, "2winkle Star Beat☆", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-2w.png", "WZ7uGd7JXwc", "2wink", "2wink", "", 0, 0],
[1, "Fighting Dreamer", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s1-2w.png", "-gSkm51gi_E", "2wink", "2wink", "", 0, 0],
[1, "Heart Prism・Symmetry", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-2w.png", "oxdvynTUnjA", "2wink", "2wink", "", 0, 0],
[1, "Kangei☆2wink Zatsugidan", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-2w.png", "-Z-hgUnoR_s", "2wink", "2wink", "", 0, 0],
[1, "Mischievous Party Time!!", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es-an-ed3.png", "IlxyR5W2DPg", "2wink", "2wink", "", 0, 0],
[1, "Play \"Tag\"", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-2w.png", "-Xon7Q-2lq4", "2wink", "2wink", "", 0, 0],
[1, "POLYPHONIC WORLD", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s2-2w.png", "BMrP9F4qptc", "2wink", "2wink", "", 0, 0],
[1, "SPICY BREEZE", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-2w.png", "vQiXIPWLH9s", "2wink", "2wink", "Yuta solo", 0, 1],
[1, "Sugar Spice Hōteishiki", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-2w.png", "HRXUk8V4PyA", "2wink", "2wink", "", 0, 0],
[1, "Swee2wink Love Letter", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s2-2w.png", "jVOV0nFyymA", "2wink", "2wink", "", 0, 0],
[1, "SwEeT MeLlOw MeLoDy", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-2w.png", "QD4K48i50OA", "2wink", "2wink", "Hinata solo", 0, 1],
[1, "TRICK with TREAT!!", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-2w.png", "tGtPtQIjLQg", "2wink", "2wink", "with UNDEAD", 0, 0],
[1, "WONDER WONDER TOY LAND", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-2w.png", "UsaLXb-EhIQ", "2wink", "2wink", "", 0, 0],


//akatsuki
[1, "Akaneji no Kaikou", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-ak.png", "gATqxMLLsAM", "AKATSUKI", "AKATSUKI", "Keito solo", 0, 1],
[1, "Akatsuki Iroha Uta", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s1-ak.png", "oSN4uJArSCE", "AKATSUKI", "AKATSUKI", "", 0, 0],
[1, "Crimson Soul", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-ak.png", "T0_pEo2Wcgo", "AKATSUKI", "AKATSUKI", "Kuro solo", 0, 1],
[1, "Gekka Musou, Kurenai no Mai", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es-an-ed2.png", "oSN4uJArSCE", "AKATSUKI", "AKATSUKI", "", 0, 0],
[1, "Gekkou Kitan", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s2-ak.png", "aQlc29mHH0k", "AKATSUKI", "AKATSUKI", "", 0, 0],
[1, "Hana Akari no Koibumi", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-ak.png", "cnHo-32mb5A", "AKATSUKI", "AKATSUKI", "", 0, 0],
[1, "Hyakka Ryouran, Akatsukiyo", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-ak.png", "syWefpQOoLw", "AKATSUKI", "AKATSUKI", "", 0, 0],
[1, "Kengeki no Mai", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-ak.png", "ncNKaYysDXU", "AKATSUKI", "AKATSUKI", "", 0, 0],
[1, "Matsuriyo Emaki", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-ak.png", "we2mA4pghKA", "AKATSUKI", "AKATSUKI", "", 0, 0],
[1, "Omoide Tsuzuri", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-ak.png", "30bAxnYMeSk", "AKATSUKI", "AKATSUKI", "", 0, 0],
[1, "Ouka Kenran Seishunka", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-ak.png", "Sl_-1Pp2aGM", "AKATSUKI", "AKATSUKI", "Souma solo", 0, 1],
[1, "Usubeniiro no Yakusoku", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-ak.png", "me--Ejznn2g", "AKATSUKI", "AKATSUKI", "", 0, 0],
[1, "Yozora, Saritote Kasasagi wa", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s2-ak.png", "oSN4uJArSCE", "AKATSUKI", "AKATSUKI", "", 0, 0],
[1, "Zan -Ketsui no Yaiba-", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-ak.png", "CuAIFTp7bEs", "AKATSUKI", "AKATSUKI", "", 0, 0],
[1, "Natsudori no Uta -Summer Bird-", [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s3-ak.png", "xU_bmCaniFA", "AKATSUKI", "AKATSUKI", "", 0, 0],


//alkaloid
[1, "Believe 4 leaves", [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s2-al.png", "6hM-srwfgvY", "ALKALOID", "ALKALOID", "", 0, 0],
[1, "Distorted Heart", [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s1-al.png", "hF3PO-Oui74", "ALKALOID", "ALKALOID", "", 0, 0],
[1, "Hysteric Humanoid", [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s2-al.png", "PaK_iuPvgcc", "ALKALOID", "ALKALOID", "", 0, 0],
[1, "Kiss of Life", [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-uc-al.png", "ICLp0zIPJoc", "ALKALOID", "ALKALOID", "", 0, 0],
[1, "Living on the edge", [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s1-al.png", "Dbr5M0nn4DE", "ALKALOID", "ALKALOID", "", 0, 0],
[1, "Tsubasa Moratorium", [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-uc-al.png", "Z1JxXTOmgKw", "ALKALOID", "ALKALOID", "", 0, 0],
[1, "You’re Speculation", [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-uc-al.png", "D09nvht0asc", "ALKALOID", "ALKALOID", "", 0, 0],


//crazyb
[1, "Be The Party Bee!", [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-uc-cb.png", "0J48O38ZWEE", "Crazy:B", "Crazy:B", "", 0, 0],
[1, "Crazy Roulette", [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-uc-cb.png", "cc0l23W0CJo", "Crazy:B", "Crazy:B", "", 0, 0],
[1, "Honeycomb Summer", [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s1-cb.png", "5uVxCfUd7Pg", "Crazy:B", "Crazy:B", "", 0, 0],
[1, "Noisy:Beep", [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s2-cb.png", "PzgBnmBWTcA", "Crazy:B", "Crazy:B", "", 0, 0],
[1, "Paranoia Street", [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s1-cb.png", "Ppznq_Q5i_I", "Crazy:B", "Crazy:B", "", 0, 0],
[1, "RISKY VENUS", [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-uc-cb.png", "cOUgtqDuOdM", "Crazy:B", "Crazy:B", "", 0, 0],
[1, "Yubisaki no Ariadne", [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s2-cb.png", "MBsRSUGJX2o", "Crazy:B", "Crazy:B", "", 0, 0],


//double face
[1, "=EYE=", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s1-df.png", "XLhYUv7zyiw", "Double Face", "Double Face", "", 0, 0],
[1, "No name yet", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s2-df.png", "r_sHoP_hv5Y", "Double Face", "Double Face", "", 0, 0],
[1, "Secret of Metropolis", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s1-df.png", "3v3qeVhFq6I", "Double Face", "Double Face", "", 0, 0],
[1, "Stippling", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s1-df.png", "JjRH9n8t5fA", "Double Face", "Double Face", "", 0, 0],
[1, "Sleeper Mystery Train", [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s2-df.png", "WiG-eOyRlPA", "Double Face", "Double Face", "", 0, 0],


//eden
[1, "Awakening Myth", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es-an-ed6.png", "fkgncIRHZMo", "Eden", "Eden", "", 0, 0],
[1, "Back-alley Monologue", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-ed.png", "4TYU4g3qqHU", "Eden", "Eden", "Jun solo", 0, 1],
[1, "Dance in the Apocalypse", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-ed.png", "CU96arU5_gY", "Eden", "Eden", "", 0, 0],
[1, "Deep Eclipse", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-e-fe.png", "2NH-UDvl8mY", "Eden", "Eden", "", 0, 0],
[1, "EXCEED", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s2-ed.png", "G7aRSWQuZUk", "Eden", "Eden", "", 0, 0],
[1, "Fantastic Days◎", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-ed.png", "7bYnfGeDuvo", "Eden", "Eden", "Hiyori solo", 0, 1],
[1, "Poison Strategy", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-ed.png", "I5EpiMRm24U", "Eden", "Eden", "Ibara solo", 0, 1],
[1, "Psyche's Butterfly", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s2-ed.png", "sBufJE9qAg8", "Eden", "Eden", "", 0, 0],
[1, "Rakuen Tsuihou -Faith Conquest-", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s1-ed.png", "nW5Vs7oYWbI", "Eden", "Eden", "", 0, 0],
[1, "Ruler's Truth", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-ed.png", "YjvKWPWWt80", "Eden", "Eden", "Adam", 0, 0],
[1, "Sunlit Smile!", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-ed.png", "F_Iy7FdVu0E", "Eden", "Eden", "Eve", 0, 0],
[1, "The Beast of the End", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-ed.png", "P9HG6uVcaoM", "Eden", "Eden", "Adam", 0, 0],
[1, "THE GENESIS", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-ed.png", "Ot7J2U3-YJA", "Eden", "Eden", "", 0, 0],
[1, "Trap For You", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-ed.png", "5dteZ0uz5Ew", "Eden", "Eden", "Eve", 0, 0],
[1, "Umare Ochita Kono Sekai de", [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-ed.png", "M1lR1Ang6tw", "Eden", "Eden", "Nagisa solo", 0, 1],


//fine
[1, "Amazing☆World", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-fi.png", "-2WfNfVy_qo", "fine", "fine", "Wataru solo", 0, 1],
[1, "Feathers of Ark", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-e-fe.png", "M6o--Djuh0o", "fine", "fine", "", 0, 0],
[1, "Genuine Revelation", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-fi.png", "KLdzfn4H-4g", "fine", "fine", "Past fine", 0, 0],
[1, "Habataki no Fortissimo", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-fi.png", "ASazs66VPE0", "fine", "fine", "", 0, 0],
[1, "Hajimari no Fantasia", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "es-an-ed3.png", "mmxX6hAbMGM", "fine", "fine", "", 0, 0],
[1, "Holy Angel's Carol", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-fi.png", "mIUHODY29uY", "fine", "fine", "", 0, 0],
[1, "Koi wa Primavera!", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s2-fi.png", "o_6VGtYehYg", "fine", "fine", "", 0, 0],
[1, "Little Little Prince Star", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-fi.png", "TdZUJrpdmoc", "fine", "fine", "Tori solo", 0, 1],
[1, "Miracle Dream Traveler", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-fi.png", "meFKoc52xd0", "fine", "fine", "", 0, 0],
[1, "Neo Sanctuary", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-fi.png", "MWgQzEpaqLQ", "fine", "fine", "", 0, 0],
[1, "Never-ending Stage!!!!", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s2-fi.png", "Vw7ZNG5q2uM", "fine", "fine", "", 0, 0],
[1, "Owaranai Symphonia", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-fi.png", "5cOctQYP1ag", "fine", "fine", "", 0, 0],
[1, "RAINBOW CIRCUS", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-fi.png", "QWTLtTgKw24", "fine", "fine", "", 0, 0],
[1, "SHINING STAR", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-fi.png", "VvqCvV81Sls", "fine", "fine", "Eichi solo", 0, 1],
[1, "The Tempest Night", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "es2-s1-fi.png", "y7zUprX9QWY", "fine", "fine", "", 0, 0],
[1, "Tryst of Stars", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-fi.png", "ROISKLR7rSY", "fine", "fine", "", 0, 0],
[1, "Zutto Soba de...", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "es1-a-fi.png", "ZFYUWiudxpo", "fine", "fine", "Yuzuru solo", 0, 1],


//jin & akiomi
[1, "Binetsu Carnaval", [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "en1-uc-ji.png", "YUgAZpVm5AI", "Jin & Akiomi", "Jin & Akiomi", "Jin solo", 0, 1],
[1, "BUTTERFLY EFFECT", [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "en1-uc-ji.png", "N0niruSWCb0", "Jin & Akiomi", "Jin & Akiomi", "Akiomi solo", 0, 1],
[1, "Ensemble Taisou!!", [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "es2-e-ja.png", "bzuIiCEzELo", "Jin & Akiomi", "Jin & Akiomi", "", 0, 0],
[1, "Kagayaki No Naka De", [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "es2-e-ja.png", "aSGo-So-vWw", "Jin & Akiomi", "Jin & Akiomi", "", 0, 0],
[1, "Rainbow Stairway", [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "es1-uc-ji.png", "k0YC9iVkqGY", "Jin & Akiomi", "Jin & Akiomi", "", 0, 0],
[1, "Sentimental Liars", [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "en1-uc-ji.png", "ZadBEw9-Xk4", "Jin & Akiomi", "Jin & Akiomi", "", 0, 0],


//knights
[1, "Article of Faith", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "es1-a-kn.png", "fbHef_byH8g", "Knights", "Knights", "", 0, 0],
[1, "Birthday Of Music!", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "es1-a-kn.png", "5_fsC3WTrx4", "Knights", "Knights", "Leo solo", 0, 1],
[1, "Castle of my Heart", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "es2-s2-kn.png", "oasGB4_DEHo", "Knights", "Knights", "", 0, 0],
[1, "Checkmate Knights", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "es1-a-kn.png", "d5jcRSenxCM", "Knights", "Knights", "", 0, 0],
[1, "Fight for Judge", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "es1-a-kn.png", "cqUTuEgnCto", "Knights", "Knights", "", 0, 0],
[1, "Grateful Allegiance", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "es1-a-kn.png", "pAgbCb3hZO4", "Knights", "Knights", "", 0, 0],
[1, "Ironic Blue", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "es1-a-kn.png", "HYwh0YdyewE", "Knights", "Knights", "Izumi solo", 0, 1],
[1, "JEWEL STONE", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "es1-a-kn.png", "TDT2I-lDMzg", "Knights", "Knights", "Arashi solo", 0, 1],
[1, "Knights the Phantom Thief", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "es1-a-kn.png", "Gc_Iei613x0", "Knights", "Knights", "", 0, 0],
[1, "Little Romance", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "es2-s1-kn.png", "NawtORjgN20", "Knights", "Knights", "", 0, 0],
[1, "Mayonaka no Nocturne", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "es1-a-kn.png", "iPtq8UAxK6Y", "Knights", "Knights", "Ritsu solo", 0, 1],
[1, "Mystic Fragrance", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "es2-s2-kn.png", "mWV_FWunhL4", "Knights", "Knights", "", 0, 0],
[1, "Promise Sword", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "es-an-ed6.png", "MWWTqKmPgQc", "Knights", "Knights", "", 0, 0],
[1, "Silent Oath", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "es1-a-kn.png", "BdrwLIxhvks", "Knights", "Knights", "", 0, 0],
[1, "Voice of Sword", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "es1-a-kn.png", "9PTdLmOFNow", "Knights", "Knights", "", 0, 0],
[1, "With My Honesty", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "es1-a-kn.png", "gf12ZjEwq10", "Knights", "Knights", "Tsukasa solo", 0, 1],
[1, "Coruscate Breeze", [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "nopic.png", "yxTrUK27acA", "Knights", "Knights", "", 0, 0],


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

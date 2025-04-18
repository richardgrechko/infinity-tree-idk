let modInfo = {
	name: "The Infinity Tree",
	author: "richardgrechko",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.0",
	name: "Literally nothing",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>βv1.0.3</h3><br>
		- changed exponentiator to multiplier sry<br>
	<h3>βv1.0.2</h3><br>
		- made it so you gain (quantum+1) exponentiators<br>
	<h3>βv1.0.1</h3><br>
		- added transfinity, ultrafinity, hyper-eternity and quantum because why not<br>
		- changed gain formula<br>
	<h3>βv1.0.0</h3><br>
		- i dont know what to say anymore lmfao<br>`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1).mul(player.mul.points.add(1)).mul(player.inf.points.add(1)).mul(player.trans.points.add(1)).mul(player.ultra.points.add(1)).mul(player.eter.points.add(1).pow(2)).mul(player.hypetr.points.add(1).pow(2))
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e1.0243519943873936e38")) // The game will end at 2^2^128.
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}

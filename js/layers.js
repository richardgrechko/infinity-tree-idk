// resiores
addLayer("exp", {
	name: "exponent", // This is optional, only used in a few places, If absent it just uses the layer id.
	symbol: "↑", // This appears on the layer's node. Default is the id with the first letter capitalized
	position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
	startData() { return {
        unlocked: true,
		points: new Decimal(0),
	}},
	color: "#dfbd92",
	requires: new Decimal(10), // Can be a function that takes requirement increases into account
	resource: "exponentiators", // Name of prestige currency
	baseResource: "points", // Name of resource prestige is based on
	baseAmount() {return player.points}, // Get the current amount of baseResource
	type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
	exponent: 0.5, // Prestige currency exponent
	gainMult() { // Calculate the multiplier for main currency from bonuses
	    mult = new Decimal(1)
	    return mult
	},
	gainExp() { // Calculate the exponent on main currency from bonuses
	    return new Decimal(4)
	},
	row: 0, // Row the layer is in on the tree (0 is the first row)
	branches: ["inf", "eter"],
	hotkeys: [
	    {key: "e", description: "E: Reset for exponentiators", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
	],
	layerShown(){return true}
})
addLayer("inf", {
	name: "infinity", // This is optional, only used in a few places, If absent it just uses the layer id.
	symbol: "∞", // This appears on the layer's node. Default is the id with the first letter capitalized
	position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
	startData() { return {
        unlocked: true,
		points: new Decimal(0),
	}},
	color: "#c68a3f",
	requires: new Decimal(2).pow(1024), // Can be a function that takes requirement increases into account
	resource: "∞", // Name of prestige currency
	baseResource: "points", // Name of resource prestige is based on
	baseAmount() {return player.points}, // Get the current amount of baseResource
	type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
	exponent: 4, // Prestige currency exponent
	gainMult() { // Calculate the multiplier for main currency from bonuses
	    mult = new Decimal(1)
	    return mult
	},
	gainExp() { // Calculate the exponent on main currency from bonuses
	    return new Decimal(2).pow(63)
	},
	row: 1, // Row the layer is in on the tree (0 is the first row)
	branches: ["eter"],
	hotkeys: [
	    {key: "r", description: "R: Reset for infinities", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
	],
	layerShown(){return true}
})
addLayer("eter", {
	name: "eternity", // This is optional, only used in a few places, If absent it just uses the layer id.
	symbol: "∑", // This appears on the layer's node. Default is the id with the first letter capitalized
	position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
	startData() { return {
        unlocked: true,
		points: new Decimal(0),
	}},
	color: "#a040c7",
	requires: new Decimal(2).pow(1024), // Can be a function that takes requirement increases into account
	resource: "∑", // Name of prestige currency
	baseResource: "∞", // Name of resource prestige is based on
	baseAmount() {return player.inf.points}, // Get the current amount of baseResource
	type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
	exponent: 4, // Prestige currency exponent
	gainMult() { // Calculate the multiplier for main currency from bonuses
	    mult = new Decimal(1)
	    return mult
	},
	gainExp() { // Calculate the exponent on main currency from bonuses
	    return new Decimal(2).pow(63)
	},
	row: 2, // Row the layer is in on the tree (0 is the first row)
	hotkeys: [
	    {key: "t", description: "T: Reset for eternities", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
	],
	layerShown(){return true}
})

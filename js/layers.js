addLayer("mul", {
	name: "multiplier", // This is optional, only used in a few places, If absent it just uses the layer id.
	symbol: "×", // This appears on the layer's node. Default is the id with the first letter capitalized
	position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
	startData() { return {
        	unlocked: true,
		points: new Decimal(0),
	}},
	color: "#dfbd92",
	requires: new Decimal(10), // Can be a function that takes requirement increases into account
	resource: "multipliers", // Name of prestige currency
	baseResource: "points", // Name of resource prestige is based on
	baseAmount() {return player.points}, // Get the current amount of baseResource
	type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
	exponent: 0, // Prestige currency exponent
	gainMult() { // Calculate the multiplier for main currency from bonuses
	    mult = player.quantum.points.add(1)
	    return mult
	},
	gainExp() { // Calculate the exponent on main currency from bonuses
	    return new Decimal(1)
	},
	row: 0, // Row the layer is in on the tree (0 is the first row)
	branches: ["inf"],
	hotkeys: [
	    {key: "x", description: "X: Reset for exponentiators", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
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
	type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
	exponent: 0.75, // Prestige currency exponent
	gainMult() { // Calculate the multiplier for main currency from bonuses
	    mult = new Decimal(1)
	    return mult
	},
	gainExp() { // Calculate the exponent on main currency from bonuses
	    return new Decimal(16)
	},
	row: 1, // Row the layer is in on the tree (0 is the first row)
	branches: ["trans", "eter"],
	hotkeys: [
	    {key: "i", description: "I: Reset for infinities", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
	],
	layerShown(){return true}
})
addLayer("trans", {
	name: "transfinity", // This is optional, only used in a few places, If absent it just uses the layer id.
	symbol: "∞+", // This appears on the layer's node. Default is the id with the first letter capitalized
	position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
	startData() { return {
        	unlocked: true,
		points: new Decimal(0),
	}},
	color: "#ad6e20",
	requires: new Decimal(2).pow(31).sub(1), // Can be a function that takes requirement increases into account
	resource: "∞+", // Name of prestige currency
	baseResource: "∞", // Name of resource prestige is based on
	baseAmount() {return player.inf.points}, // Get the current amount of baseResource
	type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
	exponent: 0.5, // Prestige currency exponent
	gainMult() { // Calculate the multiplier for main currency from bonuses
	    mult = new Decimal(1)
	    return mult
	},
	gainExp() { // Calculate the exponent on main currency from bonuses
	    return new Decimal(16)
	},
	row: 2, // Row the layer is in on the tree (0 is the first row)
	branches: ["hypetr", "ultra"],
	hotkeys: [
	    {key: "t", description: "T: Reset for transfinities", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
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
	type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
	exponent: 0.5, // Prestige currency exponent
	gainMult() { // Calculate the multiplier for main currency from bonuses
	    mult = new Decimal(1)
	    return mult
	},
	gainExp() { // Calculate the exponent on main currency from bonuses
	    return new Decimal(16)
	},
	row: 2, // Row the layer is in on the tree (0 is the first row)
	branches: ["quantum", "hypetr"],
	hotkeys: [
	    {key: "e", description: "E: Reset for eternities", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
	],
	layerShown(){return true}
})
addLayer("quantum", {
	name: "quantum", // This is optional, only used in a few places, If absent it just uses the layer id.
	symbol: "◻", // This appears on the layer's node. Default is the id with the first letter capitalized
	position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
	startData() { return {
        	unlocked: true,
		points: new Decimal(0),
	}},
	color: "#76dd65",
	requires: new Decimal(2).pow(32).sub(1), // Can be a function that takes requirement increases into account
	resource: "◻", // Name of prestige currency
	baseResource: "∑", // Name of resource prestige is based on
	baseAmount() {return player.eter.points}, // Get the current amount of baseResource
	type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
	exponent: 0.5, // Prestige currency exponent
	gainMult() { // Calculate the multiplier for main currency from bonuses
	    mult = new Decimal(1)
	    return mult
	},
	gainExp() { // Calculate the exponent on main currency from bonuses
	    return new Decimal(16)
	},
	row: 3, // Row the layer is in on the tree (0 is the first row)
	hotkeys: [
	    {key: "q", description: "Q: Reset for quantums", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
	],
	layerShown(){return true}
})
addLayer("hypetr", {
	name: "hypereternity", // This is optional, only used in a few places, If absent it just uses the layer id.
	symbol: "∑+", // This appears on the layer's node. Default is the id with the first letter capitalized
	position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
	startData() { return {
        	unlocked: true,
		points: new Decimal(0),
	}},
	color: "#651aba",
	requires: new Decimal(2).pow(32).sub(1), // Can be a function that takes requirement increases into account
	resource: "∑+", // Name of prestige currency
	baseResource: "∑", // Name of resource prestige is based on
	baseAmount() {return player.eter.points}, // Get the current amount of baseResource
	type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
	exponent: 0.5, // Prestige currency exponent
	gainMult() { // Calculate the multiplier for main currency from bonuses
	    mult = new Decimal(1)
	    return mult
	},
	gainExp() { // Calculate the exponent on main currency from bonuses
	    return new Decimal(16)
	},
	row: 3, // Row the layer is in on the tree (0 is the first row)
	hotkeys: [
	    {key: "h", description: "H: Reset for hyper-eternities", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
	],
	layerShown(){return true}
})
addLayer("ultra", {
	name: "ultrafinity", // This is optional, only used in a few places, If absent it just uses the layer id.
	symbol: "∞++", // This appears on the layer's node. Default is the id with the first letter capitalized
	position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
	startData() { return {
        	unlocked: true,
		points: new Decimal(0),
	}},
	color: "#995e15",
	requires: new Decimal(2).pow(31).sub(1), // Can be a function that takes requirement increases into account
	resource: "∞++", // Name of prestige currency
	baseResource: "∞+", // Name of resource prestige is based on
	baseAmount() {return player.trans.points}, // Get the current amount of baseResource
	type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
	exponent: 0.5, // Prestige currency exponent
	gainMult() { // Calculate the multiplier for main currency from bonuses
	    mult = new Decimal(1)
	    return mult
	},
	gainExp() { // Calculate the exponent on main currency from bonuses
	    return new Decimal(16)
	},
	row: 3, // Row the layer is in on the tree (0 is the first row)
	hotkeys: [
	    {key: "u", description: "U: Reset for ultrafinities", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
	],
	layerShown(){return true}
})

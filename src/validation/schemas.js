module.exports = {
	TempreatureAdd: {
		type: "object",
		additionalProperties: false,
		required: ["celcius", "light"],
		properties: {
			celcius: {
		  		type: "number"
			},
			light: {
				type: "number"
		  }
		}
	}
}
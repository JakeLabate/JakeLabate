function removeSchemaOrg(json) {
	let schemaOrgFound = false;
	function recurse(obj) {
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				let value = obj[key];
				if (value && typeof value === "object") {
					recurse(value);
				} else if (!schemaOrgFound && value === "https://schema.org") {
					schemaOrgFound = true;
				} else if (value === "https://schema.org") {
					delete obj[key];
				}
			}
		}
	}
	recurse(json);
	return JSON.parse(JSON.stringify(json));
}

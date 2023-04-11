function removeEmptyKeys(json) {
  Object.keys(json).forEach((key) => {
    const value = json[key];
    if (value === null || value === '' || value === undefined) {
      delete json[key];
    } else if (typeof value === 'object') {
      if (Array.isArray(value)) {
        json[key] = value.filter(item => item !== null && item !== '' && item !== undefined);
        if (json[key].length === 0) {
          delete json[key];
        }
      } else {
        removeEmptyKeys(value);
        if (Object.keys(value).length === 0) {
          delete json[key];
        }
      }
    }
  });
  return json;
}

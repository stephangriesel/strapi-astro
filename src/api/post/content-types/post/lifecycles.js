const readingTime = require("reading-time");

module.exports = {
  beforeCreate(event) {
    const { data, where, select, populate } = event.params;

    if (event.params.data.content && event.params.data.content?.length > 0) {
      // @ts-ignore
      event.params.data.readingTime = readingTime(event.params.data.content)?.text || null;
    }
  },

  beforeUpdate(event) {
    const { data, where, select, populate } = event.params;

    if (event.params.data.content && event.params.data.content?.length > 0) {
      // @ts-ignore
      event.params.data.readingTime = readingTime(event.params.data.content)?.text || null;
    }
  },

};
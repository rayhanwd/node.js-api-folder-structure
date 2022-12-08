const NodeCache = require("node-cache");

const createcache = (stdTTL, checkperiod) => {
  const cache = new NodeCache({ stdTTL: stdTTL, checkperiod: checkperiod });
  return cache;
};

module.exports = createcache;

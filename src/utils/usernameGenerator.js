module.exports = function generateUsername(name) {
    return name.toLowerCase().replace(/\s+/g, '');
};
  
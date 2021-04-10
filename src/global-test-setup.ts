module.exports = async () => {
  // Ensure all Jest tests run with UTC time
  process.env.TZ = 'UTC';
};

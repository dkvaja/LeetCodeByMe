/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  if (!address) return;
  return address.split(".").join("[.]");
};

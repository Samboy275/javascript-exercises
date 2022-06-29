const ftoc = function(fdegrees) {
  cdegrees = (fdegrees - 32) * (5/9);
  cdegrees = Math.round(cdegrees * 10) / 10;
  return cdegrees;
};

const ctof = function(cdegrees) {
  let fdegrees = (cdegrees * (9/5)) + 32;
  fdegrees = Math.round(fdegrees * 10) / 10;
  return fdegrees;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

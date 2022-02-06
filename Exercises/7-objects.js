'use strict';

const fn = function() {
  const obj = {};
  obj.name = 'Fedor';
  let newobj = {};
  newobj.name = 'Vasy';
  obj.name = 'Fedor';
  newobj.name = 'Fedor';

  newobj = { name: 'Fedor Datsyk' };


};

module.exports = { fn };

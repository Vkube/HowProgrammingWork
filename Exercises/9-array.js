"use strict";

const phonebook = [
  { name: "Yaroslav", phone: "+9282838283" },
  { name: "Max", phone: "+722030230203" },
];

const findPhoneByName = (name) => {
  let obj = { name: { name: "", phone: "" } };
  for (const name in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const person = obj[name];
      if (name === person) {
        return obj[phone];
      }
    }
  }
};

module.exports = { phonebook, findPhoneByName };

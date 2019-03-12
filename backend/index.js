const Item = require('./item');

const BB1 = new Item({itemNumber: 'BB1', itemName: 'Standard Barbell', createDate: new Date()});
const BB2 = new Item({itemNumber: 'BB2', itemName: 'Black Barbell', createDate: new Date()});
const BB3 = new Item({itemNumber: 'BB3', itemName: 'Pink Barbell', createDate: new Date()});
const BB4 = new Item({itemNumber: 'BB4', itemName: 'Red Barbell'});

console.log('BB1: ', BB1);
console.log('BB2: ', BB2);
console.log('BB3: ', BB3);
console.log('BB4: ', BB4);
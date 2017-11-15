'use strict';

var stores = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
function Store(name, maxCust, minCust, avgCookies) {
  this.name = name;
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.avgCookies = avgCookies;
  this.hourlyCookies = [];
  this.dailyTotal = 0;
  stores.push(this);
  this.getHourlyCookies();
}
Store.prototype.getCustomersPerHour = function() {
  return getRandomNum(this.minCust, this.maxCust);
};
Store.prototype.getHourlyCookies = function() {
  for(var i = 0; i < hours.length; i++) {
    this.hourlyCookies.push(Math.floor(this.getCustomersPerHour() * this.avgCookies));
    this.dailyTotal += this.hourlyCookies[i];
  }
  return this.hourlyCookies;
};
new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);
function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function createTable() {
  var tableEl = document.getElementById('main-tbl');
  tableEl.appendChild(createTableHead());
  tableEl.appendChild(createTableBody());
}
function createTableHead() {
  var theadEl = document.createElement('thead');
  var headRow = createTableRow('', hours, 'Totals');
  theadEl.appendChild(headRow);
  return theadEl;
}
function createTableBody() {
  var tbodyEl = document.createElement('tbody');
  for(var k = 0; k < stores.length; k++) {
    var bodyRow = createTableRow(stores[k].name, stores[k].hourlyCookies, stores[k].dailyTotal);
    tbodyEl.appendChild(bodyRow);
  }
  return tbodyEl;
}
function createTableRow(verticalHeader, dataPoints, verticalFooter) {
  var trEl = document.createElement('tr');
  var tdElOne = document.createElement('td');
  tdElOne.textContent = verticalHeader;
  trEl.appendChild(tdElOne);
  for(var j = 0; j < dataPoints.length; j++) {
    var tdElTwo = document.createElement('td');
    tdElTwo.textContent = dataPoints[j];
    trEl.appendChild(tdElTwo);
  }
  var tdElThree = document.createElement('td');
  tdElThree.textContent = verticalFooter;
  trEl.appendChild(tdElThree);
  return trEl;
}
createTable();
// var firstStore = {
//   name: '1st and Pike',
//   minCust: 23,
//   maxCust: 65,
//   avgSale: 6.3,
//   custPerHour: function() {
//     console.log('1st and Pike:', firstStore);
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   cookiesPerHour: function() {
//     var arr = [];
//     for (var i = 0; i < hours.length; i++) {
//       console.log('custPerHour =' , this.custPerHour());
//       console.log('this.avgSale = ', this.avgSale);
//       console.log(this.custPerHour() * this.avgSale);
//       arr.push(Math.round(this.custPerHour() * this.avgSale));
//     }
//     var sum = 0;
//     for(var h = 0; h < hours.length; h++) {
//       sum += arr[h];
//     }
//     arr.push(sum);
//     console.log('the sum:', sum);
//     return arr;
//   },
//   pList: function() {
//     var cookiesPerHour = this.cookiesPerHour();
//     var pa = document.createElement('p');
//     var lName = document.createTextNode(this.name);
//     pa.appendChild(lName);
//     var laStart = document.getElementById('start');
//     laStart.insertBefore(pa,document.getElementById('1'));
//     for (var i = 0; i < hours.length; i++){
//       var ts = document.createElement('li');
//       ts.appendChild(document.createTextNode(hours[i] + ': ' + cookiesPerHour[i] + ' cookies.' ));
//       document.getElementById('1').appendChild(ts);
//     }
//     var totalCookies = document.createElement('li');
//     totalCookies.appendChild(document.createTextNode('Total: ' + cookiesPerHour[15] + ' cookies.'));
//     document.getElementById('1').appendChild(totalCookies);
//   }
// };
// var secondStore = {
//   name: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.2,
//   custPerHour: function() {
//     console.log('SeaTac Airport:', secondStore);
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   cookiesPerHour: function() {
//     var arr = [];
//     for (var i = 0; i < hours.length; i++) {
//       console.log('custPerHour =' , this.custPerHour());
//       console.log('this.avgSale = ', this.avgSale);
//       console.log(this.custPerHour() * this.avgSale);
//       arr.push(Math.round(this.custPerHour() * this.avgSale));
//     }
//     var sum = 0;
//     for(var h = 0; h < hours.length; h++) {
//       sum += arr[h];
//     }
//     arr.push(sum);
//     console.log('the sum:', sum);
//     return arr;
//   },
//   pList: function() {
//     var cookiesPerHour = this.cookiesPerHour();
//     var pa = document.createElement('p');
//     var lName = document.createTextNode(this.name);
//     pa.appendChild(lName);
//     var laStart = document.getElementById('start');
//     laStart.insertBefore(pa,document.getElementById('2'));
//     for (var i = 0; i < hours.length; i++){
//       var ts = document.createElement('li');
//       ts.appendChild(document.createTextNode(hours[i] + ': ' + cookiesPerHour[i] + ' cookies.' ));
//       document.getElementById('2').appendChild(ts);
//     }
//     var totalCookies = document.createElement('li');
//     totalCookies.appendChild(document.createTextNode('Total: ' + cookiesPerHour[15] + ' cookies.'));
//     document.getElementById('2').appendChild(totalCookies);
//   }
// };
// var thirdStore = {
//   name: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgSale: 3.7,
//   custPerHour: function() {
//     console.log('Seattle Center:', thirdStore);
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   cookiesPerHour: function() {
//     var arr = [];
//     for (var i = 0; i < hours.length; i++){
//       console.log('custPerHour =' , this.custPerHour());
//       console.log('this.avgSale =', this.avgSale);
//       console.log(this.custPerHour() * this.avgSale);
//       arr.push(Math.round(this.custPerHour() * this.avgSale));
//     }
//     var sum = 0;
//     for(var h = 0; h < hours.length; h++) {
//       sum += arr[h];
//     }
//     arr.push(sum);
//     console.log('the sum:', sum);
//     return arr;
//   },
//   pList: function() {
//     var cookiesPerHour = this.cookiesPerHour();
//     var pa = document.createElement('p');
//     var lName = document.createTextNode(this.name);
//     pa.appendChild(lName);
//     var laStart = document.getElementById('start');
//     laStart.insertBefore(pa,document.getElementById('3'));
//     for (var i = 0; i < hours.length; i++){
//       var ts = document.createElement('li');
//       ts.appendChild(document.createTextNode(hours[i] + ': ' + cookiesPerHour[i] + ' cookies.' ));
//       document.getElementById('3').appendChild(ts);
//     }
//     var totalCookies = document.createElement('li');
//     totalCookies.appendChild(document.createTextNode('Total: ' + cookiesPerHour[15] + ' cookies.'));
//     document.getElementById('3').appendChild(totalCookies);
//   }
// };
// var fourthStore = {
//   name: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgSale: 2.3,
//   custPerHour: function() {
//     console.log('Capitol Hill:', fourthStore);
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   cookiesPerHour: function() {
//     var arr = [];
//     for (var i = 0; i < hours.length; i++){
//       console.log('custPerHour =' , this.custPerHour());
//       console.log('this.avgSale = ', this.avgSale);
//       console.log(this.custPerHour() * this.avgSale);
//       arr.push(Math.round(this.custPerHour() * this.avgSale));
//     }
//     var sum = 0;
//     for(var h = 0; h < hours.length; h++) {
//       sum += arr[h];
//     }
//     arr.push(sum);
//     console.log('the sum:', sum);
//     return arr;
//   },
//   pList: function() {
//     var cookiesPerHour = this.cookiesPerHour();
//     var pa = document.createElement('p');
//     var lName = document.createTextNode(this.name);
//     pa.appendChild(lName);
//     var laStart = document.getElementById('start');
//     laStart.insertBefore(pa,document.getElementById('4'));
//     for (var i = 0; i < hours.length; i++){
//       var ts = document.createElement('li');
//       ts.appendChild(document.createTextNode(hours[i] + ': ' + cookiesPerHour[i] + ' cookies.' ));
//       document.getElementById('4').appendChild(ts);
//     }
//     var totalCookies = document.createElement('li');
//     totalCookies.appendChild(document.createTextNode('Total: ' + cookiesPerHour[15] + ' cookies.'));
//     document.getElementById('4').appendChild(totalCookies);
//   }
// };
// var fifthStore = {
//   name: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgSale: 4.6,
//   custPerHour: function() {
//     console.log('Alki:', fifthStore);
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   cookiesPerHour: function() {
//     var arr = [];
//     for (var i = 0; i < hours.length; i++) {
//       console.log('custPerHour =' , this.custPerHour());
//       console.log('this.avgSale = ', this.avgSale);
//       console.log(this.custPerHour() * this.avgSale);
//       arr.push(Math.round(this.custPerHour() * this.avgSale));
//     }
//     var sum = 0;
//     for(var h = 0; h < hours.length; h++) {
//       sum += arr[h];
//     }
//     arr.push(sum);
//     console.log('the sum:', sum);
//     return arr;
//   },
//   pList: function() {
//     var cookiesPerHour = this.cookiesPerHour();
//     var pa = document.createElement('p');
//     var lName = document.createTextNode(this.name);
//     pa.appendChild(lName);
//     var laStart = document.getElementById('start');
//     laStart.insertBefore(pa,document.getElementById('5'));
//     for (var i = 0; i < hours.length; i++){
//       var ts = document.createElement('li');
//       ts.appendChild(document.createTextNode(hours[i] + ': ' + cookiesPerHour[i] + ' cookies.' ));
//       document.getElementById('5').appendChild(ts);
//     }
//     var totalCookies = document.createElement('li');
//     totalCookies.appendChild(document.createTextNode('Total: ' + cookiesPerHour[15] + ' cookies.'));
//     document.getElementById('5').appendChild(totalCookies);
//   }
// };
// firstStore.pList();
// secondStore.pList();
// thirdStore.pList();
// fourthStore.pList();
// fifthStore.pList();

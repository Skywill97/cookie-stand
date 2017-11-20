'use strict';

var stores = [];
var hours = ['6', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM',];
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

var add = document.getElementById('store-data');

function onSubmit(event) {
  event.preventDefault();
  var myFormData = {};
  myFormData.name = event.target.name.value;
  myFormData.minCust = parseInt(event.target.minCust.value);
  myFormData.maxCust = parseInt(event.target.maxCust.value);
  myFormData.avgCookies = parseFloat(event.target.avgCookies.value);
  console.log('stuff', myFormData.maxCust, myFormData.minCust, myFormData.avgCookies);

  var newStore = new Store(myFormData.name, myFormData.maxCust, myFormData.minCust, myFormData.avgCookies);
  console.log(newStore);

  let tbleEl = document.getElementById('main-tbl');
  tbleEl.innerHTML = '';
  createTable();

}

add.addEventListener('submit', onSubmit);

'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstStore = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  custPerHour: function() {
    console.log('1st and Pike:', firstStore);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesPerHour: function() {
    var arr = [];
    for (var i = 0; i < hours.length; i++) {
      console.log('custPerHour =' , this.custPerHour());
      console.log('this.avgSale = ', this.avgSale);
      console.log(this.custPerHour() * this.avgSale);
      arr.push(Math.round(this.custPerHour() * this.avgSale));
    }
    var sum = 0;
    for(var h = 0; h < hours.length; h++) {
      sum += arr[h];
    }
    arr.push(sum);
    console.log('the sum:', sum);
    return arr;
  },
  pList: function() {
    var cookiesPerHour = this.cookiesPerHour();
    var pa = document.createElement('p');
    var lName = document.createTextNode(this.name);
    pa.appendChild(lName);
    var laStart = document.getElementById('start');
    laStart.insertBefore(pa,document.getElementById('1'));
    for (var i = 0; i < hours.length; i++){
      var ts = document.createElement('li');
      ts.appendChild(document.createTextNode(hours[i] + ': ' + cookiesPerHour[i] + ' cookies.' ));
      document.getElementById('1').appendChild(ts);
    }
    var totalCookies = document.createElement('li');
    totalCookies.appendChild(document.createTextNode('Total: ' + cookiesPerHour[15] + ' cookies.'));
    document.getElementById('1').appendChild(totalCookies);
  }
};
var secondStore = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  custPerHour: function() {
    console.log('SeaTac Airport:', secondStore);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesPerHour: function() {
    var arr = [];
    for (var i = 0; i < hours.length; i++) {
      console.log('custPerHour =' , this.custPerHour());
      console.log('this.avgSale = ', this.avgSale);
      console.log(this.custPerHour() * this.avgSale);
      arr.push(Math.round(this.custPerHour() * this.avgSale));
    }
    var sum = 0;
    for(var h = 0; h < hours.length; h++) {
      sum += arr[h];
    }
    arr.push(sum);
    console.log('the sum:', sum);
    return arr;
  },
  pList: function() {
    var cookiesPerHour = this.cookiesPerHour();
    var pa = document.createElement('p');
    var lName = document.createTextNode(this.name);
    pa.appendChild(lName);
    var laStart = document.getElementById('start');
    laStart.insertBefore(pa,document.getElementById('2'));
    for (var i = 0; i < hours.length; i++){
      var ts = document.createElement('li');
      ts.appendChild(document.createTextNode(hours[i] + ': ' + cookiesPerHour[i] + ' cookies.' ));
      document.getElementById('2').appendChild(ts);
    }
    var totalCookies = document.createElement('li');
    totalCookies.appendChild(document.createTextNode('Total: ' + cookiesPerHour[15] + ' cookies.'));
    document.getElementById('2').appendChild(totalCookies);
  }
};
var thirdStore = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  custPerHour: function() {
    console.log('Seattle Center:', thirdStore);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesPerHour: function() {
    var arr = [];
    for (var i = 0; i < hours.length; i++){
      console.log('custPerHour =' , this.custPerHour());
      console.log('this.avgSale =', this.avgSale);
      console.log(this.custPerHour() * this.avgSale);
      arr.push(Math.round(this.custPerHour() * this.avgSale));
    }
    var sum = 0;
    for(var h = 0; h < hours.length; h++) {
      sum += arr[h];
    }
    arr.push(sum);
    console.log('the sum:', sum);
    return arr;
  },
  pList: function() {
    var cookiesPerHour = this.cookiesPerHour();
    var pa = document.createElement('p');
    var lName = document.createTextNode(this.name);
    pa.appendChild(lName);
    var laStart = document.getElementById('start');
    laStart.insertBefore(pa,document.getElementById('3'));
    for (var i = 0; i < hours.length; i++){
      var ts = document.createElement('li');
      ts.appendChild(document.createTextNode(hours[i] + ': ' + cookiesPerHour[i] + ' cookies.' ));
      document.getElementById('3').appendChild(ts);
    }
    var totalCookies = document.createElement('li');
    totalCookies.appendChild(document.createTextNode('Total: ' + cookiesPerHour[15] + ' cookies.'));
    document.getElementById('3').appendChild(totalCookies);
  }
};
var fourthStore = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  custPerHour: function() {
    console.log('Capitol Hill:', fourthStore);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesPerHour: function() {
    var arr = [];
    for (var i = 0; i < hours.length; i++){
      console.log('custPerHour =' , this.custPerHour());
      console.log('this.avgSale = ', this.avgSale);
      console.log(this.custPerHour() * this.avgSale);
      arr.push(Math.round(this.custPerHour() * this.avgSale));
    }
    var sum = 0;
    for(var h = 0; h < hours.length; h++) {
      sum += arr[h];
    }
    arr.push(sum);
    console.log('the sum:', sum);
    return arr;
  },
  pList: function() {
    var cookiesPerHour = this.cookiesPerHour();
    var pa = document.createElement('p');
    var lName = document.createTextNode(this.name);
    pa.appendChild(lName);
    var laStart = document.getElementById('start');
    laStart.insertBefore(pa,document.getElementById('4'));
    for (var i = 0; i < hours.length; i++){
      var ts = document.createElement('li');
      ts.appendChild(document.createTextNode(hours[i] + ': ' + cookiesPerHour[i] + ' cookies.' ));
      document.getElementById('4').appendChild(ts);
    }
    var totalCookies = document.createElement('li');
    totalCookies.appendChild(document.createTextNode('Total: ' + cookiesPerHour[15] + ' cookies.'));
    document.getElementById('4').appendChild(totalCookies);
  }
};
var fifthStore = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  custPerHour: function() {
    console.log('Alki:', fifthStore);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesPerHour: function() {
    var arr = [];
    for (var i = 0; i < hours.length; i++) {
      console.log('custPerHour =' , this.custPerHour());
      console.log('this.avgSale = ', this.avgSale);
      console.log(this.custPerHour() * this.avgSale);
      arr.push(Math.round(this.custPerHour() * this.avgSale));
    }
    var sum = 0;
    for(var h = 0; h < hours.length; h++) {
      sum += arr[h];
    }
    arr.push(sum);
    console.log('the sum:', sum);
    return arr;
  },
  pList: function() {
    var cookiesPerHour = this.cookiesPerHour();
    var pa = document.createElement('p');
    var lName = document.createTextNode(this.name);
    pa.appendChild(lName);
    var laStart = document.getElementById('start');
    laStart.insertBefore(pa,document.getElementById('5'));
    for (var i = 0; i < hours.length; i++){
      var ts = document.createElement('li');
      ts.appendChild(document.createTextNode(hours[i] + ': ' + cookiesPerHour[i] + ' cookies.' ));
      document.getElementById('5').appendChild(ts);
    }
    var totalCookies = document.createElement('li');
    totalCookies.appendChild(document.createTextNode('Total: ' + cookiesPerHour[15] + ' cookies.'));
    document.getElementById('5').appendChild(totalCookies);
  }
};
firstStore.pList();
secondStore.pList();
thirdStore.pList();
fourthStore.pList();
fifthStore.pList();

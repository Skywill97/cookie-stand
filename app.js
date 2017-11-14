'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstStore = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  custPerHour: function() {
    console.log('1st and Pike', firstStore);
    return Math.floor(Math.random() * (this.minCust - this.maxCust + 1)) + this.minCust;
  },
  cookiesPerHour: function() {
    var arr = [];
    for (var i = 0; i < hours.length; i++){
      console.log('custPerHour =' , this.custPerHour());
      console.log('this.avgSale = ', this.avgSale);
      console.log(this.custPerHour() * this.avgSale);
      arr.push(this.custPerHour() * this.avgSale);
    }
    return arr;
  }
};

var secondStore = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  custPerHour: function() {
    console.log('SeaTac Airport', secondStore);
    return Math.floor(Math.random() * (this.minCust - this.maxCust + 1)) + this.minCust;
  },
  cookiesPerHour: function() {
    var arr = [];
    for (var i = 0; i < hours.length; i++){
      console.log('custPerHour =' , this.custPerHour());
      console.log('this.avgSale = ', this.avgSale);
      console.log(this.custPerHour() * this.avgSale);
      arr.push(this.custPerHour() * this.avgSale);
    }
    return arr;
  }
};

var thirdStore = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  custPerHour: function() {
    console.log('Seattle Center', thirdStore);
    return Math.floor(Math.random() * (this.minCust - this.maxCust + 1)) + this.minCust;
  },
  cookiesPerHour: function() {
    var arr = [];
    for (var i = 0; i < hours.length; i++){
      console.log('custPerHour =' , this.custPerHour());
      console.log('this.avgSale = ', this.avgSale);
      console.log(this.custPerHour() * this.avgSale);
      arr.push(this.custPerHour() * this.avgSale);
    }
    return arr;
  },
};

var fourthStore = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgSale: 3.2,
  custPerHour: function() {
    console.log('Capitol Hill', fourthStore);
    return Math.floor(Math.random() * (this.minCust - this.maxCust + 1)) + this.minCust;
  },
  cookiesPerHour: function() {
    var arr = [];
    for (var i = 0; i < hours.length; i++){
      console.log('custPerHour =' , this.custPerHour());
      console.log('this.avgSale = ', this.avgSale);
      console.log(this.custPerHour() * this.avgSale);
      arr.push(this.custPerHour() * this.avgSale);
    }
    return arr;
  },
};

var fifthStore = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  custPerHour: function() {
    console.log('Alki', fifthStore);
    return Math.floor(Math.random() * (this.minCust - this.maxCust + 1)) + this.minCust;
  },
  cookiesPerHour: function() {
    var arr = [];
    for (var i = 0; i < hours.length; i++){
      console.log('custPerHour =' , this.custPerHour());
      console.log('this.avgSale = ', this.avgSale);
      console.log(this.custPerHour() * this.avgSale);
      arr.push(this.custPerHour() * this.avgSale);
    }
    return arr;
  },
};

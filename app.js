'use strict';

var pike = {
  minCust: 23,
  maxCust: 65,
  avgCSale: 6.3,

  custPerHour: function() {
    return Math.floor(Math.random() * (this.minCust - this.maxCust + 1)) + this.minCust;
    console.log('theavg', pike);
    pike();
  }
};

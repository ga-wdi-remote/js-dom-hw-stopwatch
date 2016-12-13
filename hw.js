// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  advanceClock: function(){
    if (Stopwatch.isRunning) {
      Stopwatch.updateTimeValues();
      setTimeout(Stopwatch.advanceClock, 10);
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  updateTimeValues: function(){
    // Your Code Here
  },
  reset: function(){
    // Your Code Here
  },
  start: function(){
    // Your Code Here
  },
  stop: function(){
    // Your Code Here
  },
  lap: function(){
    // Your Code Here
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    // Your Code Here
  },
  updateLapList: function(laps){
    // Your Code Here
  },
  viewHelpers: {
    zeroFill: function(number, length){
      // Your Code Here
    }
  }
};

/// Top-Level Application Code ///
const AppController = {
  onClickStart: function(event) {
    // Your Code Here
  },
  onClickLap: function(event){
    // Your Code Here
  },
  onClickStopReset: function(event){
    // Your Code Here
  }
};

window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.

};

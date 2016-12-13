// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Application Logic ///
const Stopwatch = {
  advanceClock: function(){ // Provided Code : DO NOT EDIT THIS FUNCTION
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

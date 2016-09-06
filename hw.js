// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

window.onload = function(){
  /// DO NOT EDIT ABOVE THIS LINE ///

  /// Application Logic ///
  var Stopwatch = {
    advanceTheClock: function(){ // Provided Code : DO NOT EDIT THIS FUNCTION
      if (Stopwatch.isRunning) {
        Stopwatch.updateTimeValues();
        setTimeout(Stopwatch.advanceTheClock, 10);
      }
    },
    isRunning: false,
    mins: 0,
    secs: 0,
    millisecs: 0,
    laps: [],
    updateTimeValues: function(){
      // Your Code
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
  var Display = {
    zeroFill: function(number, length){
      // Your Code Here
    },
    updateTimeDisplay: function(){
      // Your Code Here
    },
    updateLapList: function(){
      // Your Code Here
    },
  };
  var EventHandlers = {
    onClickStart: function() {
      // Your Code Here
    },
    onClickLap: function(){
      // Your Code Here
    },
    onClickStopReset: function(){
      // Your Code Here
    }
  };
  // Set your event handlers in the lines below.
};
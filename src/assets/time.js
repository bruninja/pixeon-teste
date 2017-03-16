// chronometer / stopwatch JS script - coursesweb.net

// Here set the minutes, seconds, and tenths-of-second when you want the chronometer to stop
// If all these values are set to 0, the chronometer not stop automatically
var stmints = 0;
var stseconds = 0;
var stzecsec = 0;

// the initial tenths-of-second, seconds, and minutes
var zecsec = 0;
var seconds = 0;
var mints = 0;

var startchron = 0;

function chronometer() {
  if(startchron == 1) {
    zecsec += 1;       // set tenths of a second

    // set seconds
    if(zecsec > 9) {
      zecsec = 0;
      seconds += 1;
    }

    // set minutes
    if(seconds > 59) {
      seconds = 0;
      mints += 1;
    }

    // adds data in #showtm
    document.getElementById('showtm').innerHTML = mints+ '<sub>m</sub> : '+ seconds+ '<sub>s</sub> : '+ zecsec;

    // if the chronometer reaches to the values for stop, calls whenChrStop(), else, auto-calls chronometer()
    if(zecsec == stzecsec && seconds == stseconds && mints == stmints) toAutoStop();
    else setTimeout("chronometer()", 100);
  }
}

function startChr() { startchron = 1; chronometer(); }      // starts the chronometer


// start the chronometer, delete this line if you want to not automatically start the stopwatch
startChr();

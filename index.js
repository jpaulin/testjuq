// Testjuq 
// A Javascript module's Duck-type signature tool
// 
// Each testable library (package) should have a unique combination of
// key-type pairs. As user of testjug, you can inspect whether a symbol
// is a known library (piece of attributes, which most often are simply functions)
// 
// Couple of things: 
//  - if ptrName is 'itself', it means test the typeof package itself, not
//    any of its (child) properties

var chalk = require('chalk');
var sizeof = require('sizeof');


// The fingerprint library: array of objects. 
// This fingerprint array is used to identify objects.
// The key is 'finger'. This identifies the generic package name.
// semver  -- the range of package versions that the entry is valid 
// Example:
//     

var modusgn = [
 {  
    finger: 'jQuery',
    semver: 'any',  
 	ptrType: 'member',
 	ptrName: 'itself',
 	ptrExpect: "function"
  },

 { 
    finger: 'jQuery',
    semver: 'any',  	
 	ptrType: 'member',
 	ptrName: 'param',
 	ptrExpect: "function" 
 }];

function printIdDatabase() {
	// Prints all fields of the fingerprinting database
	for (var i = 0; i < modusgn.length; i++) {
		console.log('\n' + chalk.yellow('Entry #' + i));
		var e = modusgn[i];
		console.log('finger    ' + e.finger);
		console.log('semver    ' + e.semver);
		console.log('ptrType   ' + e.ptrType);
		console.log('ptrName   ' + e.ptrName);
		console.log('ptrExpect ' + e.ptrExpect);
	}
}


// Standard assessment of a symbol. Reads the keys and records an entry
// into fingerprint database. You have to give a name, since we do not
// yet have one. 
// Param: 
//     forSymbol  - the symbol (variable) to test for
// Returns:
//     false - the symbol was null, or could not be probed at all
//      true - symbol probed, and database updated

function jugScope(forSymbol, fingerName) {
	if (forSymbol === null || fingerName === null) {
	  console.log('Probing: <symbolIsNull> or <fingerIsNull>');
      return false;
	}
    var anEntry = {};
	// Start probing
	console.log('Probing a symbol called ' + fingerName);
	console.log('typeof: ' + typeof forSymbol);
	return true;
}


//
// Test drive the symbol inspector for a couple of symbols.
function internalTest() {
    jugScope($, 'jQuery');
    jugScope(null, null);
    jugScope('', null);
    jugScope(undefined, '_undefined');
    // Let us test ourself
    jugScope(internalTest);
}


// Helper functions for identifying (landscaping) a package

// Fingerprinting a symbol, by testing statically for presence of 
// keys (object attributes) and their types.
/* 
 * candidate  is the symbol to be tested
 */
function listKeyValues(candidate) {
 	for (var i = 0; i < modusgn.length; i++) {
 		var dpkg=modusgn[i];
 		if (dpkg.ptrName === 'itself') {
 		  parentO = candidate;
 		  console.log('Special case, testing for typeof package itself');
 		} else {
 			console.log('Case: testing for substructure, not the symbol itself');
 			var subkey = dpkg.ptrName;
 			parentO = dpkg[subkey];
 			console.log('subkey is ' + subkey);
 		    // console.log('Would test the typeof value of' + parentO.toString());
 		}
	}
}

// 1. Simplify, clean up main code. 
// 2. Compartmentalize the fingerprint -making code. Thus the initialization
//    of packages also is isolated, which is good.


// Shows user the title and basic info of our program
function intro() {
	console.log(chalk.green('TESTJUQ'));
	console.log('-------');
	console.log('Fingerprints: ' + modusgn.length);
}


// Make initializations of the packages here.
var t;

intro();
// Preparations: load the packages and inform user
console.log(chalk.blue('* Preparing packages to be fingerprinted.'));

var $ = require('jquery');
console.log('* Loaded: jQuery \t ' + chalk.green('[OK]'));

printIdDatabase();

// Begin fingerprinting: enumerate stuff inside $ and file it under "jQuery"
// testPackage($, 'jQuery');

// Here we go!
listKeyValues($);
console.log(chalk.blue('Running a set of internal tests:'));
internalTest();

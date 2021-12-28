var connect = require('connect');
var serveStatic = require('serve-static');
const dotenv = require('dotenv'); // new
dotenv.config({ path: './config.env' }); // new environmental variables are stored here in the config.env file as defined in the path
connect().use(serveStatic(__dirname)).listen(8080, function(){
  console.log("server is running on port 8080");
});


// process.env variables have now been defined more properly using dotenv in the config.env file

// to create env variables via GIT:
// export testVariable="myTestVariale"
// to check what the variable is:
// $testVariable
// to delete env variable via GIT:
// unset testVariable


// using Google Trends api, source can be found here: https://www.npmjs.com/package/google-trends-api#installation
// format is googleTrends.apiMethod(optionsObject, [callback])
// this is only works on Node, so can only be triggered in this server.js file







// const googleTrends = require('google-trends-api');

// googleTrends.interestOverTime({keyword: 'Bitcoin'})
// .then(function(kolokoy){
//   console.log('these results are awesome', kolokoy);
// })
 

 //console.log('from server.js, TEST is', process.env.TEST);

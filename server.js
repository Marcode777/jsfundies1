var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
  console.log("server is running on port 8080");
});



// using Google Trends api, source can be found here: https://www.npmjs.com/package/google-trends-api#installation
// format is googleTrends.apiMethod(optionsObject, [callback])
// this is only works on Node, so can only be triggered in this server.js file







// const googleTrends = require('google-trends-api');

// googleTrends.interestOverTime({keyword: 'Bitcoin'})
// .then(function(kolokoy){
//   console.log('these results are awesome', kolokoy);
// })
 

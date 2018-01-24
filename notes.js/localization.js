import $ from 'jquery';
// import _ from 'lodash';

/* eslint-disable */
$(document).ready( function() {
  var germanTranslationMap = [
    // Location, Translation
    {
        location: "div.city-nav>div.container>div.navbar-collapse>ul>li.mapLink>a:contains('View Race Map')",
        translation: "Streckenplan"
    },
    {
        location:"div.promo.race-details.gray>div.container>h2",
        translation:"Details Zum Lauf"
    },
    {
        location:"div.promo.race-details.gray>div.container>div.details>div.detail>h4:contains('Date')",
        translation: "Datum"
    },
    {
        location:"div.promo.race-details.gray>div.container>div.details>div.detail>h4:contains('Location')",
        translation:"Ort"
    },
    {
        location:"div.promo.race-details.gray>div.container>div.details>div.detail>h4:contains('Distance')",
        translation:"Distanz"
    }
    // {
    //     location:"div.promo.news>div.container>div.buttons>a:contains('More News')",
    //     translation: "Weitere Nachrichten"
    // },
    // {
    //     location:"div.promo.race-details.gray>div.container>div.buttons>a:contains('Race Rules')",
    //     translation:"Reglement"
    // },
    // {
    //     location:"div.promo.race-details.gray>div.container>div.buttons>a:contains('FAQs')",
    //     translation:"FAQ / Hilfe"
    // }
    // {
    //     location:"div.mosaic>div.promo.main>div.buttons>a:contains('Event Details')",
    //     translation:"Details Zum Lauf"
    // },
    // {
    //     location:"div.mosaic>div.promo.main>div.buttons>a:contains('Results')",
    //     translation:"Ergebenisse"
    // }
];

function translateFromTransMap(transMap,urlFilter){
    if(window.location.pathname.indexOf(urlFilter)>=0){
        $(transMap).each(function(){
            $(this.location).text(this.translation);
        });
    }
}

translateFromTransMap(germanTranslationMap,"/frankfurt");
});
/* eslint-enable */

// Request AOI data from backend server
function apiAOIData() {
  var aoiUrl = $careersFilterDisplay.attr('data-careers-display-aoi');
  $.ajax({
    dataType: 'json',
    url: aoiUrl,
    method: "GET",
    success: function(data) {
      window.aoiData = data;
      generateAOICards();
    },
    error: function(request, error) {
      logger.error('Error in processing AOI data from server.');
    }
  });
}

//Generate AOI cards base from data received
function generateAOICards() {
  var data = window.aoiData;
  var $itemTemplate = $component.find('.item-template');
  var $itemContainer = $component.find('.filter-display-container');
  var $col = $itemContainer.find('div.col-12');
  window.aoiCols=$col;
  window.aoiCards= [];
  if(data) {
    for(var i=0; i<data.length; i++) {
      var $item = data[i];
      var $itemCard = $itemTemplate.clone();
      var cardSoup = [];
      // Generate the Soups
      cardSoup = cardSoup.concat(cardSoupConverter($item.title));
      cardSoup = cardSoup.concat(cardSoupConverter($item.description));
      $.each($item.opportunities, function(key, value){
        cardSoup = cardSoup.concat(cardSoupConverter(value.title));
        cardSoup = cardSoup.concat(cardSoupConverter(value.description));
      });
      cardSoups.push(cardSoup);
      // Generate Card
      $item.card = $itemCard;
      $itemCard.removeClass('item-template');
      if($item.title){
        $itemCard.find('.title').text($item.title);
      }
      if($item.description){
        $itemCard.find('.description-block').text($item.description);
      }
      if($item.url){
        $itemCard.find('.learn-more-section a').attr('href', encodeURI($item.url));
      }

      //Bind collapsable event listeners
      $itemCard.find('a.title-block').click(function(e){
        e.preventDefault();
        var $this = $(this).closest('.aoi-details');
        $this.toggleClass('accordion-close');
        $this.find('.accordion-trigger');
          .toggleClass('fa-plus-circle');
          .toggleClass('fa-minus-circle');
      });

      cardMeta.push($item);
      window.aoiCards.push($itemCard);

    }
    responsiveSortAOI();
    //Attach windowListener
    $(window).resize(function(){responsiveSortAOI()});
  }

  //Update found item
  if(typeof window.feedFoundUpdate !== 'undefined') {
    logger.debug('Updated the found display number.');
    window.feedFoundUpdate();
  }
}

// Get screen sizes
// // // // // to be continued











































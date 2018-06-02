var content = [
  {
    headline: function(days) {
      var months = _.round(days/30/7, 2);
      return 'If the Beatles had started recording Abbey Road on your wedding day, they would have produced the album ' + months + ' times by now';
    },
    body: 'May your love and shared time be as full of joy, good will and humour as their music.'
  },
  {
    headline: function(days) {
      var cm = _.round(days / 365 * 61, 2);
      return 'An oak tree grows an average of 61cm a year. This means an oak tree planted on your wedding day would now stand at ' + cm + ' cm';
    },
    body: 'We hope your love and appreciation for one another will grow as surely and as steadily.'
  },
  {
    headline: function(days) {
      var cm = _.round(days / 365 * 2.5, 2);
      return 'Since your wedding day, the tectonic plates of Europe and Africa have moved ' + cm + 'cm further apart';
    },
    body: 'May the two of you never drift apart and if you do, may you find the way back to each other quickly and easily.'
  },
  {
    headline: function(days) {
      var dogYears = _.round(days/(365/7), 2);
      return 'In dog years you two have already been married ' + dogYears + ' years';
    },
    body: 'How quickly times in which you are happy and content seem to pass…'
  },
  {
    headline: function(days) {
      var n = _.round(days/70, 2);
      return 'If Christopher Columbus set sail on your wedding day, he would have “discovered” America ' + n + ' times by now';
    },
    body: 'America was not his anticipated destination, but his discovery nevertheless changed the world. We hope you also continue to make the most of what life throws in your path.',
  },
  {
    headline: function(days) {
      var n = days / (365 * 24);
      if (n < 1) {
        return 'If Marco Polo had set out on his famous travels on your wedding day, he would have completed ' + Math.floor(n*100) + '% of his journey';
      }
      return 'If Marco Polo had set out on his famous travels on your wedding day, he would have returned to Venice ' + _.round(n, 2) + ' times by now';
    },
    body: 'We wish you as much stamina and love of adventure in your lifetime journey together.'
  },
  {
    headline: function(days) {

      var daysToFinish = 1825 - days;
      if (daysToFinish > 0) {
        return 'If Amerigo Vespucci had started the first of his four voyages on your wedding day, he would have established the Americas as a new landmass in ' + daysToFinish + ' days';
      }

      var times = _.round(days/1825, 2);
      return 'If Amerigo Vespucci had started the first of his four voyages on your wedding day, he would have established the Americas as a new landmass ' + times + ' times by now';

    },
    body: 'We wish you as many new horizons, discoveries and achievements in the years to come.'
  },
  {
    headline: function(days) {
      var n = _.round(days/80, 2);
      return 'If Phileas Fogg had set out from his home on your wedding day, he would have travelled around the world ' + n + ' times by now';
    },
    body: 'We hope that you, like Phileas, never stop dreaming and that you attempt things you have set your heart on – even if at first glance they seem hard to achieve.'
  },
];

// var overflow = [
//
// ];

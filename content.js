var content = [
  {
    headline: function(days) {
      var times = _.round(days/(365*3), 2);
      var percentDone = times * 100;
      if (percentDone < 100) {
        return 'If Shakespeare had started writing “Romeo and Juliet” on your wedding day he would be ' + percentDone + '% done by now';
      }
      return 'If Shakespeare had started writing “Romeo and Juliet” on your wedding day he would be done ' + times + ' times by now';
    },
    body: 'We wish you all the romance without any of the tragic endings.'
  },
  {
    headline: function(days) {
      var cmGrowth = _.round(1.27 * (days/30), 2);
      return 'If you had started growing your hair or beard on your wedding day, you would have added ' + cmGrowth + 'cm by now';
    },
    body: 'We\'ll leave it to you to decide who gets the beard.'
  },
  {
    headline: function(days) {
      var timesDone = _.round(days/(365*20), 2);
      var percentDone = timesDone * 100;
      if (percentDone < 100) {
        return 'If construction of the Achener Dom had started on your wedding day, it would be ' + percentDone + '% done now';
      }
      return 'If construction of the Achener Dom had started on your wedding day, it would be done ' + timesDone + ' time by now';
    },
    body: 'You are well on your way to build something as beautiful and awe-inspiring.'
  },
  {
    headline: function(days) {
      var kmDistance = _.round(0.03 * (days * 24 * 60 * 60) / 1000 / 42.2);
      return 'A sloth “running” back to back marathons since your wedding day would have completed ' + kmDistance + ' by now';
    },
    body: 'Let this serve as a reminder that much can be achieved by going slow and steady.'
  },
  {
    headline: function(days) {
      var trips = _.round(days/14, 2);
      return 'Had the Titanic left port on you wedding day (and not sunk) it could have made its return trip to New York ' + trips + ' times by now';
    },
    body: 'We are certain that if its hull had been as rock solid as your relationship, it actually would have!'
  },
  {
    headline: function(days) {
      var kgHoney = _.round(12.25 * (days/365), 2);
      return 'If you had started keeping bees on your wedding day, you would now have ' + kgHoney + 'kg of honey';
    },
    body: 'We wish you a marriage that is every bit as sweet.'
  },
  {
    headline: function(days) {
      var years = _.round(days/88, 2);
      return 'If you lived on Mercury, you would already be married ' + years + ' years';
    },
    body: 'We hear property prices are great, but the commute to Earth is a royal pain.'
  },
  {
    headline: function(days) {
      return 'Since your wedding day about ' + days + ' Mayfly lifetimes have passed';
    },
    body: 'We wish you these and many more lifetimes together!'
  },
  {
    headline: function(days) {
      var km = _.round((18.13 / 2015) * days, 2);
      return 'If the Curiosity Rover started driving on Mars on your wedding day, it would have travelled ' + km + 'km by now';
    },
    body: 'We hope you find the time to take it slow every now and again. Maybe not 0.0004km/h, but you get the idea.'
  },
  {
    headline: function(days) {
      var times = _.round((days*24)/(24*6+9), 2);
      return 'Since your wedding day, you could have watched the entirety of Gilmore Girls exactly ' + times + ' times';
    },
    body: 'We wish you just as much excitement, but none of the drama!'
  },
  {
    headline: function(days) {
      var  billionKm = _.round((299792458 * (days*24*60*60)) / 1000 / 1000000000, 0);
      return 'A photon emitted at the time you got married has travelled ' +  billionKm + ' billion kilometers by now';
    },
    body: 'May the sun shine brightly on your shared love even if it hasn\'t travelled quite as far'
  },
  {
    headline: function(days) {
      var n = _.round(days/(365*2), 2);
      return 'If you had started maturing wheels of parmesan cheese on the day of your wedding, you would now have ' + n + ' cheese' + (n===1 ? '' : 's');
    },
    body: 'May your love for each other mature and grow deeper and more meaningful with every passing day.'
  },
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
        return 'If Marco Polo had set out on his famous travels on your wedding day, he would have completed ' + Math.floor(n*100) + '% of his 24 year journey';
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
  }
];

content = _.shuffle(content);

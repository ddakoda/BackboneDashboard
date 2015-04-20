$(document).ready(function(event) {

  var halfCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-half shadow",
    template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      //$('body').append(this.$el);
      var row = $('.row')[1];
      $(row).append(this.$el);
    }
  });

  var data = { title: "It's all memorabilia, but incidental and not integral, if you know what I mean.", content: "-Harold"}
  var newCard = new halfCardView(data);

  var dataTwo = { title: "During war time, the national suicide rate goes down.", content: "-Harold"};
  var anotherCard = new halfCardView(dataTwo);


  var quarterCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-quarter shadow",
    template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      //$('body').append(this.$el);
      var row3 = $('.row')[3];
      $(row3).append(this.$el);
    }
  });

  var dataNope = { title: "Grab the shovel Harold.", content: "-Maude"}
  var newThree = new quarterCardView(dataNope);

  var dataThird = { title: "Consistency is not really a human trait.", content: "-Maude"};
  var anotherThree = new quarterCardView(dataThird);

  var dataGo = { title: "Dreyfus once wrote from Devil's Island that he would see the most glorious birds. Many years later in Brittany he realized they had only been seagulls... For me they will always be - glorious birds.", content: "-Maude"}
  var newEnd = new quarterCardView(dataGo);

  var dataSeven = { title: "You hop in any car you want and just drive off?", content: "-Harold"};
  var anotherTime = new quarterCardView(dataSeven);


  var thirdCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-third shadow",
    template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      //$('body').append(this.$el);
      var row2 = $('.row')[2];
      $(row2).append(this.$el);
    }
  });

  var dataMoney = { title: "You know, at one time, I used to break into pet shops to liberate the canaries. But I decided that was an idea way before its time. Zoos are full, prisons are overflowing... oh my, how the world still dearly loves a cage.", content: "-Maude"}
  var newTwo = new thirdCardView(dataMoney);

  var dataThird = { title: "Don't get officious. You're not yourself when you're officious - That is the curse of a government job.", content: "-Maude"};
  var anotherTwo = new thirdCardView(dataThird);

  var dataFour = { title: "You sure have a way with people. -Harold", content: "Well, they're my species! -Maude"};
  var anotherThree = new thirdCardView(dataFour);
});

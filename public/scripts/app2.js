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

  var data = { title: "Drags Feet", content: "Cheatin'"}
  var newCard = new halfCardView(data);

  var dataTwo = { title: "wins", content: "winning for pride."};
  var anotherCard = new halfCardView(dataTwo);

});

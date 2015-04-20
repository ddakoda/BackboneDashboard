Finishing off your cards

Using the BackboneDashboard project, create a portal that you could look to for information every day. Consider this the future - if you had a screen next to your bed every morning, what information would you like to see? What if you just want to have a concierge application to display information?

Requirements

Create at least two rows.
Create a Backbone.js view for the logo and have it display/render your name.
In your rows, you must have a minimum of two cards (remember the box-half, box-third, box-quarter classes?).
These cards must be individual and unique Backbone.js views
This means not all cards must display real-time data.
Your different views (each of them) must be unique; this could mean changing the background and text color or making one display an image.
Create your Views inside of the /scripts/app.js file.
Instantiate your Views inside of a $(document).ready event so they are rendered when the page loads.
To be clear: You must have 2 rows, with a minimum of 4 views. They must be unique!

Building the Backend

Tomorrow we'll be using models & collections. We need a back end to work with! With practice, you will be able to build the Sinatra routes/Ruby models in under 60 minutes:

Write a single model CRUD API.
The model should be a card.
A card has a title and a message.
You will use this API tomorrow during class.

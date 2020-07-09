// Initialize express
const express = require('express')
const app = express()

// require handlebars
const exphbs = require('express-handlebars');

// Use "main" as our default layout
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// Use handlebars to render
app.set('view engine', 'handlebars');

// OUR MOCK ARRAY OF PROJECTS
var events = [
    { title: "I am your first event", desc: "A great event that is super fun to look at and good", imgUrl: "https://www.thurstontalk.com/wp-content/uploads/2020/02/March-28-Tricksters-of-the-Animal-Kingdom.jpg" },
    { title: "I am your second event", desc: "A great event that is super fun to look at and good", imgUrl: "https://www.thurstontalk.com/wp-content/uploads/2020/02/March-28-Tricksters-of-the-Animal-Kingdom.jpg" },
    { title: "I am your third event", desc: "A great event that is super fun to look at and good", imgUrl: "https://www.thurstontalk.com/wp-content/uploads/2020/02/March-28-Tricksters-of-the-Animal-Kingdom.jpg" }
]
  
// INDEX
app.get('/', (req, res) => {
    res.render('events-index', { events: events });
})

// Choose a port to listen on
const port = process.env.PORT || 3000;

// Tell the app what port to listen on
app.listen(port, () => {
  console.log('App listening on port 3000! => http://localhost:3000')
})
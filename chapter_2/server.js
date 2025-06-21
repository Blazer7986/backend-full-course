// Creating a server application for our backend project
// Make sure to install express as well to minimize code
// It takes 4 lines of code to get a server up an running
const express = require('express') // Define our backend application // First Line
const app = express() // Second Line
// The address of this server connected to the network is: 
// URL -> http://localhost:8383
// IP -> 127.0.0.1:8383
const POST = 8383 // Third Line

let data = ['james']

// Middleware
app.use(express.json())

// HTTP Verbs (methods) && Routes (or paths)
// The method informs the nature of the request and the route is a further 
// subdirectory (basically we direct the request to the body of code to 
// respond appropriately, and those locations or routes are called endpoints)

// Type 1 - Website endpoints (these endpoints are for sending back HTML and they 
// tipically come when a user enters a url in the browser.
app.get('/', (req, res) => {
  // This is endpoint number 1 - /
  //console.log('yay I hit an endpoint', req.method)

  console.log('User requested the home page website')
  //res.sendStatus(201)
  res.send(`
    <body style="color: blue; background-color: pink;">
      <h1>DATA</h2>
      <p>${JSON.stringify(data)}</p> 
      <a href="/dashboard">Dashboard</a>
    </body>  
    <script>console.log('This is the dashboard')</script>
  `)
})

app.get('/dashboard', (req, res) => {
  console.log("On now I hit the /dashboard endpoint")
  res.send(`
    <body>
      <h1>Dashboard</h1> 
      <a href="/">Home</a>
    </body>
  `)
})

// Type 2 - API endpoints (non visual)

// CURD-method create-post read-get update-put and delete-delete

app.get('/api/data', (req, res) => {
  console.log('this is data')
  res.send(data)
})

app.post('/api/data', (req, res) => {
  // some wants to create a user (for example when they click a sign up button)
  // the user clicks the sign up button after entering their creadentials, and
  // their browser is wired up to send out a network request to the server 
  // to handle the action
  const newEntry = req.body
  console.log(newEntry)
  data.push(newEntry.name)
  res.sendStatus(201)
})

app.delete('/api/data', (req, res) => {
  data.pop()
  console.log('We delete the element at the end of the array')
  res.sendStatus(203)
})

// Must include a port (a subdirectory within the IP address)
app.listen(POST, () => console.log(`Server have started on: ${POST}`)) // Fourth Line

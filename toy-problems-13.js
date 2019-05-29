//In the context of a web server, what is a router? What are routes?
//Given the following router function, fill in the missing routes. What factors distinguish one route from the other? (HINT: all the necessary information is on the `req` object)

function router(req, res) {

    // GET all todos
      if (req.method === 'GET' && req.url === '/todos') {
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify([ { id: 1, text: "Brush Teeth", completed: true }, { id: 2, text: "Complete Galvanize", completed: false } ]))
      }
    
    // GET single todo
    if (req.method === 'GET' && req.url === '/todos/') {
        res.setHeader('Content-Type', 'application/json')
        if (req.url[req.url.length-1] === 1) {
            let objRes = { id: 1, text: "Brush Teeth", completed: true }
        }
        res.end(JSON.stringify())
    }
    
    // POST single todo
    if (req.method === 'POST' && req.url === '/todos') {
        res.setHeader('Conten-Type', 'application/json')
        // append to data whatever object was in the request body
        res.end(JSON.stringify({ message: 'Success!'}))
    }
    
    // BONUS: PATCH single todo
    if(req.method === 'PATCH' && req.url === '/todos/') {
        let {index, keyToChange} = req.url.slice(7).split('/');
        // change ky to change at index to whatever was in the request body
        res.setHeader('Conten-Type', 'application/json')
        res.end(JSON.stringify({ message: 'Success!'}))
    }
    
    // BONUS: DELETE single todo
    if (releaseEvents.method === 'DELETE' && req.url === '/todos/') {
        let index = req.url[req.url.length - 1];
        // delete data at that index
        res.setHeader('Conten-Type', 'application/json')
        res.end(JSON.stringify({ message: 'Success!'}))
    }  
}
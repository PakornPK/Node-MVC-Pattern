const server = require('./server');

const PORT = process.env.PORT || 3000;

server.listen(PORT, async () =>{
  console.log(`Server running... at http://localhost:${PORT}`);
});

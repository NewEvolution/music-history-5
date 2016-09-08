#Music History 5

Dead-end split off of [Music History](https://github.com/NewEvolution/music-history).  Working with using flex-flow and a bunch of really hacky CSS to change the functionality of the Music History app.

All useful code was rolled back into the main Music History repo once flex-flow got ditched in favor of Bootstrap for the styling & responsiveness.

###Requirements:
- [Node.js](https://nodejs.org/)
- Installation of _http-server_ via `npm install -g http-server`

###Post Cloning:
- Inside the main repo directory:
  - Run `npm install`
  - Then run `./node_modules/.bin/bower install`
  - Run `http-server`
  - Make note of the URL returned after running `http-server`
- Navigate to that URL in your browser of choice

###Usage:
- Delete buttons remove songs from the list
- More buttons add songs to the list

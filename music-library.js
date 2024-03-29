function MusicLibrary (name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

MusicLibrary.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
};

MusicLibrary.prototype.printPlaylist = function() {
  for (let playlist of this.playlists) {
    console.log(playlist);
  }
}

MusicLibrary.prototype.printTracksOfPlaylist = function(playlistName) {
  for (let playlist of this.playlists) {
    if (playlist.name === playlistName) {
      console.log(playlistName + "\n", playlist.tracks);
      return playlist.tracks;
    }
  }

  console.log(playlistName, "does not exist.");
  return `${playlistName} does not exist`;
}


function Playlist (name) {
  this.name = name;
  this.tracks = [];
}

Playlist.prototype.addTracks = function(track) {
  this.tracks.push(track);
}

Playlist.prototype.overallRating = function() {
  let totalRating = 0;
  let trackCount = 0;

  for(let track of this.tracks) {
    totalRating += track.rating;
    trackCount++;
  }

  return `Overall Rating of ${this.name} is ${Math.round((totalRating / trackCount) * 100) / 100}`;
}

Playlist.prototype.totalDuration = function() {
  let totalDuration = 0;

  for (let track of this.tracks) {
    totalDuration += track.length;
  }

  return `Total Duration of ${this.name} is ${totalDuration}`;
}

Playlist.prototype.numberOfTracks = function() {
  return this.tracks.length;
}


function Track(name, rating, length) {
  this.name = name;

  if (Number.isInteger(rating) && rating > 0 && rating < 6) {
    this.rating = rating;
  } else {
    console.log(`Track: ${name}. Rating should be an integer from 1 to 5.`)
    return "Rating should be an integer from 1 to 5";
  }

  if (Number.isInteger(length)) {
    this.length = length;
  } else {
    console.log(`Track: ${name}. Length of the track should be an integer.`);
    return "Length of the track should be an integer";
  }
}

let myMusicLib = new MusicLibrary("Happy", "Jingfan");

let playlist1 = new Playlist("playlist1");
let playlist2 = new Playlist("playlist2");
let playlist3 = new Playlist("playlist3");

let track1 = new Track("one", 1, 241);
let track2 = new Track("two", 2, 230);
let track3 = new Track("three", 3, 223);
let track4 = new Track("four", 4, 246);
let track5 = new Track("five", 5, 232);
let track6 = new Track("six", 1, 206);
let track7 = new Track("seven", 2, 197);
let track8 = new Track("eight", 3, 301);
let track9 = new Track("nine", 4, 174);
let track10 = new Track("ten", 5, 213);

playlist1.addTracks(track1);
playlist1.addTracks(track2);
playlist1.addTracks(track3);
playlist1.addTracks(track4);
playlist1.addTracks(track5);
playlist1.addTracks(track6);
playlist1.addTracks(track7);

playlist2.addTracks(track1);
playlist2.addTracks(track3);
playlist2.addTracks(track4);
playlist2.addTracks(track5);
playlist2.addTracks(track7);
playlist2.addTracks(track8);
playlist2.addTracks(track10);
playlist2.addTracks(track9);

playlist3.addTracks(track3);
playlist3.addTracks(track2);
playlist3.addTracks(track7);
playlist3.addTracks(track6);

myMusicLib.addPlaylist(playlist1);
myMusicLib.addPlaylist(playlist2);
myMusicLib.addPlaylist(playlist3);


console.log(playlist1.totalDuration());
console.log(playlist2.totalDuration());
console.log(playlist3.totalDuration());

console.log(playlist1.overallRating());
console.log(playlist2.overallRating());
console.log(playlist3.overallRating());

console.log(playlist1.numberOfTracks());
console.log(playlist2.numberOfTracks());
console.log(playlist3.numberOfTracks());

myMusicLib.printPlaylist();
myMusicLib.printTracksOfPlaylist("playlist1");
myMusicLib.printTracksOfPlaylist("playlist2");
myMusicLib.printTracksOfPlaylist("playlist3");
myMusicLib.printTracksOfPlaylist("playlist4");


console.log(myMusicLib);








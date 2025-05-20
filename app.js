// fetchings songs from folder

import * as fs from 'fs';
import path from 'path';  
import mm from 'music-metadata';

const songsDirectory = path.join(__dirname, 'Songs');
const songFiles = fs.readdirSync(songsDirectory).filter(file => {
  return file.endsWith('.mp3') ;
});
console.log(songFiles);




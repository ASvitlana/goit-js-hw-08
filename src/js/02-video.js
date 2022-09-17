
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onPlay(time) {
    localStorage.setItem(STORAGE_KEY, time.seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));

const savedTime  = localStorage.getItem(STORAGE_KEY);

if (savedTime){
    player.setCurrentTime(savedTime);
}






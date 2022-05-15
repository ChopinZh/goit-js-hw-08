import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function setTimeToLS(data) {
    
    localStorage.setItem("videoplayer-current-time", data.seconds);
    }
player.on('timeupdate', throttle(setTimeToLS, 1000));

if (localStorage.getItem("videoplayer-current-time") !== null) {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
    }

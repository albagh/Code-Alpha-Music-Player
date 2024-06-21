const audio = document.getElementById('audio');
const progressBar = document.getElementById('progress-bar');
const songName = document.getElementById('song-name');
const artistName = document.getElementById('artist-name');
const albumName = document.getElementById('album-name');
const playlistElement = document.getElementById('playlist');
const currentTimeElement = document.getElementById('current-time');
const durationTimeElement = document.getElementById('duration-time');
const volumeElement = document.getElementById('volume-percentage');

let songs = [
    {
        name: 'Ya Habibi',
        artist: 'Abdel Fatah Grini',
        album: 'Video Clip 2020',
        src: 'H:\\El Joo\\MUSIC PLAYER\\Music\\Abdel Fatah Grini ... Ya Habibi - Video Clip 2020 _ عبد الفتاح جريني ... يا حبيبي - فيديو كليب(MP3_320K).mp3',
        image: 'H:\\El Joo\\MUSIC PLAYER\\images\\Grini.png'
    },
    {
        name: 'Maraseel',
        artist: 'Ahmed Kamel',
        album: 'Official Lyrics Video - 2022',
        src: 'H:\\El Joo\\MUSIC PLAYER\\Music\\Ahmed Kamel - Maraseel _ Official Lyrics Video - 2022 _ احمد كامل - مراسيل(MP3_320K).mp3',
        image: 'H:\\El Joo\\MUSIC PLAYER\\images\\Screenshot 2024-05-24 151647.png'
    },
    {
        name: 'Atr AL Hayah',
        artist: 'Ahmed Mekky',
        album: 'Video Clip',
        src: 'H:\\El Joo\\MUSIC PLAYER\\Music\\Ahmed Mekky - Atr AL Hayah _ أحمد مكى - قطر الحياة فيديو كليب(MP3_320K).mp3',
        image: 'H:\\El Joo\\MUSIC PLAYER\\images\\Screenshot 2024-05-24 151751.png'
    },
    {
        name: 'Wa_fet Nasyt Zaman',
        artist: 'Ahmed Mekky',
        album: 'Exclusive Music Video',
        src: 'H:\\El Joo\\MUSIC PLAYER\\Music\\Ahmed Mekky - Wa_fet Nasyt Zaman (Exclusive Music Video) _  أحمد مكى - وقفة ناصية زمان(MP3_320K).mp3',
        image: 'H:\\El Joo\\MUSIC PLAYER\\images\\Screenshot 2024-05-24 151833.png'
    },
    {
        name: 'Aghla Men Al Yaqout',
        artist: 'Ahmed Mekky',
        album: 'Unknown',
        src: 'H:\\El Joo\\MUSIC PLAYER\\Music\\Ahmed Mekky _ Aghla Men Al Yaqout -   أحمد مكى _ أغلى من الياقوت _ حصريا(MP3_320K).mp3',
        image: 'H:\\El Joo\\MUSIC PLAYER\\images\\Screenshot 2024-05-24 151938.png'
    },
    {
        name: 'El Alb Galo Hebot',
        artist: 'Ahmed Sheba',
        album: 'Audio',
        src: 'H:\\El Joo\\MUSIC PLAYER\\Music\\Ahmed Sheba - El Alb Galo Hebot _ احمد شيبه - القلب جالو هبوط (Audio)(MP3_320K).mp3',
        image: 'H:\\El Joo\\MUSIC PLAYER\\images\\Screenshot 2024-06-20 022925.png'
    },
    {
        name: 'Ana Negm',
        artist: 'Cairokee',
        album: 'Unknown',
        src: 'H:\\El Joo\\MUSIC PLAYER\\Music\\Cairokee - Ana Negm  كايروكي - أنا نجم(MP3_320K).mp3',
        image: 'H:\\El Joo\\MUSIC PLAYER\\images\\Screenshot 2024-06-20 023135.png'
    },
    {
        name: 'Basrah w Atoh',
        artist: 'Cairokee',
        album: 'Unknown',
        src: 'H:\\El Joo\\MUSIC PLAYER\\Music\\Cairokee - Basrah w Atoh كايروكي - بسرح واتوه(MP3_320K).mp3',
        image: 'H:\\El Joo\\MUSIC PLAYER\\images\\Screenshot 2024-06-20 023208.png'
    },
    {
        name: 'Costa Rica',
        artist: 'Cairokee',
        album: 'Unknown',
        src: 'H:\\El Joo\\MUSIC PLAYER\\Music\\Cairokee - Costa Rica كايروكي - كوستاريكا(MP3_320K).mp3',
        image: 'H:\\El Joo\\MUSIC PLAYER\\images\\Screenshot 2024-06-20 023239.png'
    },
    {
        name: 'James Dean',
        artist: 'Cairokee',
        album: 'Official Music Video',
        src: 'H:\\El Joo\\MUSIC PLAYER\\Music\\Cairokee - James Dean (Official Music Video) كايروكي - جيمس دين(MP3_320K).mp3',
        image: 'H:\\El Joo\\MUSIC PLAYER\\images\\Screenshot 2024-06-20 023310.png'
    },
    {
        name: 'Johnny Cash',
        artist: 'Cairokee',
        album: 'Unknown',
        src: 'H:\\El Joo\\MUSIC PLAYER\\Music\\Cairokee - Johnny Cash كايروكي - جوني كاش(MP3_320K).mp3',
        image: 'H:\\El Joo\\MUSIC PLAYER\\images\\Screenshot 2024-06-20 023343.png'
    },
    {
        name: 'Matwhashneesh',
        artist: 'Cairokee',
        album: 'Unknown',
        src: 'H:\\El Joo\\MUSIC PLAYER\\Music\\Cairokee - Matwhashneesh كايروكي - متوحشنيش(MP3_320K).mp3',
        image: 'H:\\El Joo\\MUSIC PLAYER\\images\\Screenshot 2024-06-20 023415.png'
    },
    {
        name: 'Roberto',
        artist: 'Cairokee',
        album: 'Unknown',
        src: 'H:\\El Joo\\MUSIC PLAYER\\Music\\Cairokee - Roberto كايروكي - روبرتو(MP3_320K).mp3',
        image: 'H:\\El Joo\\MUSIC PLAYER\\images\\Screenshot 2024-06-20 023453.png'
    },
    {
        name: 'Roma',
        artist: 'Cairokee',
        album: 'Unknown',
        src: 'H:\\El Joo\\MUSIC PLAYER\\Music\\Cairokee - Roma كايروكي - روما(MP3_320K).mp3',
        image: 'H:\\El Joo\\MUSIC PLAYER\\images\\Screenshot 2024-06-20 023526.png'
    },
    
    
];

let currentSongIndex = 0;
let isShuffle = false;

function searchPlaylist() {
    let filter = document.getElementById('searchInput').value.toUpperCase();
    let li = playlistElement.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        let h4 = li[i].getElementsByTagName('h4')[0];
        let txtValue = h4.textContent || h4.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}

function loadSong(song) {
    songName.textContent = song.name;
    artistName.textContent = song.artist;
    albumName.textContent = song.album;
    audio.src = song.src;
    audio.load();
    document.getElementById('song-image').src = song.image;
    updateVolumeDisplay();
}

function playMusic() {
    audio.play();
}

function pauseMusic() {
    audio.pause();
}

function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
}

function volumeUp() {
    if (audio.volume < 1) {
        audio.volume += 0.1;
    }
    updateVolumeDisplay();
}

function volumeDown() {
    if (audio.volume > 0) {
        audio.volume -= 0.1;
    }
    updateVolumeDisplay();
}

function updateVolumeDisplay() {
    volumeElement.textContent = Math.round(audio.volume * 100) + '%';
}

function updateProgress() {
    const progressPercentage = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progressPercentage;
    updateCurrentTime();
    updateDurationTime();
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

function updateCurrentTime() {
    const currentMinutes = Math.floor(audio.currentTime / 60);
    const currentSeconds = Math.floor(audio.currentTime % 60);
    currentTimeElement.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
}

function updateDurationTime() {
    const durationMinutes = Math.floor(audio.duration / 60);
    const durationSeconds = Math.floor(audio.duration % 60);
    durationTimeElement.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
}

function toggleShuffle() {
    isShuffle = !isShuffle;
    document.getElementById('shuffle-button').textContent = isShuffle ? 'Shuffle On' : 'Shuffle Off';
}

function nextSong() {
    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * songs.length);
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playMusic();
}

function prevSong() {
    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * songs.length);
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playMusic();
}

// Event Listeners
audio.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('click', setProgress);

// Load the first song by default
loadSong(songs[currentSongIndex]);

// Populate playlist
songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
        <img src="${song.image}" alt="${song.name}">
        <div>
            <h4>${song.name}</h4>
            <p>${song.artist}</p>
        </div>
    `;
    li.addEventListener('click', () => {
        currentSongIndex = index;
        loadSong(songs[currentSongIndex]);
        playMusic();
    });
    playlistElement.appendChild(li);
});
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace this with your actual authentication logic
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
    } else {
        console.log('Login failed, attempting to play video');
        const videoContainer = document.getElementById('video-container');
        const video = document.getElementById('unauthorized-video');
        
        videoContainer.style.display = 'block';
        
        video.muted = false;
        video.play().then(() => {
            console.log('Video started playing');
        }).catch((error) => {
            console.error('Error playing video:', error);
        }); 
    }
});

document.getElementById('video-container').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
        const video = document.getElementById('unauthorized-video');
        video.pause();
        video.currentTime = 0;
        video.muted = true;
    }
});
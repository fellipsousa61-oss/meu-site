
        const startDate = new Date('2025-02-12T00:00:00');
        
        function updateCounter() {
            const now = new Date();
            const diff = now - startDate;

            const seconds = Math.floor(diff / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);
            
            const years = Math.floor(days / 365);
            const remainingDays = days % 365;
            const months = Math.floor(remainingDays / 30);

            document.getElementById('anos').textContent = years.toString().padStart(2, '0');
            document.getElementById('meses').textContent = months.toString().padStart(2, '0');
            document.getElementById('dias').textContent = (remainingDays % 30).toString().padStart(2, '0');
            document.getElementById('horas').textContent = (hours % 24).toString().padStart(2, '0');
            document.getElementById('minutos').textContent = (minutes % 60).toString().padStart(2, '0');
            document.getElementById('segundos').textContent = (seconds % 60).toString().padStart(2, '0');
        }
        setInterval(updateCounter, 1000);
        updateCounter();

        const emojis = ['❤️', '😍'];
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
            heart.style.fontSize = (Math.random() * 20 + 24) + 'px';
            document.getElementById('hearts').appendChild(heart);
            setTimeout(() => heart.remove(), 10000);
        }
        setInterval(createHeart, 500);

        let currentSlide = 0;
        const carousel = document.getElementById('carousel');
        const totalSlides = document.querySelectorAll('.carousel-item').length;

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        let touchStartX = 0;
        carousel.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });

        carousel.addEventListener('touchend', e => {
            const touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) nextSlide();
            if (touchStartX - touchEndX < -50) prevSlide();
        });

        setInterval(nextSlide, 3000);
  
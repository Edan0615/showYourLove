document.addEventListener('DOMContentLoaded', function() {
    var loveIconSize = 20;
    var generationInterval = 300; // Interval between heart generations

    var generatedCount = 0;

    function generateLoveIconBatch(batchSize) {
        for (var i = 0; i < batchSize; i++) {
            generateLoveIcon();
        }
    }

    function generateLoveIcon() {
        if (generatedCount >= numberOfLoveIcons) {
            return;
        }

        var loveIcon = document.createElement('i');
        loveIcon.className = loveSnowIcon;
        loveIcon.style.fontSize = loveIconSize + 'px';
        loveIcon.style.color = loveIconColor;

        var initialX = Math.random() * window.innerWidth;
        var initialY = -loveIconSize;
        loveIcon.style.position = 'absolute';
        loveIcon.style.left = initialX + 'px';
        loveIcon.style.top = initialY + 'px';
        loveIcon.style.opacity = 0.8;

        document.body.appendChild(loveIcon);

        var finalX = initialX + Math.random() * 200 - 100;
        var finalY = window.innerHeight - loveIconSize;
        var rotation = Math.random() * 360;
        var speed = Math.random() * (animationDurationRange[1] - animationDurationRange[0]) + animationDurationRange[0];

        animateLoveIcon(loveIcon, finalX, finalY, rotation, speed);
    }

    function animateLoveIcon(loveIcon, finalX, finalY, rotation, speed) {
        var startTime = performance.now();

        function step(timestamp) {
            var progress = (timestamp - startTime) / speed;

            if (progress < 1) {
                var currentX = loveIcon.offsetLeft;
                var currentY = loveIcon.offsetTop;

                var newX = currentX + (finalX - currentX) * progress;
                var newY = currentY + (finalY - currentY) * progress;

                loveIcon.style.left = newX + 'px';
                loveIcon.style.top = newY + 'px';
                loveIcon.style.transform = 'rotate(' + rotation + 'deg)';
                loveIcon.style.opacity = 0.8 - progress * 0.8;

                requestAnimationFrame(step);
            } else {
                loveIcon.remove();
                generatedCount++;

                if (generatedCount < numberOfLoveIcons) {
                    setTimeout(generateLoveIcon, generationInterval);
                }
            }
        }

        requestAnimationFrame(step);
    }

    var batchSize = 10; // Number of hearts to generate in a batch
    generateLoveIconBatch(batchSize);
});


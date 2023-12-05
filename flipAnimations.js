$(document).ready(function() {
    setInterval(function() {
        $('.flip-card-inner').each(function() {
            $(this).css('transform', $(this).css('transform') === 'none' ? 'rotateY(180deg)' : 'none');
        });
    }, 2000); // Time in milliseconds (2000ms = 2s)
});

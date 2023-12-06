$(document).ready(function() {
    setInterval(function() {
        $('.flip-card-inner').each(function() {
            $(this).css('transform', $(this).css('transform') === 'none' ? 'rotateY(180deg)' : 'none');
        });
    }, 4000); // Time in milliseconds (4000ms = 4s)
});

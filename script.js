
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Attach event listeners to each FAQ question
    const faqQuestions = document.querySelectorAll('#faqs .faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function(evt) {
            evt.preventDefault(); // Prevent default anchor action
            this.nextElementSibling.classList.toggle('hidden'); // Toggle the visibility of the answer
        });
    });

    // Event listener for 'View all' button
    document.getElementById('view-all').addEventListener('click', function() {
        document.querySelectorAll('.faq-answer').forEach(answer => {
            answer.classList.toggle('hidden');
        });
    });

    // Event listener for 'Ask questions' button
    document.getElementById('ask-questions').addEventListener('click', function() {
        document.getElementById('ask-question-form').classList.toggle('hidden');
    });

    // Event listener for close button in the ask question form
    document.querySelector('.close-button').addEventListener('click', function() {
        document.getElementById('ask-question-form').classList.add('hidden');
    });
});

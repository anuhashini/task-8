document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.querySelector('.booking-form');
    const bookingsSummary = document.querySelector('.bookings-summary');

    const moviePrices = { spiderman: 200, 'harry-potter': 180, interstellar: 150 };
    const movieNames = {
        'spiderman': 'Spiderman: Brand new Day',
        'harry-potter': 'Harry Potter',
        'interstellar': 'Interstellar'
    };

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const movieKey = document.getElementById('movie-select').value;
        const showtime = document.getElementById('showtime-select').value;
        const email = document.getElementById('email').value;
        const tickets = Number(document.getElementById('tickets').value);

        if (!movieKey || !showtime || !email || !tickets) return;

        const pricePerTicket = moviePrices[movieKey] || 0;
        const totalCost = pricePerTicket * tickets;
        const movieTitle = movieNames[movieKey] || 'Movie';

        const emptyState = bookingsSummary.querySelector('.empty-state');
        if (emptyState) emptyState.remove();

        const bookingItem = document.createElement('div');
        bookingItem.classList.add('booking-item');
        bookingItem.style.cssText = 'background: rgba(255,255,255,0.05); padding: 12px; margin-top: 10px; border-radius: 6px; font-size: 0.9rem;';
        bookingItem.innerHTML = `
            <strong>${movieTitle}</strong><br>
            Time: ${showtime.toUpperCase()}<br>
            Tickets: ${tickets} (₹${totalCost})<br>
            <span style="color: #aaa; font-size:0.8rem;">Sent to: ${email}</span>
        `;

        bookingsSummary.appendChild(bookingItem);
        bookingForm.reset();
    });

    const movieCards = document.querySelectorAll('.movies .card');
    const movieSelect = document.getElementById('movie-select');
    const cardTitleToValue = {
        'Spiderman: Brand New Day': 'spiderman',
        'Harry Potter and the Deathly Hallows': 'harry-potter',
        Interstellar: 'interstellar'
    };

    movieCards.forEach((card) => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            const titleElement = card.querySelector('.card-content h3');
            if (!titleElement) return;

            const optionValue = cardTitleToValue[titleElement.textContent.trim()];
            if (optionValue) {
                movieSelect.value = optionValue;
                document.querySelector('.form-card').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});








/* 
document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.querySelector('.booking-form');
    const bookingsSummary = document.querySelector('.bookings-summary');

    // Movie price mapping
    const moviePrices = {
        'spiderman': 200,
        'harry-potter': 180,
        'interstellar': 150
    };

    // Movie display names mapping
    const movieNames = {
        'spiderman': 'Spiderman: Brand New Day',
        'harry-potter': 'Harry Potter',
        'interstellar': 'Interstellar'
    };

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const movieKey = document.getElementById('movie-select').value;
        const showtime = document.getElementById('showtime-select').value;
        const email = document.getElementById('email').value;
        const tickets = parseInt(document.getElementById('tickets').value, 10);

        if (!movieKey || !showtime || !email || !tickets) return;

        // Calculate total cost
        const pricePerTicket = moviePrices[movieKey] || 0;
        const totalCost = pricePerTicket * tickets;
        const movieTitle = movieNames[movieKey] || 'Movie';

        // Remove empty state message if it exists
        const emptyState = bookingsSummary.querySelector('.empty-state');
        if (emptyState) {
            emptyState.remove();
        }

        // Create booking item element
        const bookingItem = document.createElement('div');
        bookingItem.classList.add('booking-item');
        bookingItem.style.cssText = 'background: rgba(255, 255, 255, 0.05); padding: 12px; margin-top: 10px; border-radius: 6px; font-size: 0.9rem;';

        bookingItem.innerHTML = `
            <strong>${movieTitle}</strong><br>
            Time: ${showtime.toUpperCase()}<br>
            Tickets: ${tickets} (₹${totalCost})<br>
            <span style="color: #aaa; font-size: 0.8rem;">Sent to: ${email}</span>
        `;

        bookingsSummary.appendChild(bookingItem);

        // Reset the form
        bookingForm.reset();
    });
}); */
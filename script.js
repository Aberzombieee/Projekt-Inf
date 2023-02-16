function scrollToTarget() {
    // get the target element
    const target = document.querySelector("#target-element");
    // scroll to the target element
    target.scrollIntoView({ behavior: "smooth" });
}

window.onload = function () {
    const images = document.querySelectorAll('.img');
    mediumZoom(images, {
        margin: 24,
        background: '#ffffff',
        scrollOffset: 40
    });

    const options = {
        type: 'line',
        data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            fill: 'origin'
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    };
    const ctx = document.getElementById('myChart');
    new Chart(ctx, options);
}
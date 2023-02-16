window.onload = function () {
    const images = document.querySelectorAll('img');
    mediumZoom(images, {
        margin: 24,
        background: '#ffffff',
        scrollOffset: 40
    });

    // Line Graph zeichnen  
    const options = {
        type: 'line',
        data: {
            labels: ['1870', '1880', '1890', '1900', '1910', '1913'],
            datasets: [{
                label: 'Nationaleinkommen Deutsches Reich',
                data: [14275, 16686, 21565, 29445, 43288, 49501],
                borderWidth: 1,
                fill: 'origin',
                backgroundColor: 'yellow'
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

    // Karte zeichnen 
    const position = ol.proj.transform([Number(34.8888), Number(-6.3690)], 'EPSG:4326', 'EPSG:3857');
    const map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM(),
            })
        ],
        view: new ol.View({
            center: position,
            zoom: 5,
        }),
    });
}
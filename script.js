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
                backgroundColor: 'rgba(255,184,28,0.5)'
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
    // Moderne Karte zeichnen 
    const tileLayer = new ol.layer.Tile({ source: new ol.source.OSM() });
    // alte Karte etwa uberlagern (manuelle kordinaten)
    const imageLayer = new ol.layer.Image({ source: new ol.source.ImageStatic({
        url:'/img/Karte2.png',
        imageExtent: [3130000, -1380000, 
                      4600000, 200000],
    }) });
    // Grenzgebiet Maji-Maji Krieg
    const grenzgebiet = [ 
        [4512365, -1187255], [4374736, -1264461], [4327741, -1259426],
        [4292495, -1284601], [4225359, -1264461], [4178364, -1313134],
        [4057520, -1314813], [3995419, -1284601], [3970243, -1306421],
        [3893037, -1301385], [3886323, -1267818], [3859469, -1237606],
        [3857791, -1188933], [3846042, -1172149], [3837650, -1110048],
        [3800725, -1071445], [3941710,  -977455], [3966886,  -942209],
        [3981992,  -908641], [3998776,  -760942], [4013881,  -737445],
        [4040736,  -710590], [4070947,  -700520], [4109550,  -702198],
        [4272354,  -727374], [4295852,  -739123], [4369701,  -735766],
        [4413339,  -769334], [4403269,  -801224], [4383128,  -865003],
        [4396555,  -878430], [4389842,  -987526], [4436837, -1116762],
        [4512365, -1187255] ];
    const vectorLayer = new ol.layer.Vector({
      source: new ol.source.Vector({ 
            features: [ new ol.Feature({ 
                geometry: new ol.geom.Polygon([ grenzgebiet ]), 
                }) ] 
            }),
      style: new ol.style.Style({
            // Line and Polygon Style
            //stroke: new ol.style.Stroke({ color: 'rgba(255,184,28, 1)', width: 4 }),
            fill: new ol.style.Fill({ color: 'rgba(255,184,28, 0.3)' }),
            }) 
    });
    // Karte Zeichnen
    const map = new ol.Map({
        target: 'map',
        layers: [ tileLayer, imageLayer, vectorLayer ],
        view: new ol.View({ center: [3900000, -760000], zoom: 6 }),
    });
    // map.on('click', function(evt){
    //     // Get the pointer coordinate
    //     console.log("[" + evt.coordinate[0].toFixed(0) + ", " + evt.coordinate[1].toFixed(0) + "]");
    // });
}
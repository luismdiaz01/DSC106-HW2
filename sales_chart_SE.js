Highcharts.chart('container5', {

    title: {
        text: 'Monthly Sales - SouthEast'
    },
    data: {
        csv: document.getElementById('csv5').innerHTML
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false
            }
        }
    },

});
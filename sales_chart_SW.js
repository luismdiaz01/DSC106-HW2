Highcharts.chart('container3', {

    title: {
        text: 'Monthly Sales - SouthWest'
    },
    data: {
        csv: document.getElementById('csv3').innerHTML
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false
            }
        }
    },

});
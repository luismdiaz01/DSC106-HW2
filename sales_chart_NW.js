Highcharts.chart('container4', {

    title: {
        text: 'Monthly Sales - NorthWest'
    },
    data: {
        csv: document.getElementById('csv4').innerHTML
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false
            }
        }
    },

});
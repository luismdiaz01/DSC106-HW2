Highcharts.chart('container9', {

    title: {
        text: 'Fish Filet sales 2016 - Present'
    },
    data: {
        csv: document.getElementById('csv9').innerHTML
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false
            }
        }
    },

});
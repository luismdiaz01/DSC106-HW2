Highcharts.chart('container8', {

    title: {
        text: 'Chicken Filet sales 2016 - Present'
    },
    data: {
        csv: document.getElementById('csv8').innerHTML
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false
            }
        }
    },

});
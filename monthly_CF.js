Highcharts.chart('container8', {

    title: {
        text: 'Monthly sales data 2016 - Present'
    },
    subtitle: {
        text: 'BK introduced impossible burger August 2019'
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
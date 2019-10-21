Highcharts.chart('container4', {

    title: {
        text: 'Monthly sales data 2016 - Present'
    },
    subtitle: {
        text: 'BK introduced impossible burger August 2019'
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
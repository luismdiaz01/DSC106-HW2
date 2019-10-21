Highcharts.chart('container2', {

    title: {
        text: 'Monthly sales data 2016 - Present'
    },
    subtitle: {
        text: 'BK introduced impossible burger August 2019'
    },
    data: {
        csv: document.getElementById('csv2').innerHTML
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false
            }
        }
    },

});
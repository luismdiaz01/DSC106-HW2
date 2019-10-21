Highcharts.chart('container', {
    chart: {
        renderTo: 'container'
    },
    title: {
        text: 'Total Monthly sales data 2016 - Present'
    },
    subtitle: {
        text: 'BK introduced impossible burger August 2019'
    },
    data: {
        csv: document.getElementById('csv').innerHTML
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false
            }
        }
    },

});
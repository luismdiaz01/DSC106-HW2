Highcharts.chart('container10', {
    chart: {
        renderTo: 'container10'
    },
    title: {
        text: 'Daily Sales'
    },
    data: {
        csv: document.getElementById('csv10').innerHTML
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false
            }
        }
    },

});
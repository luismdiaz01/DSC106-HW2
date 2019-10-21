Highcharts.chart('container2', {

    title: {
        text: 'Monthly Sales - NorthEast'
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
Highcharts.chart('container6', {

    title: {
        text: 'Monthly Sales - Central'
    },
    data: {
        csv: document.getElementById('csv6').innerHTML
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false
            }
        }
    },

});
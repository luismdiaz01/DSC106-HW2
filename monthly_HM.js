Highcharts.chart('container7', {

    title: {
        text: 'Hamburger sales 2016 - Present'
    },
    data: {
        csv: document.getElementById('csv7').innerHTML
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false
            }
        }
    },

});
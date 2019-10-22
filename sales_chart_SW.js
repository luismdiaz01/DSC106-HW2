Highcharts.chart('container3', {

    title: {
        text: 'Monthly Sales - SouthWest'
    },
    data: {
        csv: document.getElementById('csv3').innerHTML
    },
    plotOptions: {
        series: {
            marker: {
                enabled: true
            }
        }
    },
    xAxis: {
        type: 'category',
        labels: {
            format: "{value}"
        },
        title: {
            text: 'Month-Years'
        },

        categories: ['Jan-16', 'Feb-16', 'Mar-16', 'Apr-16', 'May-16', 'Jun-16', 'Jul-16', 'Aug-16', 'Sep-16', 'Oct-16', 'Nov-16', 'Dec-16', 'Jan-17', 'Feb-17', 'Mar-17', 'Apr-17', 'May-17', 'Jun-17', 'Jul-17', 'Aug-17', 'Sep-17', 'Oct-17', 'Nov-17', 'Dec-17', 'Jan-18', 'Feb-18', 'Mar-18', 'Apr-18', 'May-18', 'Jun-18', 'Jul-18', 'Aug-18', 'Sep-18', 'Oct-18', 'Nov-18', 'Dec-18', 'Jan-19', 'Feb-19', 'Mar-19', 'Apr-19', 'May-19', 'Jun-19', 'Jul-19', 'Aug-19', 'Sep-19'],
        
        plotlines: [{
            color: '#777777',
            width: 2,
            value: 33

        }],
    },
    yAxis: {
        title: {
            text: 'Units Sold'
        }
    }
});
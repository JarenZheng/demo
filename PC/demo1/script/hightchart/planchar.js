
jQuery.jrPlanChar = {

    inandout: function (id, title, series) {
        $(id).highcharts({
            chart: {
                type: 'bar'
            },
            colors: ['#4f8da3', '#ffc200', '#ef6c6c', '#80699B', '#3D96AE', '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'],
            title: {
                verticalAlign: 'middle',
                text: null
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '金额：{point.y}<b><br>百分比：{point.percentage:.1f}%</b>'
            },
            xAxis: {
                labels: {
                    enabled: false
                },
                categories: [title],
                gridLineColor: '#197F07',
                gridLineWidth: 0,
                lineWidth: 0
            },
            yAxis: {
                stackLabels: {
                    formatter: function () {
                        return '<b>' + title + ':' + this.total + '</b>';
                    },
                    enabled: true,
                    align: 'left',
                    verticalAlign: 'top',
                    x: 0,
                    y: -7
                },
                labels: {
                    enabled: false
                },
                min: 0,
                gridLineWidth: 0,
                title: {
                    text: null
                }
            },
            legend: {
                labelFormatter: function () {
                    return this.name + '￥' + this.yData;
                },
                reversed: true,
                itemStyle: {
                    cursor: 'pointer',
                    fontSize: '12px'
                },
                align: 'center',
                verticalAlign: 'top',
                x: 0,
                y: -15
            },
            plotOptions: {

                series: {
                    stacking: 'normal'
                },
                column: {
                    stacking: 'percent'
                }
            },
            series: series
        });
    }
    //start 圆饼图
    , pieChart: function (id, series) {
        $(id).highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: null,
            tooltip: {
                headerFormat: '<b>{point.key}</b><br>',
                pointFormat: '<b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    borderWidth: 3,
                    colors: ['#4f8da3', '#ffc200', '#ef6c6c', '#80699B', '#3D96AE', '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'],
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}<br>{point.percentage:.1f}%',
                        distance: 10,
                        connectorPadding: 5,
                        //connectorWidth: 0,
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: '百分比',
                data: series
            }]
        });
    }
    //end 圆饼图
};
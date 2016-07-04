// JavaScript Document
$(function () {
    // 图0-1-1
    $('#chart0-1-1').highcharts({
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
            categories: ['月度收入'],
            gridLineColor: '#197F07',
            gridLineWidth: 0,
            lineWidth: 0
        },
        yAxis: {
            stackLabels: {
                formatter: function () {
                    return '<b>月度收入:' + this.total + '</b>';
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
        series: [{
            name: '月工资收入',
            data: [9000]
        },
        {
            name: '月终奖金',
            data: [1000]
        },
        {
            name: '月投资收益',
            data: [2000]
        },
        {
            name: '其他月收入',
            data: [800]
        }]
    });
    // 图0-1-2
    $('#chart0-1-2').highcharts({
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
            categories: ['月度支出'],
            gridLineColor: '#197F07',
            gridLineWidth: 0,
            lineWidth: 0
        },
        yAxis: {
            stackLabels: {
                formatter: function () {
                    return '<b>月度支出:' + this.total + '</b>';
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
        series: [{
            name: '月工资收入',
            data: [9000]
        },
        {
            name: '月终奖金',
            data: [1000]
        },
        {
            name: '月投资收益',
            data: [2000]
        },
        {
            name: '月他年收入',
            data: [800]
        }]
    });
    // 图0-2-1
    $('#chart0-2-1').highcharts({
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
            categories: ['年度收入'],
            gridLineColor: '#197F07',
            gridLineWidth: 0,
            lineWidth: 0
        },
        yAxis: {
            stackLabels: {
                formatter: function () {
                    return '<b>年度收入:' + this.total + '</b>';
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
        series: [{
            name: '年工资收入',
            data: [90000]
        },
        {
            name: '年终奖金',
            data: [10000]
        },
        {
            name: '年投资收益',
            data: [20000]
        },
        {
            name: '其他年收入',
            data: [8000]
        }]
    });
    // 图0-2-2
    $('#chart0-2-2').highcharts({
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
            categories: ['年度支出'],
            gridLineColor: '#197F07',
            gridLineWidth: 0,
            lineWidth: 0
        },
        yAxis: {
            stackLabels: {
                formatter: function () {
                    return '<b>年度支出:' + this.total + '</b>';
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
        series: [{
            name: '年房租房贷 ',
            data: [70000]
        },
        {
            name: '年交通费 ',
            data: [5000]
        },
        {
            name: '年购物 ',
            data: [30000]
        },
        {
            name: '其他年支出',
            data: [9000]
        }]
    });
    // 图1-2
    $('#chart1-2').highcharts({
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
                    connectorWidth: 0,
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: '百分比',
            data: [

            {
                name: '短期投资目标',
                y: 45
            },
            {
                name: '紧急备用金',
                y: 10
            },
            {
                name: '中期投资目标',
                y: 45
            }

            ]
        }]
    });
    // 图3-2
    $('#chart3-2').highcharts({
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
                    format: '{point.name}{point.percentage:.1f}%',
                    connectorPadding: 10,

                    connectorWidth: 1,
                    distance: 20,	//通过设置这个属性，将每个小饼图的显示名称和每个饼图重叠
                    style: {
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }

                }
            }
        },
        series: [{
            type: 'pie',
            name: '百分比',
            data: [

            {
                name: '短期投资目标',
                y: 45
            },
            {
                name: '紧急备用金',
                y: 10
            },
            {
                name: '中期投资目标',
                y: 45
            }

            ]
        }]
    });
    // 图3-3
    $('#chart3-3').highcharts({
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
                    connectorWidth: 0,
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: '百分比',
            data: [

            {
                name: '短期投资目标',
                y: 45
            },
            {
                name: '紧急备用金',
                y: 10
            },
            {
                name: '中期投资目标',
                y: 45
            }

            ]
        }]
    });
    // 图3-4
    $('#chart3-4').highcharts({
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
                    connectorWidth: 0,
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: '百分比',
            data: [

            {
                name: '短期投资目标',
                y: 45
            },
            {
                name: '紧急备用金',
                y: 10
            },
            {
                name: '中期投资目标',
                y: 45
            }

            ]
        }]
    });

    // 颜色演示，一共16种颜色
    $('#all_colors').highcharts({
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
                colors: ['#4f8da3', '#ffc200', '#ef6c6c', '#35b01d', '#e44298', '#6b439c', '#e60012', '#ff7000', '#999999', '#cfa972', '#33a7d8', '#186410', '#03a78f', '#222222', '#6a3906', '#8fc31f'],
                dataLabels: {
                    enabled: true,
                    format: '{point.name}<br>{point.percentage:.1f}%',
                    distance: 15,
                    connectorPadding: 5,
                    connectorWidth: 1,
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: '百分比',
            data: [

            {
                name: '紧急备用金2',
                y: 10
            },
            {
                name: '短期投资目标1',
                y: 10
            },
            {
                name: '紧急备用金2',
                y: 10
            },
            {
                name: '短期投资目标1',
                y: 10
            },
            {
                name: '紧急备用金2',
                y: 10
            },
            {
                name: '短期投资目标1',
                y: 10
            },
            {
                name: '紧急备用金2',
                y: 10
            },
            {
                name: '短期投资目标1',
                y: 10
            },
            {
                name: '紧急备用金2',
                y: 10
            },
            {
                name: '短期投资目标1',
                y: 10
            },
            {
                name: '紧急备用金2',
                y: 10
            },
            {
                name: '短期投资目标1',
                y: 10
            },
            {
                name: '紧急备用金2',
                y: 10
            },
            {
                name: '短期投资目标1',
                y: 10
            },
            {
                name: '紧急备用金2',
                y: 10
            },
            {
                name: '中期投资目标',
                y: 10
            }

            ]
        }]
    });

});
/*Highcharts.setOptions({
    lang:{
       contextButtonTitle:"图表导出菜单",
       decimalPoint:".",
       downloadJPEG:"下载JPEG图片",
       downloadPDF:"下载PDF文件",
       downloadPNG:"下载PNG文件",
       downloadSVG:"下载SVG文件",
       drillUpText:"返回 {series.name}",
       loading:"加载中",
       months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
       noData:"没有数据",
       numericSymbols: [ "千" , "兆" , "G" , "T" , "P" , "E"],
       printChart:"打印图表",
       resetZoom:"恢复缩放",
       resetZoomTitle:"恢复图表",
       shortMonths: [ "Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"],
       thousandsSep:",",
       weekdays: ["星期一", "星期二", "星期三", "星期三", "星期四", "星期五", "星期六","星期天"]
	}
});*/
$(function () {
    $('#h-chartsA').highcharts({
		plotOptions: {
			series: {
				marker: {
					enabled: false
				}
			},
		},
        legend: {  //隐藏列表块
            enabled: false
        },
        credits: {  //隐藏广告链接
            enabled: false
        },

        chart: {
            polar: true,
            type: 'line'
        },

        title: {
            text: null
        },

        pane: {
            size: '75%'
        },

        xAxis: {
            categories: ['收入情况', '年龄', '投资经验', '主观偏好', '投资目标', '客观能力'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            labels:{
            	enabled:false
            },
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },

        tooltip: {
            enabled: false,
        },
        series: [{
            name: '金额：',
            data: [43000, 19000, 60000, 35000, 17000, 10000],
            pointPlacement: 'on'
        }]
    });
    // Build the chart
    $('#h-chartsB').highcharts({
        credits: {  //隐藏广告链接
            enabled: false
        },
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: null
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                size: '100%',
                innerSize: '50%',
                colors: [
                        '#fcc954',
                        '#58b5e1',
                        '#92cf68',
                        '#c066a6',
                        '#f7774a',
                        '#fa6567'
                ],
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
            },
			series: {
				marker: {
					enabled: false
				}
			},
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['1', 11.0],
                ['2', 15.0],
                {
                    name: '3',
                    y: 19.0,
                },
                ['4', 25.0],
                ['5', 15.0],
                ['6', 15.0]
            ]
        }]
    });

    $('#h-chartsD').highcharts({
        credits: {  //隐藏广告链接
            enabled: false
        },
		/*lang:{
			months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
			shortMonths: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一', '十二'],
			weekdays: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
		},*/
        chart: {
            zoomType: 'x'
        },
        title: {
            text: null
        },
        xAxis: {
            type: 'datetime',
            minRange: 14 * 24 * 3600000, // fourteen days
			dateTimeLabelFormats: {
				second: '%Y-%m-%d<br/>%H:%M:%S',
				minute: '%Y-%m-%d<br/>%H:%M',
				hour: '%Y-%m-%d<br/>%H:%M',
				day: '%Y<br/>%m-%d',
				week: '%Y<br/>%m-%d',
				month: '%Y-%m',
				year: '%Y'
			}
        },
        yAxis: {
            title: {
                text: null
            }
        },
        legend: {
            enabled: false
        },
		tooltip: {
			 formatter: function () {
                var s = '<b>' + this.x + '</b>';

                $.each(this.points, function () {
                    s += '<br/>' + this.series.name + ': ' +
                        this.y + '%';
                });

                return s;
            },
			shared: true,
			crosshairs: true,
			xDateFormat: '%Y-%m-%d %A'
		},
        /*plotOptions: {
            area: {
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },*/

		plotOptions: {
			series: {
				marker: {
					enabled: false
				}
			},
        },
        series: [{
            type: 'line',
            name:'累计收益率',
            color: '#0099cc',
            data: [
                [Date.UTC(2011,2,18),0.7052],
				[Date.UTC(2011,2,21),0.7036],
				[Date.UTC(2011,2,22),0.7058],
				[Date.UTC(2011,2,23),0.7091],
				[Date.UTC(2011,2,24),0.7058],
				[Date.UTC(2011,2,25),0.71],
				[Date.UTC(2011,2,28),0.7107],
				[Date.UTC(2011,2,29),0.7082],
				[Date.UTC(2011,2,30),0.7079],
				[Date.UTC(2011,2,31),0.7064],
				[Date.UTC(2011,3,1),0.7026],
				[Date.UTC(2011,3,4),0.704],
				[Date.UTC(2011,3,5),0.7026],
				[Date.UTC(2011,3,6),0.6982],
				[Date.UTC(2011,3,7),0.6996],
				[Date.UTC(2011,3,8),0.6907],
				[Date.UTC(2011,3,11),0.6934],
				[Date.UTC(2011,3,12),0.6906],
				[Date.UTC(2011,3,13),0.692],
				[Date.UTC(2011,3,14),0.6896],
				[Date.UTC(2011,3,15),0.6931],
				[Date.UTC(2011,3,18),0.7024],
				[Date.UTC(2011,3,19),0.6961],
				[Date.UTC(2011,3,20),0.6888],
				[Date.UTC(2011,3,21),0.6869],
				[Date.UTC(2011,3,22),0.6869],
				[Date.UTC(2011,3,25),0.6874],
				[Date.UTC(2011,3,26),0.6801],
				[Date.UTC(2011,3,27),0.6763],
				[Date.UTC(2011,3,28),0.6738],
				[Date.UTC(2011,3,29),0.6753],
				[Date.UTC(2011,4,2),0.6759],
				[Date.UTC(2011,4,3),0.674],
				[Date.UTC(2011,4,4),0.6744],
				[Date.UTC(2011,4,5),0.687],
				[Date.UTC(2011,4,6),0.6983],
				[Date.UTC(2011,4,8),0.696],
				[Date.UTC(2011,4,10),0.6945]
            ]
        },{
            type: 'line',
            name:'泸深300',
            color: '#ff0000',
            data: [
                [Date.UTC(2011,2,18),0.7052],
				[Date.UTC(2011,2,21),0.9036],
				[Date.UTC(2011,2,22),0.8058],
				[Date.UTC(2011,2,23),0.9091],
				[Date.UTC(2011,2,24),0.8058],
				[Date.UTC(2011,2,25),0.51],
				[Date.UTC(2011,2,28),0.6107],
				[Date.UTC(2011,2,29),0.9082],
				[Date.UTC(2011,2,30),0.8079],
				[Date.UTC(2011,2,31),0.7064],
				[Date.UTC(2011,3,1),0.3026],
				[Date.UTC(2011,3,4),0.404],
				[Date.UTC(2011,3,5),0.5026],
				[Date.UTC(2011,3,6),0.6982],
				[Date.UTC(2011,3,7),0.7996],
				[Date.UTC(2011,3,8),0.9907],
				[Date.UTC(2011,3,11),0.2934],
				[Date.UTC(2011,3,12),0.3906],
				[Date.UTC(2011,3,13),0.792],
				[Date.UTC(2011,3,14),0.5896],
				[Date.UTC(2011,3,15),0.6931],
				[Date.UTC(2011,3,18),0.7024],
				[Date.UTC(2011,3,19),0.6961],
				[Date.UTC(2011,3,20),0.6888],
				[Date.UTC(2011,3,21),0.6869],
				[Date.UTC(2011,3,22),0.6869],
				[Date.UTC(2011,3,25),0.6874],
				[Date.UTC(2011,3,26),0.6801],
				[Date.UTC(2011,3,27),0.6763],
				[Date.UTC(2011,3,28),0.6738],
				[Date.UTC(2011,3,29),0.6753],
				[Date.UTC(2011,4,2),0.6759],
				[Date.UTC(2011,4,3),0.674],
				[Date.UTC(2011,4,4),0.6744],
				[Date.UTC(2011,4,5),0.687],
				[Date.UTC(2011,4,6),0.6983],
				[Date.UTC(2011,4,8),0.696],
				[Date.UTC(2011,4,10),0.6945]
            ]
        }]
    });

    $('#h-chartsC').highcharts({
		plotOptions: {
			series: {
				marker: {
					enabled: false
				}
			},
		},
        chart: {
            type: 'line',
        },
        title: {
            text: ''
        },
        tooltip: {
            formatter: function () {
                var s = '<b>' + this.x + '</b>';

                $.each(this.points, function () {
                    s += '<br/>' + this.series.name + ': ' +
                        this.y + 'm';
                });

                return s;
            },
            shared: true
        },

        credits: {  //隐藏广告链接
            enabled: false
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['2016年', '2017年', '2018年', '2019年', '2020年', '2021年', '2022年', '2023年', '2024年', '2025年']
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'one',
            data: [1000, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000]
        }, {
            name: 'two',
            data: [1000, 1300, 1500, 1700, 1900, 2100, 2300, 2500, 2700, 2900]
        }, {
            name: 'three',
            data: [1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500]
        }]
    });

    $('#h-chartsE').highcharts({
        chart: {
            type: 'area',
        },
        title: {
            text: ''
        },
        credits: {  //隐藏广告链接
            enabled: false
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%']
        },
        yAxis: {
            title: {
                text: ''
            },
            labels: {
                formatter: function () {
                    return this.value / 1000 + 'k';
                }
            }
        },
        tooltip: {
            pointFormat: ''
        },
        legend: {
            enabled: false
        },
        /*plotOptions: {
            area: {
                pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },*/
        series: [{
            name: 'USA',
            data: [8000, 7500, 7000, 6500, 6000, 5500, 5000, 4500, 4000]
        }]
    });
	
	$('#h-chartsG').highcharts({
        credits: {  //隐藏广告链接
            enabled: false
        },
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: null
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                size: '100%',
                innerSize: '50%',
                colors: [
                        '#fcc954',
                        '#58b5e1',
                        '#92cf68',
                        '#c066a6',
                        '#f7774a',
                        '#fa6567'
                ],
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
            },
			series: {
				marker: {
					enabled: false
				}
			},
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['1', 11.0],
                ['2', 15.0],
                {
                    name: '3',
                    y: 19.0,
                },
                ['4', 25.0],
                ['5', 15.0],
                ['6', 15.0]
            ]
        }]
    });
});
$(function () {
    /*入驻情况雷达图*/
    var radar = echarts.init(document.getElementById('radar'));
    var option = {
        tooltip: {},
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                }
            },
            splitArea: {
                areaStyle: {
                    color: '#003D82'
                }
            },
            indicator: [
                {name: 'xxx', max: 50},
                {name: 'xxxx', max: 50},
                {name: 'xxxxx', max: 50},
                {name: 'xxxxx1', max: 50},
                {name: 'xxxxx', max: 50}
            ]
        },
        series: [{
            type: 'radar',
            areaStyle: {
                normal: {
                    color: '#B5BE69',
                }
            },
            lineStyle: {
                normal: {
                    color: '#B5BE69'
                }

            },
            data: [
                {
                    value: [19, 51, 12, 13, 5],
                }
            ]
        }]
    };
    radar.setOption(option);
    /*权力事项分配环图*/
    var power = echarts.init(document.getElementById('power'));
    var option = {
        color: ['#C04D38', '#2D4554', '#4AA3AB', '#E97A5C', '#5376B5', '#4BBADC', '#C47D25', '#BC9B8F'],
        series: [
            {
                name: '权力事项分配',
                type: 'pie',
                radius: ['50%', '65%'],
                label: {
                    normal: {
                        formatter: '{b|{b}} \n {per|{d}%}  ',
                        backgroundColor: 'rgba(23,116,145,.6)',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        rich: {

                            b: {
                                color: '#fff',
                                fontSize: 16,
                                lineHeight: 33
                            },
                            per: {
                                color: '#fff',
                                padding: [2, 4],
                                borderRadius: 2
                            }
                        }
                    }
                },
                data: [
                    {value: 335, name: '行政许可'},
                    {value: 310, name: '行政强制'},
                    {value: 234, name: '行政征收'},
                    {value: 135, name: '行政给付'},
                    {value: 1048, name: '行政确认'},
                    {value: 251, name: '公共服务'},
                    {value: 147, name: '行政裁决'},
                    {value: 102, name: '其他'}
                ]
            }
        ]
    };
    power.setOption(option);
    /*发牌情况冰山图*/
    var deal_situation = echarts.init(document.getElementById('deal_situation'));
    let data = {
        "chart": [{
            name: "红牌",
            value: 305,
        },

            {
                name: "黄牌",
                value: 415,
            },

            {
                name: "严重",
                value: 400,
            }
        ]
    }
    let xAxisMonth = [],
        barData = [];
    for (let i = 0; i < data.chart.length; i++) {
        xAxisMonth.push(data.chart[i].name);
        barData.push({
            "name": xAxisMonth[i],
            "value": data.chart[i].value
        });

    }

    var option = {
        grid: {
            left: '10%',
            bottom: '6%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            show: false,
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
            {
                type: 'category',
                position: "bottom",
                data: xAxisMonth,
                boundaryGap: true,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            }

        ],
        yAxis: [{
            show: true,
            splitLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,0.2)"
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                color: '#fff'
            }
        }
        ],
        series: [{
            name: '发牌情况',
            type: 'pictorialBar',
            xAxisIndex: 1,
            barCategoryGap: '10%',
            symbol: 'path://d="M150 50 L145 170 L155 170  Z"',
            itemStyle: {
                normal: {
                    color: function (params) {
                        let colorList = [
                            '#BF4A38', '#DC9B34', '#54D1FA'
                        ];
                        return colorList[params.dataIndex];
                    }
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: barData,
        },
        ]
    }
    deal_situation.setOption(option);
    /*权力事项分布*/
    var power_spread = echarts.init(document.getElementById('power_spread'));
    var option = {
        legend: {
            data: ['xxxx', 'XXXX'],
            textStyle: {
                color: '#fff'
            }
        },
        xAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                }
            },
            type: 'category',
            boundaryGap: false,
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#fff'],
                    width: 1,
                    type: 'solid'
                }
            },
            type: 'value'
        },
        series: [{
            name: 'xxxx',
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
                normal: {
                    color: '#F7A845',
                    lineStyle: {
                        color: '#F7A845'
                    },

                }
            },
            data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90]
        },
            {
                name: 'XXXX',
                type: 'line',
                symbol: 'circle',
                symbolSize: 10,
                itemStyle: {
                    normal: {
                        color: '#00D5F9',
                        lineStyle: {
                            color: '#00D5F9'
                        },

                    }
                },
                data: [220, 182, 191, 234, 290, 330, 310, 101, 134, 90, 230, 210]
            }
        ]
    };
    power_spread.setOption(option);
    /*办件率top5*/
    var unit_rate = echarts.init(document.getElementById('unit_rate'));
    var dataX = [200, 180, 170];
    var dataY = ['工商', '质检', '发改'];
    var option = xBarImg(dataX, dataY);
    var obj =
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '20%', //统计条宽度
            itemStyle: {
                normal: {
                    barBorderRadius: 15,
                    color: '#686B7D'
                },
            },
            // z: 1,
            data: [400, 400, 400],

        };

    option.series.unshift(obj);
    option.series[1].label.normal.formatter = "{c}";
    option.series[1].barWidth = '20%';
    option.grid[0].x = "15%";
    var obj2 = {show: true, lineStyle: {color: "#8C97A3"}};
    option.yAxis[0].axisLine = obj2;
    option.series[1].itemStyle = {
        normal: {
            color: function (params) {
                let colorList = [
                    '#5678AF', '#4CB8D9', '#B34B3C'
                ];
                return colorList[params.dataIndex];
            }
        },
    };
    unit_rate.setOption(option);
    /*省直办件量展示*/
    var dept = echarts.init(document.getElementById("dept"));
    var xData = ['安全检查', '安全检查', '安全检查', '安全检查', '安全检查', '安全检查', '安全检查', '安全检查', '安全检查'];
    var dataY = [100, 150, 130, 200, 250, 300, 250, 120, 160];
    var option = {
        grid: {
            top: 10,
        },
        xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#363e83',
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
            },
            data: xData,
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                interval: 0,
                rotate: 25,
            }
        }, {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,

            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: xData,
        }],
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#32346c',
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#32346c ',
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#bac0c0',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                formatter: '{value}',
            },
        },
        series: [{
            name: '活跃度',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: '#B04853',
                    barBorderRadius: 50,
                    borderWidth: 0,
                },
                emphasis: {
                    shadowBlur: 15,
                    shadowColor: 'rgba(105,123, 214, 0.7)'
                }
            },
            zlevel: 2,
            barWidth: '15%',
            data: dataY,
        },
            {
                name: '',
                type: 'bar',
                xAxisIndex: 1,
                zlevel: 1,
                itemStyle: {
                    normal: {
                        color: '#003473',
                        borderWidth: 0,
                        shadowBlur: {
                            shadowColor: 'rgba(255,255,255,0.31)',
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowOffsetY: 2,
                        },
                    }
                },
                barWidth: '15%',
                data: [320, 320, 320, 320, 320, 320, 320, 320, 320]
            }
        ]
    }
    dept.setOption(option);
    /*地市办件量展示*/
    var cityData = [
        {name: '济南市', value: 775.47},
        {name: '青岛市', value: 944.24},
        {name: '淄博市', value: 99.44},
        {name: '枣庄市', value: 42.37},
        {name: '东营市', value: 16.86},
        {name: '烟台市', value: 227.70},
        {name: '潍坊市', value: 165.29},
        {name: '济宁市', value: 69.53},
        {name: '泰安市', value: 62.88},
        {name: '威海市', value: 163.72},
        {name: '日照市', value: 32.56},
        {name: '莱芜市', value: 6.95},
        {name: '临沂市', value: 237.93},
        {name: '德州市', value: 48.63},
        {name: '聊城市', value: 65.74},
        {name: '滨州市', value: 34.37},
        {name: '菏泽市', value: 53.88},
    ];
    var max = 1000;
    var map_sd = echarts.init(document.getElementById('map_sd'));
    var option = mapImage(max, cityData);
    option.geo.zoom = 1;
    map_sd.setOption(option);
})
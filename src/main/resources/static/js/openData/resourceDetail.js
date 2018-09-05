/* 定义柱状图function */
function barImg(dataX, dataY, nameString) {
    return {
        tooltip: {
            show: "true",
            trigger: 'axis',
            textStyle: {
                align: 'center',
                fontSize: 22,
            },
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 10,
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            top: 0,
            right: 20,
            textStyle: {
                color: '#fff',
            },
            data: [nameString]
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: true,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#aaa',
                }
            },
        },
        xAxis: [{
            type: 'category',
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                }
            },
            axisLabel: {
                interval: 0,
                rotate: 30
            },
            data: dataX
        },
            {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    length: 10,
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                data: dataX
            },

        ],
        series: [{
            name: nameString,
            type: 'bar',
            xAxisIndex: 1,

            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#51dddc'
                    }, {
                        offset: 1,
                        color: '#4d87ac'
                    }]),
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barWidth: 25,
            data: dataY
        },
        ],
        grid: {
            x: 50,
            y: 10,
            x2: 10,
            y2: 50,
            borderWidth: 1
        },
    }

}

/* 地图function */
function mapImg(dataMap, max) {
    return {
        tooltip: {
            textStyle: {
                align: 'center',
                fontSize: 22,
            },
        },
        visualMap: {
            show: true,
            seriesIndex: [1],
            min: 0,
            max: max,
            text: ['高', '低'],
            textStyle: {
                color: '#8795a1'
            },
            realtime: false,
            calculable: true,
            inRange: {
                color: ['#5287AB', '#C87345']
            }
        },
        geo: {
            map: '山东',
            roam: true,
            zoom: 1.2,
            top: 30,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#FFF'
                    }
                }
            },
        },
        series: [{
            type: 'map',
            coordinateSystem: 'geo',
            data: dataMap,
        }, {
            type: 'map',
            geoIndex: 0,
            data: dataMap,
        }]
    }
}

/* 主题function  */
function objImg(nameArray, pieObjectArray) {
    return {

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            textStyle: {
                align: 'center',
                fontSize: 22,
            },
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 10,
        },
        color: ['#C37448', '#a962da', '#e05b6e', '#65d3e4', '#50C1CC', '#83A4BA', '#FFFF33', '#FFFFFF'],
        series: [
            {
                name: '目录数量',
                type: 'pie',
                data: pieObjectArray,
                center: ['55%', '50%'],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal: {
                        label: {
                            textStyle: {
                                fontSize: 18
                            }
                        }
                    }
                }
            }
        ],
        grid: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 0,
            borderWidth: 1
        },
    }
}

/* 折线图function() */
function lineImg(dataX, dataY, nameString) {
    return {
        tooltip: {
            trigger: 'axis',
            textStyle: {
                align: 'center',
                fontSize: 22,
            },
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 10,
        },
        legend: {
            x: 'right',
            y: 'top',
            textStyle: {
                color: '#fff',
            },
            data: [nameString]
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#fff',//左边线的颜色
                        width: '1'//坐标线的宽度
                    }
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#fff',//坐标值得具体的颜色
                    }
                },
                data: dataX,
                axisLabel: {
                    interval: 0,
                    rotate: 30,
                }
            },
        ],
        yAxis: [
            {
                name: nameString,
                type: 'value',
                splitLine: {
                    show: false,
                },
                splitArea: {show: false}, //分隔区域，默认不显示
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#fff',//左边线的颜色
                        width: '1'//坐标线的宽度
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff',//坐标值得具体的颜色
                    }
                },
            }
        ],
        series: [
            {
                name: nameString,
                type: 'line',
                areaStyle: {
                    normal: {
                        type: 'default',
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#65d3e4c9'
                        }, {
                            offset: 1,
                            color: '#65d3e426'
                        }], false)
                    }
                },
                smooth: true,
                itemStyle: {
                    normal: {
                        color: '#65d3e4c9'

                    }
                },
                data: dataY
            }
        ], grid: {
            x: 50,
            y: 10,
            x2: 30,
            y2: 60,
            borderWidth: 1
        },
    }
}
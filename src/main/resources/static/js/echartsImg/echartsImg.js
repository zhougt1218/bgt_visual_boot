/*
*
地图封装
数据类型第一个参数为地图坐标最大值，第二个参数为数组对象（value，name）
一定要引入shandong.js
*
*/
function mapImage(mapMax, mapData) {
    return {
        tooltip: {
            textStyle: {
                align: 'center',
                fontSize: 24
            },
        },
        visualMap: {
            show: true,
            seriesIndex: [1],
            min: 0,
            max: mapMax,
            right: '10%',
            bottom: '0%',
            text: ['高', '低'],
            textStyle: {
                color: '#FFF'
            },
            realtime: false,
            calculable: true,
            inRange: {
                color: ['#5287AB', '#C87345']
                //color: ['#006587', '#00FEFF']
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
            data: mapData,
            roam: false
        }, {
            type: 'map',
            geoIndex: 0,
            data: mapData,
        }]
    };
}

/*
 * 折线图封装
第一个参数x轴数据，第二个参数y轴数据，数据类型均为普通数组
第三个参数legendname
此上为单折线图如果多折现，完成图后添加legend 和 sericse即可
*
*/
function foldLineImg(xData, yData, legendName) {
    return {
        tooltip: {
            trigger: 'axis',
            textStyle: {
                align: 'center',
                fontSize: 24
            },
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 10,
        },
        legend: {
            x: 'right',
            y: 'top',
            textStyle: {
                fontSize: 13,
                color: '#fff',
            },
            data: [
                {name: legendName, icon: 'rect'}]


        },
        color: ['#60c0dd', '#6c929b', '#ff723b'],
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
                    textStyle: {
                        color: '#fff',//坐标值得具体的颜色
                    }
                },
                data: xData,
                axisLabel: {
                    interval: 0,
                    rotate: 25,
                }
            },
        ],
        yAxis: [{
            type: 'value',
            scale: true,
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#fff'
                },
            },
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
                name: legendName,
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {areaStyle: {type: 'default'}},
                },
                data: yData,
            },
        ], grid: {
            x: 30,
            y: 50,
            x2: 10,
            y2: 50,
            borderWidth: 1
        }
    };
}

/*条形图封装
第一个参数x轴数据，第二个参数y轴数据，数据类型均为普通数组
数组均为降序排列
*/
function xBarImg(xData, yData) {
    return {
        grid: [
            {x: '22%', y: '5%', right: 50, width: '77%', height: '100%'},
        ],
        xAxis: [
            {
                axisTick: {show: false},
                axisLabel: {show: false},
                splitLine: {show: false},
                axisLine: {show: false},
            },
        ],
        yAxis: [
            {
                interval: 0,
                data: yData,
                axisTick: {show: false},
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: '16'
                    },

                },
                splitLine: {show: false},
                axisLine: {show: false, lineStyle: {color: "#3fdaff"}},
            }
        ],
        series: [

            {
                type: 'bar',
                xAxisIndex: 0,
                yAxisIndex: 0,
                barWidth: '45%',
                barGap: '-100%',
                itemStyle: {
                    normal: {
                        color: '#14C7C2'
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: "right",
                        textStyle: {color: "#9EA7C4"},
                        formatter: '{c}%'
                    },
                },
                data: xData,
            },

        ]
    }
}

/*
 * 柱状图封装
 * 第一个参数为x轴数据，第二个参数为y轴数据，数据类型均为普通数组
 * 第三个参数为轴名数组
*/
function barImg(dataX, dataY, nameString) {
    return {
        tooltip: {
            show: "true",
            trigger: 'axis',
            textStyle: {
                fontSize: 24,
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
            data: [{name: nameString, icon: 'rect'}]
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

/*
 * 饼图
第一个参数为参数名数组
第二个参数为 value name对象数组
*/
function pieImg(nameArray, pieObjectArray) {
    return {

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            textStyle: {
                align: 'center',
                fontSize: 24,
            },
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 10,
        },
        color: ['#50C1CC', '#83A4BA', '#D74832', '#a962da', '#e05b6e', '#65d3e4', '#FFFF33', '#FFFFFF'],
        series: [
            {
                name: '',
                type: 'pie',
                data: pieObjectArray,
                center: ['55%', '50%'],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },

                },
                label: {
                    normal: {
                        textStyle: {
                            fontWeight: 'normal',
                            fontSize: 14
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 1
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


/*
 * 环状图
 * 第一个参数为图的名字，第二个参数为对象数组value，name
 * */

function ringImage(nameString, ringImg) {
    return {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        label: {
            normal: {
                show: true,
                position: 'inner',
                fontSize: 16
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '16',
                }
            }
        },
        color: ['#4FC4F6', '#11A8AB', '#E64C65', '#B6BB6A', '#5CA582'],
        series: [
            {
                name: nameString,
                type: 'pie',
                radius: ['50%', '80%'],


                data: ringImg,
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 6,
                        length2: 6
                    }
                }
            }
        ]
    }
}

/*
 * 温度计
 * 参数说明：
 * dataX,dataY,nameY，nameString
 * dataX 为数据占比数为具体的数据，dataformatter 控制百分比，dataY为数量，nameY 为具体的数值均为数组
 * nameString 为标题名称,
 * data_white 为数组，数组内为99.5数组长度跟dataX相同
 * data_outer 为数组，数组内值为100，数组长度跟dataX相同
 * data_cicle 位数组，数组内值为0，数组长度跟dataX相同
 * */
function thermometer(dataX, dataY, nameY, data_white, data_outer, data_cicle, nameString) {
    var myColor = ['#00e9db', '#34da62', '#d0a00e', '#eb2100', '#d0570e', '#eb3600', '#00c0e9', '#0096f3'];
    return {
        //backgroundColor:'#0e2147',
        grid: {
            left: '7%',
            top: '10%',
            right: '1%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [{
            show: false,
        }],
        yAxis: [{
            axisTick: 'none',
            axisLine: 'none',
            offset: '27',
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '16',
                }
            },
            data: nameY
        }, {
            axisTick: 'none',
            axisLine: 'none',
            position: 'right',
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '16',
                }
            },
            data: dataY
        }, {
            name: nameString,
            nameGap: '0',
            nameTextStyle: {
                color: '#ffffff',
                fontSize: '16',
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [],
        }],
        series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: dataX,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: function (param) {
                        return "   " + param.value + '%';
                    },
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '16',
                    }
                }
            },
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: function (params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: data_white,
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: '#0e2147',
                    barBorderRadius: 5,
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: data_outer,
            barWidth: 24,
            itemStyle: {
                normal: {
                    color: function (params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    barBorderRadius: 5,
                }
            },
            z: 0
        },
            {
                name: '外圆',
                type: 'scatter',
                hoverAnimation: false,
                data: data_cicle,
                yAxisIndex: 2,
                symbolSize: 35,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                        opacity: 1,
                    }
                },
                z: 2
            }]
    };
}

/*
 * 此处定义的是一个动态折线图的基本样式
 * 
 * */

function actLine(dateList, valueList) {
    return {
        visualMap: {
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            color: ['#2dbffa']
        },
        tooltip: {
            trigger: 'axis',
            textStyle: {
                align: 'center',
                fontSize: 22
            },
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 10,
        },
        title: {
            text: 'Gradient along the y axis',
            left: '2%',
            top: '4%',
            textStyle: {
                color: '#fff',
                fontSize: 20
            },
        },
        grid: {},
        xAxis: {
            data: dateList,
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
                },
                interval: 0,
                rotate: 25,
            },
        },
        yAxis: {
            splitLine: {show: false},
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
        },
        series: {
            type: 'bar',
            barWidth: 25,
            showSymbol: false,
            data: valueList,
        }
    }
}

function actLineDouble(dateListDesc, valueListDesc, valueListAsc) {
    return {
        visualMap: {
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            color: ['#2dbffa']
        },
        color: ['#2dbffa', '#C0C255'],
        tooltip: {
            trigger: 'axis',
            textStyle: {
                align: 'center',
                fontSize: 22
            },
            padding: 10,
        },

        legend: {
            show: true,
            data: ['前十', '后十'],
            selected: {
                '前十': true,
                '后十': false,
            },
            selectedMode: 'single',
            right: 50,
            top: 30,
            textStyle: {
                color: '#fff'
            }
        },
        title: {
            text: 'Gradient along the y axis',
            left: '2%',
            top: '4%',
            textStyle: {
                color: '#fff',
                fontSize: 20
            },
        },
        grid: {},
        xAxis: [{
            data: dateListDesc,
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
                },
                interval: 0,
                rotate: 25,
            },
        }
        ],
        yAxis: {
            splitLine: {show: false},
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
        },
        series: [{
            name: '前十',
            type: 'bar',
            barWidth: 25,
            showSymbol: false,
            itemStyle: {
                normal: {
                    color: '#2dbffa'
                }
            },
            data: valueListDesc,
        }, {
            name: '后十',
            type: 'bar',
            barWidth: 25,
            itemStyle: {
                normal: {
                    color: '#C0C255'
                }
            },
            showSymbol: false,
            data: valueListAsc,
        }

        ]
    }
}

//openData 八种主题
//用于openData 弹出框主题的饼图，themeData 为 对象数组
function themeImg(themeData) {
    return {
        title: {
            text: '8种',//中间显示的数据
            subtext: '主题',
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: "#fff",
            },
            subtextStyle: {
                fontWeight: 'normal',
                fontSize: 12,
                color: '#fff'
            }
        },
        series: [{
            name: '主题占比',
            type: 'pie',
            radius: ['40%', '55%'],
            color: ['#F6496A', '#0DC6C9', '#4DE0FC', '#FECF4E', '#01949b', '#f17677', '#D3543D', '#1393EE'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%',

                },


            },

            data: themeData
        }]
    };
}

function MarkLineImg(dataX, deptValue, cityValue, currentX, currentDeptY, currentCityY) {
    return {
        tooltip: {
            trigger: 'axis',
            textStyle: {
                align: 'center',
                fontSize: 24
            },
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 10,
        },
        legend: {
            data: ['省直', '地市'],
            icon: 'rect',
            textStyle: {
                color: '#fff'
            }
        },
        title: {
            text: 'Gradient along the y axis',
            left: '2%',
            top: '4%',
            textStyle: {
                color: '#fff',
                fontSize: 16
            },
        },
        grid: {
            left: 50,
            bottom: 30
        },
        xAxis: [
            {
                type: 'category',
                data: dataX,
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
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#fff',//左边线的颜色
                        width: '1'//坐标线的宽度
                    },
                },
                splitLine: {
                    show: false,
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
                name: '省直',
                type: 'line',
                smooth: true,
                itemStyle: {normal: {color: '#ff9933'}},
                data: deptValue,
                markPoint: {
                    color: 'blue',
                    data: [
                        {
                            name: '省直',
                            coord: [currentX, currentDeptY]
                        }
                    ]
                },
            },
            {
                name: '地市',
                type: 'line',
                smooth: true,
                itemStyle: {normal: {color: '#74C1CA'}},
                data: cityValue,
                markPoint: {
                    color: 'blue',
                    data: [
                        {
                            name: '地市',
                            coord: [currentX, currentCityY]
                        }
                    ]
                },
            }
        ]
    }
}













$(function () {
    setInterval(function () {
        var myDate = new Date();
        var year = myDate.getFullYear();
        var month = myDate.getMonth() + 1;
        var day = myDate.getDate()
        var time = myDate.toLocaleTimeString();
        var week = myDate.getDay();
        switch (week) {
            case 1:
                week = "星期一";
                break;
            case 2:
                week = "星期二";
                break;
            case 3:
                week = "星期三";
                break;
            case 4:
                week = "星期四";
                break;
            case 5:
                week = "星期五";
                break;
            case 6:
                week = "星期六";
                break;
            case 0:
                week = "星期日";
                break;
        }
        var date = year + " 年 " + month + " 月 " + day + " 日 ";
        var html = date + " &nbsp;&nbsp;" + week + " &nbsp;&nbsp;&nbsp;&nbsp;" + time;
        $(".timer").html(html);
    }, 1000);
    //索引情况
    //智能问答
    var dateIndex = [];
    var dateValue = [];
    var askNum = [];
    pvamount = [];
    for (var i = 0; i < queryByDayLog.length; i++) {
        dateIndex.push(queryByDayLog[i].askdate.substring(5));
        dateValue.push(queryByDayLog[i].creatindex);
        askNum.push(queryByDayLog[i].smartaskamount);
        pvamount.push(queryByDayLog[i].pvamount);
    }
    ;
    var max = queryByDayLog[0].creatIndex;
    var pvmax = queryByDayLog[0].pvamount;
    for (var i = 0; i < queryByDayLog.length - 1; i++) {
        max = max < queryByDayLog[i + 1].creatIndex ? queryByDayLog[i + 1].creatIndex : max;
        pvmax = pvmax < queryByDayLog[i + 1].pvamount ? queryByDayLog[i + 1].pvamount : pvmax
    }
    var maxArr = [];
    var pvmaxArr = [];
    for (var i = 0; i < queryByDayLog.length; i++) {
        maxArr.push(max + 500);
        pvmaxArr.push(pvmax + 500);
    }


    var user_login = echarts.init(document.getElementById("user_login"));
    var option = {
        tooltip: {
            trigger: 'item'
        },
        grid: {
            top: 50,
            left: 50,
            right: 20,
            bottom: 50,
        },
        xAxis: {
            type: 'category',
            position: 'bottom',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#4e88ff',
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4e88ff',
                fontSize: 12
            },
            data: dateIndex,
        },
        yAxis: {
            nameTextStyle: {
                color: '#9faddd'
            },
            axisLine: {
                show: true,
                lineStyle: {
                    opacity: .5,
                    color: '#4e88ff',
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                color: '#4e88ff',
                fontSize: 12

            }
        },
        series: [{
            zlevel: 2,
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: true,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255,246,11,.5)'
                    }, {
                        offset: 1,
                        color: 'rgba(255,255,255, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(232,239,71)',
                    borderColor: 'rgba(255,246,11,0.2)',
                    borderWidth: 1

                }
            },
            data: pvamount
        }, {
            zlevel: 1,
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: '#0A215A',
                    opacity: .6
                }
            },
            barWidth: '50%',
            barGap: '-100%',
            data: pvmaxArr,
        }],
    };
    user_login.setOption(option);

    var index_position = echarts.init(document.getElementById("index_position"));
    var option = {
        tooltip: {
            trigger: 'item'
        },
        grid: {
            left: 50,
            right: 20,
            bottom: 50,
            top: 50,
        },
        xAxis: {
            type: 'category',
            position: 'bottom',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#4e88ff',
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4e88ff',
                fontSize: 12
            },
            data: dateIndex,
        },
        yAxis: {
            splitLine: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#4e88ff',
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4e88ff',
                fontSize: 12
            },
        },
        series: [{
            zlevel: 2,
            name: '本周',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: true,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0,255,246,.5)'
                    }, {
                        offset: 1,
                        color: 'rgba(255,255,255, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(0,255,246)',
                    borderColor: 'rgba(0,255,246,0.2)',
                    borderWidth: 1

                }
            },
            data: dateValue,
        },
            {
                zlevel: 1,
                name: '占位背景',
                type: 'bar',
                itemStyle: {
                    normal: {
                        show: true,
                        color: '#0A215A',
                        opacity: .6
                    }
                },
                barWidth: '50%',
                barGap: '-100%',
                data: maxArr,
            }
        ],
    };
    index_position.setOption(option);

    var ask_pos = echarts.init(document.getElementById("ask_pos"));
    var option = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    opacity: 0
                }
            },
        },
        grid: {
            left: 50,
            right: 20,
            bottom: 50,
            top: 50,
        },
        xAxis: [{
            type: 'category',
            gridIndex: 0,
            data: dateIndex,
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#4e88ff',
                }
            },
            axisLabel: {
                color: '#4e88ff',
                fontSize: 12
            },
        }],
        yAxis: [{
            type: 'value',
            gridIndex: 0,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#4e88ff',
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4e88ff',
                fontSize: 12
            },
        },
            {
                type: 'value',
                gridIndex: 0,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['rgba(250,250,250,0)', 'rgba(250,250,250,0.05)']
                    }
                }
            }
        ],
        series: [{
            type: 'bar',
            barWidth: '30%',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00feff'
                        },
                            {
                                offset: 0.5,
                                color: '#027eff'
                            },
                            {
                                offset: 1,
                                color: '#0286ff'
                            }
                        ]
                    )
                }
            },
            data: askNum,
            zlevel: 11

        },

        ]
    };
    ask_pos.setOption(option);


    //为页面上元素赋值

    $(".sum_search_num").html(queryByDayLog[queryByDayLog.length - 1].totalpvamount);
    $(".active_num").html(queryByDayLog[queryByDayLog.length - 1].pvamount);
    //$(".index_num span").html(queryByDayLog[queryByDayLog.length-1].totalindex);
    $(".register_num ").html(queryByDayLog[queryByDayLog.length - 1].totalindex);
    var html = "";
    for (var i = 0; i < 7; i++) {
        html += '<li class="list' + (i + 1) + '"><span>' + (i + 1) + '</span> <i>' + queryByHotword[i].word + '</i> <b>' + queryByHotword[i].weight + '</b></li>'
    }

    $(".hot_list").append(html);

    var htmlA = "";
    for (var i = 0; i < queryByHotword.length; i++) {
        htmlA += '<a href="#">' + queryByHotword[i].word + '</a>'
    }
    $(".tag_cloud").html(htmlA);

    tagcloud({
        selector: ".tag_cloud",  //元素选择器
        fontsize: 16,       //基本字体大小, 单位px
        radius: 100,         //滚动半径, 单位px
        mspeed: "normal",   //滚动最大速度, 取值: slow, normal(默认), fast
        ispeed: "normal",   //滚动初速度, 取值: slow, normal(默认), fast
        direction: 135,     //初始滚动方向, 取值角度(顺时针360): 0对应top, 90对应left, 135对应right-bottom(默认)...
        keep: false          //鼠标移出组件后是否继续随鼠标滚动, 取值: false, true(默认) 对应 减速至初速度滚动, 随鼠标滚动
    });


});
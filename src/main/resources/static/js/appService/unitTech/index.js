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
        var html = date + " &nbsp;&nbsp;" + week + " &nbsp;&nbsp;" + time;
        $(".timer").html(html);
    }, 1000);

    var data_type_left = echarts.init(document.getElementById("data_type_left"));
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: ["#fff109", "#09ffd9", "#09c2ff"],

        calculable: true,
        series: [{
            name: '数据类型占比',
            type: 'pie',
            radius: ["20%", "80%"],
            center: ['50%', '50%'],
            roseType: 'angle',
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        position: 'inner',
                        textStyle: {
                            color: '#fff',
                        },
                        formatter: "{b} \n {d}%"
                    }
                }
            },
            data: [{
                value: queryByDisk[0].database_num,
                name: '数据库'
            },
                {
                    value: queryByDisk[0].video_num,
                    name: '视频'
                },
                {
                    value: queryByDisk[0].file_num,
                    name: '文件'
                },
            ]
        },

        ]
    };
    data_type_left.setOption(option);
    /*var user_visit = echarts.init(document.getElementById("user_visit"));
    var option = {
        tooltip: {
      trigger: 'item'
    },
    grid: {
      left: 55,
      right: 10,
      bottom: 20,
    },
    xAxis: {
      type: 'category',
      position: 'bottom',
      axisLine: {
        show:true,
        lineStyle: {
          color:'#062A78',
        }
      },
      axisTick:{
        show:false
      },
      axisLabel: {
        color: '#9faddd',
        fontSize: 11
      },
      data: city_name,
    },
    yAxis: {
      name: '频数',
      nameTextStyle:{
         color:'#9faddd'
      },
      axisLine: {
        show:true,
        lineStyle: {
          opacity: .5,
          color:'#062A78',
        }
      },
      axisTick:{
        show:false
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        color: '#9faddd',
        fontSize: 11

      }
    },
    series: [{
        zlevel:2,
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
        data: click_num
    }, {
        zlevel:1,
        type: 'bar',
        itemStyle: {
        normal: {
          show: true,
          color: '#0A215A',
          opacity:.6
        }
        },
        barWidth: '50%',
        barGap: '-100%',
        data: [ 300, 300, 300, 300, 300, 300, 300],
    }],
    }
    user_visit.setOption(option);*/
    var city_situ = echarts.init(document.getElementById("city_situ"));
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
    var option = {
        visualMap: {
            show: true,
            seriesIndex: [1],
            min: 0,
            max: 1000,
            top: "10%",
            itemHeight: 100,
            text: ['高', '低'],
            textStyle: {
                color: '#FFF'
            },
            inRange: {
                color: ['#0043CA', '#5FF8FF']
            }
        },
        geo: {
            map: '山东',
            roam: true,
            zoom: 1.1,
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
        series: [
            {
                type: 'map',
                coordinateSystem: 'geo',
                data: cityData,

            }, {
                type: 'map',
                geoIndex: 0,
                data: cityData,
            }]
    };
    city_situ.setOption(option);


    city_situ.on("click", function (params) {
        $(".city_detail .city_name").html(params.data.name);
    })

    var admin_num = echarts.init(document.getElementById("admin_num"));
    var xData = [];
    var yData = [];
    for (var i = 0; i < queryByDailyUserStat.length; i++) {
        xData.push((queryByDailyUserStat[i].c_date).substring(5));
        yData.push(queryByDailyUserStat[i].c_dailydata);
    }

    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    opacity: 0
                }
            },
            textStyle: {
                fontSize: 24
            }
        },
        grid: {
            left: 55,
            right: 20,
            bottom: 50,
            top: 20,
        },
        xAxis: [{
            type: 'category',
            gridIndex: 0,
            data: xData,
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: '#3D6DD4'
                }
            },
            axisLabel: {
                color: '#3D6DD4',
                fontSize: 14
            }
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
                lineStyle: {
                    color: '#3D6DD4'
                }
            },
            axisLabel: {
                color: '#3D6DD4',
                fontSize: 14
            }
        },
        ],
        series: [{
            type: 'bar',
            barWidth: '22%',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00B6FC'

                        },
                            {
                                offset: 1,
                                color: '#0038FE'
                            }
                        ]
                    )
                }
            },
            data: yData,
        },


        ]
    };
    admin_num.setOption(option);
});
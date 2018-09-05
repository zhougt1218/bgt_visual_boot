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
    var register_img = echarts.init(document.getElementById('register_img'));
    var dataStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            shadowBlur: 40,
            borderWidth: 10,
            shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
        }
    };
    var option = {
        title: {
            text: '60%', //中间显示的数据
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 24,
                color: "#fff",
            }
        },

        series: [{
            name: 'Line 2',
            type: 'pie',
            clockWise: false,
            radius: [50, 60],
            center: ['50%', '50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                value: isAuthUser[isAuthUser.length - 1],
                itemStyle: {
                    normal: {
                        color: '#fff600'
                    }
                }
            },
                {
                    value: unAuthUser[unAuthUser.length - 1],
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#0053FF',
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        },
                        emphasis: {
                            color: '#0053FF'
                        }
                    }
                },
            ]
        },]
    };
    var zb = (isAuthUser[isAuthUser.length - 1] / (unAuthUser[unAuthUser.length - 1] + isAuthUser[isAuthUser.length - 1]));
    option.title.text = (zb * 100).toFixed(1) + "%";
    register_img.setOption(option);
    /*企业用户*/
    var company_user = echarts.init(document.getElementById("company_user"));
    var company_option = {
        title: {
            text: '60%', //中间显示的数据
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 24,
                color: "#fff",
            }
        },

        series: [{
            name: 'Line 2',
            type: 'pie',
            clockWise: false,
            radius: [50, 60],
            center: ['50%', '50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                value: isAuthCorp[isAuthCorp.length - 1],
                itemStyle: {
                    normal: {
                        color: '#00fffc'
                    }
                }
            },
                {
                    value: unAuthCorp[unAuthCorp.length - 1],
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#0053FF',
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        },
                        emphasis: {
                            color: '#0053FF'
                        }
                    }
                },
            ]
        },]
    };
    var zb = (isAuthCorp[isAuthCorp.length - 1] / (unAuthCorp[unAuthCorp.length - 1] + isAuthCorp[isAuthCorp.length - 1]));
    company_option.title.text = (zb * 100).toFixed(1) + "%";
    company_user.setOption(company_option);
    /*var identify = echarts.init(document.getElementById('identify'));
    var identify_option = {
        title: {
            text: '4种', //中间显示的数据
            subtext: '认证方式',
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
            name: '认证方式占比',
            type: 'pie',
            radius: ['40%', '50%'],
            color: ['#FFF109', '#09FFD9', '#FF6E42', '#0060FF', '#09C2FF'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%',
                    color: '#fff',
                    fontSize: 16
                },

            },

            data: [
            {
                value: regWayWeChat,
                name: '微信'
            },
            {
                value: regSourcePC,
                name: '网站'
            },
            {
                value: regSourceMob,
                name: '手机'
            },

            {
                value: regWayAlipay,
                name: '支付宝'
            },

            ]
        }]
    };
    identify.setOption(identify_option);*/
    /*用户访问UV*/
    var uv_img = echarts.init(document.getElementById("uv_img"));
    var option = {
        tooltip: {
            trigger: 'item'
        },
        grid: {
            left: 50,
            right: 10,
            bottom: 30,
            top: 20,
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
                fontSize: 11
            },
            data: statsDate,
        },
        yAxis: {
            axisLine: {
                show: true,
                lineStyle: {
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
            data: uv
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
            data: uvMaxArr,
        }],
    };
    uv_img.setOption(option);
    /*PV*/
    var pv_img = echarts.init(document.getElementById("pv_img"));
    var option = {
        tooltip: {
            trigger: 'item'
        },
        grid: {
            left: 50,
            right: 10,
            bottom: 30,
            top: 20,
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
                fontSize: 11
            },
            data: statsDate,
        },
        yAxis: {
            axisLine: {
                show: true,
                lineStyle: {
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
                        color: 'rgba(15,237,165,.5)'
                    }, {
                        offset: 1,
                        color: 'rgba(15,237,165, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(15,237,165)',
                    borderColor: 'rgba(15,237,165,0.2)',
                    borderWidth: 1

                }
            },
            data: pv
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
            data: pvMaxArr,
        }],

    };
    pv_img.setOption(option);
    /*中国地图*/
    var myChart = echarts.init(document.getElementById('user_map'));

    var mapName = 'china'

    /*var data = [
        {name:"北京",value:177},
        {name:"天津",value:42},
        {name:"河北",value:102},
        {name:"山西",value:81},
        {name:"内蒙古",value:47},
        {name:"辽宁",value:67},
        {name:"吉林",value:82},
        {name:"黑龙江",value:66},
        {name:"上海",value:24},
        {name:"江苏",value:92},
        {name:"浙江",value:114},
        {name:"安徽",value:109},
        {name:"福建",value:116},
        {name:"江西",value:91},
        {name:"山东",value:119},
        {name:"河南",value:137},
        {name:"湖北",value:116},
        {name:"湖南",value:114},
        {name:"重庆",value:91},
        {name:"四川",value:125},
        {name:"贵州",value:62},
        {name:"云南",value:83},
        {name:"西藏",value:9},
        {name:"陕西",value:80},
        {name:"甘肃",value:56},
        {name:"青海",value:10},
        {name:"宁夏",value:18},
        {name:"新疆",value:67},
        {name:"广东",value:123},
        {name:"广西",value:59},
        {name:"海南",value:14},
        {name:"台湾",value:14},
        {name:'南海诸岛',value:12},
        ];*/
    function mapObj(name, value) {
        this.value = value;
        this.name = name;
    }

    var data = [];
    for (var i = 0; i < queryByProvince.length; i++) {
        var obj = new mapObj(queryByProvince[i].province, queryByProvince[i].auth_num);
        data.push(obj)
    }
    var geoCoordMap = {};

    /*获取地图数据*/
    var mapFeatures = echarts.getMap(mapName).geoJson.features;
    mapFeatures.forEach(function (v) {
        // 地区名称
        var name = v.properties.name;
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp;

    });


    var max = 480,
        min = 9; // todo
    var maxSize4Pin = 100,
        minSize4Pin = 20;

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                });
            }
        }
        return res;
    };
    var ChnOption = {
        tooltip: {
            formatter: function (param) {
                return param.name + " " + param.value[2];
            },
            textStyle: {
                align: 'center',
                fontSize: 24
            },
        },
        visualMap: {
            show: false,
            min: 0,
            max: 200,
            left: 'left',
            top: 'bottom',
            padding: [5, 0, 5, 100],
            textStyle: {
                color: '#fff'
            },
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [1],
            inRange: {
                // color: ['#3B5077', '#031525'] // 蓝黑
                // color: ['#ffc0cb', '#800080'] // 红紫
                // color: ['#3C3B3F', '#605C3C'] // 黑绿
                // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                // color: ['#23074d', '#cc5333'] // 紫红
                //color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#1488CC', '#2B32B2'] // 浅蓝
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                color: ['#00113e', '#00113e']

            },
            outOfRange: {                            //定义 在选中范围外 的视觉元素。
                color: ['#f00', 'rgba(3,4,5,0.4)', 'red'],
            },
        },
        geo: [{
            show: true,
            map: mapName,
            roam: false,
            zoom: 1.2,
            silent: true,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#1ca7ff',
                    borderColor: '#1ca7ff',
                    borderWidth: 1,
                },
                emphasis: {
                    show: false,
                    areaColor: '#2B91B7',
                }
            }
        }],
        series: [{
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbol: 'image://' + '' + 'img/unitIdentify/map_icon.png',
            symbolSize: [16, 16],
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#fff'
                }
            }
        }, {
            type: 'map',
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            animation: false,
            data: data
        },
            {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 5)),
                symbolSize: 20,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'yellow',
                        shadowBlur: 10,
                        shadowColor: 'yellow'
                    }
                },
                zlevel: 1
            },

        ]
    };
    var cityData = [];
    for (var i = 0; i < queryByRegion.length; i++) {
        var obj = new mapObj(queryByRegion[i].province, queryByRegion[i].auth_num);
        cityData.push(obj)
    }
    console.log(cityData);
    var maxCityNum = cityData[0].value;
    console.log(maxCityNum)
    /*var cityData = [
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
   ];*/
    var sdOption = {
        tooltip: {
            textStyle: {
                align: 'center',
                fontSize: 24
            },
        },
        visualMap: {
            show: false,
            seriesIndex: [1],
            min: 0,
            max: maxCityNum,
            right: '10%',
            bottom: '0%',
            text: ['高', '低'],
            textStyle: {
                color: '#FFF'
            },
            realtime: false,
            calculable: true,
            inRange: {

                //color:["#0C4A99","#0C4A99"]
                color: ["#0053FF", "#00FFFC"]
                //color: ['#006587', '#00FEFF']
            }
        },
        geo: {
            map: '山东',
            roam: true,
            zoom: 1.2,
            top: 100,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#FFF'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#1ca7ff',
                    borderWidth: 1,
                },
                emphasis: {
                    show: false,
                    areaColor: 'yellow',
                }
            },
            /*itemStyle:{
                normal:{
                    borderColor:'#1996EA',
                }
            }*/
        },
        series: [{
            type: 'map',
            coordinateSystem: 'geo',
            data: cityData,
            roam: false
        }, {
            type: 'map',
            geoIndex: 0,
            data: cityData,
        }]
    };


    myChart.setOption(ChnOption, true);
    myChart.on("click", function (params) {
        if (params.data.name == "山东") {
            myChart.setOption(sdOption, true);
        } else if (params.data.name.substring(2) == "市") {
            myChart.setOption(ChnOption, true);
        }
    });
});
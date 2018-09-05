$(function () {
    function sortSecond(a, b) {
        return b.value - a.value;
    }

    function mapObj(name, value) {
        this.value = value;
        this.name = name;
    }

    function fmoney(s, n) {
        n = n > 0 && n <= 20 ? n : 2;
        s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + '';
        var l = s.split('.') [0].split('').reverse(),
            r = s.split('.') [1];
        var t = '';
        for (var i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? ',' : '');
        }
        return t.split('').reverse();
    }

    //设置资源概览情况总量
    $(".cata_num").html(fmoney(queryByRegion[0].provide_cata_amount, 0));
    var data_num = (queryByRegion[0].provide_data_amount / 100000000).toFixed(2);
    $(".data_num").html(data_num + "亿");
    $(".api_num").html(fmoney(queryByRegion[0].provide_api_amount, 0));
    $(".file_num").html(fmoney(queryByRegion[0].provide_file_amount, 0));
    //设置数据目录省直和地市相应的数据
    var dept_sum_cata = 0;
    var dept_sum_data = 0;
    var dept_sum_api = 0;
    var dept_sum_file = 0;
    var city_sum_cata = 0;
    var city_sum_data = 0;
    var city_sum_api = 0;
    var city_sum_file = 0;

    for (var i = 0; i < queryByCity.length; i++) {
        city_sum_cata += queryByCity[i].provide_cata_amount;
        city_sum_data += queryByCity[i].provide_data_amount;
        city_sum_api += queryByCity[i].provide_api_amount;
        city_sum_file += queryByCity[i].provide_file_amount;
    }
    for (var i = 0; i < queryByOrg.length; i++) {
        dept_sum_cata += queryByOrg[i].provide_cata_amount;
        dept_sum_data += queryByOrg[i].provide_data_amount;
        dept_sum_api += queryByOrg[i].provide_api_amount;
        dept_sum_file += queryByOrg[i].provide_file_amount;
    }


    /*	$(".cata_dept_num").html(fmoney(dept_sum_cata,0));
        $(".data_dept_num").html((dept_sum_data/100000000).toFixed(2)+"亿");



        $(".api_dept_num").html(fmoney(dept_sum_api,0));
        $(".file_dept_num").html(fmoney(dept_sum_file,0));

        $(".cata_city_num").html(fmoney(city_sum_cata,0));
        $(".data_city_num").html((city_sum_data/100000000).toFixed(2)+"亿");
        $(".api_city_num").html(fmoney(city_sum_api,0));
        $(".file_city_num").html(fmoney(city_sum_file,0));
        */

    $(".api_num").html(fmoney(city_sum_api + dept_sum_api, 0));

    //设置中间目录累计访问，数据文件累计下载，服务累计调用的数量


    //设置网站运行情况数字
    $(".cata_visit_num").html(fmoney(queryByDaily[queryByDaily.length - 1].visit_count_sum, 0));
    $(".file_down_num").html(fmoney(queryByDaily[queryByDaily.length - 1].register_count_sum, 0));
    //网站运行情况图
    var websiteX = [];
    var websiteY = [];
    var legendName = "";
    var titleName = "";
    for (var i = 0; i < queryByVisitCount.length; i++) {
        websiteX.push(queryByVisitCount[i].update_time);
        websiteY.push(queryByVisitCount[i].visit_count_sum);
    }
    ;
    var legendName = "用户访问量";
    var titleName = "近期访问量";
    //左下角网站运行情况折线图
    var option = {
        legend: {
            data: [{name: legendName, icon: 'rect'}],
            textStyle: {
                color: '#fff',
            },
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
        grid: {
            left: '3%',
            right: '5%',
            top: '20%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: websiteX,
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
            name: titleName,
            type: 'value',
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
            splitLine: {show: false},
        },
        series: [
            {
                name: legendName,
                color: ['#337ae4'],
                type: 'line',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 5,//折线宽度
                        },
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 1,
                            color: '#f22be6' // 0% 处的颜色
                        }, {
                            offset: 0,
                            color: '#2ba9f2' // 100% 处的颜色
                        }], false),
                        opacity: 0.4
                    }
                },
                data: websiteY

            }

        ]
    }
    var website = echarts.init(document.getElementById("website"));
    website.setOption(option);

    //处理中间山东地图的数据
    var cityVisitNum = [];
    var cityDownNum = [];
    var cityApplyNum = [];
    var cityVisitNum1 = [];
    var cityDownNum1 = [];
    var cityApplyNum1 = [];
    var cityVisitCount = 0;
    var cityDownCount = 0;
    var cityApplyCount = 0;
    var deptVisitCount = 0;
    var deptDownCount = 0;
    var deptApplyCount = 0;
    var maxVisit = 0;
    var maxDown = 0;
    var maxApply = 0;


    for (var i = 0; i < queryBySumCity.length; i++) {
        var obj1 = [];
        var obj2 = [];
        var obj3 = [];
        obj1.push(queryBySumCity[i].org_name);
        obj1.push(queryBySumCity[i].cata_visit_num);
        obj2.push(queryBySumCity[i].org_name);
        obj2.push(queryBySumCity[i].total_apply_count);
        obj3.push(queryBySumCity[i].org_name);
        obj3.push(queryBySumCity[i].cata_download_num);
        /*var obj2 = new mapObj(queryBySumCity[i].org_name,queryBySumCity[i].total_apply_count);
        var obj3 = new mapObj(queryBySumCity[i].org_name,queryBySumCity[i].cata_download_num);*/

        cityVisitCount += queryBySumCity[i].cata_visit_num;
        cityDownCount += queryBySumCity[i].cata_download_num;
        cityApplyCount += queryBySumCity[i].total_apply_count;

        cityVisitNum.push(obj1);
        cityApplyNum.push(obj2);
        cityDownNum.push(obj3);
    }


    for (var i = 0; i < queryBySumCity.length; i++) {
        var obj4 = new mapObj(queryBySumCity[i].org_name, queryBySumCity[i].cata_visit_num);
        var obj5 = new mapObj(queryBySumCity[i].org_name, queryBySumCity[i].total_apply_count);
        var obj6 = new mapObj(queryBySumCity[i].org_name, queryBySumCity[i].cata_download_num);


        cityVisitNum1.push(obj4);
        cityApplyNum1.push(obj5);
        cityDownNum1.push(obj6);
    }

    maxVisit = cityVisitNum.sort(function (x, y) {
        return y[1] - x[1];
    });
    var maxVisitNum = maxVisit[0][1];
    maxDown = cityDownNum.sort(function (x, y) {
        return y[1] - x[1];
    });
    var maxDownNum = maxDown[0][1];
    maxApply = cityApplyNum.sort(function (x, y) {
        return y[1] - x[1];
    });
    ;
    var maxApplyNum = maxApply[0][1];
    deptVisitCount = queryByUse[0].cata_visit_num - cityVisitCount;
    deptDownCount = queryByUse[0].cata_download_num - cityDownCount;
    deptApplyCount = queryByUse[0].total_apply_count - cityApplyCount;


    /*
    var sd_map = echarts.init(document.getElementById("sd_map"));
    var option = mapImage(maxVisit,cityVisitNum);
    option.visualMap.inRange.color = ["#008EFF","#C0C255"];
    option.geo.roam = false;
    option.geo.zoom = 1.1;
    option.visualMap.bottom = "7%";
    sd_map.setOption(option,true);*/

    var myChart = echarts.init(document.getElementById("sd_map"));

    // 市区坐标
    var geoCoordMap = {
        "济南市": [117.000923, 36.675807],
        "青岛市": [120.355173, 36.082982],
        "淄博市": [118.047648, 36.814939],
        "枣庄市": [117.557964, 34.856424],
        "东营市": [118.66471, 37.434564],
        "烟台市": [121.391382, 37.539297],
        "潍坊市": [119.107078, 36.70925],
        "济宁市": [116.587245, 35.415393],
        "泰安市": [117.129063, 36.194968],
        "威海市": [122.116394, 37.509691],
        "日照市": [119.461208, 35.428588],
        "莱芜市": [117.677736, 36.214397],
        "临沂市": [118.326443, 35.065282],
        "德州市": [116.307428, 37.453968],
        "聊城市": [115.980367, 36.456013],
        "滨州市": [118.016974, 37.383542],
        "菏泽市": [115.469381, 35.246531]
    };
    var rawData = cityVisitNum;

    var option = {
        animation: false,
        // 地图背景颜色
        tooltip: {
            textStyle: {
                align: 'center',
                fontSize: 24
            },
        },

        geo: {
            map: '山东',
            roam: true,
            zoom: 1.1, // 地图初始大小
            top: 20,
            //center: [100, 40], // 初始中心位置
            label: {
                normal: {
                    show: true,
                    color: '#fff',
                },
                emphasis: {
                    show: true,
                    areaColor: '#eee'
                }
            },
            // 地区块儿颜色
            itemStyle: {
                normal: {
                    areaColor: '#0790F9',
                    borderColor: '#2B557C'
                },
                emphasis: {
                    areaColor: '#D0B91A'
                }
            }
        },
        series: []
    };


    function renderEachCity() {
        var option = {
            visualMap: {
                show: true,
                seriesIndex: [1],
                min: 0,
                max: maxVisit[0][1],
                right: '10%',
                bottom: '15%',
                text: ['高', '低'],
                textStyle: {
                    color: '#FFF'
                },
                realtime: false,
                calculable: true,
                inRange: {
                    color: ["#008EFF", "#C0C255"]
                    //color: ['#006587', '#00FEFF']
                }
            },
            xAxis: [],
            yAxis: [],
            grid: [],
            series: [
                {
                    type: 'map',
                    coordinateSystem: 'geo',
                    data: cityVisitNum1,
                    roam: false
                }, {
                    type: 'map',
                    geoIndex: 0,
                    data: cityVisitNum1,
                }
            ]
        };

        echarts.util.each(rawData, function (dataItem, idx) {
            var xData = [];
            var yData = [];
            var geoCoord = geoCoordMap[dataItem[0]];
            xData.push(dataItem[0]);
            yData.push(dataItem[1]);
            var coord = myChart.convertToPixel('geo', geoCoord);
            idx += '';
            option.xAxis.push({
                id: idx,
                gridId: idx,
                type: 'category',
                nameGap: 3,
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: '#666'
                    }
                },
                // data: xAxisCategory,
                data: xData,
                z: 100

            });
            option.yAxis.push({
                id: idx,
                gridId: idx,
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#1C70B6'
                    }
                },
                min: 1000,
                max: 90000,
            });
            option.grid.push({
                id: idx,
                width: 30,
                height: 40,
                left: coord[0] - 15,
                top: coord[1] - 15,
                z: 100
            });
            option.series.push({
                    id: idx,
                    type: 'bar',
                    xAxisId: idx,
                    yAxisId: idx,
                    barGap: 0,
                    barCategoryGap: 0,
                    data: yData,
                    barWidth: 10,
                    z: 100,
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                // 柱状图每根柱子颜色
                                var colorList = ['#F75D5D', '#59ED4F', '#4C91E7'];
                                return colorList[params.dataIndex];
                            }
                        }
                    }
                }
            );
        });
        myChart.setOption(option);
    }

    setTimeout(renderEachCity, 0);

    // 缩放和拖拽
    function throttle(fn, delay, debounce) {

        var currCall;
        var lastCall = 0;
        var lastExec = 0;
        var timer = null;
        var diff;
        var scope;
        var args;

        delay = delay || 0;

        function exec() {
            lastExec = (new Date()).getTime();
            timer = null;
            fn.apply(scope, args || []);
        }

        var cb = function () {
            currCall = (new Date()).getTime();
            scope = this;
            args = arguments;
            diff = currCall - (debounce ? lastCall : lastExec) - delay;

            clearTimeout(timer);

            if (debounce) {
                timer = setTimeout(exec, delay);
            } else {
                if (diff >= 0) {
                    exec();
                } else {
                    timer = setTimeout(exec, -diff);
                }
            }

            lastCall = currCall;
        };

        return cb;
    }

    var throttledRenderEachCity = throttle(renderEachCity, 0);
    myChart.on('geoRoam', throttledRenderEachCity);
    myChart.setOption(option);


    //处理下部省直信息，省直滚动
    var nameList = [];
    var visitList = [];
    var downList = [];
    var applyList = [];
    var compare = function (obj1, obj2) {
        var val1 = obj1.cata_visit_num;
        var val2 = obj2.cata_visit_num;
        if (val1 < val2) {
            return 1;
        } else if (val1 > val2) {
            return -1;
        } else {
            return 0;
        }
    }
    queryBySumDept = queryBySumDept.sort(compare);
    for (var i = 0; i < queryBySumDept.length; i++) {
        nameList.push(queryBySumDept[i].org_name_short);
        visitList.push(queryBySumDept[i].cata_visit_num);
        downList.push(queryBySumDept[i].cata_download_num);
        applyList.push(queryBySumDept[i].total_apply_count);
    }
    var dataNameDesc = nameList.slice(0, 10);
    var dataNameAsc = nameList.slice(nameList.length - 10);
    var dataValueDesc = visitList.slice(0, 10);
    var dataValueAsc = visitList.slice(visitList.length - 10);
    var myCharts = echarts.init(document.getElementById('dept_img'));
    var option = actLineDouble(dataNameDesc, dataValueDesc, dataValueAsc);
    option.title.text = "省直目录访问量\v" + deptVisitCount;
    myCharts.setOption(option);
    myCharts.on('legendselectchanged', function (obj) {
        var name = obj.name;
        var option = myCharts.getOption();
        if (name == '前十') {
            option.xAxis[0].data = dataNameDesc;
        } else if (name == '后十') {
            option.xAxis[0].data = dataNameAsc;
        }
        myCharts.setOption(option, true);
    });
    $(".dept_count").html("地市目录访问量&nbsp;" + cityVisitCount);
    //设置右部当日情况
    $(".day_cata").html(queryByUseDay[queryByUseDay.length - 1].cata_visit_num);
    $(".day_down").html(queryByUseDay[queryByUseDay.length - 1].cata_download_num);
    $(".day_service").html(queryByUseDay[queryByUseDay.length - 1].total_apply_count);

    //为折线图配置数据

    var lineX = [];
    var lineCata = [];
    var lineDown = [];
    var lineService = [];
    for (var i = 0; i < queryByUseDay.length; i++) {
        lineX.push(queryByUseDay[i].update_time);
        lineCata.push(queryByUseDay[i].cata_visit_num);
        lineDown.push(queryByUseDay[i].cata_download_num);
        if (queryByUseDay[i].total_apply_count >= 0) {
            lineService.push(queryByUseDay[i].total_apply_count);
        }
        if (queryByUseDay[i].total_apply_count < 0) {
            lineService.push(0);
        }
    }
    var line_option = {
        color: ['#D53A35', '#E98F6F', '#6AB0B8'],
        tooltip: {
            trigger: 'axis',
            textStyle: {
                align: 'center',
                fontSize: 22
            },
            padding: 10,
        },
        legend: {
            data: [{name: '目录访问', icon: 'rect'}, {name: '数据文件下载', icon: 'rect'}, {name: '服务调用', icon: 'rect'}],
            textStyle: {
                color: '#fff',
            },
            selected: {
                '目录访问': true,
                '数据文件下载': false,
                '服务调用': false,
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            name: '日期',
            boundaryGap: false,
            data: lineX,
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
            type: 'value',
            name: '数量(次)',
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
            },
            splitLine: {
                show: false
            }
        },
        series: [{
            name: '目录访问',
            type: 'line',
            data: lineCata,
            lineStyle: {
                normal: {
                    width: 5
                }
            }
        },
            {
                name: '数据文件下载',
                type: 'line',
                data: lineDown,
                lineStyle: {
                    normal: {
                        width: 5
                    }
                }
            },
            {
                name: '服务调用',
                type: 'line',
                data: lineService,
                lineStyle: {
                    normal: {
                        width: 5
                    }
                }
            },

        ]
    }
    var day_line = echarts.init(document.getElementById('day_line'));
    day_line.setOption(line_option);
    //设置标志用来控制显示第几个legend
    var flag = 1
    setInterval(function () {
        if (flag % 3 == 1) {
            line_option.legend.selected = {
                '目录访问': true,
                '数据文件下载': false,
                '服务调用': false,
            }
        }
        if (flag % 3 == 2) {
            line_option.legend.selected = {
                '目录访问': false,
                '数据文件下载': true,
                '服务调用': false,
            }
        }
        if (flag % 3 == 0) {
            line_option.legend.selected = {
                '目录访问': false,
                '数据文件下载': false,
                '服务调用': true,
            }
        }
        flag++;
        day_line.setOption(line_option);
    }, 5000);
    //设置热门目录访问
    var cata_html = "";
    var down_html = "";
    var api_html = "";
    for (var i = 0; i < queryByWeekCataView.length; i++) {
        cata_html += "<li>" + queryByWeekCataView[i].org_name + "<span class='rankNum'>" + queryByWeekCataView[i].cata_view_count + "次</span>" + "</li>";
    }
    for (var i = 0; i < queryByCataDownWeek.length; i++) {
        down_html += "<li><span class='cataTitle' title='" + queryByCataDownWeek[i].cata_title + "'>" + queryByCataDownWeek[i].cata_title + "</span><span class='rankNum'>" + queryByCataDownWeek[i].download_count + "次</span>" + "</li>";
    }
    for (var i = 0; i < queryByWeekCataAPI.length; i++) {
        api_html += "<li>" + queryByWeekCataAPI[i].org_name + "<span class='rankNum'>" + queryByWeekCataAPI[i].api_apply_count + "次</span>" + "</li>";
    }
    $(".cata_detail").html(cata_html);
    //周热门点击事件
    $(".botbox1 .col_libox").hide().first().show();
    $(".ctrlbox1 li").click(
        function () {
            $(this).addClass("active").siblings().removeClass("active");
            $(".botbox1 .col_libox").hide().eq($(this).index()).show();
            if ($(this).index() == 0) {
                $(".cata_detail").html(cata_html);
            }
            if ($(this).index() == 1) {
                $(".cata_detail").html(down_html);
            }
            if ($(this).index() == 2) {
                $(".cata_detail").html(api_html);
            }
        }
    )
    //标题点击事件
    $(".title_list1 .title_title ").click(function () {
        $(this).addClass("activeList");
        $(".title_list2 .title_title").removeClass("activeList");
        $(".title_list3 .title_title").removeClass("activeList");
        /*	var option = mapImage(maxVisit,cityVisitNum);
            option.visualMap.inRange.color = ["#008EFF","#C0C255"];
            option.geo.roam = false;
            option.geo.zoom = 1.1;
            option.visualMap.bottom = "7%";
            sd_map.setOption(option,true);*/

        var compare = function (obj1, obj2) {
            var val1 = obj1.cata_visit_num;
            var val2 = obj2.cata_visit_num;
            if (val1 < val2) {
                return 1;
            } else if (val1 > val2) {
                return -1;
            } else {
                return 0;
            }
        }
        queryBySumDept = queryBySumDept.sort(compare);
        visitList = [];
        downList = [];
        applyList = [];
        for (var i = 0; i < queryBySumDept.length; i++) {
            nameList.push(queryBySumDept[i].org_name_short);
            visitList.push(queryBySumDept[i].cata_visit_num);
            downList.push(queryBySumDept[i].cata_download_num);
            applyList.push(queryBySumDept[i].total_apply_count);
        }
        var dataNameDesc = nameList.slice(0, 10);
        var dataNameAsc = nameList.slice(nameList.length - 10);
        var dataValueDesc = visitList.slice(0, 10);
        var dataValueAsc = visitList.slice(visitList.length - 10);
        var myCharts = echarts.init(document.getElementById('dept_img'));
        var option = actLineDouble(dataNameDesc, dataValueDesc, dataValueAsc);
        option.title.text = "省直目录访问量\v" + deptVisitCount;
        myCharts.setOption(option, true);
        myCharts.on('legendselectchanged', function (obj) {
            var name = obj.name;
            var option = myCharts.getOption();
            if (name == '前十') {
                option.xAxis[0].data = dataNameDesc;
            } else if (name == '后十') {
                option.xAxis[0].data = dataNameAsc;
            }
            myCharts.setOption(option, true);
        });

        $(".dept_count").html("地市目录访问量&nbsp;" + cityVisitCount);


        var rawData = cityVisitNum;

        var option = {
            animation: false,
            // 地图背景颜色
            tooltip: {
                textStyle: {
                    align: 'center',
                    fontSize: 24
                },
            },

            geo: {
                map: '山东',
                roam: true,
                zoom: 1.1, // 地图初始大小
                top: 20,
                //center: [100, 40], // 初始中心位置
                label: {
                    normal: {
                        show: true,
                        color: '#fff',
                    },
                    emphasis: {
                        show: true,
                        areaColor: '#eee'
                    }
                },
                // 地区块儿颜色
                itemStyle: {
                    normal: {
                        areaColor: '#0790F9',
                        borderColor: '#2B557C'
                    },
                    emphasis: {
                        areaColor: '#D0B91A'
                    }
                }
            },
            series: []
        };


        function renderEachCity() {
            var option = {
                visualMap: {
                    show: true,
                    seriesIndex: [1],
                    min: 0,
                    max: maxVisit[0][1],
                    right: '10%',
                    bottom: '15%',
                    text: ['高', '低'],
                    textStyle: {
                        color: '#FFF'
                    },
                    realtime: false,
                    calculable: true,
                    inRange: {
                        color: ["#008EFF", "#C0C255"]
                        //color: ['#006587', '#00FEFF']
                    }
                },
                xAxis: [],
                yAxis: [],
                grid: [],
                series: [
                    {
                        type: 'map',
                        coordinateSystem: 'geo',
                        data: cityVisitNum1,
                        roam: false
                    }, {
                        type: 'map',
                        geoIndex: 0,
                        data: cityVisitNum1,
                    }
                ]
            };

            echarts.util.each(rawData, function (dataItem, idx) {
                var xData = [];
                var yData = [];
                var geoCoord = geoCoordMap[dataItem[0]];
                xData.push(dataItem[0]);
                yData.push(dataItem[1]);
                var coord = myChart.convertToPixel('geo', geoCoord);
                idx += '';
                option.xAxis.push({
                    id: idx,
                    gridId: idx,
                    type: 'category',
                    nameGap: 3,
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: '#666'
                        }
                    },
                    // data: xAxisCategory,
                    data: xData,
                    z: 100

                });
                option.yAxis.push({
                    id: idx,
                    gridId: idx,
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#1C70B6'
                        }
                    },
                    min: 1000,
                    max: 90000,
                });
                option.grid.push({
                    id: idx,
                    width: 30,
                    height: 40,
                    left: coord[0] - 15,
                    top: coord[1] - 15,
                    z: 100
                });
                option.series.push({
                        id: idx,
                        type: 'bar',
                        xAxisId: idx,
                        yAxisId: idx,
                        barGap: 0,
                        barCategoryGap: 0,
                        data: yData,
                        barWidth: 10,
                        z: 100,
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    // 柱状图每根柱子颜色
                                    var colorList = ['#F75D5D', '#59ED4F', '#4C91E7'];
                                    return colorList[params.dataIndex];
                                }
                            }
                        }
                    }
                );
            });
            myChart.setOption(option);
        }

        setTimeout(renderEachCity, 0);
        var throttledRenderEachCity = throttle(renderEachCity, 0);
        myChart.on('geoRoam', throttledRenderEachCity);
        myChart.setOption(option);


    });
    $(".title_list2 .title_title ").click(function () {
        $(this).addClass("activeList");
        $(".title_list1 .title_title").removeClass("activeList");
        $(".title_list3 .title_title").removeClass("activeList");
        /*var option = mapImage(maxDown,cityDownNum);
        option.visualMap.inRange.color = ["#008EFF","#C0C255"];
        option.geo.roam = false;
        option.geo.zoom = 1.1;
        option.visualMap.bottom = "7%";
        sd_map.setOption(option,true);*/


        var compare = function (obj1, obj2) {
            var val1 = obj1.cata_download_num;
            var val2 = obj2.cata_download_num;
            if (val1 < val2) {
                return 1;
            } else if (val1 > val2) {
                return -1;
            } else {
                return 0;
            }
        }
        queryBySumDept = queryBySumDept.sort(compare);
        visitList = [];
        downList = [];
        applyList = [];
        for (var i = 0; i < queryBySumDept.length; i++) {
            nameList.push(queryBySumDept[i].org_name_short);
            visitList.push(queryBySumDept[i].cata_visit_num);
            downList.push(queryBySumDept[i].cata_download_num);
            applyList.push(queryBySumDept[i].total_apply_count);
        }
        var dataNameDesc = nameList.slice(0, 10);
        var dataNameAsc = nameList.slice(nameList.length - 10);
        var dataValueDesc = downList.slice(0, 10);
        var dataValueAsc = downList.slice(downList.length - 10);
        var myCharts = echarts.init(document.getElementById('dept_img'));
        var option = actLineDouble(dataNameDesc, dataValueDesc, dataValueAsc);
        option.title.text = "省直数据文件下载量\v" + deptDownCount;
        myCharts.setOption(option, true);
        myCharts.on('legendselectchanged', function (obj) {
            var name = obj.name;
            var option = myCharts.getOption();
            if (name == '前十') {
                option.xAxis[0].data = dataNameDesc;
            } else if (name == '后十') {
                option.xAxis[0].data = dataNameAsc;
            }
            myCharts.setOption(option, true);
        });
        option.title.text = "省直数据文件下载量\v" + deptDownCount;
        $(".dept_count").html("地市数据文件下载量&nbsp;" + cityDownCount);


        var rawData = cityDownNum;

        var option = {
            animation: false,
            // 地图背景颜色
            tooltip: {
                textStyle: {
                    align: 'center',
                    fontSize: 24
                },
            },

            geo: {
                map: '山东',
                roam: true,
                zoom: 1.1, // 地图初始大小
                top: 20,
                //center: [100, 40], // 初始中心位置
                label: {
                    normal: {
                        show: true,
                        color: '#fff',
                    },
                    emphasis: {
                        show: true,
                        areaColor: '#eee'
                    }
                },
                // 地区块儿颜色
                itemStyle: {
                    normal: {
                        areaColor: '#0790F9',
                        borderColor: '#2B557C'
                    },
                    emphasis: {
                        areaColor: '#D0B91A'
                    }
                }
            },
            series: []
        };


        function renderEachCity() {
            var option = {
                visualMap: {
                    show: true,
                    seriesIndex: [1],
                    min: 0,
                    max: maxDown[0][1],
                    right: '10%',
                    bottom: '15%',
                    text: ['高', '低'],
                    textStyle: {
                        color: '#FFF'
                    },
                    realtime: false,
                    calculable: true,
                    inRange: {
                        color: ["#008EFF", "#C0C255"]
                        //color: ['#006587', '#00FEFF']
                    }
                },
                xAxis: [],
                yAxis: [],
                grid: [],
                series: [
                    {
                        type: 'map',
                        coordinateSystem: 'geo',
                        data: cityDownNum1,
                        roam: false
                    }, {
                        type: 'map',
                        geoIndex: 0,
                        data: cityDownNum1,
                    }
                ]
            };

            echarts.util.each(rawData, function (dataItem, idx) {
                var xData = [];
                var yData = [];
                var geoCoord = geoCoordMap[dataItem[0]];
                xData.push(dataItem[0]);
                yData.push(dataItem[1]);
                var coord = myChart.convertToPixel('geo', geoCoord);
                idx += '';
                option.xAxis.push({
                    id: idx,
                    gridId: idx,
                    type: 'category',
                    nameGap: 3,
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: '#666'
                        }
                    },
                    data: xData,
                    z: 100

                });
                option.yAxis.push({
                    id: idx,
                    gridId: idx,
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#1C70B6'
                        }
                    },
                    min: 1000,
                    max: 30000,
                });
                option.grid.push({
                    id: idx,
                    width: 30,
                    height: 40,
                    left: coord[0] - 15,
                    top: coord[1] - 15,
                    z: 100
                });
                option.series.push({
                        id: idx,
                        type: 'bar',
                        xAxisId: idx,
                        yAxisId: idx,
                        barGap: 0,
                        barCategoryGap: 0,
                        data: yData,
                        barWidth: 10,
                        z: 100,
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    // 柱状图每根柱子颜色
                                    var colorList = ['#F75D5D', '#59ED4F', '#4C91E7'];
                                    return colorList[params.dataIndex];
                                }
                            }
                        }
                    }
                );
            });
            myChart.setOption(option);
        }

        setTimeout(renderEachCity, 0);
        var throttledRenderEachCity = throttle(renderEachCity, 0);
        myChart.on('geoRoam', throttledRenderEachCity);
        myChart.setOption(option);


    });
    $(".title_list3 .title_title ").click(function () {
        $(this).addClass("activeList");
        $(".title_list2 .title_title").removeClass("activeList");
        $(".title_list1 .title_title").removeClass("activeList");

        var compare = function (obj1, obj2) {
            var val1 = obj1.total_apply_count;
            var val2 = obj2.total_apply_count;
            if (val1 < val2) {
                return 1;
            } else if (val1 > val2) {
                return -1;
            } else {
                return 0;
            }
        }
        queryBySumDept = queryBySumDept.sort(compare);
        visitList = [];
        downList = [];
        applyList = [];
        for (var i = 0; i < queryBySumDept.length; i++) {
            nameList.push(queryBySumDept[i].org_name_short);
            visitList.push(queryBySumDept[i].cata_visit_num);
            downList.push(queryBySumDept[i].cata_download_num);
            applyList.push(queryBySumDept[i].total_apply_count);
        }
        var dataNameDesc = nameList.slice(0, 10);
        var dataNameAsc = nameList.slice(nameList.length - 10);
        var dataValueDesc = applyList.slice(0, 10);
        var dataValueAsc = applyList.slice(applyList.length - 10);
        var myCharts = echarts.init(document.getElementById('dept_img'));
        var option = actLineDouble(dataNameDesc, dataValueDesc, dataValueAsc);
        option.title.text = "省直服务调用量\v" + deptApplyCount;
        option.visualMap.color = ['#2dbffa'];
        myCharts.setOption(option, true);
        myCharts.on('legendselectchanged', function (obj) {
            var name = obj.name;
            var option = myCharts.getOption();
            if (name == '前十') {
                option.xAxis[0].data = dataNameDesc;
            } else if (name == '后十') {
                option.xAxis[0].data = dataNameAsc;
            }
            myCharts.setOption(option, true);
        });
        $(".dept_count").html("地市服务调用量&nbsp;" + cityApplyCount);
        var rawData = cityApplyNum;

        var option = {
            animation: false,
            // 地图背景颜色
            tooltip: {
                textStyle: {
                    align: 'center',
                    fontSize: 24
                },
            },
            geo: {
                map: '山东',
                roam: true,
                zoom: 1.1, // 地图初始大小
                top: 20,
                //center: [100, 40], // 初始中心位置
                label: {
                    normal: {
                        show: true,
                        color: '#fff',
                    },
                    emphasis: {
                        show: true,
                        areaColor: '#eee'
                    }
                },
                // 地区块儿颜色
                itemStyle: {
                    normal: {
                        areaColor: '#0790F9',
                        borderColor: '#2B557C'
                    },
                    emphasis: {
                        areaColor: '#D0B91A'
                    }
                }
            },

            series: []
        };


        function renderEachCity() {
            var option = {
                visualMap: {
                    show: true,
                    seriesIndex: [1],
                    min: 0,
                    max: maxApply[0][1],
                    right: '10%',
                    bottom: '15%',
                    text: ['高', '低'],
                    textStyle: {
                        color: '#FFF'
                    },
                    realtime: false,
                    calculable: true,
                    inRange: {
                        color: ["#008EFF", "#C0C255"]
                        //color: ['#006587', '#00FEFF']
                    }
                },
                xAxis: [],
                yAxis: [],
                grid: [],
                series: [
                    {
                        type: 'map',
                        coordinateSystem: 'geo',
                        data: cityApplyNum1,
                        roam: false
                    }, {
                        type: 'map',
                        geoIndex: 0,
                        data: cityApplyNum1,
                    }
                ]
            };

            echarts.util.each(rawData, function (dataItem, idx) {
                var xData = [];
                var yData = [];
                var geoCoord = geoCoordMap[dataItem[0]];
                xData.push(dataItem[0]);
                yData.push(dataItem[1]);
                var coord = myChart.convertToPixel('geo', geoCoord);
                idx += '';
                option.xAxis.push({
                    id: idx,
                    gridId: idx,
                    type: 'category',
                    nameGap: 3,
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: '#666'
                        }
                    },
                    // data: xAxisCategory,
                    data: xData,
                    z: 100

                });
                option.yAxis.push({
                    id: idx,
                    gridId: idx,
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#1C70B6'
                        }
                    },
                    min: 0,
                    max: 100,
                });
                option.grid.push({
                    id: idx,
                    width: 30,
                    height: 40,
                    left: coord[0] - 15,
                    top: coord[1] - 15,
                    z: 100
                });
                option.series.push({
                        id: idx,
                        type: 'bar',
                        xAxisId: idx,
                        yAxisId: idx,
                        barGap: 0,
                        barCategoryGap: 0,
                        data: yData,
                        barWidth: 10,
                        z: 100,
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    // 柱状图每根柱子颜色
                                    var colorList = ['#F75D5D', '#59ED4F', '#4C91E7'];
                                    return colorList[params.dataIndex];
                                }
                            }
                        }
                    }
                );
            });
            myChart.setOption(option);
        }

        setTimeout(renderEachCity, 0);
        var throttledRenderEachCity = throttle(renderEachCity, 0);
        myChart.on('geoRoam', throttledRenderEachCity);
        myChart.setOption(option);

        /*var option = mapImage(maxApply,cityApplyNum);
        option.visualMap.inRange.color = ["#008EFF","#C0C255"];
        option.geo.roam = false;
        option.geo.zoom = 1.1;
        option.visualMap.bottom = "7%";
        sd_map.setOption(option,true);*/


    });

    //websocket
    //先检验能不能运行起来，能不能连上，自动推送数据，先不做数据显示
    //客户端就会与服务器进行连接
    var webSocket = new WebSocket("ws://59.206.218.25:8088/bgt/websocket");

    //这里只是调试用
    //连接失败时回调
    webSocket.onerror = function (event) {
        makeDataOnWeb("error");
    };

    //这里只是调试用
    //连接成功时回调，真的会执行括号中的代码！
    webSocket.onopen = function (event) {
        makeDataOnWeb("conn success");
    };

    webSocket.onmessage = function (event) {
        makeDataOnWeb(event.data);

    };

    //这里只是调试用
    webSocket.onclose = function (event) {
        makeDataOnWeb("conn close");
    };

    function makeDataOnWeb(data) {
        var a = JSON.parse(data);
        $("#inner_box table tbody ").html();
        if (data.indexOf("cata_visit_num") != -1) {
            var cata_right_num = a[a.length - 1].cata_visit_num;

            //文件下载
            var file_right_num = a[a.length - 1].cata_download_num;

            //服务调用
            var service_right_num = a[a.length - 1].total_apply_count;

            $(".day_cata").html(cata_right_num);
            $(".day_down").html(file_right_num);
            $(".day_service").html(service_right_num);


        } else {

            /*	for(var i=0;i<a.length;i++){
                    $("#inner_box table tbody ").append(
                            "<tr><td class='first_td'><span class='num num"+(i+1)+"'>"+(i+1)+"</span></td><td class='second_td'>"+a[i].org_name+"</td><td class='last_td' title="+a[i].cata_title+">"+a[i].cata_title+"</td></tr>"
                    )

             }*/
            $(".curr_cata").html("");
            for (var i = 0; i < a.length; i++) {
                $(".curr_cata").append(
                    "<li><span class='num num" + (i + 1) + "'>" + (i + 1) + "</span><i>" + a[i].org_name + "</i><b class='last_td' title=" + a[i].cata_title + ">" + a[i].cata_title + "</b></li>"
                )

            }
            //目录访问量


        }
    };
    //省级折线图样数据获取
    var dept = [];
    var cata_dept = [];
    var data_dept = [];
    var api_dept = [];
    var file_dept = [];


    var cata_dept_name = [];
    var data_dept_name = [];
    var api_dept_name = [];
    var file_dept_name = [];

    var cata_dept_num = [];
    var data_dept_num = [];
    var api_dept_num = [];
    var file_dept_num = [];

    var compareCata = function (obj1, obj2) {
        var val1 = obj1.provide_cata_amount;
        var val2 = obj2.provide_cata_amount;
        if (val1 < val2) {
            return 1;
        } else if (val1 > val2) {
            return -1;
        } else {
            return 0;
        }
    }
    var compareData = function (obj1, obj2) {
        var val1 = obj1.provide_data_amount;
        var val2 = obj2.provide_data_amount;
        if (val1 < val2) {
            return 1;
        } else if (val1 > val2) {
            return -1;
        } else {
            return 0;
        }
    }
    var compareApi = function (obj1, obj2) {
        var val1 = obj1.provide_api_amount;
        var val2 = obj2.provide_api_amount;
        if (val1 < val2) {
            return 1;
        } else if (val1 > val2) {
            return -1;
        } else {
            return 0;
        }
    }
    var compareFile = function (obj1, obj2) {
        var val1 = obj1.provide_file_amount;
        var val2 = obj2.provide_file_amount;
        if (val1 < val2) {
            return 1;
        } else if (val1 > val2) {
            return -1;
        } else {
            return 0;
        }
    }
    queryByOrg = queryByOrg.sort(compareCata);
    for (var i = 0; i < queryByOrg.length; i++) {
        cata_dept_name.push(queryByOrg[i].org_name);
        cata_dept_num.push(queryByOrg[i].provide_cata_amount);
    }
    var cata_dept_name_desc = cata_dept_name.slice(0, 10);
    var cata_dept_name_asc = cata_dept_name.slice(cata_dept_name.length - 10);
    var cata_dept_num_desc = cata_dept_num.slice(0, 10);
    var cata_dept_num_asc = cata_dept_num.slice(cata_dept_num.length - 10);


    queryByOrg = queryByOrg.sort(compareData);
    for (var i = 0; i < queryByOrg.length; i++) {
        data_dept_name.push(queryByOrg[i].org_name);
        data_dept_num.push(queryByOrg[i].provide_data_amount / 10000);
    }
    var data_dept_name_desc = data_dept_name.slice(0, 10);
    var data_dept_name_asc = data_dept_name.slice(data_dept_name.length - 10);
    var data_dept_num_desc = data_dept_num.slice(0, 10);
    var data_dept_num_asc = data_dept_num.slice(data_dept_num.length - 10);


    queryByOrg = queryByOrg.sort(compareApi);
    for (var i = 0; i < queryByOrg.length; i++) {
        api_dept_name.push(queryByOrg[i].org_name);
        api_dept_num.push(queryByOrg[i].provide_api_amount);
    }
    var api_dept_name_desc = api_dept_name.slice(0, 10);
    var api_dept_name_asc = api_dept_name.slice(api_dept_name.length - 10);
    var api_dept_num_desc = api_dept_num.slice(0, 10);
    var api_dept_num_asc = api_dept_num.slice(api_dept_num.length - 10);

    queryByOrg = queryByOrg.sort(compareFile);
    for (var i = 0; i < queryByOrg.length; i++) {
        file_dept_name.push(queryByOrg[i].org_name);
        file_dept_num.push(queryByOrg[i].provide_file_amount);
    }
    var file_dept_name_desc = file_dept_name.slice(0, 10);
    var file_dept_name_asc = file_dept_name.slice(file_dept_name.length - 10);
    var file_dept_num_desc = file_dept_num.slice(0, 10);
    var file_dept_num_asc = file_dept_num.slice(file_dept_num.length - 10);


    /*for(var i=0;i<queryByOrg.length;i++){
        dept.push(queryByOrg[i].org_name);
        cata_dept.push(queryByOrg[i].provide_cata_amount);
        data_dept.push((queryByOrg[i].provide_data_amount/10000));
        api_dept.push(queryByOrg[i].provide_api_amount);
        file_dept.push(queryByOrg[i].provide_file_amount);
    }*/


    //地市地图数据获取
    var cata_max = 0;
    var data_max = 0;
    var api_max = 0;
    var file_max = 0;

    var cata_city = [];
    var data_city = [];
    var api_city = [];
    var file_city = [];

    for (var i = 0; i < queryByCity.length; i++) {
        var obj1 = new mapObj(queryByCity[i].region_name, queryByCity[i].provide_cata_amount);
        var obj2 = new mapObj(queryByCity[i].region_name, queryByCity[i].provide_data_amount);
        var obj3 = new mapObj(queryByCity[i].region_name, queryByCity[i].provide_api_amount);
        var obj4 = new mapObj(queryByCity[i].region_name, queryByCity[i].provide_file_amount);
        cata_city.push(obj1);
        data_city.push(obj2);
        api_city.push(obj3);
        file_city.push(obj4);
    }

    cata_max = cata_city.sort(sortSecond)[0].value;
    data_max = data_city.sort(sortSecond)[0].value;
    api_max = api_city.sort(sortSecond)[0].value;
    file_max = file_city.sort(sortSecond)[0].value;


    //主题分析 所占饼图数据处理
    var cata_theme = [];
    var data_theme = [];
    var api_theme = [];
    var file_theme = [];
    for (var i = 0; i < queryByGroup.length; i++) {
        var obj1 = new mapObj(queryByGroup[i].group_name, queryByGroup[i].provide_cata_amount);
        var obj2 = new mapObj(queryByGroup[i].group_name, queryByGroup[i].provide_data_amount);
        var obj3 = new mapObj(queryByGroup[i].group_name, queryByGroup[i].provide_api_amount);
        var obj4 = new mapObj(queryByGroup[i].group_name, queryByGroup[i].provide_file_amount);
        cata_theme.push(obj1);
        data_theme.push(obj2);
        api_theme.push(obj3);
        file_theme.push(obj4);
    }

    //折线图数据获取

    var dataX = [];
    var data_dept_y = [];
    var api_dept_y = [];
    var cata_dept_y = [];
    var file_dept_y = [];

    var cata_city_y = [];
    var data_city_y = [];
    var api_city_y = [];
    var file_city_y = [];


    for (var i = 0; i < queryByRegionDept.length; i++) {
        dataX.push(queryByRegionDept[i].update_time + "月");
        data_dept_y.push((queryByRegionDept[i].provide_data_amount / 100000000).toFixed(2));
        cata_dept_y.push(queryByRegionDept[i].provide_cata_amount);
        api_dept_y.push(queryByRegionDept[i].provide_api_amount);
        file_dept_y.push(queryByRegionDept[i].provide_file_amount);
    }

    for (var i = 0; i < queryByRegionCity.length; i++) {
        data_city_y.push((queryByRegionCity[i].provide_data_amount / 100000000).toFixed(2));
        cata_city_y.push(queryByRegionCity[i].provide_cata_amount);
        api_city_y.push(queryByRegionCity[i].provide_api_amount);
        file_city_y.push(queryByRegionCity[i].provide_file_amount);
    }

    $(".cata_dept_num").html(fmoney(cata_dept_y[cata_dept_y.length - 1], 0));
    $(".data_dept_num").html(data_dept_y[data_dept_y.length - 1] + "亿");


    $(".api_dept_num").html(fmoney(api_dept_y[api_dept_y.length - 1], 0));
    $(".file_dept_num").html(fmoney(file_dept_y[file_dept_y.length - 1], 0));

    $(".api_num").html(fmoney((api_dept_y[api_dept_y.length - 1] + api_city_y[api_city_y.length - 1]), 0))


    $(".cata_city_num").html(fmoney(city_sum_cata, 0));
    $(".data_city_num").html(data_city_y[data_city_y.length - 1] + "亿");
    $(".api_city_num").html(fmoney(api_city_y[api_city_y.length - 1], 0));
    $(".file_city_num").html(fmoney(file_city_y[file_city_y.length - 1], 0));
    $("#cata").click(function () {
        $("#myModal").addClass("in");
        $("#myModal").css("display", "block");
        $("body").addClass("modal-open");
        $(".modal-backdrop").css("display", "block");

        $(".modal_title").html("数据目录详情");


        //设置第一块div的数字
        /*$(".modal_dept_num .modal_num").html(fmoney(dept_sum_cata,0));
        $(".modal_city_num .modal_num").html(fmoney(city_sum_cata,0));*/

        var img4 = echarts.init(document.getElementById('modal_img4'));
        var option = MarkLineImg(dataX, cata_dept_y, cata_city_y, dataX[dataX.length - 1], cata_dept_y[cata_dept_y.length - 1], cata_city_y[cata_city_y.length - 1])
        option.title.text = "数据目录";
        img4.setOption(option);

        $(".img4_num .dept").html(cata_dept_y[cata_dept_y.length - 1]);
        $(".img4_num .city").html(cata_city_y[cata_city_y.length - 1]);


        //设置第二块地图
        var img1 = echarts.init(document.getElementById('modal_img1'));
        var option = mapImage(cata_max, cata_city);
        option.visualMap.inRange.color = ["#008EFF", "#C0C255"];
        option.geo.roam = false;
        option.geo.zoom = 1.1;
        option.visualMap.itemHeight = 50;
        img1.setOption(option, true);


        //设置第三块折线图
        var img2 = echarts.init(document.getElementById('modal_img2'));
        /*var dataName = dept.slice(0,7);
        var dataValue = cata_dept.slice(0,7);*/


        var option = actLineDouble(cata_dept_name_desc, cata_dept_num_desc, cata_dept_num_asc);
        option.title.text = "省直目录量\v";
        option.series[0].barWidth = 15;
        option.series[1].barWidth = 15;
        option.grid.left = 50;
        img2.setOption(option, true);
        img2.on('legendselectchanged', function (obj) {
            var name = obj.name;
            var option = img2.getOption();
            if (name == '前十') {
                option.xAxis[0].data = cata_dept_name_desc;
            } else if (name == '后十') {
                option.xAxis[0].data = cata_dept_name_asc;
            }
            img2.setOption(option, true);
        });


        //设置第四块饼图
        var img3 = echarts.init(document.getElementById("modal_img3"));
        var option = themeImg(cata_theme);
        img3.setOption(option, true);

    });


    $("#data").click(function () {


        $("#myModal").addClass("in");
        $("#myModal").css("display", "block");
        $("body").addClass("modal-open");
        $(".modal-backdrop").css("display", "block");
        $(".modal_title").html("数据详情");


        var img4 = echarts.init(document.getElementById('modal_img4'));
        var option = MarkLineImg(dataX, data_dept_y, data_city_y, dataX[dataX.length - 1], data_dept_y[data_dept_y.length - 1], data_city_y[data_city_y.length - 1])
        option.title.text = "数据条数(亿)";
        img4.setOption(option);

        $(".img4_num .dept").html(data_dept_y[data_dept_y.length - 1]);
        $(".img4_num .city").html(data_city_y[data_city_y.length - 1]);


        //设置第一块div的数字
//		$(".modal_dept_num .modal_num").html((dept_sum_data/100000000).toFixed(2)+"亿");
//		$(".modal_city_num .modal_num").html((city_sum_data/100000000).toFixed(2)+"亿");

        //设置第二块地图
        var img1 = echarts.init(document.getElementById('modal_img1'));
        var option = mapImage(data_max, data_city);
        option.visualMap.inRange.color = ["#008EFF", "#C0C255"];
        option.geo.roam = false;
        option.geo.zoom = 1.1;
        option.visualMap.itemHeight = 50;
        img1.setOption(option, true);


        //设置第三块折线图
        var option = actLineDouble(data_dept_name_desc, data_dept_num_desc, data_dept_num_asc);
        option.title.text = "省直数据量(万)\v";
        option.series[0].barWidth = 15;
        option.series[1].barWidth = 15;
        option.grid.left = 50;
        img2.setOption(option);
        img2.on('legendselectchanged', function (obj) {
            var name = obj.name;
            var option = img2.getOption();
            if (name == '前十') {
                option.xAxis[0].data = data_dept_name_desc;
            } else if (name == '后十') {
                option.xAxis[0].data = data_dept_name_asc;
            }
            img2.setOption(option, true);
        });
        //设置第四块饼图
        var img3 = echarts.init(document.getElementById("modal_img3"));
        var option = themeImg(data_theme);
        img3.setOption(option, true);

    });

    $("#api").click(function () {
        $("#myModal").addClass("in");
        $("#myModal").css("display", "block");
        $("body").addClass("modal-open");
        $(".modal-backdrop").css("display", "block");
        $(".modal_title").html("API服务详情");


        var img4 = echarts.init(document.getElementById('modal_img4'));
        var option = MarkLineImg(dataX, api_dept_y, api_city_y, dataX[dataX.length - 1], api_dept_y[api_dept_y.length - 1], api_city_y[api_city_y.length - 1])
        option.title.text = "API服务";
        img4.setOption(option);

        $(".img4_num .dept").html(api_dept_y[api_dept_y.length - 1]);
        $(".img4_num .city").html(api_city_y[api_city_y.length - 1]);


        //设置第一块div的数字
//		$(".modal_dept_num .modal_num").html(fmoney(dept_sum_api,0));
//		$(".modal_city_num .modal_num").html(fmoney(city_sum_api,0));
//		
        //设置第二块地图
        var img1 = echarts.init(document.getElementById('modal_img1'));
        var option = mapImage(api_max, api_city);
        option.visualMap.inRange.color = ["#008EFF", "#C0C255"];
        option.geo.roam = false;
        option.geo.zoom = 1.1;
        option.visualMap.itemHeight = 50;
        img1.setOption(option, true);


        //设置第三块折线图
        var option = actLineDouble(api_dept_name_desc, api_dept_num_desc, api_dept_num_asc);
        option.title.text = "省直APi量\v";
        option.series[0].barWidth = 15;
        option.series[1].barWidth = 15;
        option.grid.left = 50;
        img2.setOption(option);
        img2.on('legendselectchanged', function (obj) {
            var name = obj.name;
            var option = img2.getOption();
            if (name == '前十') {
                option.xAxis[0].data = api_dept_name_desc;
            } else if (name == '后十') {
                option.xAxis[0].data = api_dept_name_asc;
            }
            img2.setOption(option, true);
        });
        //设置第四块饼图
        var img3 = echarts.init(document.getElementById("modal_img3"));
        var option = themeImg(api_theme);
        img3.setOption(option, true);

    });

    $("#file").click(function () {
        $("#myModal").addClass("in");
        $("#myModal").css("display", "block");
        $("body").addClass("modal-open");
        $(".modal-backdrop").css("display", "block");
        $(".modal_title").html("数据文件详情");


        var img4 = echarts.init(document.getElementById('modal_img4'));
        var option = MarkLineImg(dataX, file_dept_y, file_city_y, dataX[dataX.length - 1], file_dept_y[file_dept_y.length - 1], file_city_y[file_city_y.length - 1])
        option.title.text = "数据文件";
        img4.setOption(option);

        $(".img4_num .dept").html(file_dept_y[file_dept_y.length - 1]);
        $(".img4_num .city").html(file_city_y[file_city_y.length - 1]);

        //设置第一块div的数字
//		$(".modal_dept_num .modal_num").html(fmoney(dept_sum_file,0));
//		$(".modal_city_num .modal_num").html(fmoney(city_sum_file,0));
//		
        //设置第二块地图
        var img1 = echarts.init(document.getElementById('modal_img1'));
        var option = mapImage(file_max, file_city);
        option.visualMap.inRange.color = ["#008EFF", "#C0C255"];
        option.geo.roam = false;
        option.geo.zoom = 1.1;
        option.visualMap.itemHeight = 50;
        img1.setOption(option, true);


        //设置第三块折线图
        var option = actLineDouble(file_dept_name_desc, file_dept_num_desc, file_dept_num_asc);
        option.title.text = "省直数据文件量\v";
        option.series[0].barWidth = 15;
        option.series[1].barWidth = 15;
        option.grid.left = 50;
        img2.setOption(option);
        img2.on('legendselectchanged', function (obj) {
            var name = obj.name;
            var option = img2.getOption();
            if (name == '前十') {
                option.xAxis[0].data = file_dept_name_desc;
            } else if (name == '后十') {
                option.xAxis[0].data = file_dept_name_asc;
            }
            img2.setOption(option, true);
        });
        //设置第四块饼图
        var img3 = echarts.init(document.getElementById("modal_img3"));
        var option = themeImg(file_theme);
        img3.setOption(option, true);

    });

    var img1 = echarts.init(document.getElementById("modal_img1"));
    img1.on("click", function (handler, context) {

        if ($("#modal_img1").width() == 500) {
            $(".img4_num").hide();
            $(".modal_icon").hide();
            $("#modal_img2").hide();
            $("#modal_img3").hide();
            $("#modal_img1").css("width", "100%");
            $("#modal_img1").css("height", "84%");
            img1.resize();
        } else {
            $(".img4_num").show();
            $(".modal_icon").show();
            $("#modal_img2").show();
            $("#modal_img3").show();
            $("#modal_img1").css("width", "500px");
            $("#modal_img1").css("height", "280px");
            img1.resize();
        }
    });
    var img2 = echarts.init(document.getElementById("modal_img2"));
    img2.on("click", function (handler, context) {
        if ($("#modal_img2").width() == 470) {
            $(".img4_num").hide();
            $(".modal_icon").hide();
            $("#modal_img1").hide();
            $("#modal_img3").hide();
            $("#modal_img2").css("width", "100%");
            $("#modal_img2").css("height", "84%");
            img2.resize();
        } else {
            $(".img4_num").show();
            $("#modal_img2").css("width", "500px");
            $("#modal_img2").css("height", "280px");
            $(".modal_icon").show();
            $("#modal_img1").show();
            $("#modal_img3").show();
            img2.resize();
        }
    });
    var img3 = echarts.init(document.getElementById("modal_img3"));
    img3.on("click", function (handler, context) {
        if ($("#modal_img3").width() == 500) {
            $(".img4_num").hide();
            $(".modal_icon").hide();
            $("#modal_img1").hide();
            $("#modal_img2").hide();
            $("#modal_img3").css("width", "100%");
            $("#modal_img3").css("height", "84%");
            img3.resize();
        } else {
            $(".img4_num").show();
            $(".modal_icon").show();
            $("#modal_img1").show();
            $("#modal_img2").show();
            $("#modal_img3").css("width", "500px");
            $("#modal_img3").css("height", "280px");
            img3.resize();
        }
    });

    var img4 = echarts.init(document.getElementById("modal_img4"));
    img4.on("click", function (handler, context) {
        if ($("#modal_img4").width() == 470) {
            $(".img4_num").css("width", "1000px");
            $("#modal_img3").hide();
            $("#modal_img1").hide();
            $("#modal_img2").hide();
            $("#modal_img4").css("width", "100%");
            $("#modal_img4").css("height", "84%");
            img4.resize();
        } else {
            $("#modal_img3").show();
            $("#modal_img1").show();
            $("#modal_img2").show();
            $("#modal_img4").css("width", "500px");
            $("#modal_img4").css("height", "280px");
            $(".img4_num").css("width", "470px");
            img4.resize();
        }
    });


    $("#close").click(function () {
        $(".img4_num").css("width", "470px");
        $("#modal_img1").css("width", "500px");
        $("#modal_img1").css("height", "280px");
        $("#modal_img2").css("width", "500px");
        $("#modal_img2").css("height", "280px");
        $("#modal_img3").css("width", "500px");
        $("#modal_img3").css("height", "280px");
        $("#modal_img4").css("width", "500px");
        $("#modal_img4").css("height", "280px");
        $("#modal_img1").show();
        $("#modal_img2").show();
        $("#modal_img3").show();
        $("#modal_img4").show();
        $(".img4_num").show();
        img1.resize();
        img2.resize();
        img3.resize();
        img4.resize();
        $("#myModal").removeClass("in");
        $("#myModal").css("display", "none");
        $("body").removeClass("modal-open");
        $(".modal-backdrop").css("display", "none");
    });


});
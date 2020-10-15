fetch('https://edu.telking.com/api/?type=week',{method:'GET'})
.then(response => {return response.json()})
.then(response => {
	var week, week_x;	
	var week_arr = [];
	// console.log(response.data.series);
	week = response.data.series;
	week_x = response.data.xAxis;
	// console.log(week);
	for(var j = 0; j < week.length; j++){
		var dict = {'value':week[j], 'name':week_x[j]};
		week_arr.push(dict);
	}
	var myChart_pie = echarts.init(document.getElementById("Xpie"));
	var option_pie = {
		title:{
			text:'饼状图',
			left:'center',
			top:'47'
		},
		tooltip:{
			trigger:'item',
			formatter:'{a} <br/>{b} : {c} ({d}%)'
		},
		series:[{
			name:'',
			type: 'pie',
			center:['50%', '60%'],
			data:week_arr,
			emphasis:{
				itemStyle:{
					shadowBlur:7,
					shadowOffsetX:2,
					shadowColor:'rgb(0, 0, 0, 0.8)'
				}
			}
		}]
		
	};
	myChart_pie.setOption(option_pie);
})


fetch('https://edu.telking.com/api/?type=month')
.then(response => response.json())
.then(response => {
	month = response.data.series;
	month_x = response.data.xAxis;
	var myChart_line = echarts.init(document.getElementById("Xline"));
	var option_line = {
		title:{
			text: "曲线图",
			left: 'center',
			top: '20'
		},
		xAxis:{
			type: 'category',
			data: month_x,
		},
		yAxis:{
			type: 'value',
			axisLine:{
				show:false
			},
			axisTick:{
				show:false
			},
			axisLabel:{
				formatter:'{value}人'
			},
			splitLine:{
				lineStyle:{
					type:'dashed'
				}
			}
		},
		series:[{
			data:month,
			type:'line',
			smooth:0.3,
			lineStyle:{
				color:'#00aaff'
			},
			areaStyle:{
				color:"#e8f9fd"
			}
		}]
	};
	myChart_line.setOption(option_line)
	});


fetch('https://edu.telking.com/api/?type=week',{method:'GET'})
.then(response => {return response.json()})
.then(response => {
	var week, week_x;
	week = response.data.series;
	week_x = response.data.xAxis;
	var myChart_bar = echarts.init(document.getElementById("Xbar"));
	var option_bar = {
		color:['#00aaff'],
		title:{
			text:"柱状图",
			left:'center',
			top:'27'
		},
		tooltip:{
			trigger:'axis',
			axisPointer:{
				type:'shadow'
			}
		},
		grid:{
			left:'3%',
			right:'4%',
			bottom:'3%',
			containLabel:true
		},
		xAxis:[{
			type:'category',
			data:week_x,
			axisTick:{
				alignWithLabel:true
			}
		}],
		yAxis:[{
			type:'value',
			name:'商品数',
			axisLine:{
				show:false
			},
			axisTick:{
				show:false
			},
			splitLine:{
				lineStyle:{
					type:'dashed'
				}
			}
		}],
		series:[{
			name:'商品数',
			type:'bar',
			barWidth:'60%',
			data:week
		}]
	};
	myChart_bar.setOption(option_bar);
})

var huakuai = document.getElementById("huakuai");
// console.log(huakuai)
var li = document.getElementsByClassName("navRight-link");
// console.log(li)
var left = huakuai.style.left;
for(var i = 0; i < li.length; i++){
	li[i].index = i;
}
for(var i = 0; i < li.length; i++){
	li[i].onmouseenter = function(){
		huakuai.style.left = 130 + 100 * this.index + "px";
	}
	li[i].onmouseleave = function(){
		huakuai.style.left = left;
	}
	li[i].onmouseup = function(){
		left = huakuai.style.left;
	}
}
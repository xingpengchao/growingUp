<!-- 高清 -->
<template>
  <div>
    <div
      id="app"
      style="display: flex;flex-direction: row;flex-wrap: wrap;justify-content: flex-start;"
    >
      <div id="main" style="width: 600px;height: 400px;"></div>
      <div id="main1" style="width: 600px;height: 400px;"></div>
      <div id="main2" style="width: 1100px;height: 400px;"></div>
      <div id="qrcode">粤环码</div>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
export default {
  name: "Hd",
  mounted() {
    this.drawChart();
    this.drawChart1();
    this.drawChart2();
    this.qrcode();
  },
  methods: {
    qrcode() {
      const qrcode = new QRCode("qrcode", {
        width: 132,
        height: 132,
        text: "https://www.baidu.com", // 二维码地址
        colorDark: "#000",
        colorLight: "#fff"
      });
      return qrcode;
    },
    // 柱状图
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "戒毒人员新增",
          link: "https://www.baidu.com/",
          target: "blank",
          left: 18,
          textStyle: {
            color: "rgba(105, 192, 255, 1)"
          }
        },
        tooltip: {
          trigger: "axis",
          showDelay: 20,
          hideDelay: 20,
          transitionDuration: 0.4,
          background: "rgba(0, 0, 0, 0.7)",
          textStyle: {
            align: "left"
          },
          formatter: function(params) {
            var result = "";
            params[0].marker =
              '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:rgba(105, 192, 255, 1);"></span>';
            params.forEach(function(item) {
              result +=
                item.marker +
                " " +
                item.seriesName +
                " : " +
                item.value +
                "%" +
                "</br>";
            });
            return params[0].axisValue + "年" + "</br>" + result;
          }
        },
        // 工具栏
        toolbox: {
          show: true,
          right: 17,
          feature: {
            mark: { show: true },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ["新增人数", "同比增长"],
          // right: 20,
          left: "center"
        },
        // X轴
        xAxis: {
          data: [2018, 2019, 2020]
        },
        // y轴
        yAxis: [
          {
            type: "value",
            name: "新增人数",
            min: 0,
            max: 2500,
            interval: 500,
            axisLabel: {
              formatter: "{value}"
            },
            splitline: {
              show: true
            }
          },
          {
            type: "value",
            name: "同比增长",
            min: -20,
            max: 30,
            interval: 10,
            axisLabel: {
              formatter: "{value} %"
            },
            splitline: {
              show: true
            }
          }
        ],
        series: [
          {
            name: "新增人数",
            type: "bar",
            barWidth: 64,
            data: [1300, 2100, 1600],
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "rgba(23, 144, 255, 1)" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(105, 192, 255, 1)" // 100% 处的颜色
                    }
                  ],
                  false
                )
              }
            }
          },
          {
            name: "同比增长",
            type: "line",
            yAxisIndex: 1,
            data: [-5, 15, 5],
            color: "#e6b700"
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    // 饼图
    drawChart1() {
      let myChart = this.$echarts.init(document.getElementById("main1"));
      // 绘制tooltip图表
      const drawIcon = index => {
        const color = [
          "rgba(0, 80, 179, 1)",
          "rgba(23, 144, 255, 1)",
          "rgba(19, 194, 194, 1)",
          "rgba(47, 84, 235, 1)",
          "rgba(0, 71, 79, 1)"
        ];
        return `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: ${color[index]};"></span>`;
      };
      let option = {
        title: {
          text: "警察民族",
          subtext: "纯属虚构",
          left: "center",
          textStyle: {
            color: "rgba(105, 192, 255, 1)"
          }
        },
        tooltip: {
          trigger: "item",
          showDelay: 20,
          hideDelay: 20,
          transitionDuration: 0.4,
          background: "rgba(0, 0, 0, 0.7)",
          textStyle: {
            align: "left"
          },
          formatter: function(params) {
            var result = "";
            result +=
              drawIcon(params.dataIndex) +
              params.name +
              "</br>" +
              "人数：" +
              params.value +
              "</br>" +
              "占比：" +
              params.percent +
              "%";
            return result;
          }
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["汉族", "壮族", "回族", "满族", "其他"],
          formatter: function(name) {
            let data = [
              { name: "汉族", value: 12000 },
              { name: "壮族", value: 2400 },
              { name: "回族", value: 3000 },
              { name: "满族", value: 1600 },
              { name: "其他", value: 1000 }
            ];
            let total = 0;
            let target;
            for (let i = 0; i < data.length; i++) {
              total += data[i].value;
              if (data[i].name === name) {
                target = data[i].value;
              }
            }
            return (
              name +
              " " +
              (target / total) * 100 +
              "%" +
              " " +
              " " +
              ";" +
              " " +
              target
            );
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            center: ["50%", "60%"],
            itemStyle: {
              normal: {
                label: {
                  textStyle: {
                    color: "black",
                    fontSize: 14,
                    fontWeight: "bolder"
                  }
                },
                labelLine: {
                  lineStyle: {
                    color: "black"
                  }
                }
              }
            },
            data: [
              {
                value: 12000,
                name: "汉族",
                itemStyle: {
                  normal: {
                    color: new this.$echarts.graphic.LinearGradient(
                      0,
                      1,
                      0,
                      0,
                      [
                        {
                          offset: 0,
                          color: "rgba(0, 80, 179, 1)" // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "rgba(9, 109, 217, 1)" // 100% 处的颜色
                        }
                      ],
                      false
                    )
                  }
                }
              },
              {
                value: 2400,
                name: "壮族",
                itemStyle: {
                  normal: {
                    color: new this.$echarts.graphic.LinearGradient(
                      0,
                      1,
                      0,
                      0,
                      [
                        {
                          offset: 0,
                          color: "rgba(23, 144, 255, 1)" // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "rgba(64, 169, 255, 1)" // 100% 处的颜色
                        }
                      ],
                      false
                    )
                  }
                }
              },
              {
                value: 3000,
                name: "回族",
                itemStyle: {
                  normal: {
                    color: new this.$echarts.graphic.LinearGradient(
                      0,
                      1,
                      0,
                      0,
                      [
                        {
                          offset: 0,
                          color: "rgba(19, 194, 194, 1)" // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "rgba(54, 207, 201, 1)" // 100% 处的颜色
                        }
                      ],
                      false
                    )
                  }
                }
              },
              {
                value: 1600,
                name: "满族",
                itemStyle: {
                  normal: {
                    color: new this.$echarts.graphic.LinearGradient(
                      0,
                      1,
                      0,
                      0,
                      [
                        {
                          offset: 0,
                          color: "rgba(47, 84, 235, 1)" // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "rgba(89, 126, 247, 1)" // 100% 处的颜色
                        }
                      ],
                      false
                    )
                  }
                }
              },
              {
                value: 1000,
                name: "其他",
                itemStyle: {
                  normal: {
                    color: new this.$echarts.graphic.LinearGradient(
                      0,
                      1,
                      0,
                      0,
                      [
                        {
                          offset: 0,
                          color: "rgba(0, 71, 79, 1)" // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "rgba(1, 109, 117, 1)" // 100% 处的颜色
                        }
                      ],
                      false
                    )
                  }
                }
              }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    drawChart2() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main2"));
      // 指定图表的配置项和数据
      const drawIcon = index => {
        const color = [
          "rgba(105, 192, 255, 1)",
          "rgba(250, 173, 20, 1)",
          "rgba(250, 84, 28, 1)"
        ];
        return `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: ${color[index]};"></span>`;
      };
      let option = {
        title: {
          text: "戒毒人员新增",
          link: "https://www.baidu.com/",
          target: "blank",
          left: 70,
          textStyle: {
            color: "rgba(105, 192, 255, 1)"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none"
          },
          showDelay: 20,
          hideDelay: 20,
          transitionDuration: 0.4,
          background: "rgba(0, 0, 0, 0.7)",
          textStyle: {
            align: "left"
          },
          formatter: function(params) {
            console.log(params);
            var result = "";
            params.forEach(function(item, index) {
              result +=
                drawIcon(index) +
                " " +
                item.seriesName +
                " : " +
                item.value +
                "</br>";
            });
            return params[0].axisValue + "年" + "</br>" + result;
          }
        },
        legend: {
          data: ["0-17岁", "17-35岁", "35-70岁"],
          right: 100
          // left: "right"
          // itemWidth: 10
        },
        // X轴
        xAxis: {
          data: [2018, 2019, 2020]
        },
        // y轴
        yAxis: [
          {
            type: "value",
            name: "人数",
            min: 0,
            max: 7500,
            interval: 1500,
            axisLabel: {
              formatter: "{value}"
            },
            splitline: {
              show: true
            }
          }
        ],
        series: [
          {
            name: "0-17岁",
            type: "bar",
            barWidth: 48,
            // barCategoryGap: "20%",
            data: [4200, 6200, 4500],
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "rgba(23, 144, 255, 1)" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(105, 192, 255, 1)" // 100% 处的颜色
                    }
                  ],
                  false
                )
              }
            },
            emphasis: {
              itemStyle: {
                color: "rgba(23, 144, 255)"
              }
            }
          },
          {
            name: "17-35岁",
            type: "bar",
            barWidth: 48,
            // barCategoryGap: "20%",
            data: [3000, 5500, 4200],
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "rgba(250, 173, 20, 1)" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(255, 192, 105, 1)" // 100% 处的颜色
                    }
                  ],
                  false
                )
              }
            },
            emphasis: {
              itemStyle: {
                color: "rgba(250, 173, 20)"
              }
            }
          },
          {
            name: "35-70岁",
            type: "bar",
            barWidth: 48,
            // barCategoryGap: "20%",
            data: [2600, 5000, 5700],
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "rgba(250, 84, 28, 1)" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(255, 156, 110, 1)" // 100% 处的颜色
                    }
                  ],
                  false
                )
              }
            },
            emphasis: {
              itemStyle: {
                color: "rgba(250, 84, 28)"
              }
            }
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
};
</script>

<style lang="less">
#app {
  background: #ffffff;
}
</style>

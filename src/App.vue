<template>
  <div class="container" id="app">
    <h1 class="text-center">
      <a href="#" target="_blank">
        Vue-AnyChart
        <p>the component of Vue 2+ for AnyChart</p>
      </a>
    </h1>
    <section class="chart-list">
      <section class="chart-container">
        <vue-anychart :options="lineOptions" ref="lineChart"></vue-anychart>
        <button class="btn btn-primary" @click="add(getRandomData())">Add Series</button>
        <button class="btn btn-danger" @click="remove" :disabled="lineSeriesCount == 0">Remove Series</button>
      </section>

      <section class="chart-container">
        <vue-anychart :options="pieOptions" ref="pieChart"></vue-anychart>
        <button class="btn btn-primary" @click.once="updatePieData" :disabled="pieDataIsModified == true">Update data
        </button>
      </section>

      <section class="chart-container">
        <vue-anychart :options="areaOptions" ref="areaChart"></vue-anychart>
        <button class="btn btn-primary" @click.once="modifiedXAxis" :disabled="xAxisIsModified == true">Modify xAxis
        </button>
      </section>

      <section class="chart-container">
        <vue-anychart :options="CombineOptions" ref="combineChart"></vue-anychart>
      </section>
    </section>

  </div>
</template>

<script>
  import VueAnychart from './components/VueAnychart'
  import * as data from './data/data'
  import Anychart from 'anychart'

  export default {
    name: 'App',
    components: {
      VueAnychart
    },
    data() {
      return {
        Anychart: Anychart,
        areaOptions: data.AreaData,
        pieOptions: data.PieData,
        lineOptions: data.LineData,
        CombineOptions: data.CombineData,
        lineSeriesCount: 0,
        xAxisIsModified: false,
        pieDataIsModified: false
      }
    },
    mounted() {
      this.lineSeriesCount = this.$refs.lineChart.chart.getSeriesCount()
    },
    methods: {
      remove() {
        this.$refs.lineChart.removeSeries()
        this.lineSeriesCount--
      },
      add(data) {
        this.$refs.lineChart.addSeries(data)
        this.lineSeriesCount++
      },
      removeAll() {
        this.$refs.lineChart.removeAllSeries()
        this.lineSeriesCount = 0
      },
      modifiedXAxis() {
        let xAxis = this.$refs.areaChart.chart.xAxis(0);
        xAxis.orientation('top');
        xAxis.labels().format(function () {
          return this.value.slice(0, 3)
        });

        this.xAxisIsModified = true;
      },
      updatePieData() {
        this.$refs.pieChart.chart.data([
          ["Product A", 4755],
          ["Product B", 5205],
          ["Product C", 1504]
        ]);

        this.pieDataIsModified = true;
      },
      getRandomData() {
        return [
          {"x": "January", "value": this.getRandomInt(1, 15) * 1000},
          {"x": "February", "value": this.getRandomInt(3, 18) * 1000},
          {"x": "March", "value": this.getRandomInt(2, 15) * 1000},
          {"x": "April", "value": this.getRandomInt(1, 18) * 1000},
          {"x": "May", "value": this.getRandomInt(3, 18) * 1000}
        ]
      },
      getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      }
    }
  };
</script>

<style lang="css">
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

  body {
    padding: 50px;
  }

  .chart {
    width: 100%;
    height: 400px;
    margin-bottom: 10px;
  }

  .chart-container {
    text-align: center;
    margin-top: 75px;
    margin-bottom: 15px;
  }

  .chart-list .chart-container:first-child {
    margin-top: 35px;
  }
</style>

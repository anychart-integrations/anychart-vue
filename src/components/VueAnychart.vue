<template>
  <div class="chart"></div>
</template>

<script>
/* eslint-disable */

  import Anychart from 'anychart'

  export default {
    props: ['options', 'Anychart'],
    name: 'VueAnychart',
    data() {
      return {
        chart: null
      }
    },
    mounted() {
      if (!this.chart && this.options) {
        this.init();
      }
    },
    methods: {
      removeSeries() {
        if (this.chart.getSeriesCount()) {
          this.chart.removeSeriesAt(0);
        }
      },
      removeAllSeries() {
        if (this.chart.getSeriesCount()) {
          this.chart.removeAllSeries();
        }
      },
      addSeries(data) {
        this.delegateMethod('addSeries', data);
      },
      delegateMethod(name, data) {
        if (!this.chart) {
          warn(`Cannot call [$name] before the chart is initialized. Set prop [options] first.`, this);
          return
        }

        return this.chart[name](data)
      },
      init() {
        if (!this.chart && this.options) {
          let _Anychart = this.Anychart || Anychart;
          this.chart = new _Anychart.fromJson(this.options);
          this.chart.container(this.$el)
            .draw();
        }
      }
    },
    watch: {
      options: function (options) {
        if (!this.chart && options) {
          this.init()
        } else {
          this.chart.dispose();
          this.chart = null;
          this.init();
        }
      }
    },
    beforeDestroy() {
      if (this.chart) {
        this.chart.dispose();
        this.chart = null;
      }
    }
  }
</script>

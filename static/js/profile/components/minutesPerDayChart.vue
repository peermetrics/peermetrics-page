<template>
  <div class="loader-container" v-if="data == null">
    <div class="loader"></div>
  </div>
  <div id="minutes-per-day-chart" class="chart" v-else></div>
</template>
<script>
export default {
  name: 'MinutesPerDayChart',
  mounted() {
    peermetrics.get(peermetrics.urls.apps).then(apps => {
      let durationArray = apps
        // extract the duration out of it
        .map(function(app) {
          return app.durations_days;
        })
        // make an object that has the number of seconds per day
        .reduce(function(acc, cur) {
          for (let key in cur) {
            if (key in acc) {
              acc[key] += cur[key];
            } else {
              acc[key] = cur[key];
            }
          }

          return acc;
        }, {});

      // turn the seconds into minutes
      let data = {};
      for (let key in durationArray) {
        data[moment(key).format('MM/DD')] = Math.floor(
          durationArray[key],
        );
      }

      this.data = data;

      // Wait to add div with id "minutes-per-day-chart" in DOM and after Highchart will render the chart
      setTimeout(() => {
         this.createChart()
      }, 0);
    });
  },
  data() {
    return {
      data: null,
    };
  },
  methods: {
    createChart() {
      if (this.data) {
        Highcharts.chart('minutes-per-day-chart', {
          credits: false,
          chart: {
            type: 'column',
          },
          title: false,
          xAxis: {
            categories: Object.keys(this.data),
            crosshair: true,
          },
          yAxis: {
            min: 0,
            title: {
              text: 'No. of minutes',
            },
            stackLabels: {
              enabled: true,
              style: {
                fontWeight: 'bold',
                color:
                  (Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color) ||
                  'gray',
              },
            },
          },

          tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}',
          },
          plotOptions: {
            column: {
              pointPadding: 0.2,
              borderWidth: 0,
              stacking: 'normal',
            },
          },
          series: [
            {
              name: 'Minutes',
              data: Object.values(this.data).map(seconds => Math.floor(seconds/60)),
              color: peermetrics.colors.info,
            },
          ],
        });
      }
    },
  },

};
</script>
<style>
#minutes-per-day-chart > div {
  flex: auto;
}
</style>

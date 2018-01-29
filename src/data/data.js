/* eslint-disable */

// pie chart data
export const PieData = {
  'chart': {
    'type': 'pie',
    'data': [
      ['Product A', 1222],
      ['Product B', 2431],
      ['Product C', 3624]
    ],
    'title': 'Create a Pie Chart'
  }
};

// line chart data
export const LineData = {
  'chart': {
    'type': 'line',
    'series': [{
      'data': [
        {'x': 'January', 'value': 10000},
        {'x': 'February', 'value': 12000},
        {'x': 'March', 'value': 18000},
        {'x': 'April', 'value': 11000},
        {'x': 'May', 'value': 9000}
      ]
    }],
    'title': 'Create a Line chart'
  }
};

// area chart data
export const AreaData = {
  'chart': {
    'type': 'area',
    'series': [{
      'data': [
        {'x': 'January', 'value': 10000},
        {'x': 'February', 'value': 12000},
        {'x': 'March', 'value': 18000},
        {'x': 'April', 'value': 11000},
        {'x': 'May', 'value': 9000}
      ]
    }],
    'title': 'Create a Area chart'
  }
};

export const CombineData = {
  'chart': {
    'title': 'Combination of Column, Spline-Area and Spline Chart',
    'animation': true,
    'tooltip': {'displayMode': 'union'},
    'interactivity': {'hoverMode': 'by-x'},
    'series': [{
      'seriesType': 'column',
      'name': 'Column',
      'data': [
        {'x': 'P1', 'value': 5854},
        {'x': 'P2', 'value': 4171},
        {'x': 'P3', 'value': 1375},
        {'x': 'P4', 'value': 1875},
        {'x': 'P5', 'value': 2246},
        {'x': 'P6', 'value': 2696},
        {'x': 'P7', 'value': 1287},
        {'x': 'P8', 'value': 2140},
        {'x': 'P9', 'value': 1603},
        {'x': 'P10', 'value': 1628}
      ]
    }, {
      'seriesType': 'spline-area',
      'name': 'Spline',
      'legendItem': {'enabled': true, 'iconType': 'square', 'iconStroke': 'none'},
      'data': [
        {'x': 'P1', 'value': 3242},
        {'x': 'P2', 'value': 3171},
        {'x': 'P3', 'value': 700},
        {'x': 'P4', 'value': 1287},
        {'x': 'P5', 'value': 1856},
        {'x': 'P6', 'value': 1126},
        {'x': 'P7', 'value': 987},
        {'x': 'P8', 'value': 1610},
        {'x': 'P9', 'value': 903},
        {'x': 'P10', 'value': 928}
      ]
    }, {
      'seriesType': 'spline',
      'name': 'Line',
      'normal': {'stroke': {'color': '#ef6c00', 'thickness': 2.5}},
      'data': [
        {'x': 'P1', 'value': 1740},
        {'x': 'P2', 'value': 1970},
        {'x': 'P3', 'value': 1550},
        {'x': 'P4', 'value': 1500},
        {'x': 'P5', 'value': 6600},
        {'x': 'P6', 'value': 8500},
        {'x': 'P7', 'value': 3700},
        {'x': 'P8', 'value': 1000},
        {'x': 'P9', 'value': 4400},
        {'x': 'P10', 'value': 3220}
      ]
    }],
    'type': 'column'
  }
};

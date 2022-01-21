google.charts.load("current", { packages: ["corechart"] });
google.charts.load("current", { packages: ["line"] });
google.charts.load("current", { packages: ["gauge"] });
google.charts.load("current", { packages: ["corechart"] });
google.charts.load("current", { packages: ["corechart"] });
google.charts.load("current", { packages: ["bar"] });

google.charts.setOnLoadCallback(draw);

function draw() {
  drawPie();
  drawDonut();
  drawLines();
  drawMedidores();
  drawLinesArea();
}
//----------------------------------------------------------
function drawPie() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ]);

  var options = {
    title: "My Daily Activities",
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
}
///----------------------------------------------------------------

function drawLines() {
  var data = new google.visualization.DataTable();
  data.addColumn("number", "Day");
  data.addColumn("number", "Guardians of the Galaxy");
  data.addColumn("number", "The Avengers");
  data.addColumn("number", "Transformers: Age of Extinction");

  data.addRows([
    [1, 37.8, 80.8, 41.8],
    [2, 30.9, 69.5, 32.4],
    [3, 25.4, 57, 25.7],
    [4, 11.7, 18.8, 10.5],
    [5, 11.9, 17.6, 10.4],
    [6, 8.8, 13.6, 7.7],
    [7, 7.6, 12.3, 9.6],
    [8, 12.3, 29.2, 10.6],
    [9, 16.9, 42.9, 14.8],
    [10, 12.8, 30.9, 11.6],
    [11, 5.3, 7.9, 4.7],
    [12, 6.6, 8.4, 5.2],
    [13, 4.8, 6.3, 3.6],
    [14, 4.2, 6.2, 3.4],
  ]);

  var options = {
    chart: {
      title: "Box Office Earnings in First Two Weeks of Opening",
      subtitle: "in millions of dollars (USD)",
    },
    width: 900,
    height: 500,
    axes: {
      x: {
        0: { side: "top" },
      },
    },
  };

  var chart = new google.charts.Line(document.getElementById("line_top_x"));

  chart.draw(data, google.charts.Line.convertOptions(options));
}

//-------------------------------------------------------------------------

function drawMedidores() {
  var data = google.visualization.arrayToDataTable([
    ["Label", "Value"],
    ["Memory", 80],
    ["CPU", 55],
    ["Network", 68],
  ]);

  var options = {
    width: 400,
    height: 120,
    redFrom: 90,
    redTo: 100,
    yellowFrom: 75,
    yellowTo: 90,
    minorTicks: 5,
  };

  var chart = new google.visualization.Gauge(
    document.getElementById("chart_medidores")
  );

  chart.draw(data, options);

  setInterval(function () {
    data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
    chart.draw(data, options);
  }, 13000);
  setInterval(function () {
    data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
    chart.draw(data, options);
  }, 5000);
  setInterval(function () {
    data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
    chart.draw(data, options);
  }, 26000);
}

//----------------------------------------------------------------------

function drawLinesArea() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ]);

  var options = {
    title: "Company Performance",
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
  };

  var chart = new google.visualization.AreaChart(
    document.getElementById("chart_areas")
  );
  chart.draw(data, options);
}
///-------------------------------------------
function drawDonut() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ]);

  var options = {
    title: "My Daily Activities",
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("donutchart")
  );
  chart.draw(data, options);
}
///--------
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
  var data = new google.visualization.arrayToDataTable([
    ["Opening Move", "Percentage"],
    ["King's pawn (e4)", 44],
    ["Queen's pawn (d4)", 31],
    ["Knight to King 3 (Nf3)", 12],
    ["Queen's bishop pawn (c4)", 10],
    ["Other", 3],
  ]);

  var options = {
    title: "Chess opening moves",
    width: 900,
    legend: { position: "none" },
    chart: {
      title: "Chess opening moves",
      subtitle: "popularity by percentage",
    },
    bars: "horizontal",
    axes: {
      x: {
        0: { side: "top", label: "Percentage" },
      },
    },
    bar: { groupWidth: "90%" },
  };

  var chart = new google.charts.Bar(document.getElementById("top_x_div"));
  chart.draw(data, options);
}

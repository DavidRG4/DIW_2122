google.charts.load("current", { packages: ["corechart"] });
google.charts.load("current", { packages: ["line"] });
google.charts.load("current", { packages: ["gauge"] });
google.charts.load("current", { packages: ["bar"] });

google.charts.setOnLoadCallback(draw);

function draw() {
  drawPie();
  drawDonut();
  drawLines();
  drawMedidores();
  drawStuff();
  drawLinesArea();
}
//----------------------------------------------------------
function drawPie() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["TV", 2],
    ["Mobil", 30],
    ["PC", 60],
    ["Micelanios", 8],
  ]);

  var options = {
    title: "Porcentaje de uso por elemento al dia",
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
  data.addColumn("number", "2019");
  data.addColumn("number", "2020");
  data.addColumn("number", "2021");

  data.addRows([
    [1, 2.5, 3.2, 4.5],
    [2, 2.6, 2.9, 4.4],
    [3, 2.4, 2.9, 4.6],
    [4, 1.9, 3, 4],
    [5, 2.3, 3.5, 4.9],
    [6, 3, 3.8, 3.6],
    [7, 2.9, 3.8, 3.9],
    [8, 3.2, 4, 4.3],
    [9, 3.3, 4.2, 4.7],
    [10, 2, 3.4, 5],
    [11, 2.1, 3.7, 4.8],
    [12, 3, 4.5, 5.1],
  ]);

  var options = {
    chart: {
      title: "Comparacion de GB gastados al mes en los ultimos años",
    },
    width: "80%",
    height: "100%",
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
    ["Year", "Ventas", "Gastos"],
    ["2018", 1000, 400],
    ["2019", 1170, 460],
    ["2020", 660, 1120],
    ["2021", 1030, 540],
  ]);

  var options = {
    title: "Desempeño de la compañía",
    hAxis: { title: "Años", titleTextStyle: { color: "#333" } },
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
    ["TV", 4],
    ["Mobil", 32],
    ["PC", 54],
    ["Micelanios", 10],
  ]);

  var options = {
    title: "Porcentaje de uso por elemento del mes pasado",
    pieHole: 0.3,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("donutchart")
  );
  chart.draw(data, options);
}
///--------
function drawStuff() {
  var data = new google.visualization.arrayToDataTable([
    ["Afiliados", "Porcentage"],
    ["Si afiliados", 80],
    ["No afiliados", 20],
  ]);

  var options = {
    title: "Afiliados",
    width: "100%",
    bars: "horizontal",
    axes: {
      x: {
        0: { side: "top", label: "Porcentage" },
      },
    },
    bar: { groupWidth: "80%" },
  };

  var chart = new google.charts.Bar(document.getElementById("top_x_div"));
  chart.draw(data, options);
}

var team = [];
var teamName = [];
var trueshoot = [];
d3.json("/TeamStats").then(function(data) {
      for (var i = 0; i < data.length; i++) {
        	team.push(data[i].Team);
			teamName.push(data[i].Name);
            trueshoot.push(data[i].TrueShootingPercentage);
            
            
       }

var trace1 = {
    x: team,
    y: trueshoot,
    name: teamName,
    marker: {color: 'rgb(55, 83, 109)'},
    type: 'bar'
  };
  
  
  
  var data = [trace1];
  
  var layout = {
    title: 'Team True Shooting % vs NBA League Average',
    xaxis: {tickfont: {
        size: 14,
        color: 'rgb(107, 107, 107)'
      }},
    yaxis: {
      title: 'Average over 82 game season',
      titlefont: {
        size: 16,
        color: 'rgb(107, 107, 107)'
      },
      tickfont: {
        size: 14,
        color: 'rgb(107, 107, 107)'
      }
    },
    legend: {
      x: 10.0,
      y: 1.0,
      bgcolor: 'rgba(255, 255, 255, 0)',
      bordercolor: 'rgba(255, 255, 255, 0)'
    },
    barmode: 'group',
    bargap: 0.20,
    bargroupgap: 0.1
  };
  
  Plotly.newPlot('myDiv_2', data, layout);
   });
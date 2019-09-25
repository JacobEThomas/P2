window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "Regular Season Team Records with Points Per Game"
        },
        axisX: {
            title:"Number of Losses"
        },
        axisY: {
            title:"Number of Wins"
        },
        legend:{
            horizontalAlign: "left"
        },
        data: [{
            type: "bubble",
            showInLegend: true,
            legendText: "Size of Bubble Represents Points Per Game",
            legendMarkerType: "circle",
            legendMarkerColor: "grey",
            toolTipContent: "<b>{name}</b><br/>Wins: {y} <br/> Losses: {x}<br/> Points Per game: {z}",
            dataPoints: [
                    { x: 22, y: 60, z: 118.1, name: "Milwaukee Bucks" },
                    { x: 24, y: 58, z: 114.4, name: "Toronto Raptors" },
                    { x: 25, y: 57, z: 117.7, name: "Golden State Warriors" },
                    { x: 28, y: 54, z: 110.7, name: "Denver Nuggets" },
                    { x: 29, y: 53, z: 113.9, name: "Houston Rockets" },
                    { x: 29, y: 53, z: 114.7, name: "Portland Trail Blazers" },
                    { x: 31, y: 51, z: 115.2, name: "Philadelphia 76ers" },
                    { x: 32, y: 50, z: 111.7, name: "Utah Jazz" },
                    { x: 33, y: 49, z: 112.4, name: "Boston Celtics" },
                    { x: 33, y: 49, z: 114.5, name: "Oklahoma City Tunder" },
                    { x: 34, y: 48, z: 108, name: "Indiana Pacers" },
                    { x: 34, y: 48, z: 111.7, name: "San Antonio Spurs" },
                    { x: 34, y: 48, z: 115.1, name: "LA Clippers" },
                    { x: 40, y: 42, z: 107.3, name: "Orlando Magic" },
                    { x: 40, y: 42, z: 112.2, name: "Brooklyn Nets" },
                    { x: 41, y: 41, z: 107, name: "Detroit Pistons" },
                    { x: 43, y: 39, z: 110.7, name: "Charlotte Hornets" },
                    { x: 43, y: 39, z: 114.2, name: "Sacramento Kings" },
                    { x: 43, y: 39, z: 105.7, name: "Miami Heat" },
                    { x: 45, y: 37, z: 111.8, name: "LA Lakers" },
                    { x: 46, y: 36, z: 112.5, name: "Minnesota Timberwolves" },
                    { x: 49, y: 33, z: 103.5, name: "Memphis Grizzlies" },
                    { x: 49, y: 33, z: 115.4, name: "New Orleans Pelicans" },
                    { x: 49, y: 33, z: 108.9, name: "Dallas Mavericks" },
                    { x: 50, y: 32, z: 114, name: "Washington Wizards" },
                    { x: 53, y: 29, z: 113.3, name: "Atlanta Hawks" },
                    { x: 60, y: 22, z: 104.9, name: "Chicago Bulls" },
                    { x: 63, y: 19, z: 104.5, name: "Cleveland Cavaliers" },
                    { x: 63, y: 19, z: 107.5, name: "Phoenix Suns" },
                    { x: 65, y: 17, z: 104.6, name: "New York Knicks" },
    
    
            ]
        }]
    });
    
        var chart2 = new CanvasJS.Chart("chartContainer2", {
            animationEnabled: true,
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            title:{
                text: "Offensive League Leaders - Points Per Game"
            },
            axisY: {
                title: "Points"
            },
            data: [{        
                type: "column",  
                showInLegend: false, 
                dataPoints: [      
                    { y: 36.1, label: "James Harden, HOU" },
                    { y: 28,  label: "Paul George, OKC" },
                    { y: 27.7,  label: "Giannis Antetokounmpo, MIL" },
                    { y: 27.5,  label: "Joel Embiid, PHI" },
                    { y: 27.3,  label: "Stephen Curry, GS" },
                ]
            }]
        });

        var chart3 = new CanvasJS.Chart("chartContainer3", {
            animationEnabled: true,
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            title:{
                text: "Offensive League Leaders - Assists Per Game"
            },
            axisY: {
                title: "Assists"
            },
            data: [{        
                type: "column",  
                showInLegend: false, 
                dataPoints: [      
                    { y: 10.7, label: "Russell Westbrook, OKC" },
                    { y: 8.7,  label: "Kyle Lowry, TOR" },
                    { y: 8.2,  label: "Chris Paul, HOU" },
                    { y: 8.1,  label: "Trae Young, ATL" },
                    { y: 7.7,  label: "Jrue Holiday, NO" },
                ]
            }]
        });

        var chart4 = new CanvasJS.Chart("chartContainer4", {
            animationEnabled: true,
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            title:{
                text: "Offensive League Leaders - 3-Pointers Per Game"
            },
            axisY: {
                title: "3-Pointers"
            },
            data: [{        
                type: "column",  
                showInLegend: false, 
                dataPoints: [      
                    { y: 5.1, label: "Stephen Curry, GSW" },
                    { y: 4.8,  label: "James Harden. HOU" },
                    { y: 3.8,  label: "Paul George, OKC" },
                    { y: 3.4,  label: "Buddy Hield, SAC " },
                    { y: 3.2,  label: "Eric Gordon, HOU" },
                ]
            }]
        });

        var chart5 = new CanvasJS.Chart("chartContainer5", {
            animationEnabled: true,
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            title:{
                text: "Defensive League Leaders - Rebounds Per Game"
            },
            axisY: {
                title: "Rebounds"
            },
            data: [{        
                type: "column",  
                showInLegend: false, 
                dataPoints: [      
                    { y: 5.1, label: "Andre Drummond, DET" },
                    { y: 4.8,  label: "Joel Embiid, PHI" },
                    { y: 3.8,  label: "DeAndre Jordan, DAL" },
                    { y: 3.4,  label: "Rudy Gobert, UT" },
                    { y: 3.2,  label: "Clint Capela, HOU" },
                ]
            }]
        });

        var chart6 = new CanvasJS.Chart("chartContainer6", {
            animationEnabled: true,
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            title:{
                text: "Defensive League Leaders - Steals Per Game"
            },
            axisY: {
                title: "Steals"
            },
            data: [{        
                type: "column",  
                showInLegend: false, 
                dataPoints: [      
                    { y: 2.21, label: "Paul George, OKC" },
                    { y: 2.03,  label: "James Harden, HOU" },
                    { y: 1.97,  label: "Chris Paul, HOU" },
                    { y: 1.95,  label: "Russell Westbrook, OKC" },
                    { y: 1.89,  label: "Kimmy Butler, PHI" },
                ]
            }]
        });

        var chart7 = new CanvasJS.Chart("chartContainer7", {
            animationEnabled: true,
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            title:{
                text: "Defensive League Leaders - Blocks Per Game"
            },
            axisY: {
                title: "Blocks"
            },
            data: [{        
                type: "column",  
                showInLegend: false, 
                dataPoints: [      
                    { y: 2.69, label: "Myles Turner, IND" },
                    { y: 2.44,  label: "Mitchell Robinson, NY" },
                    { y: 2.31,  label: "Rudy Gobert, UT" },
                    { y: 2.21,  label: "Brook Lopez, MIL" },
                    { y: 1.97,  label: "JaVale McGee, LAL" },
                ]
            }]
        });

        chart.render();
        chart2.render();
        chart3.render();
        chart4.render();
        chart5.render();
        chart6.render();
        chart7.render();
        }
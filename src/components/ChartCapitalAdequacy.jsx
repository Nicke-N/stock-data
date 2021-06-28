import React, { useEffect } from 'react'
import Chart from 'chart.js/auto'
import './Chart.css'

export default function ChartCapitalAdequacy(props) {

    useEffect(() => {
       
        ctx = document.getElementById('capitalAdequacyChart').getContext('2d');
        var data = {}
        data[props.data.title] = props.data.values

        var colors = ['206,191,26', '54,152,38', '17,119,141', '236,124,98', '206,26,140', '26,77,206'];
        var borderDash = [[0]]
        var chartData = {
            labels: props.data.keys,
            datasets: []
        }
        
        
        Object.keys(data).forEach(function(key) {
            var color = colors.shift();
            var dash = borderDash.shift();
            chartData.datasets.push({
                label: key,
                lineTension: 0,
                type: 'line',
                borderDash: dash,
                borderColor: "rgba(" + color + ",1)",
                borderWidth: 2,
                pointBackgroundColor: "rgba(" + color + ",1)",
                pointBorderColor: "#fff",
                pointBorderWidth: 1,
                pointRadius: 4,
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(" + color + ",1)",
                pointHoverBorderWidth: 1,
                data: data[key]
            });
        });
    
        // Chart.defaults.global.defaultFontColor = 'grey';
        // Chart.defaults.global.defaultFontFamily = "Tahoma";
        // Chart.defaults.global.defaultFontSize = 20 ;
        // Chart.defaults.global.defaultFontStyle = 'normal';
        
        var capitalAdequacyChart = new Chart(ctx, {
            type: 'line',
            data: chartData,
            defaultFontSize: 11,
            options: {
                responsive: true,
        
                title: {
                    display: true,
                    text: 'Trade history',
                    fontColor: "#444",
                    fontFamily: 'Tahoma',
                    padding: 0
                },
        
                legend: {
                    display: true,
                    labels: {
                        fontColor: 'grey',
                        usePointStyle: true
                    }
                },
                tooltips: {
                    mode: "index",
                    intersect: true,
                    position: 'nearest',
                    bodySpacing: 4
        
                }
            }
        });
  
    
}, [])

var ctx = document.getElementById('capitalAdequacyChart')

    return (
        <div>
             <div>
            <canvas id="capitalAdequacyChart" width="500px" height="300px"></canvas>
        </div>
        </div>
    )
}

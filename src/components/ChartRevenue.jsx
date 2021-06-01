import React, { useEffect } from 'react'
import Chart from 'chart.js/auto'
import './Chart.css'

export default function ChartRevenue(props) {
    
    useEffect(() => {
      
            ctx = document.getElementById('revenueChart').getContext('2d');
            var data = {}

            data[props.data.title] = props.data.values
    
            var colors = ['#0CEB00']
            var chartData = {
                labels: props.data.keys,
                datasets: []
            }
            
            Object.keys(data).forEach(function(key) {
                var color = colors.shift();
                chartData.datasets.push({
                    label: key,
                    lineTension: 0,
                    type: 'line',
                    borderColor: color,
                    borderWidth: 2,
                    pointBackgroundColor: color,
                    pointBorderColor: color,
                    pointBorderWidth: 1,
                    pointRadius: 4,
                    pointHoverBackgroundColor: color,
                    pointHoverBorderColor: color,
                    pointHoverBorderWidth: 1,
                    data: data[key]
                });
            });
            // Chart.defaults.global.defaultFontColor = 'grey';
            // Chart.defaults.global.defaultFontFamily = 'Tahoma';
            // Chart.defaults.global.defaultFontSize = 20 ;
            // Chart.defaults.global.defaultFontStyle = 'normal';
            
            var revenueChart = new Chart(ctx, {
                type: 'line',
                data: chartData,
                defaultFontSize: 11,
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    title: {
                        display: true,
                        fontColor: '#0CEB00',
                        fontFamily: 'Tahoma',
                        padding: 0
                    },
            
                    legend: {
                        display: true,
                        labels: {
                            fontColor: '#0CEB00',
                            usePointStyle: true
                        }
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: true,
                        position: 'nearest',
                        bodySpacing: 4
            
                    }
                }
            })
          
        
    }, [])

    var ctx = document.getElementById('revenueChart')
   
    
   
    
    return (
        <div>
            <canvas id='revenueChart'  width='500px' height='300px'></canvas>
        </div>
    )
}

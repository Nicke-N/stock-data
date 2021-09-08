import React, { useEffect, useState } from 'react'
import ChartJs from 'chart.js/auto'
import './Chart.css'

export default function Chart(props) {

    const [ chart, setChart ] = useState(null)
    var ctx, canvas

    useEffect(() => {
           
        ctx = document.getElementById(props.id).getContext('2d')
            
            var data = {}
            data[props.data.title] = props.data.values
    
            var colors = ['206,191,26'];
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
            console.log(ctx)
            canvas = new ChartJs(ctx, {
                type: 'line',
                data: chartData,
                defaultFontSize: 11,
                options: {
                    responsive: true,
            
                    title: {
                        display: true,
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

            
            
        return function cleanUp () {
            
            if (canvas) canvas.destroy()
            
        }
        
    })
   
    return (
        <div>
            <canvas id={props.id}width="500px" height="300px"></canvas>
        </div>
    )
}

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
type: 'line',
data: {
labels: [1,2,3,4,5,6,7,8,9,10,11],
datasets: [{
    lineTension: 0,
    label: 'Revenue',
    data: [250,500,450,600,650,700,750,800,850,900,950],
    borderColor: [
        '#2F80ED',
    ],
    backgroundColor: [
        'transparent',
    ],
    borderWidth: 1
},{
    lineTension: 0,
    label: '12MMA',
    data: [350,600,750,800,450,900,350,900,1050,900,550],
    borderColor: [
        '#63ECDB',
    ],
    backgroundColor: [
        'transparent',
    ],
    borderWidth: 1
}
]
},
options: {
    maintainAspectRatio: false,
    legend: {
        display: true,
        position: 'bottom',
        align: 'start',
        labels: {
            boxWidth: 12,
            fontColor: '#000000',
            padding: 30
        },
    
        
    },
    rectangle:{
        backgroundColor:  'transparent',
    },
    scales: {
        xAxes: [{
            gridLines:{
                display: true
            },
            ticks: {
                beginAtZero: true,
            }
    }],
        
        yAxes: [{
            gridLines:{
                display: true,
               
            },
            ticks: {
                beginAtZero: true,
                maxTicksLimit: 6
            }
    }]
}
}
});

import { useContext, useState, useEffect } from "react"
import { SocketContext } from "../../../context/Socket"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import "../style.css"

export default function TicketByHours() {
  const { dataTicketHour } = useContext(SocketContext)
  console.log(dataTicketHour)
  const [ticketData, setTicketData] = useState([])

  useEffect(() => {
    if (dataTicketHour) {
      const ticketDataArray = Object.values(dataTicketHour)
      setTicketData(ticketDataArray)
    }
  }, [dataTicketHour])

  const barcharts = {
    chart: {
      type: 'areaspline',
      height: 170,
      width: 560,
      marginTop: 40,
      backgroundColor: 'transparent',
      scrollablePlotArea: {
        minWidth: 500,
      }
    },
    title: {
      text: 'Ticket By Hours',
      align: 'center',
      style: {
        fontSize: '16px',
        fontWeight: '600',
        color: '#525252'
      },
    },
    credits: {
      enabled: false
    },
    subtitle: {
      text: '',
    },
    xAxis: {
      type: 'linear',
      labels: {
        overflow: 'justify',
        style: {
          color: '#525252'
        }
      },
      categories: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
    },
    yAxis: {
      title: {
        text: '',
      },
      labels: {
        style: {
          color: '#525252'
        }
      },
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null,

    },
    tooltip: {
      backgroundColor: '#2b2b2b',
      borderColor: '#2b2b2b',
      borderRadius: '10',
      formatter: function () {
        return '<b>' + this.series.name + ' ' + this.y + '</b><br/>' +
          'Hour: ' + this.x + ':00<br/>'
      },
      style: {
        color: 'white'
      },
    },
    plotOptions: {
      areaspline: {
        size: 145,
        lineWidth: 4,
        states: {
          marginTop: '10px',
          hover: {
            lineWidth: 5
          }
        },
        // marker: {
        //   enabled: false
        // },
        color: '#2f72c3',
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#2f72c3'],
            [1, '#d5e0ff']
          ]
        },
        threshold: null,
        marker: {
          enabled: false,
          lineWidth: 1,
          lineColor: null,
          fillColor: '#d6d6d6'
        }
      }
    },
    series: [{
      name: 'Total Ticket',
      showInLegend: false,
      dataLabels: {
        style: {
          color: '#525252'
        },
        enabled: true,
        formatter: function () {
          if (this.y >= 1) {
            return this.y;
          } else {
            return '';
          }
        },
      },
      data: ticketData
    }],
    navigation: {
      menuItemStyle: {
        fontSize: '10px'
      }
    }
  }

  const highChart_Props_Style = {
    width: '96%',
    display: 'flex',
    justifyContent: 'center',
  }

  return (
    <div className="ticket card-content--width pt-3" style={{paddingTop: '-10px'}}>
        <HighchartsReact
          highcharts={Highcharts}
          options={barcharts}
          containerProps={{ style: highChart_Props_Style }}
        />
    </div>
  )
}
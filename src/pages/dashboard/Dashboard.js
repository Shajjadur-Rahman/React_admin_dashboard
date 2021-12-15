import React, {useState, useEffect} from 'react'
import cardsData from '../../assets/jsonData/cards_data.json'
import Card from '../../components/card/Card'
import { Line, Bar } from 'react-chartjs-2'
import { Link } from 'react-router-dom'
import Badge from '../../components/badge/Badge'
import HoverEffect from '../../components/hovereffect/HoverEffect'
import { connect } from 'react-redux'
import './dashboard.css'


const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 20, 30, 65, 80, 75],
        fill: true,
        backgroundColor: 'lightgray',
        borderColor: 'gray',
      },
    ],
  };
  
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };


  const rand = () => Math.floor(Math.random() * 255);
  const genData = () => ({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1',
        borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
        borderWidth: 2,
        fill: false,
        data: [rand(), rand(), rand(), rand(), rand(), rand()],
      },
      {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
        data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
        borderColor: 'white',
        borderWidth: 2,
      },
      {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
        data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      },
    ],
  });
  
  const options2 = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

const data2 = genData()


const data3 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options3 = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };


const topCustomer = {
  tHead: ['User', 'Total Order', 'Total Amount'],
  tBody: [
    {"username": "Shajjad", "order": "500", "price": "$1560.00"},
    {"username": "Sumon", "order": "250", "price": "$2560.00"},
    {"username": "Jack", "order": "450", "price": "$2000.00"},
    {"username": "Jarra", "order": "120", "price": "$1350.00"},
    {"username": "Rocky", "order": "470", "price": "$700.00"},
    // {"username": "Vicky", "order": "350", "price": "$2520.00"},
    // {"username": "Viswash", "order": "270", "price": "$1230.00"},
    // {"username": "Rony", "order": "150", "price": "$1200.00"},
    // {"username": "Doe", "order": "600", "price": "$30000.00"},
    // {"username": "Abid", "order": "700", "price": "$25000.00"},
    // {"username": "Siam", "order": "260", "price": "$1700.00"},
    // {"username": "Siraj", "order": "475", "price": "$12300.00"},
    // {"username": "Abul", "order": "390", "price": "$16800.00"},
    // {"username": "Bishal", "order": "358", "price": "$11000.00"},
    // {"username": "Razzak", "order": "100", "price": "$9000.00"},
    // {"username": "Faruk", "order": "158", "price": "$8000.00"},
    // {"username": "Sadikur", "order": "80", "price": "$5400.00"},
    // {"username": "Madhu", "order": "590", "price": "$20000.00"},
  ]
}



const latestOrders = {
  tHead: [
      "order id",
      "user",
      "total price",
      "date",
      "status"
  ],
  tBody: [
      {
          id: "#OD1711",
          user: "john doe",
          date: "17 Jun 2021",
          price: "$900",
          status: "shipping"
      },
      {
          id: "#OD1712",
          user: "frank iva",
          date: "1 Jun 2021",
          price: "$400",
          status: "paid"
      },
      {
          id: "#OD1713",
          user: "anthony baker",
          date: "27 Jun 2021",
          price: "$200",
          status: "pending"
      },
      {
          id: "#OD1712",
          user: "frank iva",
          date: "1 Jun 2021",
          price: "$400",
          status: "paid"
      },
      {
          id: "#OD1713",
          user: "anthony baker",
          date: "27 Jun 2021",
          price: "$200",
          status: "refund"
      }
  ]
}


const orderStatus = {
  "shipping": "primary",
  "pending": "warning",
  "paid": "success",
  "refund": "danger"
}



const Dashboard = props => {

  
  useEffect(() => {
    document.title = "Dashboard home"
}, [])


  const [customerHover, setCustomerHover] = useState({
    hoverTr: []
})

  const setHover = index => {
      setCustomerHover({
        hoverTr: index
      })
  }

  const removeHover = () => {
      setCustomerHover({
        hoverTr: ''
      })
  }

    const {hover, setHoverEffect, removeHoverEffect} = HoverEffect()

    return (
        <>
          <h2 className='page-header'>Dashboard</h2>
          <div className='row status__card_container'>

                {
                    cardsData.map((item, index) => (
                        <div className='col-3 col-md-6 col-sm-12' key={index}>
                            <Card 
                            icon={item.icon}
                            count={item.count}
                            title={item.title}
                            />
                        </div>
                    ))
                }
              
          </div> 
          
            <div className='row content__wapper'>
                <div className='col-6 col-lg-12'>
                    <Line data={data} options={options} />
                </div>
                <div className='col-6 col-lg-12'>
                    <Bar
                        data={data2}
                        options={options2}
                    />
                </div>
            </div> 
            <div className='row content__wapper'>
                <div className='col-6 col-lg-12'>
                <Bar
                        data={data3}
                        options={options3}
                    />
                </div>
                <div className='col-6 col-lg-12'>
                    <Line data={data} options={options} />                  
                </div>
            </div> 
            <div className='row content__wapper'>
              <div className='col-4 col-lg-12'>
              <div className='page-header'>
                <h3>Top Customer</h3>
              </div>
                <div className='card'>
                  <div className='dashboard_table_warpper'>
                    <table className='dashboard_table'>
                      <thead>
                        <tr>
                          {topCustomer.tHead.map((item, index) => (<th key={index}>{item}</th>))}
                        </tr>
                      </thead>
                      <tbody>
                        {
                          topCustomer.tBody.map((item, index) => (
                            <tr key={index} onMouseEnter={() => setHover(index)} onMouseLeave={() => removeHover()} className={customerHover.hoverTr === index ? `${props.color ? props.color : 'blue-color'}` : ''}>
                              <td>{item.username}</td>
                              <td>{item.order}</td>
                              <td>{item.price}</td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                  <div className='card__footer'>
                  <Link to='/customers'>view all</Link>
                  <i className='bx bx-fade-right bxs-right-arrow'></i>
                  </div>
                </div>
              </div>
              <div className='col-8 col-lg-12'>
              <div className='page-header'>
                <h3>latest orders</h3>
              </div>
              <div className='card'>
                  <div className='dashboard_table_warpper'>
                    <table className='dashboard_table'>
                      <thead>
                        <tr>
                        {latestOrders.tHead.map((item, index) => (<th key={index}>{item}</th>))}
                        </tr>
                      </thead>
                      <tbody>
                        {latestOrders.tBody.map((item, index) => (
                          <tr key={index} onMouseEnter={() => setHoverEffect(index)} onMouseLeave={() => removeHoverEffect()} className={hover.hoveritem === index ? `${props.color ? props.color : 'blue-color'}` : ''}>
                            <td>{item.id}</td>
                            <td>{item.user}</td>
                            <td>{item.date}</td>
                            <td>{item.price}</td>
                            <td>
                                  <Badge type={orderStatus[item.status]} content={item.status}/>
                              </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className='card__footer'>
                  <Link to='/orders'>view all</Link>
                  <i className='bx bx-fade-right bxs-right-arrow'></i>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}
const mapStateToProps = state => ({
  color: state.ThemeReducer.color
})
export default connect(mapStateToProps)(Dashboard)

import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
    console.log(props)
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card ">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="online-users">
            { notifications && notifications.map(item =>{
              return <li key={item.id}>
                <span className="red-text">{item.user} </span>
                <span>{item.content}</span>
                <div className="note-date grey-text">{moment(item.time.toDate()).fromNow()}</div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications
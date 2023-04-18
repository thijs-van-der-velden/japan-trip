import React from "react";
import moment from "moment";

const Day = ({ date, label, tickets }) => {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.date}>{moment(date).format('ddd D/M')}</h1>
      <div style={styles.card}>
        <h2>{ label }</h2>
        {
        tickets && tickets.length && tickets.map(({ label, link }) => (
          <a href={link}>{label}</a>
        ))
      }
      </div>
    </div>
  )
}

export default Day;

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  date: {
    textAlign: 'center',
    
  },
  card: {
    background: 'white',
    borderRadius: 6,
    flexGrow: 1,
    border: '2px solid rgba(0, 0, 0, 0.03)',
    boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
  }
}
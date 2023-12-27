import React from 'react'
import './ContentHeader.css'

const ContentHeader = (props) => {
  return (
    <section className="content-header">
        <h1>{props.title}</h1>
        <small>{props.small}</small>
    </section>
  )
}

export default ContentHeader
import React from 'react'

class Features extends React.Component {
  render(){
    const features = this.props.data.map((feature, key) => {
      return <li key={key}>{feature}</li>
    })
    return(
      <ul className="spot__features">
        {features}
      </ul>
    )
  }
}

export default Features

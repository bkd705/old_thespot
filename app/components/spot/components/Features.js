import React from 'react'

class Features extends React.Component {
  render(){
    const features = this.props.data.split(',');
    const featureList = features.map((feature, key) => {
      return <li key={key}>{feature}</li>
    })
    return(
      <ul className="spot__features">
        {featureList}
      </ul>
    )
  }
}

export default Features

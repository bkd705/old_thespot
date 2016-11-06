import React from 'react'

class Featured extends React.Component {
  render(){
    return(
      <div className="featured">
        <div className="featured__banner">
          <p>Featured</p>
        </div>

        <div className="featured__desc">
          <h3>Flying Monkeys</h3>
          <p>Flying Monkeys craft brewery in the downtown core of Barrie is a hotspot for craft beer enthusiasts. With great food, wifi and of course beer, this place is the perfect spot for you and your friends to hangout!</p>
        </div>
      </div>
    );
  }
}

export default Featured;

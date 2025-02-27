import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {


  return (
    <Fragment>
      <div className="belt">
        {
          props.sushi.map(sushi => <Sushi sushi={sushi} key={sushi.id} eat={props.eat} eaten={props.eaten} />)
        }
        <MoreButton more={props.more} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
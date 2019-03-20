import React from 'react'
import CandyCard from './CandyCard'

const CandyCardList = (props) => {
  let allCandies = props.products
  let candyCardList = []
  for (let i = 0; i < allCandies.length; i += 3) {
    let candyCards = allCandies.slice(i, Math.min(i + 3, allCandies.length))
      .map(p => (
        <CandyCard
          key={p._id}
          id={p._id}
          name={p.name}
          imageUrls={p.imageUrls}
          description={p.description}
          price={p.price}/>))

    let cardDeck = <div key={i} className='card-deck space-top'>{candyCards}</div>
    candyCardList.push(cardDeck)
  }

  return (
    <div className='row'>
      {candyCardList}
    </div>
  )
}

export default CandyCardList
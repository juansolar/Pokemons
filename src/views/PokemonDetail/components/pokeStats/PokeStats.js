import React from 'react'

const PokeStats = ({stats}) => {
  return (
    <>
        {stats?.map( ({base_stat, stat}, index) => (
            <div key={index} style={{display: 'flex'}}>
                <p>{stat.name}</p>
                <p>{`: ${base_stat}♥`}</p>
                <p></p>
            </div> 
        ) )}
    </>
  )
}

export default PokeStats;

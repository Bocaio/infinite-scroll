import { useEffect } from 'react';
import useQueryVoiceList from './api/use-voice-query'
import './App.css'
import { useInView } from 'react-intersection-observer';
import React from 'react';


function App() {
  const {data,isFetching,fetchNextPage} = useQueryVoiceList()
  const {ref , inView} = useInView()

  useEffect (()=> {
    if (inView) {
      fetchNextPage();
    }
  },[inView,fetchNextPage])
  console.log("inview is ", inView)
  console.log("data is , ", data)
  return (
    <>
    <h1>HELLO This is Moe Yan</h1>
    <div>
      {
        data ? data.pages.map((group,index) => {
          return (
            <React.Fragment key={index}>
            {group.items.map(each => {
              return <h1 key={each.id}>{each.name}</h1>
            })}
            </React.Fragment>
          )
        }) : <></>
      }
    </div>
    <button
          ref={ref}
        >
          {isFetching
            ? 'Loading more...'
              : 'Load More'
              }
        </button></>
  )
}

export default App

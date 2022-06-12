import { useEffect } from 'react';
import Item from './item';
// import ProdData from './ProdData';
import ProdMobx from './prodMobx';
import { observer } from 'mobx-react'

const Items = () => {

  console.log('Items loaded');

  useEffect(() => {
    ProdMobx.loadProd();
  }, [])

  return (
    <div style={{padding: '10px'}}>
      <h2>Items</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      {
        ProdMobx.loading ? <div>Data Loading...</div> : (ProdMobx.items.length === 0 && <div>None of item available now, please retry later</div>)
      }
      {
        ProdMobx.items.map((i, k) => <Item key={k} data={ i } />)
      }
      </div>
    </div>
  )

}

export default observer(Items);
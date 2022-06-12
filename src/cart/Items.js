import Item from './item';

const Items = () => {

  console.log("Items loaded");

  var items = [
    {
      'name': 'iPhone',
      'price': '699.99',
      'description': 'iPhone is a mobile phone',
    },
    {
      'name': 'iMac',
      'price': '1699.99',
      'description': 'iMac is a Desktop computer',
    },
    {
      'name': 'iMac 2',
      'price': '2699.99',
      'description': 'iMac is a Desktop computer',
    },
    {
      'name': 'iMac 3',
      'price': '3699.99',
      'description': 'iMac is a Desktop computer',
    },
    {
      'name': 'iMac 4',
      'price': '4699.99',
      'description': 'iMac is a Desktop computer',
    },
    {
      'name': 'iMac 5',
      'price': '5699.99',
      'description': 'iMac is a Desktop computer',
    }
  ];

  return (
    <div style={{padding: '10px'}}>
      <h2>Items</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
      {
        items.map((i, k) => <Item key={k} data={ i } />)
      }
      </div>
    </div>
  )

}

export default Items;
import { createSlice } from '@reduxjs/toolkit';

//const parseFin = (val = 0) => {
//  return (val2) => {
//
//    val = parseFloat(parseFloat(val) + parseFloat(val2)).toFixed(10);
//    return this;
//  }  
//}

class parseFin {
  constructor(initVal=0) {
    this.ttlVal = parseFloat(initVal).toFixed(2) || 0;
    console.log('parseFin constructor', initVal, this.ttlVal);
  }

  add(val){
    console.log('parseFin add', val, this.ttlVal);
    this.ttlVal = parseFloat(parseFloat(this.ttlVal) + parseFloat(val)).toFixed(2);
    return this;
  }

  get value(){
    console.log('parseFin value', this.ttlVal);
    return this.ttlVal;
  }
}

// Fin()(1)(2)() or
// let fin = Fin();
// fin = fin(1);
// fin = fin(2);
// fin()

const Fin = (ori = 0) => {
  return (val) => {
    console.log('add', val, ori);
    if(val === undefined){
      return ori;
    }else{
      let ttlVal = parseFloat(parseFloat(ori) + parseFloat(val)).toFixed(2);
      console.log('return fin', ttlVal);
      return Fin(ttlVal);
    }
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    items: [],
    ttlqty: 0,
    ttl: 0,
  },
  reducers: {
    add(state, action){
      console.info('increment', state, action);
      let payload = action.payload;
      if(payload?.name){
        payload.qty ||= 1;

        let res = state?.items?.filter(i => i.name === payload.name)[0]

        console.info(res);

        if(res){
          res.qty += payload.qty;
        }else{
          state.items.push(payload);
        }

        state.ttlqty = 0;
        state.ttl = 0;

        //var AccQty = new parseFin();
        //var AccAmt = new parseFin();

        var finQty = Fin();
        var finAmt = Fin();

        state.items.forEach(i => {
          //state.ttlqty = parseFloat((state.ttlqty + parseFloat(i.qty)).toFixed(10));
          //state.ttlqty = AccQty.add(i.qty).value;
          finQty = finQty(i.qty);
          //state.ttl = parseFloat((state.ttl + parseFloat(i.qty * i.price)).toFixed(10));
          //state.ttl = AccAmt.add(i.qty * i.price).value;
          finAmt = finAmt(i.qty * i.price);
        });
        state.ttlqty = finQty();
        state.ttl = finAmt();

      }
    },
    sub(state, action){

      let payload = action.payload;
      state.items = state.items.filter(i => i.name !== payload.name)

      state.ttlqty = 0;
      state.ttl = 0;

      //var AccQty = new parseFin();
      //var AccAmt = new parseFin();

      var finQty = Fin();
      var finAmt = Fin();

      state.items.forEach(i => {
        //state.ttlqty = parseFloat((state.ttlqty + parseFloat(i.qty)).toFixed(10));
        //state.ttlqty = AccQty.add(i.qty).value;
        finQty = finQty(i.qty);
        //state.ttl = parseFloat((state.ttl + parseFloat(i.qty * i.price)).toFixed(10));
        //state.ttl = AccAmt.add(i.qty * i.price).value;
        finAmt = finAmt(i.qty * i.price);
      });

      state.ttlqty = finQty();
      state.ttl = finAmt();

      console.info('decrement', state, action);
    },
  }
});

export const ttlqty = (s) => parseInt(s?.cart?.ttlqty || 0);
export const ItemInCart = (name) => {
  return (s) => {
    return s?.cart?.items?.filter(i => i.name === name)[0] || {}
  }
}

export const actions = userSlice.actions;

export default userSlice.reducer;
// import {
//   RecoilRoot,
//   atom,
//   selector,
//   useRecoilState,
//   useRecoilValue,
// } from 'recoil';

// const Fin = (ori = 0) => {
//   return (val) => {
//     //console.log('add', val, ori);
//     if(val === undefined){
//       return ori;
//     }else{
//       let ttlVal = parseFloat(parseFloat(ori) + parseFloat(val)).toFixed(2);
//       //console.log('return fin', ttlVal);
//       return Fin(ttlVal);
//     }
//   }
// }

// const cartState = atom({
//   key: 'cartState',
//   default: {
//     items: [],
//     ttlqty: 0,
//     ttl: 0,
//   }
// });

// class CartCtrl {
//   items = []
//   ttlqty = 0
//   ttl = 0

//   constructor() {
//     makeAutoObservable(this)
//   }

//   add(payload) {
//     console.info('cart add', payload);
//     if(payload?.title){
//       payload.qty ||= 1;

//       let res = this.items?.filter(i => i.title === payload.title)[0]

//       //console.info(res);

//       if(res){
//         res.qty += payload.qty;
//       }else{
//         this.items.push(payload);
//       }

//       this.ttlqty = 0;
//       this.ttl = 0;

//       //var AccQty = new parseFin();
//       //var AccAmt = new parseFin();

//       var finQty = Fin();
//       var finAmt = Fin();

//       this.items.forEach(i => {
//         finQty = finQty(i.qty);
//         finAmt = finAmt(i.qty * i.price);
//       });
//       this.ttlqty = finQty();
//       this.ttl = finAmt();

//     }
//   }

//   sub(payload) {

//     console.info('cart sub', payload);

//     this.items = this.items.filter(i => i.title !== payload.title)

//     this.ttlqty = 0;
//     this.ttl = 0;

//     //var AccQty = new parseFin();
//     //var AccAmt = new parseFin();

//     var finQty = Fin();
//     var finAmt = Fin();

//     this.items.forEach(i => {
//       finQty = finQty(i.qty);
//       finAmt = finAmt(i.qty * i.price);
//     });

//     this.ttlqty = finQty();
//     this.ttl = finAmt();

//   }

//   ItemInCart(title){
//     return this.items?.filter(i => i.title === title)[0] || {}
//   }

// }

// const cartMobx = new CartCtrl();
// export default cartMobx;

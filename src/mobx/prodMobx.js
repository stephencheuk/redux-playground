import { makeAutoObservable } from "mobx"

class ProdCtrl {
  items = []
  page = 0
  ttl = 0
  loading = false

  constructor() {
    makeAutoObservable(this)
  }

  loadProd(){
    this.loading = true;
    new Promise((resolve) =>
      setTimeout(() => {
        //fetch("https://dummyjson.com/auth/products")
        fetch("https://dummyjson.com/products")
          .then(async response => {
              const isJson = response.headers.get('content-type')?.includes('application/json');
              const data = isJson ? await response.json() : null;

              // check for error response
              if (response.ok) {
                this.items = data.products;
              }else{
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
              }
          })
          .catch(err => console.log(err))
          .finally(() => this.loading = false)
         resolve()
      }, 1000)
    );
  }
}

const ProdMobx = new ProdCtrl();
export default ProdMobx;

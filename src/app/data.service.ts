import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

 private key = 'products';
 
 constructor() {
  this.initializeProducts(); 
}

 cars=[
    {
    id: 1,
    name:'Cavrel wirst watch',
    description: "CAVREL ALL BLACK SPECIAL EDITION BY FORMA Analog Watch  - For Men VIL-BLK-CHR-01",
    price: 2999,
    image: "https://rukminim1.flixcart.com/image/1366/1366/xif0q/watch/c/g/z/1-vil-blk-chr-01-cavrel-men-original-imahj4vvxvqqfahx.jpeg?q=90"
  },
  {
    id: 2,
    name:'Shivark wirst watch',
    description:'Shivark Silicone Strap Boys Analog Watch Analog Watch  - For Men Silicone Belt',
    price:3999,
    image:'https://rukminim1.flixcart.com/image/1366/1366/xif0q/watch/j/j/7/1-silicone-belt-shivark-men-original-imahhzvyzzugsxaf.jpeg?q=90'
  },
  {
    id: 3,
    name: " spinner wirst watch",
    description:'spinner Car wheel | Spinning | Roatating | Gyro | Red Analog Watch  - For Men SPM01',
    price: 5999,
    image: "https://rukminim1.flixcart.com/image/1366/1366/xif0q/watch/z/v/h/1-spm01-spinner-men-original-imahm35rmb5zzrza.jpeg?q=90"
  },
  {
    id: 4,
    name: " LOIS CARON wirst watch",
    description:"LOIS CARON Elegant Series Square Quartz For /Boys Wrist Analog Watch  - For Men LCS-4297",
    price: 4999,
    image: "https://rukminim1.flixcart.com/image/1366/1366/xif0q/watch/z/r/y/1-lcs-4297-lois-caron-men-original-imahma6rbjmzcsyz.jpeg?q=90"
  },
  {
    id: 5,
    name: "HIRPARA wirst watch",
    description:"HIRPARA SILVER Black Dial Multifunction Wristwatch Analog Watch  - For Men MT-5560",
    price: 4999,
    image: "https://rukminim1.flixcart.com/image/1366/1366/xif0q/watch/6/d/d/1-new-latest-waterproof-sport-look-black-silicone-strap-loretta-original-imahhnajg8pzffem.jpeg?q=90"
  },
  {
    id: 6,
    name: "EDDYHAGER wirst watch",
    description:'EDDY HAGER Olive Day and Date Analog Watch  - For Men EH-226-OLIV...more',
    price: 6999,
    image: 'https://rukminim1.flixcart.com/image/1366/1366/xif0q/watch/6/z/z/-original-imahkfgx6tbz9ay9.jpeg?q=90'
  }
];
initializeProducts() {
    let products = localStorage.getItem(this.key);
    if (!products || JSON.parse(products).length === 0) {
      localStorage.setItem(this.key, JSON.stringify(this.cars));
    }
  }

  getProducts() {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  getProductById(id: number) {
    return this.getProducts().find((p: any) => p.id == id);
  }

updateProduct(updated: any) {
  let products = this.getProducts().map((p: any) =>
    p.id === updated.id ? updated : p
  );
  localStorage.setItem(this.key, JSON.stringify(products));
}

}
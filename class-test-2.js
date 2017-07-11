'use strict';
function  main() {
  var wareCola={
    barcode: 'ITEM000000',
    name: '可口可乐',
    unit: '瓶',
    price: 3.00,
    count: 5,
    totall_price: null

  };
  var wareXuebi={
    barcode: 'ITEM000001',
    name: '雪碧',
    unit: '瓶',
    price: 3.00,
    count: 2,
    totall_price:null
  };
  var wareDianchi={
    barcode: 'ITEM000004',
    name: '电池',
    unit: '个',
    price: 2.00,
    count: 1,
    totall_price:null
  }


  var wareArry=[wareCola,wareXuebi,wareDianchi];
  wareArry=get_totall_price(wareArry);
  var totall_price=totall_ware_price(wareArry);
  console.log("***<没钱赚商店>收据***");
  for(var i=0;i<wareArry.length;i++) {
    console.log('名称：'+wareArry[i].name+','+'数量: '+wareArry[i].count+wareArry[i].unit+',单价：'+wareArry[i].price+'（元）， 总价：'+wareArry[i].totall_price+'（元）');
  }
  console.log(   '总价 :'+ totall_price+"（元）");
  console.log("**********************");
}
function get_totall_price(warearry) {
  for(var i=0;i<warearry.length;i++){
    warearry[i].totall_price=warearry[i].price*warearry[i].count;
  }
  return warearry;
}
function totall_ware_price(warearry1) {
  var totallPrice=0;
  for(var i=0;i<warearry1.length;i++){
    totallPrice=warearry1[i].totall_price+totallPrice;
  }
  return totallPrice;
}

main();

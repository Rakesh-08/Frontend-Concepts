// nested callbacks create callback hell


let stocks = {
  Fruits: ["orange", "grapes", "bananas", "apples"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "choco chips", "dry fruits"],
};

/*
let order = (fruitName, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruitName]} was selected`);

    //order placing is complete now start production

    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("ice cream production has started");

    setTimeout(() => {
      console.log("the fruites are chopped");

      setTimeout(() => {
        console.log(`${stocks.liquid[0]} is added`);

        setTimeout(() => {
          console.log("start the machine");

          setTimeout(() => {
            console.log(`ice cream placed on ${stocks.holder[0]}`);

            setTimeout(() => {
              console.log(`${stocks.toppings[0]} is added as toppings`);

              setTimeout(() => {
                console.log('serve the ice cream to customer');
              }, 1000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order(2, production);
*/




let isShopOpen = true;

let order= (time,work)=>{

    return new Promise((rs,rj)=>{
        if(isShopOpen){
            setTimeout(() => {
                 rs(work());

            }, time);
           
        }else{
            rj('the shop is closed now')
        }
    })

}

/*
//step 1
order(2000, () => {
  console.log(`${stocks.Fruits[0]} is selected`);
})
  // step 2
  .then(() => {
    return order(0000, () => {
      console.log("production has started");
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log("the fruites are chopped");
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log(`${stocks.liquid[0]} is added`);
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log("start the machine");
    });
  })
  .then(() => {
    return order(3000, () => {
      console.log(`ice cream placed on ${stocks.holder[0]}`);
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log(`${stocks.toppings[0]} is added as toppings`);
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log("serve the icecream");
    });
  });
*/

//  new Promise((res, reject) => {
//    res("success");
//  })
//    // p.then(()=>{
//    //     throw Error('ooooooooo')
//    // })
//    .then(() => {
//     console.log(" then block");
//      throw Error("ohhhhhhhhh");
//    })
//    .catch((err) => {console.log('first catch block');
//    return err})
//    .catch((er) =>{console.log('second catch block');
//   console.log(er)} )


let operation=async function(){

let step1 = await order(2000, ()=>{console.log(`${stocks.Fruits[2]} is selected`)});

let p1 = await order(0000, () => {
  console.log("production has started");
});
 let p2 = await order(2000, () => {
   console.log("the fruites are chopped");
 });
let p3 = await order(2000, () => {
  console.log(`${stocks.liquid[0]} is added`);
});
let p4 = await order(1000, () => {
  console.log("start the machine");
});
let p5 = await order(3000, () => {
  console.log(`ice cream placed on ${stocks.holder[0]}`);
});
let p6 = await order(2000, () => {
  console.log(`${stocks.toppings[0]} is added as toppings`);
});
let p7 = await order(1000, () => {
  console.log("serve the icecream");
});


}

operation()
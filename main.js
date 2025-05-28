function fun1(...allpera) {
  let sumAmount = allpera.reduce((initalValue, currentValue) => {
    return (initalValue += currentValue);
  });
  return sumAmount;
}
let sumTotal = fun1(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.table(sumTotal);

const apiRequest = (callback1) => {
  setTimeout(() => {
    console.table(["request gese"]);
    callback1();
  }, 1500);
};
const dataFetch = (callback2) => {
  setTimeout(() => {
    console.table(["data astese"]);
    callback2();
  }, 1650);
};
const display = () => {
  console.table(["gan", "movie", "games"]);
};
apiRequest(() => {
  dataFetch(() => {
    display();
  });
});

//practice for home

const one = (callone, value) => {
  setTimeout(() => {
    console.table(["ekta"]);
    const valueResult = value + 10;
    callone(valueResult);
  }, 500);
};
const two = (calltwo,value) => {
  setTimeout(() => {
    console.table(["dui"]);
    calltwo(value +10);
  }, 600);
};
const three = (callthree,value) => {
  setTimeout(() => {
    console.table(["tin"]);
    callthree(value +10);
  }, 650);
};
const four = (callfour,value) => {
  setTimeout(() => {
    console.table(["char"]);
    callfour(value +10);
  }, 700);
};
const five = (callfive,value) => {
  setTimeout(() => {
    console.table(["pach"]);
    callfive(value +10);
  }, 750);
};
const six = (callsix,value) => {
  setTimeout(() => {
    console.table(["choy"]);
    callsix(value +10);
  }, 800);
};
const seven = (callseven,value) => {
  setTimeout(() => {
    console.table(["shat"]);
    callseven(value +10);
  }, 850);
};
const eight = (calleight,value) => {
  setTimeout(() => {
    console.table(["aat"]);
    calleight(value+10);
  }, 900);
};
const nine = (callnine,value) => {
  setTimeout(() => {
    console.table(["noy"]);
    callnine(value+10);
  }, 950);
};
const ten = (callten,value) => {
  setTimeout(() => {
    console.table(["dos"]);
    callten(value+10);
  }, 1000);
};
const eleven = (callell,value) => {
  setTimeout(() => {
    console.table(["egaro"]);
    callell(value +10);
  }, 1050);
};
const twelve = (calltel,value) => {
  setTimeout(() => {
    console.table(["baro"]);
    calltel(value+10);
  }, 1100);
};
const tero = (calltero,value) => {
  setTimeout(() => {
    console.table(["tero"]);
    calltero(value +10);
  }, 1150);
};
const chooddo = (callchoddo,value) => {
  setTimeout(() => {
    console.table(["choddo"]);
    callchoddo(value+10);
  }, 1200);
};
const ponero = (callponero,value) => {
  setTimeout(() => {
    console.table(["ponero"]);
    callponero(value+10);
  }, 1250);
};
const solo = (callsolo,value) => {
  setTimeout(() => {
    console.table(["solo"]);
    callsolo(value+10);
  }, 1300);
};
const sothero = (callsothero,value) => {
  setTimeout(() => {
    console.table(["sothero"]);
    callsothero(value+10);
  }, 1350);
};
const atharo = (callatharo,value) => {
  setTimeout(() => {
    console.table(["atharo"]);
    callatharo(value+10);
  }, 1400);
};
const onis = (callonis,value) => {
  setTimeout(() => {
    console.table(["onis"]);
    callonis(value+10);
  }, 1450);
};
const bis = (callbis,value) => {
  setTimeout(() => {
    console.table(["bis"]);
    callbis(value+10);
  }, 1500);
};
const ekus = (callekus,value) => {
  setTimeout(() => {
    console.table(["ekus"]);
    callekus(value+10);
  }, 1550);
};
const bais = (callbais,value) => {
  setTimeout(() => {
    console.table(["bais"]);
    callbais(value+10);
  }, 1600);
};
const teis = (callteis,value) => {
  setTimeout(() => {
    console.table(["teis"]);
    callteis(value+10);
  }, 1650);
};
const chobbis = (callchobbis,value) => {
  setTimeout(() => {
    console.table(["chobbis"]);
    callchobbis(value+10);
  }, 1700);
};
const pochis = (callpochis,value) => {
  setTimeout(() => {
    console.table(["pochis"]);
    callpochis(value+10);
  }, 1750);
};
const display2 = (finalOut) => {
  console.table(["finally sob ses ",finalOut]);
};

one((valueOne) => {
  two((valuetwo) => {
    three((valuethree) => {
      four((valuefour) => {
        five((valuefive) => {
          six((valuesix) => {
            seven((valueseven) => {
              eight((valueeight) => {
                nine((valuenine) => {
                  ten((valueten) => {
                    eleven((valueeleven) => {
                      twelve((valuetwelve) => {
                        tero((valuetero) => {
                          chooddo((valuechoddo) => {
                            ponero((valueponero) => {
                              solo((valuesolo) => {
                                sothero((valuesothero) => {
                                  atharo((valueatharo) => {
                                    onis((valueonis) => {
                                      bis((valuebis) => {
                                        ekus((valueekus) => {
                                          bais((valuebais) => {
                                            teis((valueteis) => {
                                              chobbis((valuechobbis) => {
                                                pochis((valuepochis) => {
                                                    display2(valuepochis)
                                                },
                                                valuechobbis);
                                              }, valueteis);
                                            }, valuebais);
                                          }, valueekus);
                                        }, valuebis);
                                      }, valueonis);
                                    }, valueatharo);
                                  }, valuesothero);
                                }, valuesolo);
                              }, valueponero);
                            }, valuechoddo);
                          }, valuetero);
                        }, valuetwelve);
                      }, valueeleven);
                    }, valueten);
                  }, valuenine);
                }, valueeight);
              }, valueseven);
            }, valuesix);
          }, valuefive);
        }, valuefour);
      }, valuethree);
    }, valuetwo);
  }, valueOne);
}, 10);

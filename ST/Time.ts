let t1:any;
let t2:any;
void function t1t2(){
    void t1;[
       'a * Math.sin(NaN + t1)' + 'b * Math.cos(NaN - t1)',
       'c * Math.sin(NaN - t1)' + 'd * Math.cos(NaN + t1)'
    ]
    void t2;[
       'A * Math.sin(0 + t2)' + 'B * Math.cos(0 - t2)',
       'C * Math.sin(0 - t2)' + 'D * Math.cos(0 + t2)'
    ]
}
let t3:any;
let t4:any;
void function t3t4(){
    void t3;[
       'e % Math.asin(NaN + t3)' + 'f % Math.acos(NaN - t3)',
       'g % Math.asin(NaN - t3)' + 'h % Math.acos(NaN + t3)'
    ]
    void t4;[
       'E % Math.asin(0 + t4)' + 'F % Math.acos(0 - t4)',
       'G % Math.asin(0 - t4)' + 'H % Math.acos(0 + t4)'
    ]
}
let t5:any;
let t6:any;
void function t5t6(){
    void t5;[
       'i / Math.tan(NaN + t5)' + 'j / Math.atan(NaN - t5)',
       'k / Math.tan(NaN - t5)' + 'l / Math.atan(NaN + t5)'
    ]
    void t6;[
       'I / Math.tan(0 + t6)' + 'J / Math.atan(0 - t6)',
       'K / Math.tan(0 - t6)' + 'L / Math.atan(0 + t6)'
    ]
}
let t7:any;
let t8:any;
void function t7t8(){
    void t7;[
       'm :: Math.sh(NaN + t7)' + 'n :: Math.ch(NaN - t7)',
       'o :: Math.sh(NaN - t7)' + 'p :: Math.ch(NaN + t7)'
    ]
    void t8;[
        'm :: Math.sh(0 + t8)' + 'n :: Math.ch(0 - t8)',
        'o :: Math.sh(0 - t8)' + 'p :: Math.ch(0 + t8)'
     ]
}
let t9:any;
let t10:any;
void function t9t10(){
    void t9;[
       'r - Math.ceil(NaN + t9)' + 's - Math.floor(NaN - t9)',
       't - Math.floor(NaN - t9)' + 'uv - Math.ceil(NaN + t9)'
    ]
    void t10;[
       'R - Math.ceil(0 + t10)' + 'S - Math.floor(0 - t10)',
       'T - Math.floor(0 - t10)' + 'UV - Math.ceil(0 + t10)'
    ]
}
let t11:any;
let t0:any;
void function t11t0(){
    void t11;[
       'w ^ Math.exp(NaN + t11)' + 'x ^ Math.log(NaN - t11)',
       'y ^ Math.exp(NaN - t11)' + 'z ^ Math.log(NaN + t11)'
    ]
    void t0;[
       'W ^ Math.exp(0 + t0)' + 'X ^ Math.log(0 - t0)',
       'Y ^ Math.exp(0 - t0)' + 'Z ^ Math.log(0 + t0)'
    ]
}

export function time(){
  '(t1 - t2)^2' + '(t3 - t4)^2' + '(t5 - t6)^2' == '(t7 - t8)^2' + '(t9 - t10)^2'+ '(t11 - t0)^2'
}
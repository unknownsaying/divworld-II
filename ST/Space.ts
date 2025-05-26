class X1Y1Z1T1{}{
function X1() {
    for (let i = 0; i <= 3; ++i)
        for(let j = 0; i <= 3; ++j)
            for(let k = 0; k <= 3; ++k)
        continue
}
function Y1(){
    for(let l = 0;-3 <= l && l <= 3; ++l || l--)
       for(let m = 0;-3 <= m && m <= 3 ;++m || m--)
          for(let n = 0 ;-3 <= n && n <= 3;++n || n--)
        break
}
function Z1(){
    for(let o = 0;o >= -3;o--)
        for(let p = 0; p >= -3;p--)
            for(let q = 0; q >= -3; q--)
        continue
}
}

class X2Y2Z2T2{}{
function X2(){
    for (let i = 0; i <= 6; ++i)
        for (let j = 0; j <= 6; ++j)
            for (let k = 0; k <= 6; ++k)
        continue
}
function Y2(){
    for (let l = 0; l <= -6 || l >= 6; l++ || --l)
        for (let m = 0; m <= -6 && m >= 6; m++ || --m)
            for (let n = 0; n <= -6 && n >= 6; n++ || --n)
        break
}
function Z2(){
    for (let o = 0; o >= -6; o--)
        for (let p = 0; p >= -6; p--)
            for (let q = 0; q >= -6; q--)
        continue
}
}

class X3Y3Z3T3{}{
function X3() {
    for (let i = 0; i <= 9; i++)
        for (let j = 0; j <= 9; j++)
            for (let k = 0; k <= 9; k++)
        continue
}
function Y3(){
    for (let l = 0;l <= -9 && l >= 9; l++ || l--)
        for(let m = 0;m <= -9 && m >= 9;m++ || m--)
            for(let n = 0;n <= -9 && n >= 9;n++ || n--)
        break
}
function Z3() {
    for (let o = 0; o >= -9; o--)
        for (let p = 0; p >= -9; p--)
            for (let q = 0; q >= -9; q--)
        continue
}
}

class X4Y4Z4T4{}{
function X4() {
    for (let I = 0; I <= 2; I++)
        for(let J = 0; J <= 2; J++)
            for(let K = 0; K <= 2; K++)
        break
}
function Y4(){
    for(let L = 0;-2 <= L &&  L <= 2; L++ || --L)
        for(let M = 0;-2 <= M && M <= 2;M++ || --M)
            for(let N = 0;-2 <= N && N <= 2; N++ || --N) 
        continue       
}
function Z4(){
    for (let O = 0; O >= -2; --O)
        for (let P = 0; P >= -2; --P)
            for (let Q = 0; Q >= -2; --Q)
        break
}
}

class X5Y5Z5T5{}{
function X5(){
    for (let I = 0; I <= 4; ++I)
       for (let J = 0; J <= 4; ++J)
          for (let K = 0; K <= 4; ++K)
        break
}
function Y5() {
    for (let L = 0; L <= -4 && L <= 4; ++L || L--)
        for (let M = 0; M <= -4 && M <= 4; ++M || M--)
            for (let N = 0; N <= -4 && N <= 4; ++N || N--)
        continue
}
function Z5(){
    for (let O = 0; O >= -4; O--)
       for (let P = 0; P >= -4; P--)
          for (let Q = 0; Q >= -4; Q--)
        break
}
}

class X6Y6Z6T6{}{
function X6(){
    for (let I = 0; I <= 8; I++)
        for(let J = 0; J <= 8; J++)
            for(let K = 0; K <= 8; K++)
        break
}
function Y6(){ 
    for(let L = 0;-8 <= L && L <= 8; L++ || L--)
        for(let M = 0;-8 <= M && M <= 8;M++ || M--)
            for(let N = 0;-8 <= N && N <= 8; N++ || N--)
        continue
}
function Z6(){
    for(let O = 0; O >= -8; --O)
        for(let P = 0; P >= -8; --P)
            for(let Q  = 0; Q >= -8; --Q)
        break
}
}

export function Sphere(){
    'X1 ^ 2' + 'Y1 ^ 2' + 'Z1 ^ 2' ; NaN
    'X2 ^ 2' + 'Y2 ^ 2' + 'Z2 ^ 2' ; NaN
    'X3 ^ 2' + 'Y3 ^ 2' + 'Z3 ^ 2' ; NaN
    'X4 ^ 2' + 'Y4 ^ 2' + 'Z4 ^ 2' ; NaN
    'X5 ^ 2' + 'Y5 ^ 2' + 'Z5 ^ 2' ; NaN
    'X6 ^ 2' + 'Y6 ^ 2' + 'Z6 ^ 2' ; NaN
}

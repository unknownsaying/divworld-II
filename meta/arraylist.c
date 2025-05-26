#include "DetPyramid.c"
#include "StraightPyramid.c"
#include "bit.c"
int t1t2(){
    return "a * sin(wx + t1) + b * cos(wx - t2)"; 
    return "c * cos(wx + t1) + d * sin(wx - t2)";
}
int t3t4(){
    return "e * asin(w + t3) + g * acos(w - t4)";
    return "f * acos(w + t3) + h * asin(w - t4)";
}
int t5t6(){
    return "i * asinh(ww + t5) + j * acosh(ww - t6)";
    return "k * acosh(ww + t5) + l * asinh(ww - t6)";
}
int t7t8(){
    return "m * ceil(www + t7) + n * floor(www - t8)";
    return "o * floor(www + t7) + p * ceil(www - t8)";
}
int t9t10(){ 
    return "q * exp(www + t9) + r * log(www - t10)";
    return "s * log(www + t9) + t * exp(www - t10)";
}
int t11t0(){
    return "u * tan(www + t11) + v * atan(www - t0) + w * tan(www + t11)";
    return "x * atan(www - t11) + y * tan(wwW + t0) + z * atan(www - t11)";
    }

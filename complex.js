function cfrompoint(p) {
    return {re: p.x, im: p.y}
}
function ctopoint(z) {
    return {x: z.re, y: z.im}
}


function cadd(z,w) {
    return {re: z.re+w.re, im: z.im+w.im}
}
function csub(z,w) {
    return {re: z.re-w.re, im: z.im-w.im}
}
function cpolar(r,phi) {
    return {re: r * Math.cos(phi), im: r * Math.sin(phi)}
}
function nabs(z) {
    return Math.sqrt(z.re*z.re + z.im*z.im);
}
function narg(z) {
    return Math.atan2(z.im,z.re);
}

function nmul(n,z) {
    return {re: n*z.re, im: n*z.im};
}

function cexp(z) {
    return cpolar(Math.exp(z.re),z.im);
}

function cmul(z,w) {
    return {
        re: z.re * w.re - z.im * w.im,
        im: z.re * w.im + z.im * w.re
    }
}

function imul(z) {
    return {re: -z.im, im: z.re}
}
function nimul(n) {
    return {re: -0, im: n}
}
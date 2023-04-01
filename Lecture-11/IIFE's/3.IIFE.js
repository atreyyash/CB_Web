((cl, a, s, sq) => { 
    cl(a(10, 20));
    cl(a(10, 20));
    cl(a(10, 20));
    cl(a(10, 20));
    cl(s(50, 20));
    cl(s(50, 20));
    cl(s(50, 20));
    cl(s(50, 20));
    cl(s(50, 20));
    cl(s(50, 20));
    cl(s(50, 20));
    cl(s(50, 20));
    cl(s(50, 20));
    cl(s(50, 20));
    cl(s(50, 20));
    cl(s(50, 20));
    cl(s(50, 20));
    cl(s(50, 20));
    cl(s(50, 20));
    cl(s(50, 20));
    cl(s(50, 20));
    cl(sq(25));
    cl(sq(36));
    cl(sq(36));
    cl(sq(36));
    cl(sq(36));
    cl(sq(36));
    cl(sq(36));
    cl(sq(36));
    cl(sq(36));
    cl(sq(36));
})(console.log,
    (a, b)=> {
        return a + b;
    },
    (a, b)=> {
        return a - b;
    },
    Math.sqrt
);
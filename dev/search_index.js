var documenterSearchIndex = {"docs":
[{"location":"#TrigPolys","page":"Introduction","title":"TrigPolys","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"TrigPolys.jl is a package for fast manipulation of trigonometric polynomials.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"A trignometric polynomial is defined on x in 02pi) by","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"p(x) = a_0 + sum_k=1^n a_k cos(kx) + a_-k sin(kx)","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"The polynomial p(x) can be represented either by 2n+1 coefficients a_k or by evaluations at 2n+1 distinct points in the interval 02pi). Each representation is useful in different situations: the coefficient representation is useful for truncating or increasing the degree of a polynomial whereas the evaluation representation is useful for adding and multiplying polynomials.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"This package provides the functions evaluate and interpolate to convert efficiently between these two representations. These operations are implemented via the Fast Fourier Transform (FFT) provided by the FFTW.jl library.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"For example, multiplying two trigonometric polynomials is implemented with the following code:","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"function Base.:*(p1::TrigPoly, p2::TrigPoly)\n    n = p1.n + p2.n\n    interpolate(evaluate(pad_to(p1, n)) .* evaluate(pad_to(p2, n)))\nend","category":"page"}]
}

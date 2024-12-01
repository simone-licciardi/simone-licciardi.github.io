# Takeaways on Normed and Banach Spaces

## 1. Vector Spaces
### Concepts: linear space, finite and infinite dimensionality
- A linear (vector) space is one where we can add and multiply by scalar in the accustomed manner.
- We can charachterize finite dimensionality as "all linearly independent sets are finite"; equivalently, the key point is that it has a (finite) basis.
- We can charachterize infinite dimensionality by the lack of finiteness, of an upper bound that is. So, it's the same as "for all N there is a linearly independent set of cardinality N". Notably, failing this condition would amount to the set being a (finite) basis.
### Results
- If V is a linear space, then the functional space over V, F(X,V), inherits its structure indipendently of X.
- If V is a linear space, and X is a finite set, then the functional space over V, F(X,V), inherits its dimensional finiteness.

## 2. Normed Spaces
### Concepts: norm control and norm equivalence
- To deal with a vector space, one uses the control from a (non-metric) topology, a metric, or a norm. Notably, a norm implies a metric which implies a topology.
- (Kuratowski Embedding Theorem) A metric that comes from an underlying norm (actually, that can be isometrically embedded to a normed space) is one that 
	1. Is a vector space
	2. Satisfies homogeneity: $\lambda d(v,0) = d(\lambda v,0)$ for all $v$ and $\lambda$
	3. Satisfies translational invariance: $d(x,y)=d(x+c,y+c)$, extending (2) to global validity.
- Two norms are equivalent if we have homogeneus bounds on how much error we could be introducing using one instead of the other. Equivalently, the concept of "near" implied by these is the same (up to a factor, that is). So, we have the charachterization that two norms are equivalent if and only if they produce the same topology.
### Results
- For finite-dimensional spaces, all norms are equivalent. This makes norms very uninteresting in that case.
- Norm for continuous and bounded (or continuous-on-compact) spaces as the best bound, and that the space of l^p summable sequences is a vector and normed space.
- l^p norm definition, and that the space of l^p summable sequences is a vector and normed space.

## 3. Banach Spaces
### Banach proof
- Metric spaces can have 3 charachteristics: completeness (that all Cauchy sequences converge), compactness (the space is "small", or equivalently may be described fully with finitely many points) and connectedness (that properties may be studied in an homogeneus setting, without caring whether moving from x to y in the space modifies the properties such as the topology in a structural manner).
- Normed spaces are never compact, and always connected; a consequence of being vector spaces if you want. They can be complete, and in that case we say they are Banach. Due to the above charachterization of normed spaces, being BSp is the same as requiring that the space has not "holes" where we would expect convergence but the space won't allow it. In other terms, what could have been a problem of either the space or the metric, is now just about the space, since the metric satisfies (2) and (3).
- General approach to show Banach: take a Cauchy sequence, find a candidate limit, show it belongs to the set, and that the sequence converges there.
- c0 remark
### Abs summable series
- 

## 4. Operators and functionals
- Integral operators (with kernel) are linear operators
- For finite-dimensional spaces linearity implies automatically continuity: so we only require the former.
- For infinite-dimensional spaces, we require operators to be continuous as well. A tailored charachterization of continuity applies, in terms of homogeneus boundedness of the operator ("relative boundedness").
- Bounded operators are uniformly continuous.
- Equivalently, bounded opeartors into a banach space can be uniquely extended from a linear subspace to its closure.
- The space B(V,W) of bounded operators from V into w is normed by the dual norm (the minimum $C$ for which $\| T v\| < C\|v\|$).
- B(V,W) inherits with the abovev norm inherits the completeness from W.
- For W = K we find the notion of dual space and dual norm. So the dual of a normed space is a BSp.

## 5. Subspaces and Quotient space
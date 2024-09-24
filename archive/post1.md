Yesterday, I was looking at information entropy and data entropy. While both ideas did make sense in their own contextes I was trying to explain to a friend why they encompassed the same idea, from different points of view.
The only problem was that while thinking about how to answer, I had suddenly realized that my understanding of the matter was a justification, rather than the proper **why**.

After a few hours on the matter, the relationship between them is not mostly clear. I really hope this post, largely an intuitive interpretation of information theory, will help other fix similar doubts.

## What is information?

For us normal people (that is not philosophers nor logicians), it is saying something about something. Information theory basically furnishes a model for this.

In the following, what we will be talking *about* is an experiment, that is whether an event has happened. In (applied) mathematics the standard model for this is a random variable. Later, its probabilistic properties will be useful as well.

Moreover, we will need a manner of *saying something*. This is not a pedantic question. Imagine these opposed situations: in the first, we acquire the oucome of X with our eyeballs, in the second someone else does and tells us what he has seen (while we cannot see X). Turns out that the first is just an instinctive way of cutting off the second step. So, to model information, we need to model the transfer of information from the "sensor" to us. The base ingredient is a d-letters alphabeth (say the binary one {0,1}, d = 2), and then a dictionary (a map from the outcomes x_i in XX to the words, sequences of symbols from the dictionary).

An unambiguous way to quantify how much information is in a message, is to look at the average lenght of a word. 
---
layout: post
title: Conditional Probablity and Bayes Theorem
categories: 
- Statistics
tags:
- 
description: Conditional Probablity and Bayes Theorem

---   

We first understand the concept of **Independent Events** and **Dependent Events** 

## Independent Events

Events are **Independent**, when each event is NOT affected by any other events.  

Example : A coin toss. The first coin toss event is completely independent of the second coin toss event

## Dependent Events  

Events are **Dependent**, meaning each event is affected by any other events.  

Example : Suppose we have 2 red balls and 3 green balls in a bag. 

<img src="../../assets/images/conditional-probablity/2red3green.jpg"/>

What is the probablity that we have picked a green ball after we have picked a red ball ? In this case, we are **not putting the ball in the bag** after we have picked the ball

<img src="../../assets/images/conditional-probablity/OneRedThreeGreen.jpg"/>  

Event A : Probablity that you picked a red ball = 2/5  
Event B : Probablity that you picked a green ball = 3/4  

The probablity that we have picked the green ball after we have picked the red ball is 2/5*3/4 =6/20

Mathematically , this can be represented as  
**P( A and B ) = P(A) * P(B \| A)**

The **P(B \| A)** denotes the probablity of B given event A has occurred. The symbol \| denotes given.  

More formally , P(A $ \cap $ B ) =  P(A) * P(B \| A)

****

Consider another scenario where we are putting the ball back in the bag.

In this case, this is NOT a **Dependent Event**

Event A1 : Probablity that you picked a red ball = 2/5  
Event B1 : Probablity that you picked a green ball = 3/5  

The probablity that we have picked the green ball after we have picked the red ball is 2/5*3/5 =6/25

## Properties of Independent Events  

We saw the above example of an Independent event. Mathematically , this can be formulated as below:  

1. P(A \| B ) = P(A)  
2. P(B \| A ) = P(B)  
3. P(A $ \cap $ B ) = P(A) * P(B)  

## Bayes Theorem  

The probability of two events A and B happening, P(A$ \cap $ B), is the probability of A, P(A), times the probability of B given that A has occurred, P(B \| A).  

P(A $ \cap $ B) = P(A)P(B\|A) - Equation (1)  

On the other hand, the probability of A and B is also equal to the probability of B times the probability of A given B.  
P(A $ \cap $ B) = P(B)P(A\|B) - Equation (2)  

P(B)P(A\|B) = P(A)P(B\|A)  - Equation (3)  

P(A\|B) = P(A)P(B\|A) / P(B) - Equation (4)  
Therefore the probablity of A given B  is equal to the Probablity of A times the Probablity of B given A divided by the probablity of A  

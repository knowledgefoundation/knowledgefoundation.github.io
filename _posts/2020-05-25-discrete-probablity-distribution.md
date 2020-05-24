---
layout: post
title: Discrete and Continuous Probability distribution examples
categories: 
- Statistics
tags:
- 
description: Discrete and Continuous Probability distribution examples

---   

We continue our discussion of the Discrete and Continuous Probability distribution.   

## Blood Types - Discrete  distribution function  
 
 Here we present the distribution of different **Blood Types**   

<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">x</th>
      <th scope="col">p(x)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>O</td>
      <td>45%</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>A</td>
      <td>40%</td>
    </tr>
    <tr>
      <th scope="row">3</th>
        <td>B</td>
        <td>11</td>
    </tr>
    <tr>
      <th scope="row">4</th>
        <td>AB</td>
        <td>4</td>
    </tr>
    </tbody>
</table>

## Emergency Room probability distribution function  

The number of patients seen in an Emergency Room in any given hour is provided by a random variable x 

<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">9</th>
      <th scope="col">10</th>
      <th scope="col">11</th>
      <th scope="col">12</th>
      <th scope="col">13</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>.3</td>
      <td>.3</td>
      <td>.2</td>
      <td>.1</td>
      <td>.1</td>
    </tr>
   
  </tbody>
</table>

1. Find the probability that exactly 13 patients arrive in a given hour

    Answer = p(x = 13 ) = 0.1

2. Find the probability that at least 12 patients arrive  

    Answer = p(x = 12 ) + p(x = 13 )  = 0.1 + 0.1 = 0.2  

3. Find the probability that at most 11 patients arrive  

    Answer = p(x = 9 ) + p(x = 10 )  + p( x= 11)= 0.3 + 0.3 + 0.2 = 0.8  

## Continuous probability distribution function  

Any continuous mathematical function that integrates to 1 is a probablity function.  

The probabilities are provided for a range of values rather than for a single value. The exponential function is an example of a continuous probability distribution.  

Imagine that the survival times after a lung tansplant follow an exponential function. Then the probablity of a patient will die in the second year of the surgery ( the range is between 1 and 2) is 23%.  

$$\int_{1}^{2} e^{-x} dx$$ =  
$$\left. e^{-x} \right|_{1}^{2}$$ = 23%

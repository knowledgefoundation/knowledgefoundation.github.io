---
layout: post
title: Binomial Probability distribution 
categories: 
- Statistics
tags:
- 
description: Binomial Probability distribution

---   

Binomial Probability distribution has the following characteristics:  

* A fixed number of trials **n**. e.g., 20 coin toss , 40 students  

* A binary outcome, a success and a failure. Probability of success is p, probability of failure is 1-p. e.g., head or tail in a coin toss , pass or fail of sttudents in an exam, positive and negative results of a test of a patient.  

* Constant probability for each trial.e.g., The  probability of a head in each trial is p, the probability of a pass or fail of a student is p1.  


## Coin Toss Example

5 coin tosses. What is the probability that there are 3 Heads and 2 Tails ?  This is an example of a **Binomial Probability Distribution**. 

<div class="img_row">
	<img class="col three" src="../../assets/images/binomial-distribution/dice.jpg"/>
</div>


Probability of a head is 0.5. One way to get 3 Heads and 2  Tails is HHHTTT. Probability is $${(0.5)}^{5}$$. The other ways of having 3 Heads and 2  Tails is provided below.  

<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Outcome</th>
      <th scope="col">Probability</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>HHHTT</td>
      <td>$${(0.5)}^{5}$$</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>HHTHT</td>
      <td>$${(0.5)}^{5}$$</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>HHTTH</td>
      <td>$${(0.5)}^{5}$$</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>THHTH</td>
      <td>$${(0.5)}^{5}$$</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>THHHT</td>
      <td>$${(0.5)}^{5}$$</td>
    </tr>
     <tr>
      <th scope="row">7</th>
      <td>HHTHT</td>
      <td>$${(0.5)}^{5}$$</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>TTHHH</td>
      <td>$${(0.5)}^{5}$$</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>THHTH</td>
      <td>$${(0.5)}^{5}$$</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>THTHH</td>
      <td>$${(0.5)}^{5}$$</td>
    </tr>
    </tbody>
</table>

There are therefore $${5 \choose 3}$$ ways of getting 3 heads and 2 tails. Therefore the probability is  
$${5 \choose 3}$$ * $${(0.5)}^{3} * {(0.5)}^{2}$$.  

Therefore the probability using **n** trials and getting **X** success is $${n \choose X}$$ * $${(p)}^{X} * {(1-p)}^{n-X}$$.  

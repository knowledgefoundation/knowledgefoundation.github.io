---
layout: post
title: Confidence Interval calculation using z statistic
categories: 
- Statistics
tags:
description: Confidence Interval calculation using z statistic

---   

We would understand the confidence interval calculation through an example.  

## Copper Mining  

A mining company needs to estimate the average amount of copper ore per ton mined.A random sample of 50 tons gives a sample mean of 146.75 pounds. The population standard deviation is assumed to be 35.2 pounds.

What is the 95% , 90% and 99% confidence interval for the average amount of copper in the population of tons mined. 

**Probability outside the confidence interval is referred to as $$\alpha$$.We wish to construct a (1-$$\alpha$$) confidence interval for the population mean**

A (1-$$\alpha$$) confidence interval for the population mean is provided by  

$$\bar x$$ - $$\lvert z_{\alpha/2} \rvert$$ $$\sigma$$ / $$\sqrt{n}$$ < $$\mu$$ < $$\bar x$$ + $$\lvert z_{\alpha/2}\rvert$$ $$\sigma$$/ $$\sqrt{n}$$

<div class="img_row">
	<img class="col three" src="../../assets/images/confidence-interval/ci.jpg"/>
</div>

<hr/>

Here, $$\bar x$$ is 146.75 pounds.$$\sigma$$ is 35.2 pounds and n = 50

### 95%  

(1-$$\alpha$$) confidence interval = 95%

$$\alpha$$ = 5% and $$\alpha/2$$ = 2.5% or 0.025
<img src="../../assets/images/confidence-interval/z-alpha-by-2.jpg"/>


The z value corressponding to 0.025 is -1.9596 which can be obtained in excel with the formula 

> NORM.INV(probability, mean, standard deviation)

NORM.INV(0.025, 0, 1) =-1.9596 = -1.96

Therefore 95% confidence interval is between

* 146.75 -1.9596 *35.2 / squareroot(50)  =136.9932371

* 146.75 +1.9596 * 35.2 / squareroot(50) = 156.5067629 

### 90%  

(1-$$\alpha$$) confidence interval = 90%

The z value corressponding to 0.05 is -1.644853627
which can be obtained in excel with the formula 

> NORM.INV(probability, mean, standard deviation)

NORM.INV(0.05, 0, 1) =-1.644853627

Therefore 90% confidence interval is between

* 146.75 -1.644853627 *35.2 / squareroot(50)  =138.5618664

* 146.75 +1.644853627 * 35.2 / squareroot(50) = 154.9381336

### 99%  

(1-$$\alpha$$) confidence interval = 99%

The z value corressponding to 0.005 is -2.575829304
which can be obtained in excel with the formula 

> NORM.INV(probability, mean, standard deviation)

NORM.INV(0.005, 0, 1) =-2.575829304

Therefore 99% confidence interval is between

* 146.75 -2.575829304 *35.2 / squareroot(50)  =133.92744
* 146.75 +2.575829304 * 35.2 / squareroot(50) = 159.57256

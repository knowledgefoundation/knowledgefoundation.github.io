---
layout: post
title: Confidence Interval calculation using t statistic
categories: 
- Statistics
tags:
description: Confidence Interval calculation using t statistic
---   

We would understand the confidence interval calculation through an example when the population standard deviation is not known, but the sample standard deviation is known.  

## Large Drug Store Weekly Sales

A large drug store wants to estimate average weekly sales for a brand of soap.A random sample of 13 weeks gives the following numbers:123,110,95,120,87,89,100,105,98,88,75,125,101.Give a 90% confidence interval for a weekly basis.  

**Probability outside the confidence interval is referred to as $$\alpha$$.We wish to construct a (1-$$\alpha$$) confidence interval for the population mean**

A (1-$$\alpha$$) confidence interval for the population mean is provided by  

$$\bar x$$ - $$\lvert t_{\alpha/2} \rvert$$ s / $$\sqrt{n}$$ < $$\mu$$ < $$\bar x$$ + $$\lvert t_{\alpha/2}\rvert$$ s/ $$\sqrt{n}$$

<hr/>

We calculate $$\bar x$$ = 101.2307692 and s = 15.13359313
and n = 13

### 90%  

(1-$$\alpha$$) confidence interval = 90%

$$\alpha$$ = 10% and $$\alpha/2$$ = 5% or 0.05


The t value corressponding to 0.05 is -1.9596 which can be obtained in excel with the formula 

> T.INV(probability, degrees of freedom -1)

T.INV(0.5,13-1) =1.782287556

Therefore 90% confidence interval is between

* 101.2307692 -1.782287556 *15.13359313/ squareroot(13)  =93.74996737

* 101.2307692 +1.782287556 *15.13359313/ squareroot(13) = 108.7115711

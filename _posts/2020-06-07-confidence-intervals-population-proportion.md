---
layout: post
title: Confidence Interval calculation for a population proportion
categories: 
- Statistics
tags:
description: Confidence Interval calculation for a population proportion
---   
We explain Confidence Interval calculation for a population proportion with the help of an example.  

## Quality Control safety devices  

A machine produces safety devices for use in helicopters. A quality control engineer regularly checks samples of the devices produced by the machine, and if too many devices are defective the production process is stopped and the machine is reaadjusted.If a random sample of 52 devices yeilds 8 defectives, give a 98% confidence interval for the proportion of defective devices made by the machine. 

**Probability outside the confidence interval is referred to as $$\alpha$$.We wish to construct a (1-$$\alpha$$) confidence interval for the population mean**

A (1-$$\alpha$$) confidence interval for the population mean is provided by   


$$\hat p$$ - $$\lvert z_{\alpha/2} \rvert$$ $$\sqrt{(\hat p)(1-\hat p)/n}$$ < **p** < $$\hat p$$ + $$\lvert z_{\alpha/2} \rvert$$ $$\sqrt{(\hat p)(1-\hat p)/n}$$

(1-$$\alpha$$) confidence interval = 98%

$$\alpha$$ = 2% and $$\alpha/2$$ = 1% or 0.01

The z value corressponding to 0.01 is  which can be obtained in excel with the formula 

> NORM.INV(probability, mean, standard deviation)

NORM.INV(0.01, 0, 1) = -2.326347874

$$\hat p$$ =  0.153846154

$$\lvert z_{\alpha/2} \rvert$$ $$\sqrt{(\hat p)(1-\hat p)/n}$$ =   0.116396782

<div class="alert alert-success" role="alert">
 Therefore the <b>90%</b> confidence interval is between  <b>0.037449372</b> and  <b>0.270242936</b>  
</div>  


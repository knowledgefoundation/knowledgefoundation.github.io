---
layout: post
title: z and t statistic
categories: 
- Statistics
tags:
- 
description: z and t statistic

---   

Z and t statistic are one of the most important building blocks in statistics. This information will help us to understand **confidence intervals**.  

Before we go into Z and t statistic , let us revise the previous concepts of Central Limit Theorem.  

## Central Limit Theorem  

Consider a random sample of n observations from a  population with mean $$\mu$$ and standard deviation $$\sigma$$.  

Let $$\bar x$$ be the sample mean. The **distribution** of $$\bar x$$ is approximately **Normal** with mean = $$\mu$$ and standard deviation **s** = $$\sigma$$ \ $$\sqrt{n}$$  

All normal distributions can be converted into standard normal distribution by subtracting the mean and dividing by the standard deviation.  

Z = (X - $$\mu$$) / $$\sigma$$ \ $$\sqrt{n}$$  

### Confidence Interval  

We want to have the confidence interval of the population but in all practical cases we would have the data for the sample. We would know the sample mean and the sample standard deviation.  

Z = (X - $$\mu$$) / $$\sigma$$ \ $$\sqrt{n}$$.  

Here $$\sigma$$ is the population mean, which might not be available in all practical cases. The sample standard deviation **s** is available in all cases. Therefore if we replace the $$\sigma$$ with **s** in the above formula , we would get a **t distribution with n-1 degrees of freedom**.  

t ( *n-1 degrees of freedom* ) = (X - $$\mu$$) / **s** / $$\sqrt{n}$$ 

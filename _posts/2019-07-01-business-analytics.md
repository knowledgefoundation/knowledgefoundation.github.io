---
layout: post
title: What is AI , Machine Learning , Deep Learning and Data Science ?
categories: 
- Welcome
tags:
- 
description: What is AI , Machine Learning , Deep Learning and Data Science ? Lets try to understand the buzzwords which you are hearing frequently ? How are they related ?     

---         

What is AI , Machine Learning , Deep Learning and Data Science ? Lets try to understand the buzzwords which you are hearing frequently ? How are they related ?         

Lets take an example of a Housing Dataset .

The Dataset has the following attributes
* size of the  House                   
* number of bedrooms               
* number of bathrooms              
* newly renovated ( yes / no )            
* price                   

Given the attributes size of the  House, number of bedrooms,number of bathrooms,newly renovated , predicting the price of the house is an example of a **machine learning problem**.    

Tha following analysis is an example of a **Data Science Problem**          
* Houses with 3 bedrooms are costlier than houses with 2 bedrooms though they have the same size. The size is measured in square feet.         
* Houses which are newly renovated but have the same number of bedrooms and bathrooms are 13% costlier             

There is a fuzzy difference between Machine Learning and Data Science. Machine learning is the field of study that gives computers the ability to learn without being explicitly programmed. This is a definition by Arthur Samuel many decades ago. 
<span style="color:blue">
Arthur Samuel 
</span>
was one of the pioneers of machine learning.          

In contrast, **Data Science** is the science of extracting knowledge and insights from data. So, the output of a data science project is often a slide deck, the PowerPoint presentation that summarizes conclusions for executives to take business actions or that summarizes conclusions for a product team to decide
how to improve a product ( example a website )              

**What is Deep Learning ?**                

Deep learning has a structure similiar to a figure below             
<div>
<img src="../../assets/images/DL.jpg" alt="Deep Learning">
</div>

The elements in the box comprise the **Neural Network**. The circles are the neurons. In a very very simplistic manner, the neurons and the connections between the neurons is a big mathematical equation. Nothing to be frightned off, this mathematical equation can be broken into simpler understandable units.               

**What is the difference between Deep Learning and Machine Learning ?**       

Deep Learning is a subset of Machine Learning.        

Machine learning algorithms use inputs which are provided with the data along with inputs created by the algorithm developer. The inputs created by the algorithm developer require domain knowledge of the problem. Machine learning algorithms do not create new features automatically. Deep Learning algorithms have the ability to learn features automatically from the data.              

**Relation between AI , ML , DL and DS**           

AI is composed of various things such as Machine Learning , Deep Learning and various others forms of methods such as Probalistic Graphical Models , Knowledge Graphs. Deep Learning is a specialized form of Machine learning. Data Science can be thought of as intersection of AI , ML , DL.         

<div>
<img src="../../assets/images/AI.jpg" alt="AI">
</div>

<br/>

**Interesting use cases of Machine Learning and Deep Learning**         

* Detect diabetic retinopathy to stop blindness from images. We are provided with a set of images and these images would be categorised whether the image has diabetic retinopathy  or not. The task would be to predict for a non categorised image whether the image is a diabetic retinopathy image or not.This task is that of a problem which can be solved by deep learning methods               

* Identify Pneumothorax disease in chest x-rays. This is similiar to the previous use case. We are provided with a set of images and these images would be categorised whether the image has Pneumothorax disease  or not .The task would be to predict for a non categorised image whether the image is a Pneumothorax disease image or not.This task is that of a problem which can be solved by deep learning methods        

* Detecting Fraud from customer transactions. We take this example from the **Kaggle** website               

`Imagine standing at the check-out counter at the grocery store with a long     line behind you and the cashier not-so-quietly announces that your card has   been declined. In this moment, you probably aren’t thinking about the data     science that determined your fate.`

`Embarrassed, and certain you have the funds to cover everything needed for an epic nacho party for 50 of your closest friends, you try your card again. Same result. As you step aside and allow the cashier to tend to the next customer, you receive a text message from your bank. “Press 1 if you really tried to spend $500 on cheddar cheese.”`

`While perhaps cumbersome (and often embarrassing) in the moment, this fraud prevention system is actually saving consumers millions of dollars per year. Researchers from the IEEE Computational Intelligence Society (IEEE-CIS) want to improve this figure, while also improving the customer experience. With higher accuracy fraud detection, you can get on with your chips without the hassle.`           

The above problem uses tabular data. For this problem we can use both machine learning as well as deep learning                   

**Acknowledgements**           

This post draws inspiration from Andrew Ng's lectures and Kaggle website.          










---
layout: post
title: Standard Deviation
categories: 
- Statistics
tags:
description: Standard Deviation

---   

```python
import numpy as np
import pandas as pd
```


```python
house_data = pd.read_csv("../input/kc_house_data.csv")
```


```python
house_data.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>date</th>
      <th>price</th>
      <th>bedrooms</th>
      <th>bathrooms</th>
      <th>sqft_living</th>
      <th>sqft_lot</th>
      <th>floors</th>
      <th>waterfront</th>
      <th>view</th>
      <th>...</th>
      <th>grade</th>
      <th>sqft_above</th>
      <th>sqft_basement</th>
      <th>yr_built</th>
      <th>yr_renovated</th>
      <th>zipcode</th>
      <th>lat</th>
      <th>long</th>
      <th>sqft_living15</th>
      <th>sqft_lot15</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>7129300520</td>
      <td>20141013T000000</td>
      <td>221900.0</td>
      <td>3</td>
      <td>1.00</td>
      <td>1180</td>
      <td>5650</td>
      <td>1.0</td>
      <td>0</td>
      <td>0</td>
      <td>...</td>
      <td>7</td>
      <td>1180</td>
      <td>0</td>
      <td>1955</td>
      <td>0</td>
      <td>98178</td>
      <td>47.5112</td>
      <td>-122.257</td>
      <td>1340</td>
      <td>5650</td>
    </tr>
    <tr>
      <th>1</th>
      <td>6414100192</td>
      <td>20141209T000000</td>
      <td>538000.0</td>
      <td>3</td>
      <td>2.25</td>
      <td>2570</td>
      <td>7242</td>
      <td>2.0</td>
      <td>0</td>
      <td>0</td>
      <td>...</td>
      <td>7</td>
      <td>2170</td>
      <td>400</td>
      <td>1951</td>
      <td>1991</td>
      <td>98125</td>
      <td>47.7210</td>
      <td>-122.319</td>
      <td>1690</td>
      <td>7639</td>
    </tr>
    <tr>
      <th>2</th>
      <td>5631500400</td>
      <td>20150225T000000</td>
      <td>180000.0</td>
      <td>2</td>
      <td>1.00</td>
      <td>770</td>
      <td>10000</td>
      <td>1.0</td>
      <td>0</td>
      <td>0</td>
      <td>...</td>
      <td>6</td>
      <td>770</td>
      <td>0</td>
      <td>1933</td>
      <td>0</td>
      <td>98028</td>
      <td>47.7379</td>
      <td>-122.233</td>
      <td>2720</td>
      <td>8062</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2487200875</td>
      <td>20141209T000000</td>
      <td>604000.0</td>
      <td>4</td>
      <td>3.00</td>
      <td>1960</td>
      <td>5000</td>
      <td>1.0</td>
      <td>0</td>
      <td>0</td>
      <td>...</td>
      <td>7</td>
      <td>1050</td>
      <td>910</td>
      <td>1965</td>
      <td>0</td>
      <td>98136</td>
      <td>47.5208</td>
      <td>-122.393</td>
      <td>1360</td>
      <td>5000</td>
    </tr>
    <tr>
      <th>4</th>
      <td>1954400510</td>
      <td>20150218T000000</td>
      <td>510000.0</td>
      <td>3</td>
      <td>2.00</td>
      <td>1680</td>
      <td>8080</td>
      <td>1.0</td>
      <td>0</td>
      <td>0</td>
      <td>...</td>
      <td>8</td>
      <td>1680</td>
      <td>0</td>
      <td>1987</td>
      <td>0</td>
      <td>98074</td>
      <td>47.6168</td>
      <td>-122.045</td>
      <td>1800</td>
      <td>7503</td>
    </tr>
  </tbody>
</table>
<p>5 rows × 21 columns</p>
</div>




```python
house_data["price"]
```




    0         221900.0
    1         538000.0
    2         180000.0
    3         604000.0
    4         510000.0
    5        1225000.0
    6         257500.0
    7         291850.0
    8         229500.0
    9         323000.0
    10        662500.0
    11        468000.0
    12        310000.0
    13        400000.0
    14        530000.0
    15        650000.0
    16        395000.0
    17        485000.0
    18        189000.0
    19        230000.0
    20        385000.0
    21       2000000.0
    22        285000.0
    23        252700.0
    24        329000.0
    25        233000.0
    26        937000.0
    27        667000.0
    28        438000.0
    29        719000.0
               ...    
    21583     399950.0
    21584     380000.0
    21585     270000.0
    21586     505000.0
    21587     385000.0
    21588     414500.0
    21589     347500.0
    21590    1222500.0
    21591     572000.0
    21592     475000.0
    21593    1088000.0
    21594     350000.0
    21595     520000.0
    21596     679950.0
    21597    1575000.0
    21598     541800.0
    21599     810000.0
    21600    1537000.0
    21601     467000.0
    21602     224000.0
    21603     507250.0
    21604     429000.0
    21605     610685.0
    21606    1007500.0
    21607     475000.0
    21608     360000.0
    21609     400000.0
    21610     402101.0
    21611     400000.0
    21612     325000.0
    Name: price, Length: 21613, dtype: float64



# median


```python
house_data["price"].median()
```




    450000.0



# mean


```python
house_data["price"].sum() ,len(house_data)
```


```python
house_data["price"].sum()/len(house_data) , house_data["price"].mean()
```




    (540088.1417665294, 540088.1417665294)



## Population  

It is the complete set of numerical information on a particular quantity in which we as an analyst are interested  

### Example 1 - Population  

Suppose we would like to understand the average height of all males in India, then the population would represent all males residing in India  

### Example 2 - Population  

Suppose we would like to understand the percentage of votes that a certain candidate would get for an election within a certain constituency. For this population would represent  all voters of the constituency.  

### Sample

It is a subset of the relevant population and is used to make inferences about the population. The sample must be **representative** of the population.  

### Example 1 - Sample  

Suppose we would like to understand the average height of all males in India, then the sample would represent some males residing in India  

### Example 2 - Sample  

Suppose we would like to understand the percentage of votes that a certain candidate would get for an election within a certain constituency. For this sample would represent some voters of the constituency.  


# standard deviation

**Population Standard Deviation** $$\sigma = \sqrt{\frac{\sum_{i=1}^N \left(x_i - \bar{x}\right)^2}{N}}$$

**Sample standard deviation** $$s = \sqrt{\frac{\sum_{i=1}^N \left(x_i - \bar{x}\right)^2}{N - 1}}$$


```python
house_data_mean= house_data["price"].mean()
```


```python
price = house_data["price"]
```


```python
pop_variance = ((price-house_data_mean)**2).sum()/len(price)
```

## Population standard deviation


```python
pop_standard_deviation = np.sqrt(pop_variance)
print(pop_standard_deviation)
```

    367118.7031813723
    


```python
price.std(ddof =0)
```




    367118.7031813722




```python
assert(round(pop_standard_deviation,5) == round(price.std(ddof =0),5))
```

# Sample standard deviation


```python
sample_variance = ((price-house_data_mean)**2).sum()/(len(price) - 1)
```


```python
sample_standard_deviation = np.sqrt(sample_variance)
print(sample_standard_deviation)
```

    367127.19648269983
    


```python
price.std()
```




    367127.1964826997




```python
assert(round(sample_standard_deviation,5) == round(price.std(),5))
```


```python

```

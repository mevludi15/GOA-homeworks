def manual_min(list): 
    m = list[0] 
    for i in list: 
        if i < m: 
            m = i 
    return m 

print(manual_min([10,20,-3,13,0,-15]))

def manual_max(listn):
    m = listn[0]
    for i in listn:
        if i > m:
            m = i 
    return m

print(manual_max([10,15,-11,0,20,6,-55]))
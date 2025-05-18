listn = [10, "10"]

try:
    print(listn[0] + listn[1])
except TypeError:
    print(int(listn[0]) + int(listn[1]))
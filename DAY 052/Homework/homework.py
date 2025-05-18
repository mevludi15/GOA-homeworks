strings = lambda x , y : x + y

result = strings("hello" , "world")
print(result)


sums = lambda x , y , n : x + y + n

nums = sums(12, 10, 8)
print(nums)


lists = lambda x : sum(x)

sumn = lists([12, 20, 10, 8, 20])
print(sumn)


symbol = lambda x , symbol : x.count(symbol)

symbols = symbol("mevludi" , "m")
print(symbols)
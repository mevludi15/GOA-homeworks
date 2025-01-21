numbers = [2, 4, 6, 8, 10]
doubled_numbers = list(map(lambda x: x * 2, numbers))
print(doubled_numbers)


names = ["Alice", "Bob", "Charlie"]
res1 = list(map(lambda name: "Hello " + name, names))
print(res1)

names1 = ["apple", "banana", "kiwi"]
res2 =list(map(lambda y: len(y), names1))
print(res2)

numbers1 = [-5, 3, -2, 7, 0, 10]
res3 = list(filter(lambda x1: x1 > 0, numbers1))
print(res3)

words = ["pear", "apple", "peach", "grape"]
res4 = list(filter(lambda w: w[0] == "p", words))
print(res4)


numbers = [10, 55, 42, 78, 65, 20]
res5= list(filter(lambda x: x > 50, numbers))
print(res5)
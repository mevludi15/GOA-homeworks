numbers = [1, 2, 3, 4, 5]
res1 = list(map(lambda x: x ** 2, numbers))
print(res1)

# celsius = [0, 20, 30, 40]
# res2 = list(map(lambda x: x * 33,8, celsius))
# print(res2)

words = ["hello", "world", "python"]
res3 = list(map(lambda word: word.capitalize(), words))
print(res3)

numbers1 = [1, 2, 3, 4, 5, 6, 7, 8]
res4 = list(filter(lambda x: x % 2 == 0, numbers1))
print(res4)


numbers3 = [3, 9, 15, 22, 27, 30]
res5 = list(filter(lambda x: x % 3 == 0, numbers3))
print(res5)


words1 = ["cat", "house", "tree", "car"]
res6 = list(filter(lambda word: len(word) >= 4, words))
print(res6)
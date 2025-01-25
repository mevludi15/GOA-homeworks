# შექმენით რაიმე list'ი რომელშიც იქნება integer'ები და შემდეგ ამოწერეთ მხოლოდ ისეთი რიცხვები რომლებიც მეტია ან ტოლია 40'ის.
# 2) შექმენით რაიმე list'ი რომელშიც იქნება integer'ები და შემდეგ გამოიტანეთ list'ი სადაც იქნება ყველა რიცხვის კვადრატი.

listn1 = [12, 15, 55, 60, 43, 32]
res1 = list(filter(lambda x: x >= 40,listn1))
print(res1)

listn2 = [12, 15, 55, 60, 43, 32, 22]
res2 = list(map(lambda x1: x1 ** 2, listn2))
print(res2)

listn3 = ["apple", "iphone", "banana", "pet"]
res3 = list(filter(lambda x2: x2.endswith("a"),listn3))
print(res3)
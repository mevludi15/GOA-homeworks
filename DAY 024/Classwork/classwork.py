listn = ["name1", "name2", "name3"]
print(len("hello world"))
listn.append("name4")
print(listn)
listn.insert(2, "name")
print(listn)
listn.pop(2)
print(listn)
listn.remove("name1")
print(listn)

list2 = ["item1", "item2", "item3"]
x =list2.pop(1)
print(x)
#pop მეთოდით ვშლით სასურველ სიტყვას ინდექსის მეშვეობით ხოლო remove'ს საშუალებით კი თუ ინდექსი არ გვახსოვს ვწერთ სიტყვას ზუსტად ისე როგორც ზემოთ გვეწერა 
#და თავისით ამოიშლება "ლისტიდან"

list2 = ["element1","element2","element3","element4"]
list2.insert(2,"element")
print(list2)
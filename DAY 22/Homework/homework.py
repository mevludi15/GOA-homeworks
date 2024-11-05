def adult (age):
    if age >= 18:
        return "you get discount"
    else:
        return "you don't get discount"
    
print(adult(18))

def manual_reverse(str1):
    return str1[::-1]

print(manual_reverse("mevludi"))



























# print("hello_world".upper())
# print("HellO WorLd".lower())
# print("HeLlO woRld".capitalize())
# print("HeLlo WorLD".swapcase())
# print("heLlo WORLD".swapcase())
# print("hello world".find("w"))











# ყოველივე ამ ფუნქციას იმიტომ ეწოდება მეთოდები რომ ისინი არიან ფუნქციები რომლებსაც მხოლოდ ერთი კონკრეტული ფუნქცია აქვს
#და გამოიყენება სწორედ ერთი კონკრეტული ფუნქციის შესასრულებლად მათ არ გააჩნიათ ბევერი ფუნქციის შესრულების უნარი.ასევე ეს მეთოდები
#მოქმედებენ მხოლოდ სტრინგზე(str).


# dot notation'ის საშუალებით ვიძახებთ ფუნქციებს როგორებიცაა .upper(), .lower(), .capitalize(), .swapcase()...
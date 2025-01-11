

# indexerror, syntaxerror, nameerror, valueerror

# indexerror'ი გამოდის მაშინ როდესაც გვაქვს ინდექსური შეცდომა მაგალითად list'ის შემთხვევაში. იმ შემტხვევაში თუ ჩვენ გვინდა გამოვიტანოთ
# ისეთი ინდექსი ლისტიდან რომელიც არარსებობს გამოიტანს indexerror'ს

# syntaxerror გამოდის იმ შემთხვევაში თუ ჩვენს კოდს აკლია პატარა კომპონენტი როგორიცაა მაგალითა forloop'ის დროს : ან პრინტის დროს ',"

# nameerror გამოდის იმ შემთხვევაში როდესაც ვიყენებთ ისეთი ცვლადის სახლეს რომელიც ჯერ არშექმნილა

# valueerror გამოდის მაშინ როდესაც პროგრამა იღებს სწორი ტიპის არგუმენტს მაგრამ შეუსაბამო მნიშვნელობას




try:
    print(age)
except NameError:
    print("you had a Name Error")


listn = [1,2,3,4]

try:
    print(listn[6])
except IndexError:
    print("you had a index error")



int1 = "123s45"

try:
    print(int(int1))
except ValueError:
    print("you had a value error")
    
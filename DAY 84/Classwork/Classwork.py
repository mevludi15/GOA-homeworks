# გააკეთეთ multiple და multilevel inheritanceის მაგალითი ზუსტად ისე როგორც კლასში გავაკეთეთ ოღონდ ადამიანებზე
# cheatsheet:
# Human

# Programmer(Human)
# Designer(Human)

# Goaprogrammer(Programmer)
# Goadesiner(Designer)

# Professional(Programmer, Designer)


class Human:
    def __init__(self, name):
        self.name = name

    def eat(self):
        print(f"{self.name} can eat")
    
    def sleep(self):
        print(f"{self.name} can sleep")

class Programmer(Human):
    def code(self):
        print(f"{self.name} can use HTML, CSS")

class Designer(Human):
    def Design(self):
        print(f"{self.name} can create Design")

class Goaprogrammer(Programmer):
    def code1(self):
        print(f"{self.name} can use HTML, CSS, JavaScript")
    
    def leader(self):
        print(f"{self.name} Can become a leader")

class Goadesiner(Designer):
    def Design1(self):
        print(f"{self.name} can crate best Design")

    def design(self):
        print(f"{self.name} Can use software to create designs")


class Professional(Goaprogrammer, Goadesiner):
    pass    

goadesiner = Goadesiner("Chad")
goaprogrammer = Goaprogrammer("Chad programmer")

goadesiner.Design1()
goadesiner.design()
goadesiner.eat()
goadesiner.sleep()
goadesiner.Design()


# 2) ახსენით რაში გვჭირდება super()
# 3) ახსენით როგორ მუშაობს super()
# 4) გააკეთეთ super()'ის მაგალითი, ანუ აიღეთ რაიმე კლასი და როდესაც მის child class'ს შექმნით დაამატეთ ახალი property  და წამოიღეთ ძველებიც

# super() გვჭირდება ახალი ელემენტის დასამატებლად რათა შევინარჩუნოთ ძველი ელემენტი და მისი მნიშვნელობებიც 

# Super() ძველი ელემენტიდან ინახავს მნიშვნელობებს რათა " არ წაიშალოს" შემდეგ კი ახალ შეგვიძლია მისი გამოყენებით დავამატოთ 
# ახალი მნიშვნელობებიც

class Huamn1:
    def __init__(self, eye_color):
        self.eye_color = eye_color

    def color(self):
        print(f"Human have {self.color} eye")

class Human2(Huamn1):
    def __init__(self, eye_color, height):
        super().__init__(eye_color)
        self.height = height

humans = Human2("brown")

humans.color()
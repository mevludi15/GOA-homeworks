class Motorcycle:
    Moto_counter = 0

    def __init__(self, color, hp, brand, rpm):
        self.color = color
        self.hp = hp
        self.brand = brand
        self.rpm = rpm
        Moto_counter += 1

m1 = Motorcycle("Black", 300, "Kavasaki", 17000)
m2 = Motorcycle("Green", 200, "Ducati", 15000)

print(m1.color)
print(m2.color)


class Animal:
    def __init__(self, name):
        self.name = name

        def sleeping(self):
            print(f"{self.name} is sleeping")

class Cat(Animal):
    def meaw(self):
        print("MEAW")


class Dog(Animal):
    def woof(self):
        print("WOOF")


class Cow(Animal):
    def muu(self):
        print("MUU")


 
#inheritance საშუალებას გვაძლევს განვსაზღვროთ კლასი, რომელიც მემკვიდრეობით მიიღებს ყველა მეთოდს და თვისებას სხვა კლასისგან ან 
#საკუთარი parent კლასისგან


#inheritance საშუალებას გვაძლევს ჩვენი კოდი უფრო მოკლედ და პრაქტიკულად დავწეროთ ასევე შეგვიძლია ზოგადი კლასის შექმნა სადაც 
#გავაერთიანებთ კონკრეტულ ელემენტებს.

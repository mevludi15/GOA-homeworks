# 1) შექმენით car class, მიეცით 4 ატრიბუტი და შეუქმენით 2 ფუნქცია class'ში. ამ class'ისგან შექმენით 3 ობიექტი და სამივეზე გატესტეთ ყვლა ატრიბუტის გამოტანა და მეთოდები.
# 2) შექმენით person class, მიეცით 3 ატრიბუტი და შეუქმენით 2 ფუნქცია class'ში.  ამ class'ისგან შექმენით რამდენიმე ობიექტი და პირველ ორზე გატესტეთ ყვლა ატრიბუტის გამოტანა და მეთოდები. ასევე შექმენით დამატებითი კლასის ცვლადი რომელიც დათვლის რამდენი ადამიანია ჯამში.
# 3) დაწერეთ რას ეწოდება dunder method
# 4) დაწერეთ რას ეწოდება instance variables
# 5) დაწერეთ რას ეწოდება class variables
# 6) ახსენით რა არის blueprint

# blueprint არის რაღაცის წინასწარ დაგეგმარება, გეგმა ან ნახაზი რომლის მიხედვითაც ვაგებთ მაგალითად სახლს...

# class variables არის იმ კლასების რაოდენობა რამდენ კალსსაც შევქმით ჩვენ

# instance variables არის ცვლადი რომელიც შექმნილია კალსში

class car:
    def __init__(self, Brand, Model, Hp, Engine):
        self.brand = Brand
        self.model = Model
        self.hp = Hp
        self.engine = Engine

    def drive(self):
        print(f"you are drive {self.brand} {self.model}")

    def stop(self):
        print("you stop the car")

car1 = car("Mercedes", "W140", 475, 6.0)
car2 = car("BMW", "E60", 500, 4.4)
car3 = car("porche", "GT 3rs", 518, 4.0)

car1.drive()
car2.drive()
car3.drive()
car1.stop()
car2.stop()
car3.stop()

class cars:
    car_owners = 0

    def __init__(self, Brand, Color, Engine):
        self.brand = Brand
        self.color = Color
        self.engine = Engine
        cars.car_owners +=1

        def drive1(self):
            print(f"you are drive {self.color} {self.brand}")

        def stop1(self):
            print("you stop the car")
        
        print(car_owners)
cars1 = cars("Mercedes", "Black", 6.0)
cars2 = cars("BMW", "White", 4.4)
cars3 = cars("porche", "Blue", 4.0)

# cars1.drive1()
# cars2.drive1()
# cars1.stop1()
# cars2.stop()



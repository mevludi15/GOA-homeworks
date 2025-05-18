# abstractclasses არის კლასი რომლის გადაწერა კოპირება შეუძლებელია და ასევე შეიცავს 1 ან მეტ აბსტრაქტულ მეთოდს

# polymorphism გულისხმობს მეთოდებს, ფუნქციებს ოპერატორებს იგივე სახელწოდებით
# რომელიც შეიძლება გაეწეროს მრავალ კლასს

#  aggregation არის ფორმა რომელშიც ერთი კლასი შეიცავს ან შედგება სხვა კლასის ერთი ან მეტი ობიექტისგან
from abc import ABC, abstractmethod

class Animal(ABC):

    @abstractmethod
    def make_sound(self):
        pass

    def sleep(self):
        print("Sleeping")

class Dog(Animal):
    def make_sound(self):
        print("Woof!")

class Cat(Animal):
    def make_sound(self):
        print("Meow!")



#2)
class Animal1:
    def make_sound(self):
        print("animal sound")

class Dog(Animal1):
    def make_sound(self):
        print("Woof!")

class Cat(Animal1):
    def make_sound(self):
        print("Meow!")


def animal_sound(animal1):
    animal1.make_sound()



#3)
class Engine:
    def __init__(self, horsepower):
        self.horsepower = horsepower

    def start(self):
        print(f"Engine start width {self.horsepower} HP")

class Car:
    def __init__(self, brand, engine):
        self.brand = brand
        self.engine = engine 

    def start(self):
        print(f"{self.brand} is starting.")
        self.engine.start()


engine = Engine(700)
car = Car("Mercedes", engine)

car.start()
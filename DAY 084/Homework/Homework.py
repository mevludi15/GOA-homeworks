class Class1:
    def Humans1(self):
        print("10 Human") 
       
class Class2(Class1):
    def Humans2(self):
        print("15 Human")
 
class Class3(Class1):
    def Humans3(self):
        print("20 Human")  
        
class Class4(Class2, Class3):
    pass 


humans = Class4()
humans.Humans1()



class Base:
    def __init__(self, name, color, height):
        self.name = name
        self.color = color
        self.height = height


class Intermediate(Base):
    def __init__(self, widht, name, height, color):
        super().__init__(name, color, height)
        self.width = widht
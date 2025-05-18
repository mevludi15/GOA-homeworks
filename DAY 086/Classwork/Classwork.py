from abc import ABC, abstractmethod

class Vechicle_parts(ABC):

    @abstractmethod
    def sound(self):
        pass

class Turbo(Vechicle_parts):
    # def sound(self):
    #     print("STUTU")
    pass

class Kompresor(Vechicle_parts):
    def sound(self):
        print("WUUUUU")

class Electric(Vechicle_parts):
    def sound(self):
        print("SSSSSSSSS")


turbo = Turbo()
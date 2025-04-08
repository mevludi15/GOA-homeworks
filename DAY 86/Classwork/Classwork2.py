class Car_parts_library:
    def __init__(self, name):
        self.name = name
        self.parts = []

    def add_parts(self, parts):
        self.parts.append(parts)

    def part_lists(self):
        return [f"{i.engine_parts}" for i in self.parts]

class Part:
    def __init__(self, engine_parts):
        self.engine_parts = engine_parts


car_parts_library = Car_parts_library("This is my car parts library")


part1 = Part("Piston")
part2 = Part("Turbo")
part3 = Part("Crankshaft")


car_parts_library.add_parts(part1)
car_parts_library.add_parts(part2)
car_parts_library.add_parts(part3)


for i in car_parts_library.part_lists():
    print(i)
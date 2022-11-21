print("hello")
print("hello")
my_age = 21 
year = 123879
deadage = my_age+year

#age = input("How old are you? ")
#print("You are {} years old".format(age))

a = 10
b = 10

if a > b:
    print("a is greater than b")
elif a == b:
    print("a is equal to b")
else:
    print("b is greater than a")

print("Finished")

"A" in "ABCD"

#  Simple solution
number = int(input("please enter a number between 1 and 100: "))
if number < 1 or number > 100:
   print("invalid number")
else:
   if number % 3 == 0 and number % 5 == 0:
      print("FizzBuzz")
   elif number % 3 == 0:
      print("Fizz")
   elif number % 5 == 0:
      print("Buzz")


#  Solution 2
number = int(input("please enter a number between 1 and 100: "))
if number < 1 or number > 100:
   print("invalid number")
else:
   if number % 3 == 0:
      print("Fizz",end='')
   if number % 5 == 0:
      print("Buzz")


my_list = [my_personality,my_name, m_Sname]
print(my_list)
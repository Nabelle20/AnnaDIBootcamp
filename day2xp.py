#exercise 1
my_fav_numbers = { 5, 20, 26, 1, 27, 25}
my_fav_numbers.add(3)
my_fav_numbers.add(9)
my_fav_numbers.pop()
print(my_fav_numbers)
x = my_fav_numbers.pop()
friend_fav_numbers = (2, 4, 6, 8)
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

#exercise 2 
#Given a tuple which value is integers, is it possible to add more integers to the tuple?
#No, you can't because tuples are immutable and therefore the sum can not be modified

#exercise 3 
basket = ["Banana", "Apples", "Oranges", "Blueberries"];
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
basket.count("Apples")
del basket
#print(basket)

#Exercise 4
#What is a float? What is the difference between an integer and a float? 
#ans:a float is a data type composed of a number that is not an integer,An integer is a whole number and a floating-point value, or float, is a number that has a decimal place.

rng = [x * 0.5 for x in range(3, 11)]
print(rng)

#Exercise 5
for i in range(1,21):
    print(i,end=" ")
for i in range(1,21):
    if (i%2 == 0 ):
        print(i)

#Exercise 6

#my_name = "Anna"
#there_name = input("please enter your name")

#while my_name != there_name:
    #there_name = input("please enter your name")

    #there_name += 1 

#exercise 7
 
fruits = input("Enter your favorite fruits(separate the fruits with a single space)")
fruit_List = fruits.split()

newfruit =  input("Enter a fruit")

if any(item == newfruit for item in fruit_List) :
        print("You chose one of your favorite fruits! Enjoy!")
else:
        print("You chose a new fruit. I hope you enjoy")

#exercise 8 

toppings = input("Enter pizza toppings:")

while toppings != "quit":
  print("you’ll add that topping to their pizza")
  toppings = input("Enter pizza toppings:")
  if toppings == "quit":
       print(toppings)

  

  


    






#Exercise 1 
print("Hello world\n" * 4)

#Exercise 2 
power = 99**3
print(power* 8)

#Exercise 3 
#>>> 5 < 3 - False
#>>> 3 == 3 - True
#>>> 3 == "3" - False
#>>> "3" > 3 - False
#>>> "Hello" == "hello" - False  

#Exercise 4 
computer_brand = "accer"
print(f"I have an {computer_brand} computer")

#Exercise 5 
name = "Anna"
age = 21
shoeSize = 39
sentence = f"my name is  {name}, I am {age} and my shoe size is {shoeSize}"
print(sentence)

#exercise 6 
a = 23
b = 12
if (a > b):
    print("Hello World")

#exercise 7 
num = int(input("please enter a number to check if it's odd or even "))
if(num%2)==0:
    print("The number is even ")

else: 
    print("the number is odd")

#exercise 8 

name = (input("please enter your name: "))
other_name = (input("please enter your another name: "))
if (other_name == name):
     print("We have the same name")

elif (other_name != name):
    print("Not same")

#exercise 9 

inches = int(input("please enter your height in inches "))
cm = inches * 2.54 
if (cm > 145):
    print("you are tall enough to ride")

else: 
    print("you need to grow some more to ride")

    
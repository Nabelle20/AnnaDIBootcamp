# # Ex 1
def display_message():
     print("I am currently learning python")

display_message()

# # Ex 2
def favorite_book(title):
     print (f'One of my favorite books is {title}.')

favorite_book(input('Name a book: '))

# # Ex 3
def describe_city(city, country='Canada'):
    
    msg = city.title() + " is in " + country.title() + "."

    print(msg)



describe_city('Paris', 'France')

describe_city('Toronto')


# #Ex 4
import random



while True:

    number = int(input("Enter a number between 1 to 100: "))

    if number >0 and number <101:

        break



random_number = random.randint(0,100)



if number == random_number:

    print("Yaaay!!! It's a match")

else:

    print("Booooh!!! Better luck next time")



print("The number you entered is: ", number)

print("Random number generated is: " , random_number)


# # Ex 5
def make_shirt(size= "Large", message="I love Python" ):
    print (f'Shirt Size: {size} \nMessage: {message}')


make_shirt()
make_shirt("Medium",)
make_shirt("Small","I prefer JS")

#Ex 6


names = ["Lila", "Gandalf", "Harry", "Neville Longbottom"]
great_list=[]

def show_magicians(list):
    for i in list:
         print(i)
show_magicians(names)



def make_great(li):
    for i in li:
         i= great_list.append(f'{i} the great')
make_great(names)
print(names)
show_magicians(great_list)

#Ex7
import random
def get_random_temp():
    return random.randrange(-10,40)
function = [get_random_temp() for i in range(5)]
print(function)


def main():
    temperature = get_random_temp()
    print(f"La temperature is {temperature}°C")

    if(temperature < 0):
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif (temperature > 0 and temperature <= 16):
        print("Quite chilly! Don’t forget your coat")
    elif (temperature > 16 and temperature <= 23):
        print("The temp is good enough")
    elif (temperature > 24 and temperature <= 32):
        print(" Its warm enough")
    elif (temperature > 30 and temperature <= 40):
        print("It is  hot")
main()
def get_random_temp(season):
    if season == "Summer":
        return random.randrange(-10,16)
    if season == "autumn":
        return random.randrange(16,23)
    if season == "Winter":
        return random.randrange(24,32)
    if season == "Spring":
        return random.randrange(33,40)
    else:
        return random.randrange(-10,40)
def main():
    season = input("Enter Season==> ")
    temperature = get_random_temp(season)
    if(temperature < 0):
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif (temperature > 0 and temperature <= 16):
        print("Quite chilly! Don’t forget your coat")
    elif (temperature > 16 and temperature <= 23):
        print("The temp is good enough")
    elif (temperature > 24 and temperature <= 32):
        print("The temp is warm")
    elif (temperature > 30 and temperature <= 40):
        print("It is  hot")
main()


# EX Gold
#EX1
from datetime import date
age=0


def get_age(year, month, day):
     cdate = date.today()
     brithdate = date(year,month,day)
     diff = cdate - brithdate
     age = int(diff.days/365)
     return age
 

def can_retire(gender,date_of_birth):
     dob = date_of_birth.split("/")
     year=int(dob[0])
     month=int(dob[1])
     day=int(dob[2])
    

     age=get_age(year, month, day)

     if gender =="m":
         if age >= 67:
             print("You can Retire.")
         else:
              print("You cant Retire.")
     elif gender == "f":
         if age >= 62:#
             print("You can Retire.")
         else:
              print("You cant Retire.")

can_retire(input("Whats your gender? (m or f) "),input("Enter date of birth (yyyy/mm/dd): "))

#Ex2
def sequence_calc(y):
    X=int(y)
    XX=int(y+y)
    XXX=int(y+y+y)
    XXXX=int(y+y+y+y)
    result = X+XX+XXX+XXXX
    print(f'{result}({X}+{XX}+{XXX}+{XXXX})')

sequence_calc(input("Enter a number: "))



#EX3
import random
def throw_dice():
    return random.randint(1,6)


def throw_until_doubles():
    flag = True
    counter  = 0
    while flag:
        dice1 = throw_dice()
        dice2 = throw_dice()
        counter += 1
        if dice1 == dice2:
            flag = False
    return counter


def main():
    total = 0
    throw_num_li = []
    for i in range(0,100):
        throw_num = throw_until_doubles()
        throw_num_li.append(throw_num)
        total += throw_num
    avg = sum(throw_num_li)/len(throw_num_li)
    print(f'Total throws: {total}')
    print(f'Average thows for each double: {avg}')


main()

# EX NINJA
# EX 1
def get_full_name(first_name, last_name, middle_name=""):
         if len(middle_name)>0:
             middle_name = (f' {middle_name}')
             print(f'{first_name}{middle_name} {last_name}')

get_full_name(first_name="bruce", last_name="lee")
get_full_name(first_name="john", middle_name="hooker", last_name="lee")


#EX3
sentance = input("Enter a sentance: ")
sentance = sentance.split()
longest= 0
star="*"
for word in sentance:
    length = len(word)
if length > longest:
         longest = length

print(star*(longest+5))
for word in sentance:
     print(f'{star} {word} {" "*(longest-len(word))} {star}')
print(star*(longest+5))

#EX4






#Time Challenge
sen = input("Enter a sentance: ")
letter = input("Enter a Letter: ")

print(f'{letter} apperares {sen.count(letter)} times')

# Daily Challenge
Matrix = [
    ["7","i","3"],
    ["T","s","i"],
    ["h","%","x"],
    ["i"," ", "#"],
    ["s","M"," "],
    ["$","a"," "],
    ["#","t","%"],
    ["^","r","!"]
]

def read(liste,index,*args):
    return liste[index]
code=[]
top = 0
while top < (len(Matrix[0])):
    cpt=0
    for line in Matrix :
        char = read(line,top)
        if char.isalpha() and char != " ":
            code.append(char)
            cpt=0
        elif cpt==0:
            cpt += 1
        elif cpt==1:
            code.append(" ")
            cpt += 1

    top +=1
print("".join(code))

# Exercise 3 
# Predict the output of the following code snippets:
#     >>> 3 <= 3 < 9 -- (3 Less than or equal to 3 but less than 9) FALSE
#     >>> 3 == 3 == 3 --  TRUE
#     >>> bool(0) -- FALSE 
#bool is an inbuilt function in python that is used to return or convert a particular value or expression 
# to the boolean value i.e True and False.

#     >>> bool(5 == "5") -- False
#     >>> bool(4 == 4) == bool("4" == "4") -- TRUE
#     >>> bool(bool(None)) -- FALSE

#x = (1 == True) 
#y = (1 == False)
#a = True + 4
#b = False + 10

#print("x is", x)    #-- x is TRUE
#print("y is", y)    # y is FALSE
#print("a:", a)      # a: 5
#print("b:", b)      # b: 10



#exercise 4 

my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

print(len(my_text))

#exercise 5 
flag = True
sentence=input("Please input the longest sentence you can without the character “A”: ")
new_sentence=""

while flag is True:

    if len(new_sentence)>len(sentence):

        if "a" not in new_sentence:

           print("Congratulations")

           sentence = new_sentence

           break

    elif new_sentence == "q":

        flag = False    

    else: new_sentence = input("Enter another sentence: ")


import random
string =(input("please enter a string "))

if (len(string) <10 ): 
    print("string not long enough")
elif (len(string)>10) :
    print("string too long")

#print last character 
print(string[-1])
print(string[0])
disp_str = ""
for i in string : 
    disp_str += i
    print(disp_str)

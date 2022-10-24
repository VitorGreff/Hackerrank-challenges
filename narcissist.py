
from ctypes import sizeof


def narcissistic(value):
    strlenght = len(str(value))
    sum = 0
    list = []
    for i in range(0, strlenght):
        string = str(value)
        list = string
        sum = sum + int(list[i])**strlenght
    if(sum == value):
        print(value, "is narcissist")
        return True
    else:
        print(value, "is not narcissist")
        return False


def uppercase(word):
    vogals = "aeiou"
    ans = ""
    for i in range(0, len(word)):
        if word[i] in vogals:
            ans = ans + word[i].upper()
        else:
            ans = ans + word[i]
    return ans


def hexa(numero):
    hexa = "0123456789ABCDEF"
    ans = int(numero,16)
    print(ans)
    return ans

aaa = str(input("Digita alguma fita ai: "))
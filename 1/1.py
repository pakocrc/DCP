# %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
# Daily Coding Problem #1

# Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
# For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

def add_up_to_k(list, k):    
    for i in range(len(list)):
        for j in range(len(list)):
            print('i: %s. j: %s.'%(list[i], list[j]))

            if i != j and list[i] + list[j] == k:
                return True
    return False

# O(n)
def add_up_to_k_o_n(list, k):    
    seen = set()

    for item in list:
        if k - item in seen:
            return True
        seen.add(item)
    return False

print("Daily Coding Problem #1")
print(add_up_to_k([10, 15, 3, 7], 10))
print(add_up_to_k_o_n([10, 15, 3, 7], 10))

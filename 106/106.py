# %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
# Daily Coding Problem #106

# Given an integer list where each number represents the number of hops you can make, determine whether you can reach to the last index starting at index 0.
# For example, [2, 0, 1, 0] returns True while [1, 1, 0, 1] returns False.

def can_reach_end(hops):
    steps_left = 1

    for i in range(len(hops) - 1):
        steps_left = max(steps_left - 1, hops[i])
        if steps_left == 0:
            return False
    return True

print("Daily Coding Problem #106")
print(can_reach_end([2, 0, 1, 0]))
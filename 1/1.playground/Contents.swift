// MARK: - Daily Coding Problem #1

/// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
/// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

func addUpToK(list: [Int], k: Int) -> Bool {
    for item in list {
        for item2 in list {
            print("Item 1: \(item), item 2: \(item2)")
            if item + item2 == k {
                return true
            }
        }
    }
    return false
}

// O(N)
func addUpToKON(list: [Int], k: Int) -> Bool {
    var cache: [Int] = []

    for item in list {
        if cache.contains(k - item) {
            return true
        }
        cache.append(item)
    }
    return false
}

print("Daily Coding Problem #1")
print(addUpToK(list: [10, 15, 3, 7], k: 10))
print(addUpToKON(list: [10, 15, 3, 7], k: 10))


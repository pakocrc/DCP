// MARK: - Daily Coding Problem #106
/// Given an integer list where each number represents the number of hops you can make, determine whether you can reach to the last index starting at index 0.
/// For example, [2, 0, 1, 0] returns True while [1, 1, 0, 1] returns False

func hopOnTilEnd(list: [Int], hops: Int = 0) -> Bool {
    let newHops = (hops > 0 ? hops - 1 : hops) + (list.first ?? 0)

    if newHops > 0 && !list.isEmpty {
        return hopOnTilEnd(list: Array(list.dropFirst()), hops: newHops)

    } else if newHops == 0 && !((list.count) == 1) {
        return false
    }

    return true
}

func canReachEnd(list: [Int]) -> Bool {
    var stepsLeft = 1

    for item in list {
        stepsLeft = max(stepsLeft - 1, item)
        print("SL: \(stepsLeft)")

        if stepsLeft == 0 && list.last != item {
            return false
        }
    }
    return true
}

//print("\n")
//print("A. Hops: \(hopOnTilEnd(list: [2, 0, 1, 0]))\n")
//print("B. Hops: \(hopOnTilEnd(list: [1, 1, 0, 1]))")

print("\n")
print("A. Hops: \(canReachEnd(list: [2, 0, 1, 0]))\n")
print("B. Hops: \(canReachEnd(list: [1, 1, 0, 1]))")


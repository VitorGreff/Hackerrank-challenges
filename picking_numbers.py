def pickingNumbers(a):
    # start an array from 0 to 99
    freq = [0] * 100
    max_count = 0

    # increase each frequency position
    for num in a:
        freq[num] += 1

    # as you we wanna jump i+1, we have to set the range to 99 exclusive
    for i in range(1, 99):
        count = freq[i] + freq[i + 1]
        max_count = max(max_count, count)

    return max_count

print(pickingNumbers([4,6,5,3,3,1]))
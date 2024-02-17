def bubble_sort(arr):
    times_to_iterate_array = len(arr) - 1
    temp = 0
    swapped = False

    for i in range(0, times_to_iterate_array): 
        swapped = False
        for j in range(0,times_to_iterate_array - i):
            value = arr[j]
            nextValue = arr[j + 1]
            if (value > nextValue): 
                temp = value
                arr[j] = nextValue
                arr[j+1] = temp
                swapped = True
        if swapped == False: 
            break
    return arr

arr = [5, 3, 8, 4, 2, 1, 9, 6, 7]
print(bubble_sort(arr))
# Bubble Sort

For an array of N items, the array is scanned N - 1 times.

After the i-nth iteration, the i-nth largest value will be in the right place, so there is no need to reach the N - i position in the (i + 1)-nth iteration.

To enhance the bubble sort, the algorithm can stop if no swap is detected after an iteration.

**`Time complexity upper bound`**: O(n^2)

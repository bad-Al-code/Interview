/**
 * Two heap either use two-min heaps, two max-heap, or a min-heap and a max-heap simultaneously.
 *
 * Time:
 * 	- O(logn) to insert an element
 * 	- O(logn) time to remmve an element it
 * 	- O(1) time to access the element at the root of the heap.
 * 		The root stores the smallest element in case of min-heap and lasrgest in a  max-heap.
 *
 * 	- We are going to divide the data into two parts. We can either use the first part to find the smallest element
 * 	using min-heap and the second part to find the largest element using the max-heap, or we can do the reverse and use
 * 	the first part to find the lareget element using max-heap and the second part to find the smallest element using the
 * 	min-heap.
 *
 *
 * - When we use two-heap?
 *   	- We need to repeatedly cacualte two maxima, or onoe maximum and one minimum, based in chaing gset of data
 *   	- Input data is not sorted
 */

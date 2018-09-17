/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let length = nums1.length + nums2.length;
    let mid = Math.floor(length / 2);

    if (length % 2 !== 0) {
        return findKth(nums1, 0, nums2, 0, mid + 1)
    } else {
        return (findKth(nums1, 0, nums2, 0, mid) + findKth(nums1, 0, nums2, 0, mid + 1)) / 2
    }
}

var findKth = function(arr1, start1, arr2, start2, k) {
    if (start1 >= arr1.length) return arr2[start2 + k - 1];
    if (start2 >= arr2.length) return arr1[start1 + k - 1];
    if (k === 1) return Math.min(arr1[start1], arr2[start2]);

    let mid = Math.floor(k / 2);
    let num1 = start1 + mid - 1 < arr1.length ? arr1[start1 + mid - 1] : Infinity;
    let num2 = start2 + mid - 1 < arr2.length ? arr2[start2 + mid - 1] : Infinity;

    if (num1 < num2) {
        return findKth(arr1, start1 + mid, arr2, start2, k - mid)
    } else {
        return findKth(arr1, start1, arr2, start2 + mid, k - mid)
    }
}




// Another way to solve the problem using a window
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let length = nums1.length + nums2.length;
    let startXPartition = 0;
    let endXPartition = nums1.length

    while(endXPartition >= startXPartition) {
        let xPartition = Math.floor((startXPartition + endXPartition) / 2);
        let yPartition = Math.floor((length + 1) / 2) - xPartition;

        let xLeft = xPartition <= 0 ? -Infinity : nums1[xPartition - 1];
        let yLeft = yPartition <= 0 ? -Infinity : nums2[yPartition - 1];
        let xRight = xPartition >= nums1.length ? Infinity : nums1[xPartition];
        let yRight = yPartition >= nums2.length ? Infinity : nums2[yPartition];

        if (xLeft <= yRight && yLeft <= xRight) {
            if (length % 2 !== 0) {
                return Math.max(xLeft, yLeft);
            } else {
                return (Math.max(yLeft, xLeft) + Math.min(yRight, xRight)) / 2
            }
        } else if (yLeft > xRight) {
            startXPartition = xPartition + 1
        } else {
            endXPartition = xPartition - 1
        }
    }
}
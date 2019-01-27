/*Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1
*/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
	var starts = intervals.slice(0).sort(function(a, b) {
		return a.start - b.start;
	});
	var ends = intervals.sort(function(a, b) {
		return a.end - b.end;
	});
	var rooms = 0;
	var end = 0;
	for (var i = 0; i < intervals.length; i++) {
		if (starts[i].start < ends[end].end) {
			rooms++;
		} else {
			end++;
		}
	}
	return rooms;
};
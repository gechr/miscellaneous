public class StartPositionFinder {
	public int findStart(int[] haystack, int[] needle) {
		// Assume the needle isn't in the haystack
		int pos = -1;
		// Return if (1) The needle is bigger than the haystack, or
		//           (2) The needle/haystack is empty
		if (needle.length > haystack.length || (haystack.length * needle.length) == 0) {
			return pos;
		}
		// Go through the haystack (protecting against ArrayOutOfBoundExceptions by
		// adjusting the upper boundary to take the needle's length into account)
		for (int i = 0; i <= (haystack.length - needle.length); ++i) {
			// Compare the current haystack element to the first element in the needle
			if (haystack[i] == needle[0]) {
				// Store the start position of the needle in the haystack
				pos = i;
				// Go through the needle, starting from the second element
				for (int j = 1; j < needle.length; ++j) {
					// Break if elements don't match and reset the position
					if (haystack[i + j] != needle[j]) {
						pos = -1;
						break;
					}
				}
				// If the position hasn't been reset at this point, we've found the needle
				if (pos >= 0) break;
			}
		}
		// Finally, return the position (-1 if not found, >= 0 if found)
		return pos;
	}
}


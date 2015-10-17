import junit.framework.TestCase;
import org.junit.runner.JUnitCore;

public class StartPositionFinderTest extends TestCase {

	private StartPositionFinder spf = new StartPositionFinder();

	public void testNotFound() {
		int[] haystack = {5, 10, 20, 40, 80};
		int[] needle = {15, 30};
		int result = spf.findStart(haystack, needle);
		assertEquals(-1, result);
	}

	public void testFound() {
		int[] haystack = {100, 200, 300, 400, 500};
		int[] needle = {300, 400, 500};
		int result = spf.findStart(haystack, needle);
		assertEquals(2, result);
	}

	public void testOverlapStart() {
		int[] haystack = {1, 2, 3, 4};
		int[] needle = {-1, 1, 2};
		int result = spf.findStart(haystack, needle);
		assertEquals(-1, result);
	}

	public void testOverlapEnd() {
		int[] haystack = {1, 2, 3, 4, 5};
		int[] needle = {3, 4, 5, 6};
		int result = spf.findStart(haystack, needle);
		assertEquals(-1, result);
	}

	public void testUnorderedHaystackNegativeValues() {
		int[] haystack = {-3, -1, -2, -5, -4};
		int[] needle = {-5};
		int result = spf.findStart(haystack, needle);
		assertEquals(3, result);
	}

	public void testNeedleDuplicates() {
		int[] haystack = {-3, -1, -2, -5, -4};
		int[] needle = {-1, -1};
		int result = spf.findStart(haystack, needle);
		assertEquals(-1, result);
	}

	public void testHaystackEmpty() {
		int[] haystack = {};
		int[] needle = {100};
		int result = spf.findStart(haystack, needle);
		assertEquals(-1, result);
	}

	public void testNeedleEmpty() {
		int[] haystack = {100};
		int[] needle = {};
		int result = spf.findStart(haystack, needle);
		assertEquals(-1, result);
	}

	public void testBothEmpty() {
		int[] haystack = {};
		int[] needle = {};
		int result = spf.findStart(haystack, needle);
		assertEquals(-1, result);
	}

	public static void main(String[] args) {
		JUnitCore.main("StartPositionFinderTest");
	}
}

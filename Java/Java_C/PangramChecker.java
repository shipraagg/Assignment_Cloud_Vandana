import java.util.Scanner;

public class PangramChecker {
    public static boolean isPangram(String str) {
        str = str.toLowerCase();
        boolean[] isPresent = new boolean[26];

        for (char c : str.toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                isPresent[c - 'a'] = true;
            }
        }

        for (boolean present : isPresent) {
            if (!present) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence to check if it's a pangram: ");
        String input = scanner.nextLine();
        scanner.close();

        boolean isPangram = isPangram(input);
        System.out.println("Is it a pangram? " + isPangram);
    }
}

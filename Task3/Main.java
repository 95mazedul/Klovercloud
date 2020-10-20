package com.company;

import java.io.IOException;
import java.util.Arrays;
import java.util.Scanner;

public class Main {

    private static final Scanner scanner = new Scanner(System.in);

    public static int solution(int x, int[] A) {
        int count = x - 1;
        int[] temp = new int[x + 10];
        int result = 0;
        Arrays.fill(temp, 1);
        for (int i=0;i<A.length; i++) {
            if (A[i] == x && count == 0) {
                result = i;
            } else if (temp[A[i]] != -1 && A[i] < x) {
                count--;
                temp[A[i]] = -1;
            }
        }
        return result;
    }

    public static void main(String[] args) throws IOException {

        int n = scanner.nextInt();
        int X = scanner.nextInt();
        int[] A = new int[n + 1];
        for (int i=0;i<n;i++) {
            int x = scanner.nextInt();
            A[i] = x;
        }
        System.out.println(solution(X, A));
    }
}

package Day3_git;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

public class upDown {

    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        long seed = System.currentTimeMillis();
        Random random = new Random(seed);
        int count = 0;

        int randomNumber = random.nextInt(1001);

        System.out.println(" 게임을 시작합니다. (숫자 범위 : 0 ~ 1000)");

        while(true) {
            System.out.print("숫자를 입력해주세요. : ");
            String s = bf.readLine();
            int input = Integer.parseInt(s);
            count++;

            if(randomNumber == input) {
                System.out.println("정답입니다. " + count + "회 만에 맞추셨습니다. " + "게임을 종료합니다.");
                break;
            } else {
                System.out.print("틀렸습니다. ");

                if(randomNumber > input) {
                    System.out.println("답은 입력한 숫자보다 큽니다. ");
                } else if(randomNumber < input) {
                    System.out.println("답은 입력한 숫자보다 작습니다. ");
                }
            }
        }

        bw.flush();
        bw.close();
    }

}

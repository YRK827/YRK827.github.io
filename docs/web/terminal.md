## TERMINAL

# 서버를 실행시키는 과정에서 오류
- 상황: 'Cannot find module', 'No such file or directory'와 같은 오류가 발생한다.
- 해결방안: 
    1. pwd를 통해 현재 경로 확인
    2. 현재 경로가 폴더 몇개를 건너뛰고 있다면 (ex: github.io/assignments/02.http_file/index.mjs 여야 하는데 github.io/index.mjs 라면 오류 발생)
    3. 필요한 경로를 cd 코드 뒤에 입력
        - ex: cd assigments/02.http_file

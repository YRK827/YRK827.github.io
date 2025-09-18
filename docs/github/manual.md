
[GitHub Repository 만드는 방법]
1. GitHub desktop 실행
2. Repository 생성
    - 좌측 상단 current repository -> add -> create new repository
    - local path: 내 컴퓨터 어떤 폴더에 repository가 저장될지 (위치 외워두기)
        - 위치 까먹었다면: command + shift + J
    - README: repository를 설명하는 문서. (치크하는게 좋음)
    - Git Ignore: 선택 X
    - License: MIT License 선택 (누구든 사용할 수 있게 허용하는 것)
3. Repository 생성 완료
    - 컴퓨터 내의 local repository가 생성된 것
4. GitHub에 업로드 (Publish)
    - 우측 상단 publish repository
        - keep this code private: 체크하면 private, 체크 안 하면 public repository로 전환

------

local = 내 컴퓨터
remote = github
push = local -> remote로 올리기
pull = remote -> local로 가져온 뒤 merge
fetch = remote -> local로 가져오기만 함



[Commit & Push]
1. local 폴더에 들어가서 new file 생성
2. github desktop에 들어가보면 changes 항목에 생성한 파일이 보임
3. commit 하기
    - summary에 메세지 작성(commit 내용 요약)
    - commit to main 클릭 (commit하기 전에 파일 저장하기)
    - commit: 마치 '세이브 포인트'를 찍듯 현재 상태를 저장하는 행위
4. github에 반영(push)
    - 왜? : commit하면 내 컴퓨터에만 저장됨. push를 통해 저장 사항을 remote(원격 repository)에 복사
    - 우측 상단 push origin
    - github website에 접속해보면 파일이 올라와있음
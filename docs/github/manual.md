
**GitHub Repository 만드는 방법**
1. GitHub desktop 실행
2. Repository 생성
    - 좌측 상단 current repository → add → create new repository
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

---

- local = 내 컴퓨터
- remote = github
- push = local → remote로 올리기
- pull = remote → local로 가져온 뒤 merge
- fetch = remote → local로 가져오기만 함

- https://norlin.netlify.app/ => full path, full url
- /home/docs/github => Absolute path
- /docs/github/readme.md => absolute path with file name
- {/docs/github/}img/image_00.png => `img/image_00.png` => relative path with file name


**Markdown**
- 이미지 삽입: ![text](image path)
    - ! = markdown에서 이미지를 표시한다는 뜻 (! 없으면 그냥 링크로 인식.)
    - [text] = 이미지 설명글
    - (image path) = 삽입하고 싶은 이미지의 relative path 
- 링크 삽입: [text][URL]
    - 하이퍼링크 기능 (외부 링크: full path)
- 페이지 내부 이동용 스크롤: [이름](#path)
    - 지정한 위치로 스크롤

---

**Commit & Push**
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

---

**Branch(main으로부터 독립된 작업 공간)**
- 특히 여러 사람과 협업할 때:
    - main에서 함께 작업하면 서로가 서로의 코드를 덮어씌우게 되는 등의 conflict가 일어날 수 있음 → 이를 방지하기 위한게 branch
    - 팀원이 각자 branch에서 작업 → 나중에 merge
    - 서로 main에 바로 영향을 안 줌

[Branch 생성]
1. 상단 바에 current branch → new branch 
2. 이미 branch가 1개 이상 존재하는 경우, branch를 뻗어나갈 위치 선택
    - main 선택: main에서 new branch 생성
    - (name) branch 선택: 선택한 branch에서 new branch 생성
3. 생성이 완료되면 자유롭게 branch에서 작업
4. github에 업로드
    - 우측 상단 publish brance 클릭
    - remote(GitHub web)에 branch가 생성됨

---

**작업 순서**
1. GitHub Desktop
    1. repository 확인
        - 내가 수정하려는 파일이 있는 repo가 맞는지
        - remote와 local이 같은 상태인지
    2. branch 확인
        - 어느 branch에서 작업할지 선택
        - 잘못된 branch에서 작업한다면 이후에 옮기거나 수정하는 과정을 또 거쳐야 함
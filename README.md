# AWS Cloud School 6기 - 미니 프로젝트

### 명단 : 허영무, 최범석, 김상균, 구현석, 장현수





## Git Commit Message 규칙
```markdown
type: subject       -- 머릿글

[module]            -- 본문
body                

footer              -- 바닥글
```

- `type`

```markdown
feature : 새로운 기능 추가
fix : 버그 수정
refactor : 코드 리팩토링
docs : 문서

(추가가 필요하다면 추후 회의를 통해 추가 & 문서화합니다)
```
- `subject` : 무엇을 바꾸었는지 작성합니다.
- `module` : 모듈 이름을 그대로 작성합니다. 특히, 대소문자 주의

```markdown
[Front]
[Backend]
[Infra]
[Other]
...
```

- `body`에 더 자세한 내용을, 특히, **왜 바꾸었는지** 작성합니다.
  필요하다면 외부 링크를 첨부해도 좋습니다.
  머릿글로 표현이 가능하다면 생략 가능합니다.
- `footer`는 어떤 이슈에서 왔는지 같은 참조 정보들을 추가하는 용도로 사용합니다.
  notion 이슈 번호 또는 관련 커밋을 태그합니다.

# 예시
```markdown
feature: 백엔드 기본 모듈 설치

[Front]
- Spring 기몬 모듈 생성

#TO-2 - [Git 커밋 메시지 규칙](https://www.notion.so/Git-9bc5a985361f489fbd4a5b62e64c760f?pvs=4)
```
---
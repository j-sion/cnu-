# Modern Portfolio Website

HTML, CSS, 기본 JavaScript로 만든 반응형 2페이지 포트폴리오입니다.

## 1. 실행하기

별도 설치가 필요 없습니다. `index.html`을 브라우저에서 열면 됩니다.

```text
portfolio/
├── index.html          # 자기소개 페이지
├── activities.html     # 활동 목록 페이지
├── css/
│   └── style.css       # 반응형 Material 스타일
└── js/
    └── main.js         # 메뉴, 테마, 필터, 등장 효과
```

## 2. 내 정보로 바꾸기

1. `index.html`에서 `김민지`, 소개 문장, 이메일, SNS 주소를 수정합니다.
2. `activities.html`에서 각 활동 카드의 기간, 제목, 설명, 기술을 수정합니다.
3. `css/style.css`의 `:root`에서 `--primary` 색상을 바꾸면 전체 포인트 색상이 변경됩니다.

```css
:root {
  --primary: #6558f5;
}
```

## 3. 새 활동 카드 추가하기

`activities.html`의 `.activity-grid` 안에 아래 형식으로 추가합니다. `data-category`에는 `project`, `community`, `study` 중 하나를 사용합니다.

```html
<article class="activity-card material-card reveal" data-category="project">
  <div class="card-top gradient-blue">
    <span>PROJECT</span><b>07</b>
  </div>
  <div class="card-content">
    <p class="card-meta">2026.01 — 2026.03</p>
    <h2>프로젝트 제목</h2>
    <p>프로젝트 설명을 적습니다.</p>
    <div class="card-tags"><span>HTML</span><span>CSS</span></div>
    <a href="https://example.com">자세히 보기 →</a>
  </div>
</article>
```

## 4. GitHub에 올리기

Git 설치 후 이 폴더에서 아래 명령을 실행합니다.

```bash
git init
git config user.name "YOUR_GITHUB_USERNAME"
git config user.email "YOUR_EMAIL"
git add .
git commit -m "Create portfolio website"
git branch -M main
git remote add origin git@github.com:YOUR_GITHUB_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

SSH 연결 확인:

```bash
ssh -T git@github.com
```

## 5. Make 웹훅 연동

소개 페이지의 문의 폼은 `js/main.js`의 `WEBHOOK_URL`로 이름, 이메일, 메시지를 전송합니다.

```javascript
const WEBHOOK_URL = 'https://hook.us2.make.com/YOUR_WEBHOOK_ID';
```

Make 시나리오를 **ON**으로 설정한 뒤 폼을 제출하세요. 수신 필드는 `name`, `email`, `message`, `source`, `submittedAt`입니다.

GitHub Pages는 저장소의 **Settings → Pages → Deploy from a branch → main / root**를 선택하면 배포할 수 있습니다.

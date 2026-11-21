# Kiểm tra site

Ngày kiểm tra: 21/11/2026

## Lệnh đã chạy và kết quả

| Hạng mục | Lệnh/kiểm tra | Kết quả |
| --- | --- | --- |
| Đồng bộ nội dung | `python scripts/sync_from_source.py --check` | Đạt: `OK: 17 pages are in sync`. |
| Node/npm | `node --version`; `npm --version` | Đạt: Node `v24.12.0`, npm `11.6.2`. |
| Cài dependency | `npm ci` | Đạt (chạy lại ngoài môi trường hạn chế): đã cài 126 gói, lockfile không đổi. Lần chạy đầu trong môi trường kiểm tra bị lỗi `EACCES` do quyền npm cache. |
| Build VitePress | `npm run build` | Đạt: VitePress v1.6.4, `build complete in 8.34s`, không có lỗi. Chưa xem giao diện trên trình duyệt. |
| Version VitePress | `package.json`, `package-lock.json` | Cần lưu ý: `package.json` dùng range `^1.6.4`; lockfile ghim `1.6.4`. Chưa sửa. |
| Workflow Pages | kiểm tra `.github/workflows` | Chưa kiểm được quyền deploy vì repo hiện không có thư mục `.github/workflows`. |
| Bảng Markdown | rà soát các file `course/**/*.md` ngoài code fence | Không phát hiện ứng viên bảng bị dính dòng theo kiểm tra tự động. Build đã thành công nên không còn lỗi phân tích; chưa xác nhận bằng renderer. |
| Ký tự Vue đặc biệt | rà soát `<`, `>`, `{{`, `}}` trong nội dung prose | Không phát hiện ứng viên chưa escape trong kiểm tra heuristic. Build đã thành công nên không còn lỗi phân tích; chưa xác nhận bằng Vue compiler. |

## Kiểm tra quiz tương tác

- Nguồn Markdown gồm 6 quiz bài học × 4 câu và quiz tổng hợp 10 câu: tổng cộng **34 câu**.
- Mỗi câu có đúng 4 lựa chọn; parser trong `.vitepress/plugins/quiz.mts` nhận diện được toàn bộ đáp án theo mẫu `A–D`.
- Chuỗi đáp án được đọc từ Markdown:
  - Bài 1: `ABCD`
  - Bài 2: `ABCD`
  - Bài 3: `ABCD`
  - Bài 4: `ABCD`
  - Bài 5: `ADCD`
  - Bài 6: `ABCD`
  - Quiz tổng hợp: `ABCDABCDCB`
- `quiz.mts` nhúng đáp án của 6 bài vào quiz tổng hợp; `QuizResult.vue` tính tổng trên 34 câu.
- Quy tắc đạt trong `QuizResult.vue` khớp yêu cầu: tổng điểm `>= 24` và đúng ít nhất `2/3` câu Q1–Q3.
- Chưa kiểm tra tương tác trực tiếp trên trình duyệt vì build dependency chưa hoàn tất.

## Mục chưa kiểm

- Chưa xác nhận deploy GitHub Pages hoặc quyền `pages: write`/`id-token: write` vì chưa có workflow trong repo.
- Chưa chạy `quarto render`.
- Chưa chạy link checker.
- Chưa kiểm tra trực tiếp giao diện trình duyệt và các lỗi runtime của quiz.

## Lưu ý về đáp án quiz

Chuỗi đáp án của 5/6 quiz bài học đều là `ABCD` (câu 1→A, 2→B, 3→C, 4→D) và quiz tổng hợp theo chu kỳ `ABCDABCDCB`. Phân bố chữ cái đều nhưng thứ tự **dễ đoán**; cần xáo lại ở nguồn (`biomedical-rdm/docs/course-source`) rồi đồng bộ.

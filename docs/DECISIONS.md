# Quyết định nội dung và phạm vi

## Giáo trình đầy đủ (22/11/2026)

Giáo trình đầy đủ được đồng bộ một chiều từ repo gốc qua `scripts/sync_manifest.json`; mini-course là bản ôn nhanh. Các trang trong `course/book/` là trang sinh, không sửa trực tiếp.

Nguồn quyết định nội dung chính: `biomedical-rdm/docs/DECISIONS.md`. Repo này là bản web; các trang được lấy từ `biomedical-rdm/docs/course-source/rdm-mini-course-source.md` và đồng bộ bằng `scripts/sync_from_source.py`.

Các quyết định riêng của khóa học được giữ ngắn tại đây:

- Giữ tách hai repo: repo này chứa khóa học; `biomedical-rdm` chứa literature review và kiểm soát trích dẫn.
- Khóa học có 34 câu: M0 không có quiz; M1–M6 mỗi bài 4 câu; quiz cuối khóa 10 câu.
- Mục tiêu tự đánh giá là ít nhất 24/34 và đúng ít nhất 2/3 câu Q1–Q3 của quiz cuối khóa. Đây là mục tiêu cá nhân, không phải điều kiện đạt: khóa học miễn phí tự học, không có điểm đậu/rớt, không giới hạn số lần làm, không ai ghi nhận kết quả. (Quyết định của Ben, 21/11/2026; sửa ngôn ngữ "điều kiện đạt" ngày 26/11/2026.)
- Không thêm tài liệu tham khảo hoặc khẳng định khoa học ngoài literature review. Các mục còn chờ kiểm chứng vẫn được đánh dấu.
- Lớp kiểm soát bảo mật, đạo đức và pháp lý áp dụng xuyên suốt mọi giai đoạn của vòng đời dữ liệu.
- Các mục chuyển Ben: R-06 NIH; C-18 (Ethics/CITI/DUA ngoài M0); và nguồn cho luồng chuẩn dữ liệu.

## Capstone dùng case study DrMayDay (26/11/2026)

- **Quyết định (Ben, 21/11/2026; đồng bộ ngày 26/11/2026):** capstone dùng case study DrMayDay làm tình huống chính; tình huống thay thế là bài tập Chương 6 §6.2 (Final RDM Handover Package). Capstone là tự đánh giá cuối khóa, không nộp bài, không chấm điểm.
- **Nguồn:** case study đồng bộ một chiều từ repo gốc, `biomedical-rdm` `docs/appendices/case-study-drmayday.md` (bản v2, ngày chốt 25/11/2026, main `69fc2ee2`), chép nguyên văn vào `course/case-study-drmayday.md`. Không viết riêng một bản khác ở repo khóa học. Đồng ý công khai tên dự án và bệnh viện thật đã có (Ben xác nhận 25/11/2026). Không có dữ liệu bệnh nhân thật trong case study.
- **File:** `course/case-study-drmayday.md` (case study v2), `course/capstone.md` (đề bài + hướng dẫn), `course/capstone-checklist.md` (checklist tự đánh giá 1 trang, không trọng số).
- **Dọn dẹp:** hai bản v1 trùng nhau `course/rdm-case-study-drmayday-workflow.md` và `course/rdm-case-study-drmayday-workflow-huoang-dan.md` (bản 21/11/2026, còn 3 lỗi đã sửa ở v2: gọi "Zero-PII", UAS7 xếp miền LB, trích Nghị định 13/2023 hết hiệu lực; còn tên người) đã xóa trong cùng PR đồng bộ, để chỉ còn một bản chính tắc v2.
- **Chưa làm trong PR này:** `course/syllabus.md` là trang sinh từ `biomedical-rdm/docs/course-source/rdm-mini-course-source.md` nên không sửa tay ở đây — dòng case study + ngôn ngữ tự đánh giá sẽ vào qua sửa nguồn rồi chạy `scripts/sync_from_source.py`. Tương tự, `course/book/*` (ch03, changelog, references) đang lệch so với main của repo gốc và chờ một lần chạy sync riêng.

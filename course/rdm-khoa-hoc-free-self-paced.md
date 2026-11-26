# Khóa học miễn phí, tự học theo nhịp của người đọc — Quản lý dữ liệu nghiên cứu y sinh (RDM)

**Ngày quyết định:** 21/11/2026
**Người quyết định:** Ben — TS. Hoàng Quang Huy, HUST, iBME Lab
**Quyết định phạm vi (chốt):** Đây là **khóa học miễn phí, tự học theo nhịp của người đọc (free, self-paced)**, không phải học phần 2 tín chỉ có chấm điểm. Quyết định này thay thế syllabus v2.0.0 trong PR #6.
**Đối tượng thực hiện sửa đổi:** Gemini — sửa PR #6 (`fossbk-spec/biomedical-rdm`, nhánh `docs/chapters-draft-20261121`) theo đúng file này.
**File này dùng kèm:** báo cáo review chương 1–6 ngày 21/11/2026 (tất cả các lỗi chặn B1–B11 vẫn phải sửa — file này chỉ quyết định hình thức khóa học, không thay thế danh sách lỗi đó).

> **Nguyên tắc:** người đọc mở ra là học được ngay, không cần đăng ký, không cần chờ ai chấm, không bị khóa bài. Mọi rào cản không phục vụ việc học đều bỏ.

---

## 1. Khóa học này là gì — và không phải là gì

| Là | Không phải là |
|---|---|
| Khóa học mở, miễn phí, đọc trực tiếp trên GitHub Pages | Học phần tín chỉ (không có 2 tín chỉ, không có 30 giờ chuẩn) |
| Tự học theo nhịp của người đọc (self-paced): không hạn nộp bài, không khóa bài theo tuần | Khóa học có lịch học cố định theo tuần, có deadline |
| Tự kiểm tra kiến thức: quiz có đáp án và giải thích ngay, làm lại không giới hạn | Bài kiểm tra có chấm điểm, có điểm qua/trượt, có giám thị |
| Lab là thực hành tự chọn, làm để hiểu, không tính điểm | Lab bắt buộc tính 35% điểm |
| Capstone là bài tập tự đánh giá cuối khóa, làm cho chính mình | Đồ án chấm 50% điểm |
| Có trang “Hoàn thành” để người đọc tự đối chiếu | Chứng nhận có đơn vị cấp (chưa có — xem §5) |

**Đối tượng:** sinh viên BME năm 3–4, bác sĩ, nghiên cứu viên mới bắt đầu; không yêu cầu biết lập trình ở các bài đầu (Lab 5–6 cần Python cơ bản, ghi rõ là phần mở rộng, có thể bỏ qua).

**Truy cập:** miễn phí, không đăng nhập, không thu thập dữ liệu người học. Nội dung CC BY 4.0, code/lab MIT. Đọc được trên điện thoại và máy tính; có thể tải toàn bộ khóa học về đọc offline (định dạng Quarto/PDF sau khi render).

---

## 2. Cấu trúc khóa học (6 module, theo 6 chương đã soạn)

Xương sống là workflow 7 giai đoạn đã dùng trong mini-course:

```
1. Thiết kế & DMP → 2. Thu thập → 3. Làm sạch & kiểm tra
→ 4. Chuẩn hóa (CDISC / FHIR / OMOP) → 5. FAIR & chia sẻ
→ 6. Bảo mật & pháp lý → 7. Kết thúc: lưu trữ / hủy an toàn
```

| Module | Chương gốc | Nội dung | Thời gian gợi ý |
|---|---|---|---|
| M0 — Bắt đầu ở đây | Mới, viết ngắn (1–2 trang) | Khóa học này học thế nào; workflow 7 giai đoạn; đạo đức dữ liệu, CITI/DUA, dữ liệu thật vs dữ liệu tổng hợp; cách dùng quiz và lab | 15 phút |
| M1 | Ch. 1 — Tổng quan & DMP | Vòng đời dữ liệu, DMP, NIH DMSP + NOT-OD-26-046, metadata, CDE | Đọc 30 phút |
| M2 | Ch. 2 — Thu thập, ALCOA+, REDCap | ALCOA+, ICH E6(R3), EDC/REDCap, RBQM | Đọc 45 phút |
| M3 | Ch. 3 — CDISC / FHIR / OMOP | CDISC (nộp hồ sơ), FHIR (trao đổi), OMOP (phân tích quần thể) | Đọc 35 phút |
| M4 | Ch. 4 — Chất lượng & dữ liệu khuyết | 5 chiều Weiskopf & Weng, Kahn, Rubin MCAR/MAR/MNAR, Sterne | Đọc 30 phút |
| M5 | Ch. 5 — Bảo mật & khử định danh | GDPR, EHDS, Luật 91/2025 + Nghị định 356/2025, k-anonymity/l-diversity | Đọc 40 phút |
| M6 | Ch. 6 — FAIR & AI-ready | FAIR, FAIRification 7 bước, kho lưu trữ, Bridge2AI 7 tiêu chí | Đọc 40 phút |
| Cuối khóa | Mới, từ mini-course | Quiz tổng hợp workflow (10 câu) + bài tập capstone tự đánh giá | 30 phút |

**Tổng thời gian gợi ý: khoảng 3–4 giờ đọc + quiz; 6–8 giờ nếu làm đủ 6 lab.** Ghi cả hai con số trong syllabus, không ghi một con số duy nhất. Người đọc đi nhanh hay chậm tùy mình — con số chỉ là gợi ý, không phải yêu cầu.

**Thứ tự:** gợi ý học theo thứ tự M0 → M6 (vì mỗi module dựa trên module trước), nhưng **không khóa bài** — người đọc được mở bất kỳ module nào ngay từ đầu.

**Mỗi module gồm (mẫu chung):**
1. Mục tiêu học tập (3–5 mục, gắn Bloom, giữ nguyên từ các chương đã soạn).
2. Nội dung lý thuyết (chương đã soạn, sau khi sửa lỗi review).
3. Điểm cần nhớ (1 khung tóm tắt cuối mỗi module).
4. Quiz tự kiểm tra 4 câu, **có đáp án và giải thích ngay dưới mỗi câu** — lấy từ 24 câu quiz của mini-course (M1–M6 mỗi bài 4 câu), đối chiếu lại với nội dung chương đã sửa để đáp án không mâu thuẫn với chương.
5. Lab tự chọn (lab đã soạn trong mỗi chương, chấm theo rubric /20 **chỉ để người đọc tự đối chiếu**, không tính điểm, không nộp bài).
6. Câu hỏi thảo luận (giữ nguyên từ các chương, không bắt buộc trả lời).

---

## 3. Đánh giá — tự kiểm tra, không chấm điểm

**Quy tắc duy nhất, ghi rõ trong syllabus và trang chủ khóa học:**

> Không có điểm số, không có qua/trượt. Mỗi quiz cho đáp án và giải thích ngay sau khi người đọc chọn. Làm lại không giới hạn. Mục tiêu tự đánh giá: trả lời đúng ít nhất 24/34 câu (≥70%), trong đó đúng ít nhất 2/3 câu Q1–Q3 của quiz tổng hợp — vì 3 câu này kiểm tra workflow, là lõi của khóa học. Đạt hay chưa là do người đọc tự biết, không ai ghi lại.

- **34 câu quiz:** 24 câu theo bài (M1–M6, mỗi bài 4 câu, từ mini-course) + 10 câu quiz tổng hợp workflow cuối khóa.
- **Lab:** rubric /20 trong mỗi chương chỉ là thang tự đối chiếu (ví dụ: ≥16/20 là “đã nắm vững”), không phải điểm.
- **Capstone cuối khóa:** bài tập tự đánh giá — viết DMP + kế hoạch FAIR + đánh giá rủi ro cho một nghiên cứu giả định tại bệnh viện đại học ở Việt Nam, tự chấm theo checklist có sẵn (không nộp, không ai chấm). Checklist này viết mới, ngắn (1 trang), dựa trên rubric capstone trong syllabus v2 nhưng bỏ mọi trọng số điểm.
- **Không có bài kiểm tra giữa kỳ, không có điểm quá trình, không có điểm chuyên cần.**

---

## 4. Những gì phải bỏ khỏi syllabus v2.0.0 và các chương

Gemini sửa PR #6 theo danh sách này (xóa/sửa trong cả `docs/syllabus/` và các chương):

1. **Bỏ toàn bộ cơ chế tín chỉ và chấm điểm có trọng số:** “2 tín chỉ (30 giờ chuẩn: 18 giờ Lý thuyết + 12 giờ Thực hành)”, chia 15% quá trình + 35% lab + 50% capstone, thang điểm A/B/C, điểm qua môn.
2. **Bỏ lịch học theo tuần có deadline** (Week 1–10): thay bằng danh sách module M0–M6 theo thứ tự gợi ý, không ghi tuần, không ghi hạn.
3. **Bỏ chứng nhận có đơn vị cấp** (Week 10 “trao chứng nhận hoàn thành học phần”): thay bằng trang “Hoàn thành khóa học” — checklist tự đối chiếu (đã đọc 6 module, đã làm 34 câu quiz, đã làm capstone tự đánh giá). Không ghi tên đơn vị cấp, không ghi mã chứng nhận.
4. **Bỏ mã học phần “BME-3040 / CS-4080”** (chưa chốt) và mọi thông tin hành chính của học phần đại học (giảng viên phụ trách, phòng học, lịch thi).
5. **Bỏ yêu cầu tiên quyết bắt buộc:** Labs 5–6 cần Python cơ bản được ghi là “phần mở rộng, có thể bỏ qua”, không phải điều kiện để học tiếp.
6. **Thống nhất số giờ:** bỏ cả ba con số mâu thuẫn (30 / 27 / 18 giờ), thay bằng “khoảng 3–4 giờ đọc + quiz; 6–8 giờ nếu làm đủ lab” như §2.
7. **Sửa danh mục pháp lý trong syllabus (§6.3 và mọi chỗ liên quan):** bỏ Nghị định 13/2023 và Thông tư 46/2018 khỏi danh sách luật hiện hành; thay bằng Luật 91/2025/QH15 (hiệu lực 01/01/2026), Nghị định 356/2025/NĐ-CP, Thông tư 13/2025/TT-BYT (bệnh viện 30/09/2025, cơ sở khác 31/12/2026), Thông tư 50/2025/TT-BYT (hiệu lực 27/02/2026), Nghị quyết 72-NQ/TW. Đây là một phần của lỗi chặn B1/B2 trong báo cáo review — sửa đồng loạt, không sửa lẻ từng chỗ.

---

## 5. Những gì giữ nguyên từ các chương và syllabus v2

- Nội dung lý thuyết 6 chương (sau khi sửa các lỗi chặn B1–B11 trong báo cáo review).
- Mục tiêu học tập gắn Bloom, sơ đồ khái niệm, lab và câu hỏi thảo luận của mỗi chương.
- Workflow 7 giai đoạn làm xương sống.
- 34 câu quiz của mini-course làm quiz tự kiểm tra (thêm đáp án + giải thích ngay dưới mỗi câu — hiện các chương chưa có quiz có đáp án).
- Danh mục tài liệu tham khảo `references.bib` (103 mục) làm nguồn duy nhất; mọi danh mục §7 trong các chương phải tái tạo từ file này, không viết tay.

---

## 6. Thứ tự sửa cho Gemini (PR #6)

1. **Sửa các lỗi chặn trong báo cáo review trước** (B1–B11): luật hiện hành, NOT-OD-26-046, thời hạn lưu trữ, danh mục §7 tái tạo từ `references.bib`, lab MICE, lab Safe Harbor, Bridge2AI 7 tiêu chí, ORCID/đơn vị của Ben (ORCID đúng: 0000-0002-4603-1297; đơn vị đúng: Đại học Bách khoa Hà Nội, iBME Lab).
2. **Chuyển syllabus v2.0.0 thành syllabus khóa học miễn phí tự học** theo §2–§4 của file này; đổi tên file thành `docs/syllabus/BIOMEDICAL_RDM_FREE_SELF_PACED_SYLLABUS.md` (giữ file v2.0.0 cũ trong lịch sử git, không xóa lịch sử).
3. **Thêm M0 và trang cuối khóa** (quiz tổng hợp + capstone tự đánh giá + trang Hoàn thành) theo §2–§3.
4. **Thêm quiz có đáp án vào mỗi chương** (4 câu/bài từ mini-course).
5. **Cập nhật `docs/DECISIONS.md`:** ghi quyết định “khóa học miễn phí, tự học theo nhịp người đọc; không phải học phần 2 tín chỉ”, ngày 21/11/2026, người quyết định: Ben.
6. **Chứng minh render:** chạy `quarto render` local, đính kèm log (không lỗi, không cảnh báo citeproc) vào PR. Không tự thêm `.github/workflows/` (quyền Workflows chưa có — Ben tự thêm sau).

## 7. Checklist nghiệm thu (Gemini tự kiểm tra trước khi báo lại)

- [ ] Mọi lỗi chặn B1–B11 trong báo cáo review đã sửa (đối chiếu từng mục).
- [ ] Không còn bất kỳ chỗ nào ghi Nghị định 13/2023 hoặc Thông tư 46/2018 như luật hiện hành, trong cả 6 chương và syllabus.
- [ ] Không còn “tín chỉ”, “điểm quá trình”, “điểm lab”, “điểm capstone”, “điểm qua môn”, “chứng nhận” có đơn vị cấp, lịch tuần có deadline, mã học phần BME-3040/CS-4080.
- [ ] Mỗi module có đủ: mục tiêu, lý thuyết, điểm cần nhớ, quiz 4 câu có đáp án + giải thích, lab tự chọn, câu hỏi thảo luận.
- [ ] Quiz tổng hợp 10 câu + capstone tự đánh giá + trang Hoàn thành đã có; tổng 34 câu quiz; quy tắc tự đánh giá ≥24/34 và ≥2/3 câu Q1–Q3 được ghi rõ là tự đánh giá, không phải điểm qua.
- [ ] Thời gian ghi thống nhất: 3–4 giờ đọc + quiz; 6–8 giờ nếu làm đủ lab.
- [ ] Mọi danh mục §7 khớp `references.bib`; không còn câu “đã đối chiếu từ SSoT” sai sự thật.
- [ ] `docs/DECISIONS.md` đã ghi quyết định khóa học miễn phí tự học.
- [ ] Quarto render local sạch (log đính kèm PR).

## 8. Bàn giao

Khi hoàn thành, Gemini báo lại cho Ben:

1. Link PR #6 đã cập nhật và tóm tắt thay đổi theo từng commit.
2. Kết quả checklist §7 (mục nào đạt, mục nào chưa đạt và vì sao).
3. Việc còn lại cho đợt sau (không làm trong đợt này): video bài giảng, dữ liệu mẫu Synthea, tích hợp MIMIC demo, bản PDF tải về, và — nếu sau này Ben quyết định — chứng nhận hoàn thành có đơn vị cấp.

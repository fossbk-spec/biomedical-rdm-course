# Hướng dẫn sửa chương 1–6 cho Gemini — RDM, sau review 21/11/2026

**Ngày bàn giao:** 21/11/2026
**Cập nhật:** 22/11/2026 — §2 đã ghi quyết định D0 của Ben (khóa học miễn phí tự học, chốt 21/11/2026); file sẵn sàng gửi cho Gemini, không cần chờ Ben chốt thêm.
**Người bàn giao:** Muse (cho Ben — TS. Hoàng Quang Huy, HUST, iBME Lab)
**Người nhận:** Gemini — sửa các chương 1–6 do Gemini soạn, theo đúng file này
**Vị trí làm việc:** repo `fossbk-spec/biomedical-rdm`, draft PR #6, nhánh `docs/chapters-draft-20261121`, HEAD `de71ccc0` (2 commit, 0 review/comment, tiêu đề PR “Draft: chapters 1-5 and syllabus v2.0.0”)
**File handover v2 cho Claude (vẫn hiệu lực):** `rdm-tiep-tuc-cap-nhat-handover-claude-v2.md` — khi mâu thuẫn với file này về luật, số liệu và trích dẫn, **lấy quy tắc SSoT ở §2 làm chuẩn**.

> **Đọc file này trước khi sửa bất cứ thứ gì. Không merge PR #6 khi chưa xong checklist §6. Không tái tạo nội dung từ trí nhớ — mọi số liệu, trích dẫn và quy định pháp lý phải lấy từ `references.bib` và bản tổng hợp `docs/literature-review/index.md` (bản tổng hợp 22.700 từ, 103 mục) trong repo.**

---

## 1. Kết luận review 21/11/2026 (đã kiểm chứng)

| Hạng mục | Kết luận |
|---|---|
| Chương 1 — Tổng quan & DMP | **BLOCKING** |
| Chương 2 — Thu thập, ALCOA+, REDCap | **BLOCKING** |
| Chương 3 — CDISC / FHIR / OMOP | **BLOCKING** |
| Chương 4 — Chất lượng & dữ liệu khuyết | **BLOCKING** |
| Chương 5 — Bảo mật & khử định danh | **BLOCKING** |
| Chương 6 — FAIR & AI-ready | **BLOCKING** |
| Syllabus v2.0.0 | **BLOCKING** |

Tổng cộng 6 chương khoảng 37.700 từ, mỗi chương có mục tiêu học tập, sơ đồ khái niệm, lab chấm /20 và câu hỏi thảo luận — nhưng **không chương nào có quiz có đáp án**, nên “Quiz 5/Quiz 6” trong syllabus hiện không có nội dung. Các lỗi chặn ở chương 1 mà chính PR #6 đã tự ghi nhận vẫn còn nguyên, và cùng loại lỗi lặp lại ở chương 2–6.

**Lưu ý về tiêu đề PR:** tiêu đề PR ghi “chapters 1-5” nhưng nội dung có 6 chương + syllabus. Khi sửa xong, đổi tiêu đề PR cho khớp nội dung thực tế.

**Điểm làm đúng, giữ nguyên:** Ch. 3 viết đúng trạng thái FHIR R6 đang ballot, OMOP CDM v5.4, LEGEND-HTN 4,9 triệu bệnh nhân; Ch. 4 viết đúng Rubin MCAR/MAR/MNAR và Sterne 2009; Ch. 5 viết đúng GDPR coi dữ liệu giả danh vẫn là dữ liệu cá nhân và ngày hiệu lực EHDS.

---

## 2. Quyết định của Ben — phạm vi ĐÃ CHỐT ngày 21/11/2026 (D0)

Syllabus v2.0.0 tự ghi trong nhật ký thay đổi là “tái cấu trúc toàn diện thành đề cương chi tiết học phần chuẩn 2 tín chỉ (30 giờ), 6 lab, đồ án capstone”, trong khi mini-course gốc là 2–3 giờ lý thuyết + quiz. Đây là một sản phẩm mới, gấp 10–15 lần, với cơ chế chấm điểm, capstone 50% và chứng nhận mà mini-course không có — và **handover v2 không hề cho phép chuyển đổi này**.

**Ben đã chốt ngày 21/11/2026: khóa học miễn phí, tự học theo nhịp của người đọc (free, self-paced) — tức hướng D0-A dưới đây, với thiết kế chi tiết trong file `rdm-khoa-hoc-free-self-paced.md` (gửi kèm file này cho Gemini). Gemini làm theo hướng đã chốt, không tự đổi phạm vi:**

| # | Hướng | Hệ quả cho Gemini |
|---|---|---|
| D0-A ✅ **đã chọn** | **Khóa học miễn phí, tự học** (theo `rdm-khoa-hoc-free-self-paced.md`) | Bỏ cấu trúc 2 tín chỉ khỏi syllabus: bỏ capstone 50%, bỏ chứng nhận, bỏ thang điểm lab /20 (chỉ giữ làm thang tự đối chiếu); syllabus theo 6 module M0–M6 + 34 câu quiz tự kiểm tra có đáp án; thời gian “3–4 giờ đọc + quiz; 6–8 giờ nếu làm đủ lab”. |
| D0-B ❌ không chọn | **Khóa học phần 2 tín chỉ** (30 giờ, 6 lab, capstone) | Không áp dụng. Chỉ ghi lại để tránh nhầm: hướng này đã bị loại ngày 21/11/2026. |

Các lỗi chặn B1–B11 ở §3 vẫn phải sửa hết, theo hướng D0-A. Ghi quyết định D0 vào `docs/DECISIONS.md`, ghi rõ “quyết định của Ben ngày 21/11/2026: khóa học miễn phí, tự học theo nhịp của người đọc; không phải học phần 2 tín chỉ”.

---

## 3. Danh sách lỗi chặn (B1–B11) — sửa tất cả

### B1 — Nghị định 13/2023 viết như luật hiện hành (Ch. 1, 2, 5, 6 và syllabus)

- Đây đúng là lỗi R-08 mà handover v2 đã yêu cầu sửa toàn repo — Gemini chưa áp dụng cho các bản nháp này.
- **Luật hiện hành:** Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 (hiệu lực 01/01/2026) + Nghị định 356/2025/NĐ-CP (31/12/2025).
- **Cách sửa:** mọi chỗ viết Nghị định 13/2023 như văn bản còn hiệu lực đều phải sửa; chỉ nhắc Nghị định 13/2023 như văn bản lịch sử (hiệu lực 01/07/2023–31/12/2025). Riêng Ch. 1 có 4 chỗ, Ch. 5 có ≥6 chỗ — rà soát toàn bộ, không sửa mẫu một chỗ rồi bỏ sót chỗ khác.

### B2 — Thông tư 46/2018 viết như luật hiện hành (Ch. 5 và syllabus)

- **Luật hiện hành:** Thông tư 13/2025/TT-BYT thay thế Thông tư 46/2018.
- **Bổ sung hạn theo Thông tư 13/2025:** bệnh viện 30/09/2025, cơ sở khác 31/12/2026. Cả hai hạn đều chưa được nêu trong bản nháp.

### B3 — NOT-OD-26-046 dạy sai (Ch. 1)

- Mẫu mới thay 6 thành phần văn bản bằng **câu hỏi Yes/No + ánh xạ kho dữ liệu + phần genomics**. Gemini đang dạy ngược lại thành mẫu cũ 6 thành phần.
- **Cách sửa:** viết lại phần DMSP theo mẫu mới; mô tả mẫu NIH cũ chỉ như bối cảnh lịch sử, ghi rõ đã bị thay thế.

### B4 — Thời hạn lưu trữ “10–15 năm” sai (Ch. 1)

- **Số đúng:** EU 536/2014 tối thiểu **25 năm**; Thông tư 33/2025: hồ sơ tử vong **30 năm**, tâm thần / tai nạn lao động / tai nạn giao thông và SOP thử nghiệm **20 năm**.
- **Cách sửa:** thay toàn bộ con số “10–15 năm” bằng các hạn trên, ghi rõ nguồn từng hạn; kiểm tra không còn chỗ nào mâu thuẫn với bản review 20/11.

### B5 — Mọi danh mục §7 đều mâu thuẫn `references.bib`

- **Quy tắc SSoT:** `references.bib` là nguồn duy nhất cho tác giả/năm/tiêu đề/DOI. **Tái tạo toàn bộ mọi danh mục §7 từ `references.bib`, không viết tay, không copy từ bản nháp cũ.** Câu “đã đối chiếu từ SSoT” trong các chương hiện là không đúng — xóa hoặc sửa cho đúng thực tế sau khi đối chiếu xong.
- Các lỗi cụ thể đã bắt được (danh sách không đầy đủ — đối chiếu hết):
  - `ref_011` ghi *Book of OHDSI* 2021, trong khi bib là **Sachson 2025 *Our Journey*** (lỗi này lặp nguyên văn ở Ch. 3 và Ch. 4).
  - `ref_039` ghi Ryan 2013, đúng là **Overhage 2012**.
  - `ref_037` ghi Bender & Sartipi 2013, đúng là **Mandl 2020**.
  - `ref_043` và `ref_073` sai toàn bộ tác giả/năm/tiêu đề/DOI.
- Ch. 3 thêm: danh sách tác giả `ref_040` sai; 2 trích dẫn còn `BIB_PENDING` — hoặc bổ sung đủ trường thư mục từ nguồn gốc, hoặc ghi rõ `[CẦN KIỂM CHỨNG]` tại chỗ trích dẫn.

### B6 — Lab Ch. 4 dạy sai MICE

- Lab dạy một lần chạy `IterativeImputer` như multiple imputation (MICE), trong khi chính lý thuyết trong chương yêu cầu ***m* bộ dữ liệu và gộp theo Rubin's Rules**.
- **Cách sửa:** viết lại lab để tạo *m* bộ dữ liệu đã điền khuyết, phân tích từng bộ, rồi gộp ước lượng theo Rubin's Rules; ghi rõ chạy một lần duy nhất không phải là MICE.

### B7 — Lab Ch. 5 gộp Safe Harbor với date-shifting

- Safe Harbor yêu cầu **bỏ mọi ngày tháng trừ năm** — không được date-shifting rồi gọi là Safe Harbor.
- Tập dữ liệu còn cột `record_id` không được gọi là “đã khử định danh đạt chuẩn”.
- **Cách sửa:** tách Safe Harbor và date-shifting thành hai kỹ thuật riêng, nêu rõ điều kiện từng kỹ thuật; sửa kết luận của lab cho đúng.

### B8 — Bridge2AI “4 tiêu chí” và CC0 (Ch. 6)

- Bridge2AI có **7 tiêu chí**, không phải 4 — khớp với bản tổng hợp và Quiz 7 của mini-course.
- **Không dạy CC0 cho dữ liệu sức khỏe mà không có cảnh báo:** Bridge2AI cấm dùng CC0. Bổ sung cảnh báo này ngay tại chỗ dạy CC0.

### B9 — Lab 6 ghi sai thông tin của Ben (Ch. 6) — lỗi chặn nghiêm trọng

- Bản nháp ghi ORCID `0009-0002-3972-7478` và đơn vị “Đại học Y Hà Nội”.
- **Đúng phải là:** ORCID **`0000-0002-4603-1297`**, **Đại học Bách khoa Hà Nội, iBME Lab**.
- ORCID giả mạo gắn tên người thật là lỗi chặn. **Rà soát toàn bộ 6 chương + syllabus:** bất kỳ chỗ nào nhắc tên, ORCID, đơn vị, email của Ben đều đối chiếu với thông tin này; sửa hết trong một lần.

### B10 — Syllabus không có quy tắc đạt, số giờ không khớp

- Không có quy tắc đạt (pass rule) nào cho toàn khóa.
- Số giờ ghi 3 con số khác nhau: **30 so với 27 so với 18** — chốt theo hướng D0-A đã chọn: “3–4 giờ đọc + quiz; 6–8 giờ nếu làm đủ lab” (xem `rdm-khoa-hoc-free-self-paced.md` §2).
- Lab 6 không có trọng số; chứng nhận không có đơn vị cấp và tiêu chí đạt.
- **Cách sửa:** thực hiện theo hướng D0-A đã chọn: bỏ các mục thuộc cấu trúc 2 tín chỉ (quy tắc đạt, số giờ 30/27/18, trọng số Lab 6, chứng nhận); thay bằng thiết kế trong `rdm-khoa-hoc-free-self-paced.md` §2–§4.

### B11 — Case study có số liệu cụ thể nhưng không có nguồn

- Vụ rò rỉ Zalo 150 bệnh nhân (Ch. 5); mô hình X-quang 99,2% tụt xuống 58% và app melanoma bỏ sót hơn 40% (Ch. 6); nghiên cứu 5.000 bệnh nhân bị rút bài (Ch. 4).
- **Cách sửa:** mỗi case study phải có nguồn trích dẫn cụ thể, hoặc ghi rõ là **tình huống giả định** (hypothetical scenario) ngay trong bài. Không để số liệu cụ thể không nguồn trong tài liệu giảng dạy.

---

## 4. Sửa theo từng chương (sau khi xong B1–B11 chung)

| Chương | Việc riêng cần làm thêm |
|---|---|
| Ch. 1 — Tổng quan & DMP | Sửa 4 chỗ Nghị định 13/2023; viết lại mẫu DMSP NOT-OD-26-046 (B3); sửa hạn lưu trữ (B4); sửa 3 mục §7 sai; sửa mô tả mẫu NIH cho đúng. |
| Ch. 2 — Thu thập, ALCOA+, REDCap | Viết lại bài tập §6.2 — không phân tích vi phạm theo Nghị định 13/2023; sửa 3 mục §7 sai; sửa nguồn gốc ALCOA cho khớp bản tổng hợp; bổ sung nguồn hoặc ghi giả định cho các số liệu “20% lỗi Excel”, “<0,1% SDV”, “7.000 tổ chức, 155 nước”. |
| Ch. 3 — CDISC / FHIR / OMOP | Sửa 3 mục §7 sai hoàn toàn (`ref_011`, `ref_037`, `ref_039`); sửa danh sách tác giả `ref_040`; xử lý 2 trích dẫn `BIB_PENDING`; bổ sung số liệu OHDSI và “9 cơ sở dữ liệu” của LEGEND-HTN từ nguồn gốc. |
| Ch. 4 — Chất lượng & dữ liệu khuyết | Viết lại lab MICE (B6); bổ sung **5 chiều của Weiskopf & Weng** — học viên cần nội dung này để trả lời Quiz 4.1 của mini-course; ghi nguồn hoặc ghi giả định cho nghiên cứu 5.000 bệnh nhân bị rút bài. |
| Ch. 5 — Bảo mật & khử định danh | Sửa khóa trích dẫn cho 3 nguồn luật lõi: GDPR, HIPAA, EHDS đang ghi sai là `ref_051/052/053`, đúng phải là **`ref_057/058/060`**; sửa ≥6 chỗ Nghị định 13/2023 và Thông tư 46/2018; viết lại lab Safe Harbor (B7). |
| Ch. 6 — FAIR & AI-ready | Sửa 4 mục §7 sai so với bib; sửa Bridge2AI thành 7 tiêu chí + cảnh báo CC0 (B8); sửa ORCID và đơn vị của Ben (B9); bổ sung quiz có đáp án cho chương (xem §5). |
| Syllabus v2.0.0 | Sửa danh mục pháp lý §6.3 — toàn luật đã hết hiệu lực, viết lại theo Luật 91/2025 + Nghị định 356/2025 + Thông tư 13/2025; thực hiện B10 theo hướng D0-A; bỏ tham chiếu tới Quiz 5/Quiz 6 của cấu trúc 2 tín chỉ, thay bằng quiz tự kiểm tra 34 câu (xem `rdm-khoa-hoc-free-self-paced.md` §2–§3). |

---

## 5. Thứ tự thực hiện

1. **D0 đã chốt ngày 21/11/2026** (khóa học miễn phí tự học — hướng D0-A): đọc file `rdm-khoa-hoc-free-self-paced.md` gửi kèm và sửa syllabus/lab/capstone theo hướng đó, không sửa theo cấu trúc 2 tín chỉ.
2. **Luật trước, sửa đồng loạt mọi chỗ** (B1, B2) — rà soát toàn bộ 6 chương + syllabus trong một lần, không sửa lẻ từng chương.
3. **Tái tạo mọi danh mục §7 từ `references.bib`** (B5) — thay vì sửa tay từng mục.
4. **Sửa các lỗi dạy sai thực hành:** NOT-OD-26-046 (B3), nguồn gốc ALCOA (Ch. 2), lab MICE (B6), lab Safe Harbor (B7), Bridge2AI 7 tiêu chí (B8).
5. **Sửa ORCID/đơn vị của Ben** (B9) — rà soát toàn bộ repo, không chỉ Lab 6.
6. **Bổ sung nội dung thiếu:** số liệu OHDSI, 5 chiều Weiskopf & Weng, thời hạn lưu trữ (B4); ghi nguồn hoặc ghi giả định cho mọi case study (B11).
7. **Bổ sung quiz có đáp án** cho cả 6 chương (4 câu/bài từ mini-course, có đáp án + giải thích) và quiz tổng hợp 10 câu cuối khóa; bỏ tham chiếu tới Quiz 5/Quiz 6 của cấu trúc 2 tín chỉ.
8. **Chứng minh render:** Claude không có quyền Workflows trên `fossbk-spec` nên Gemini cũng **không tự thêm `.github/workflows/`**. Thay vào đó: chạy `quarto render` local, đính kèm log build (không lỗi, không cảnh báo citeproc) vào PR, và ghi file workflow mẫu vào `docs/specs/deployment.md` để Ben tự thêm qua web/git. Chỉ đề xuất merge khi render sạch.

**Commit theo từng nhóm lỗi** (ví dụ: `fix: correct current law 91/2025 + 356/2025 in all chapters`, `fix: regenerate section 7 reference lists from references.bib`, `fix: correct MICE lab to Rubin's Rules pooling`), để Ben review được từng nhóm. PR #6 giữ trạng thái **draft** cho tới khi Ben duyệt — không tự ý chuyển sang ready-for-review.

---

## 6. Checklist nghiệm thu (Gemini tự kiểm tra trước khi báo lại)

- [ ] Quyết định D0 (khóa học miễn phí tự học, 21/11/2026) đã ghi vào `docs/DECISIONS.md`; syllabus/lab/capstone khớp với hướng đã chọn, không còn cấu trúc 2 tín chỉ.
- [ ] Không còn chỗ nào viết Nghị định 13/2023 hay Thông tư 46/2018 như văn bản còn hiệu lực (B1, B2); danh mục pháp lý §6.3 của syllabus đã viết lại.
- [ ] Mọi danh mục §7 đã tái tạo từ `references.bib`; `ref_011`, `ref_037`, `ref_039`, `ref_040`, `ref_043`, `ref_073` đã đúng tác giả/năm/tiêu đề/DOI; không còn câu “đã đối chiếu từ SSoT” sai thực tế.
- [ ] NOT-OD-26-046 dạy đúng mẫu mới (Yes/No + ánh xạ kho + genomics); hạn lưu trữ đúng EU 536/2014 (25 năm) và Thông tư 33/2025 (30/20 năm).
- [ ] Lab Ch. 4 dạy đúng MICE (*m* bộ dữ liệu + Rubin's Rules); lab Ch. 5 tách Safe Harbor khỏi date-shifting, không gọi tập còn `record_id` là đã khử định danh.
- [ ] Bridge2AI ghi 7 tiêu chí; có cảnh báo Bridge2AI cấm CC0 cho dữ liệu sức khỏe.
- [ ] ORCID của Ben là `0000-0002-4603-1297`, đơn vị Đại học Bách khoa Hà Nội, iBME Lab — đã rà soát toàn bộ 6 chương + syllabus.
- [ ] 5 chiều Weiskopf & Weng đã có trong Ch. 4; số liệu OHDSI và LEGEND-HTN đã bổ sung trong Ch. 3; thời gian ghi thống nhất “3–4 giờ đọc + quiz; 6–8 giờ nếu làm đủ lab”; không còn trọng số Lab 6, quy tắc đạt hay chứng nhận của cấu trúc 2 tín chỉ — quiz chỉ là tự kiểm tra (mục tiêu ≥24/34, ≥2/3 câu Q1–Q3).
- [ ] Mọi case study có số liệu cụ thể đều có nguồn, hoặc đã ghi rõ là tình huống giả định.
- [ ] Cả 6 chương đều có quiz có đáp án; Quiz 5/Quiz 6 trong syllabus có nội dung tương ứng.
- [ ] Quarto render local sạch (log đính kèm PR); tiêu đề PR đã sửa cho khớp nội dung (6 chương + syllabus).
- [ ] Không còn placeholder; không có dữ liệu bệnh nhân thật, không secret/key trong repo.

---

## 7. Bàn giao

Khi hoàn thành, Gemini báo lại cho Ben:

1. Link tới PR #6 đã cập nhật và tóm tắt thay đổi theo từng commit (nhóm theo B1–B11 và D0).
2. Kết quả checklist §6 (mục nào đạt, mục nào chưa đạt và vì sao).
3. Quyết định D0 đã ghi vào `DECISIONS.md`.
4. Việc còn lại cho đợt sau: video bài giảng, dữ liệu mẫu, bản PDF tải về — và, nếu sau này Ben quyết định, chứng nhận hoàn thành có đơn vị cấp; theo ROADMAP.md của repo course.

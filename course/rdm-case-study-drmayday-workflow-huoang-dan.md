# Case Study: RDM Workflow cho dự án DrMayDay (mày đay, Bệnh viện Da liễu Trung ương)

**Loại tài liệu:** case study cho khóa học RDM y sinh miễn phí tự học (dùng làm tình huống capstone và bài tập cuối khóa).
**Ngày:** 21/11/2026
**Người quyết định:** Ben
**Trạng thái dự án tại thời điểm review:** `main` HEAD `8f3777fc` (13/11/2026, không có commit mới tới 21/11/2026); 18 issue mở (#15–#32); 2 PR mở (#33, #34); GĐ1 kết thúc 30/11/2026 (còn 9 ngày).

> **Nguyên tắc an toàn của case study này:** chỉ dùng tài liệu công khai trong repo (README, Data Dictionary v2.0, kế hoạch xuất bản, issue/PR) và số liệu tổng hợp đã công bố trong kế hoạch. **Không có dữ liệu bệnh nhân thật nào** trong case study; mọi ví dụ bản ghi đều là giả lập và phải ghi rõ như vậy. Học viên làm việc với case study này không bao giờ chạm vào dữ liệu thật của dự án.

---

## 1. Review dự án DrMayDay — tóm tắt (21/11/2026)

**Dự án là gì:** đề tài cấp Bộ (BKHCN) “Xây dựng quy trình kỹ thuật ứng dụng trí tuệ nhân tạo trong việc hỗ trợ khám và chữa bệnh mày đay”, chủ trì Bệnh viện Da liễu Trung ương, chủ nhiệm PGS.TS. Lê Hữu Doanh, thư ký khoa học TS.BS. Vũ Nguyệt Minh, Ben phụ trách phần mềm & AI, TS. Trần Anh Vũ là AI Lead. Thời gian 09/2026–12/2027 (16 tháng, 5 giai đoạn).

**Dữ liệu của dự án (theo README và kế hoạch):**

| Loại dữ liệu | Quy mô | Dùng cho |
|---|---|---|
| Hồ sơ bệnh án mày đay (183 biến, Data Dictionary v2.0, 16 phân nhóm) | ≥ 1.000 hồ sơ (tuyển 09/2026–05/2027) | P2A, P2B, P7, P2 |
| Hình ảnh thương tổn sẩn phù, gán nhãn kép | 10.240 ảnh (chưa chụp ca nào tính tới 17/11) | P3 (data descriptor), P4 |
| PROMs bệnh nhân tự báo cáo qua app (UAS7, UCT, AAS7, ACT) | Theo dõi dọc 6 tháng | P2A, P5 |
| Biomarker (IgE, anti-TPO, BAT, ASST; ứng viên mới C5a, MRGPRX2, PAF, CRP, D-dimer) | Cùng cohort 1.000 ca | P2B, P7 |
| Thử nghiệm đối đầu AI vs bác sĩ | 200 ca (GĐ4, 09/2027) | P6 |
| Rule engine WAO/EAACI (cảnh báo phản vệ < 30 giây) | Code thật, 52/52 tests pass | P5, P8 |

**Điểm mạnh về RDM (đã có):**
- **Data Dictionary v2.0** (ban hành 04/09/2026): 183 biến chuẩn hóa, kiểu dữ liệu, danh mục đóng, nguồn thu thập; phân luồng 4 nguồn (HIS 30 biến, app bệnh nhân 44 biến, hệ thống tự sinh 2 biến, bác sĩ nhập 107 biến).
- **Kiến trúc Zero-PII:** giả danh hóa bằng `patient_uuid` (UUIDv4); bảng ánh xạ mã hóa AES-256, lưu độc quyền trên máy chủ cục bộ tại bệnh viện; dữ liệu huấn luyện AI loại bỏ hoàn toàn trường định danh cấp 1; mọi sự kiện có `encounter_id` + timestamp ISO 8601 UTC.
- **Rule engine thật:** 52/52 tests pass — dữ liệu kiểm thử có thật, không phải Projected.
- **Kế hoạch xuất bản rõ ràng:** 10 bài (P1, P2, P2A, P2B, P3, P4, P5, P6, P7, P8), thứ tự nộp đề xuất P8 → P1 → P2A/P2B → P3 → P7 → P2 → P5 → P4 → P6.

**Điểm yếu về RDM (chưa có — đây chính là nội dung case study):**
- **Chưa có DMP.** Không có file DMP nào trong repo; Data Dictionary không thay thế được DMP (DMP trả lời dữ liệu sẽ đi đâu, ai dùng, chia sẻ thế nào).
- **Chưa chốt CSDL/ERD và docker-compose** (issue #17); `data/raw` và `data/processed` chưa có dữ liệu; `docs/reports` (BC-01–BC-12) và `docs/sop` còn trống (issue #22).
- **App/Web v1.0 chưa có code trong repo** (issue #16) — kênh thu thập dữ liệu chính chưa tồn tại.
- **Số quyết định IRB chưa có** (issue #19) — IRB đã duyệt theo status 17/09 nhưng số quyết định vẫn [TODO]; P1 không nộp được nếu thiếu.
- **Ngưỡng Tier 1/2 và Bảng 7 WAO chưa được hội đồng lâm sàng xác nhận** (issue #18) — cổng an toàn lâm sàng chưa khóa.
- **Căn cứ pháp lý lỗi thời trong chính tài liệu của dự án:** README §4 và Data Dictionary v2.0 đều trích **Nghị định 13/2023/NĐ-CP** — nghị định này đã hết hiệu lực từ 01/01/2026, thay bằng Luật 91/2025 + Nghị định 356/2025. Data Dictionary còn trích EAACI 2021 / WAO 2020 làm chuẩn kỹ thuật trong khi khuyến cáo quốc tế 2026 đã thay đổi (thêm dupilumab/remibrutinib, bỏ montelukast — issue #31).
- **Chưa có DPIA, chưa có SOP chụp ảnh/gán nhãn, chưa có quy trình hủy dữ liệu, chưa có data availability statement cho các bài báo.**
- **Rủi ro PII trong SOP chụp ảnh:** README mô tả bệnh nhân chụp ảnh sẩn phù “có vật đối chuẩn kích thước (thước kẻ/thẻ CCCD)” — chụp thẻ CCCD làm vật đối chuẩn là **rủi ro lộ PII nghiêm trọng** (số CCCD, ảnh chân dung trên thẻ). SOP phải quy định chỉ dùng thước kẻ/thẻ màu chuẩn, **tuyệt đối không dùng CCCD**.

## 2. RDM workflow cho DrMayDay — 7 giai đoạn theo khung khóa học

| Giai đoạn (khung khóa học) | Nội dung cho DrMayDay | Chủ sở hữu (theo phân công GĐ1) | Hạn |
|---|---|---|---|
| **1. Thiết kế & DMP** | Viết DMP theo mẫu NIH 2026 (7 yếu tố, xem Phụ lục B) làm khung tham chiếu; điều chỉnh cho đề tài cấp Bộ: loại dữ liệu (183 biến lâm sàng, 10.240 ảnh, PROMs, biomarker, log rule engine), kho lưu trữ (Zenodo cho dataset P3; dữ liệu lâm sàng truy cập có kiểm soát tại bệnh viện, không đưa lên kho mở), ngân sách quản lý dữ liệu, thời hạn lưu trữ theo TT33/2025 | Huy + Lê Hữu Doanh | Trước khi tuyển đợt 2 (GĐ2) |
| **2. Thu thập** | Vận hành 4 luồng theo DD v2.0 (HIS 30 / app 44 / hệ thống 2 / bác sĩ 107); eCRF từ DD v2.0 với ràng buộc kiểu dữ liệu + danh mục đóng ngay tại nhập liệu; SOP chụp ảnh (chỉ thước kẻ, không CCCD — xem §1); gán nhãn kép + đồng thuận liên-đánh giá (Fleiss κ mục tiêu 0,842); ICF + đồng thuận chia sẻ dữ liệu | Kim Cúc (thu thập) + Tiến Thành (app) + Hải Yến (ảnh/nhãn) | GĐ2–GĐ3 |
| **3. Làm sạch & kiểm tra** | Khung Kahn 3×2 (Conformance/Completeness/Plausibility × Verification/Validation); kiểm tra khoảng sinh lý (UAS7 0–42, tuổi ≥ 18, IgE > 0); tỷ lệ khuyết PROMs theo cơ chế Rubin (bệnh nhân nặng bỏ đo = MNAR → phân tích độ nhạy, không xóa dòng); DQD chạy trên bản OMOP sau khi ánh xạ (xem giai đoạn 4); nhật ký kiểm toán AES-256 | Huy + Trần Anh Vũ | Liên tục, chốt trước mỗi lần phân tích |
| **4. Chuẩn hóa (CDISC/FHIR/OMOP)** | Ánh xạ 183 biến DD v2.0 sang: **SDTM** cho thử nghiệm 200 ca (miền DM/VS/LB/AE/CM; UAS7 là biến LB/PROMs); **FHIR R4/R5** để trao đổi với HIS/LIS/PACS qua api-gateway; **OMOP CDM v5.4** cho phân tích dịch tễ (person/condition_occurrence/measurement; chẩn đoán → SNOMED CT, thuốc → RxNorm, đo lường → LOINC); UAS7 đăng ký làm CDE. Phiên bản chuẩn ghi vào Phụ lục D | Huy + Thế Vinh | GĐ2 (khung ánh xạ), GĐ3 (chạy ETL) |
| **5. FAIR & chia sẻ** | Dataset 10.240 ảnh + metadata → data descriptor P3 (Sci Data, đường lui Data in Brief); siêu dữ liệu công khai + dữ liệu gốc truy cập có kiểm soát + DUA (không CC0 cho dữ liệu sức khỏe); DOI qua Zenodo; RO-Crate đóng gói dataset + Data Dictionary + script; 7 tiêu chí Bridge2AI cho AI-ready (ghi rõ preprint) | Huy + Vũ Nguyệt Minh | GĐ3 (P3), GĐ5 (đóng gói cuối) |
| **6. Bảo mật & pháp lý** | Sửa căn cứ pháp lý: Luật 91/2025 + Nghị định 356/2025 (thay 13/2023) trong README §4 và DD v2.0; lập **hồ sơ DPIA gửi A05 trong 60 ngày** kể từ khi bắt đầu xử lý (Điều 21 Luật 91/2025); bổ sung số quyết định IRB (#19); giả danh hóa `patient_uuid` + bảng ánh xạ AES-256 tại bệnh viện (đã có — giữ nguyên); dữ liệu chia sẻ ngoài bệnh viện phải qua lộ trình Expert Determination (không gọi là Safe Harbor nếu còn ngày tháng đã dịch chuyển); tuân thủ TCVN 14423:2026 về an ninh mạng y tế số | Huy + Thế Vinh + Lê Hữu Doanh | Ngay (sửa trích dẫn), GĐ1 (DPIA + IRB) |
| **7. Kết thúc: lưu trữ / hủy** | Lưu trữ theo TT33/2025 (hồ sơ tử vong 30 năm; hồ sơ tâm thần/tai nạn/SOP thử nghiệm 20 năm; hồ sơ chính thử nghiệm lâm sàng tối thiểu 25 năm theo EU 536/2014 Điều 58); dữ liệu NIH-style giữ 3 năm sau đóng grant (nếu áp dụng); hủy an toàn theo NIST SP 800-88 Rev. 2 (Clear/Purge/Destroy) + ghi lại việc hủy; hoàn thiện BC-01–BC-12 (#22); data availability statement cho từng bài P1–P8 | Vũ Nguyệt Minh + Huy | GĐ5 (10–12/2027) |

## 3. Dùng làm case study trong khóa học — cách dạy

**Vị trí trong khóa học:** module cuối (sau chương 6) và là **tình huống capstone chính thức** — thay cho đề tài giả định chung chung, học viên làm capstone trên DrMayDay (đã có dữ liệu thật về cấu trúc, không có dữ liệu bệnh nhân thật).

**Mục tiêu học tập (thêm vào M0/capstone):** sau case study, học viên (1) viết được DMP yếu tố 6 (bảng loại dữ liệu + kho) cho một dự án thật; (2) phát hiện được lỗi pháp lý (Nghị định 13/2023) và lỗi PII (thẻ CCCD làm vật đối chuẩn) trong tài liệu thật; (3) ánh xạ được 5 biến DD v2.0 sang OMOP; (4) phân biệt được Safe Harbor và Expert Determination trên một pipeline thật.

**Bài tập trong case study (4 bài, có đáp án):**
1. **Tìm lỗi pháp lý:** README §4 và DD v2.0 trích văn bản nào đã hết hiệu lực? Viết lại câu đó theo khung hiện hành (xem Phụ lục A).
2. **Tìm rủi ro PII:** SOP chụp ảnh dùng thẻ CCCD làm vật đối chuẩn có vấn đề gì? Viết lại quy định (chỉ thước kẻ/thẻ màu chuẩn).
3. **Ánh xạ chuẩn:** lấy 5 biến từ DD v2.0 (`ma_benh_nhan`, `ngay_sinh`, `gioi_tinh`, UAS7, IgE) và ánh xạ sang OMOP (bảng + concept) — đối chiếu Phụ lục E.
4. **Viết DMP:** điền bảng yếu tố 6 của mẫu NIH 2026 cho DrMayDay (loại dữ liệu + kho lưu trữ, tối đa 100 từ).

**Câu hỏi thảo luận:**
- Vì sao Data Dictionary đầy đủ (183 biến) vẫn chưa đủ để gọi là đã quản trị dữ liệu tốt? (Thiếu DMP, SOP, DPIA, quyết định lưu trữ/hủy.)
- Dự án có “Zero-PII Architecture” nhưng README vẫn trích luật hết hiệu lực — điều này nói gì về khác biệt giữa bảo mật kỹ thuật và tuân thủ pháp lý?
- Khi nào nên giữ dữ liệu ở bệnh viện (truy cập có kiểm soát) thay vì đưa lên kho mở, dù FAIR khuyến khích chia sẻ?

## 4. Việc cần làm ngay cho dự án (ưu tiên trước 30/11/2026 — chốt GĐ1)

1. **Sửa trích dẫn Nghị định 13/2023 → Luật 91/2025 + Nghị định 356/2025** trong README §4 và DD v2.0 (việc nhỏ, làm ngay; gắn với issue #19/#22).
2. **Lập hồ sơ DPIA** (Điều 21 Luật 91/2025, gửi A05 trong 60 ngày) — nếu chưa lập, GĐ1 chưa thể coi là xong về mặt pháp lý.
3. **Sửa SOP chụp ảnh: cấm dùng thẻ CCCD làm vật đối chuẩn** (chỉ thước kẻ/thẻ màu chuẩn).
4. **Viết DMP 1 trang theo mẫu NIH 2026** (7 yếu tố) cho dự án — dùng làm tài liệu quản trị và làm mẫu cho khóa học.
5. **Xuất Data Dictionary v2.0 ra dạng máy đọc được** (CSV/JSON) để dùng làm eCRF và ánh xạ OMOP — bản .md/.docx hiện tại con người đọc được nhưng máy không dùng trực tiếp được.
6. **Chốt CSDL/ERD (#17)** và số quyết định IRB (#19) — hai quyết định treo cản GĐ2.

## 5. Ghi chú cho người đưa case study vào khóa học

- Đưa file này vào repo khóa học làm `course/case-study-drmayday.md` (kèm link tới repo `fossbk-spec/drmayday` ở chế độ public phần mô tả — lưu ý repo drmayday là **private**, học viên bên ngoài không đọc được; vì vậy case study phải **tự chứa đầy đủ** nội dung cần thiết, không yêu cầu học viên truy cập repo).
- Capstone của khóa học dùng DrMayDay làm tình huống chính; đề tài viêm xoang ở chương 6 §6.2 giữ lại làm tình huống thay thế.
- Cập nhật case study mỗi khi dự án sang giai đoạn mới (GĐ2: 12/2026); ghi “Ngày chốt: 21/11/2026” ở đầu file và rà soát 6 tháng/lần như các phụ lục.
- Mọi số liệu trong file này lấy từ repo và kế hoạch tại thời điểm review; nếu dự án cập nhật (ví dụ đã chụp được ảnh, đã có số IRB), cập nhật file và ghi vào CHANGELOG.

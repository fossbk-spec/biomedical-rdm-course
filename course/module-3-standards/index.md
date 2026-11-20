# Bài 3 — Chuẩn dữ liệu: CDISC, FHIR và OMOP bổ trợ nhau

**Mục tiêu:** nói được mỗi chuẩn dùng để làm gì, và vì sao không chọn chỉ một chuẩn.

**Lớp kiểm soát bảo mật, đạo đức và pháp lý áp dụng xuyên suốt mọi giai đoạn của vòng đời dữ liệu.**

## Nội dung chính

Ba chuẩn lớn nhất thường bị hiểu là đối thủ của nhau. Thực ra chúng bổ trợ nhau, mỗi chuẩn giải một bài toán khác:

- **CDISC (đặc biệt SDTM):** chuẩn để **nộp hồ sơ** cho cơ quan quản lý. Dữ liệu thử nghiệm lâm sàng được chuyển thành dạng bảng chuẩn để FDA/EMA đọc được.
- **FHIR (HL7):** chuẩn để **trao đổi lâm sàng theo thời gian thực** giữa các hệ thống bệnh viện. FHIR R4 (2019) là bản dùng trong thực hành; R5 ban hành 26/03/2023; **R6 chưa ban hành, đang trong giai đoạn ballot**.
- **OMOP CDM (OHDSI):** mô hình dữ liệu chung để **phân tích quần thể** trên nhiều cơ sở dữ liệu. OMOP CDM v5.4 (09/2021) là bản tham chiếu. Mạng lưới OHDSI cuối 2025: 4.833 cộng tác viên ở 88 quốc gia, 544 nguồn dữ liệu ở 54 quốc gia, 974 triệu hồ sơ bệnh nhân duy nhất.

Ba chức năng này bổ trợ nhau: CDISC/SDTM phục vụ nộp hồ sơ, FHIR phục vụ trao đổi lâm sàng, còn OMOP CDM phục vụ phân tích quần thể. Nghiên cứu LEGEND-HTN (Suchard và cộng sự, 2019) minh họa phân tích phân tán trên 4,9 triệu bệnh nhân; mã phân tích được chạy tại từng cơ sở và chỉ gửi thống kê tổng hợp.

SMART on FHIR là lớp ứng dụng chạy trên FHIR: ứng dụng bên thứ ba đọc/ghi dữ liệu EHR qua API chuẩn. FHIR Bulk Data API hỗ trợ xuất dữ liệu quần thể hàng loạt.

**Điểm cần nhớ:** hỏi “nên dùng CDISC hay FHIR hay OMOP?” là hỏi sai. Hỏi đúng là: “dữ liệu này cần đi đâu — nộp hồ sơ, trao đổi lâm sàng, hay phân tích quần thể?”

# Bài 6 — Bảo mật, pháp lý và dữ liệu sẵn sàng cho AI

**Mục tiêu:** kể được các lớp pháp lý áp dụng ở Việt Nam và quốc tế; biết khi nào dữ liệu “đủ tốt cho AI”.

## Nội dung chính

Lớp kiểm soát bảo mật, đạo đức và pháp lý áp dụng xuyên suốt mọi giai đoạn của vòng đời dữ liệu.

Bảo mật dữ liệu y sinh có nhiều lớp, không chỉ một luật:

- **Quốc tế:** GDPR (EU 2016/679) — dữ liệu giả danh vẫn là dữ liệu cá nhân; dữ liệu sức khỏe là dữ liệu đặc biệt. EHDS (EU 2025/327) — có hiệu lực 26/03/2025, áp dụng từ 26/03/2027. HIPAA (Mỹ) — Safe Harbor (loại 18 định danh) hoặc Expert Determination.
- **Việt Nam:** Luật Bảo vệ dữ liệu cá nhân **91/2025/QH15** (hiệu lực 01/01/2026); Nghị định **356/2025/NĐ-CP** (31/12/2025) hướng dẫn luật này và thay thế Nghị định 13/2023 từ 01/01/2026; Luật Dữ liệu 60/2024/QH15; Thông tư 13/2025/TT-BYT về bệnh án điện tử (bệnh viện chậm nhất 30/09/2025, cơ sở khác chậm nhất 31/12/2026); Thông tư 50/2025/TT-BYT về thử thuốc trên lâm sàng (hiệu lực 27/02/2026); Nghị quyết 72-NQ/TW (09/09/2025) về khám sức khỏe định kỳ miễn phí và sổ sức khỏe điện tử.

Về kỹ thuật ẩn danh: **k-anonymity** (Sweeney, 2002) **[CẦN KIỂM CHỨNG thư mục]** — mỗi tổ hợp quasi-identifier xuất hiện ít nhất k lần; **l-diversity** (Machanavajjhala và cộng sự, 2007) — khắc phục điểm yếu của k-anonymity khi giá trị nhạy cảm thiếu đa dạng; **differential privacy** — thêm nhiễu có kiểm soát để bảo vệ cá nhân trong kết quả tổng hợp. Không có kỹ thuật nào là tuyệt đối — k-anonymity vẫn có thể bị tấn công nếu biết thêm thông tin nền.

Dữ liệu “sẵn sàng cho AI” không chỉ là dữ liệu sạch. Theo Bridge2AI (**preprint chưa bình duyệt**), cần 7 tiêu chí: FAIR, Deep Provenance (nguồn gốc sâu), Characterization (mô tả đặc tính), Pre-Model Explainability, Ethics/Legal/Governance, Sustainability, Computability. Dữ liệu không có nguồn gốc rõ ràng thì mô hình AI huấn luyện trên đó cũng không thể giải trình được.

**Điểm cần nhớ:** pháp lý là sàn, không phải trần. Tuân thủ luật là điều kiện cần; quản trị tốt — ai truy cập, vì mục đích gì, ghi lại ra sao — mới là điều kiện đủ.

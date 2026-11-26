# Checklist Capstone — Tự đánh giá 1 trang

**Dùng cho:** [capstone](./capstone.md) (tình huống chính DrMayDay hoặc tình huống thay thế Chương 6 §6.2).
**Cách dùng:** đánh dấu ☐ khi đã tự kiểm tra xong từng mục. Đây là tiêu chí, **không phải thang điểm có trọng số** — thiếu mục nào thì quay lại chương tương ứng để sửa. Không nộp bài, không ai chấm điểm hay lưu kết quả.
**Ngày chốt:** 26/11/2026 · Rà soát 6 tháng/lần.

## DMP theo mẫu NIH 2026 (7 yếu tố)

- ☐ Đủ 7 yếu tố: loại dữ liệu, dữ liệu liên quan, chuẩn, kho lưu trữ, lịch nộp, quyền truy cập, giám sát tuân thủ.
- ☐ Yếu tố 6 (bảng loại dữ liệu + kho) viết trong tối đa 100 từ.
- ☐ Lý do giới hạn chia sẻ (nếu có) viết trong tối đa 300 từ.
- ☐ Ghi rõ dữ liệu nào chia sẻ, dữ liệu nào giữ lại, và vì sao.

## Kế hoạch FAIR (7 bước)

- ☐ Đã đánh giá FAIR ban đầu để xác định khoảng cách, và có bước đánh giá lại sau triển khai.
- ☐ Mỗi loại dữ liệu có kho lưu trữ phù hợp (hồ sơ lâm sàng, ảnh + nhãn, mã nguồn).
- ☐ Metadata máy đọc được, có định danh bền vững (ví dụ DOI cho dataset chia sẻ).
- ☐ Phân biệt rõ công khai và truy cập có kiểm soát — FAIR không có nghĩa là mở hết.

## Đánh giá rủi ro, pháp lý và lưu trữ

- ☐ Dữ liệu nhạy cảm được phân loại theo Luật 91/2025.
- ☐ Lộ trình khử định danh được chọn có lý do: Safe Harbor hay Expert Determination (không gọi là Safe Harbor nếu còn ngày tháng đã dịch chuyển).
- ☐ Thời hạn lưu trữ theo Thông tư 33/2025; kế hoạch hủy an toàn theo NIST SP 800-88 Rev. 2.
- ☐ Căn cứ pháp lý tra theo [Phụ lục pháp lý](/course/book/appendices/legal) (chốt 21/11/2026), không chép văn bản luật đã hết hiệu lực.

## Riêng cho tình huống DrMayDay

- ☐ Ánh xạ 5 biến sang OMOP đúng (UAS7 → observation; khi chuyển sang SDTM thì UAS7 thuộc miền QS, không phải LB).
- ☐ Chia tập theo bệnh nhân (không chia theo ảnh); test set khóa trước khi huấn luyện.
- ☐ Biến `time` (thời gian theo dõi) không dùng làm đặc trưng — biến này mã hóa nhãn.
- ☐ Kể được 3 điều kiện chặn mở tuyển bệnh nhân GĐ2.
- ☐ Chỉ ra được 3 lỗi thật trong tài liệu dự án (§7 của case study) và viết lại cho đúng.

## Riêng cho tình huống thay thế (Chương 6 §6.2)

- ☐ Gói bàn giao đóng theo chuẩn RO-Crate.
- ☐ Kho lưu trữ chọn đúng theo từng loại dữ liệu (bệnh án số, ảnh nội soi, mã nguồn).
- ☐ Chính sách bảo mật và cấp phép theo Luật 91/2025 và Nghị định 356/2025.

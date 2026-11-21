# Bài 1 — Thiết kế nghiên cứu và Kế hoạch quản lý dữ liệu (DMP)

**Mục tiêu:** viết được DMP theo mẫu NIH hiện hành (7 yếu tố) hoặc Horizon Europe cho một nghiên cứu giả định; phân biệt được DMP, protocol và CRF.

## Nội dung chính

Lớp kiểm soát bảo mật, đạo đức và pháp lý áp dụng xuyên suốt mọi giai đoạn của vòng đời dữ liệu.

Một nghiên cứu bắt đầu bằng câu hỏi lâm sàng, nhưng dữ liệu bắt đầu bằng **Data Management Plan (DMP)** — tài liệu mô tả dữ liệu nào sẽ thu thập, ở định dạng nào, lưu ở đâu, ai được truy cập, chia sẻ ra sao, và lưu bao lâu.

Nhà tài trợ lớn yêu cầu DMP từ lúc nộp hồ sơ. Khi soạn thảo, dùng **mẫu NIH hiện hành (7 yếu tố) hoặc Horizon Europe**; xem `../appendices/funder-templates.md` để biết phạm vi và trạng thái kiểm chứng. Horizon Europe nhấn mạnh nguyên tắc “mở tối đa có thể, đóng tối thiểu khi cần thiết”.

Ba thứ thường bị nhầm với nhau:

- **Protocol (đề cương):** nghiên cứu *làm gì, vì sao, trên ai*.
- **DMP:** dữ liệu *là gì, ở đâu, ai dùng, chia sẻ thế nào*.
- **CRF / eCRF:** biểu mẫu *thu thập từng trường dữ liệu* của từng người tham gia.

Trước khi thu thập, cần thống nhất ba thứ: **từ điển dữ liệu** (mỗi biến nghĩa là gì, đơn vị nào, giá trị nào hợp lệ), **Common Data Elements (CDE)** — các biến chuẩn dùng chung để so sánh giữa các nghiên cứu, và **metadata** — dữ liệu mô tả dữ liệu (ai thu thập, khi nào, bằng công cụ nào, phiên bản nào). Không có metadata, dữ liệu sau 2 năm sẽ không ai hiểu nổi, kể cả chính người thu thập.

**Điểm cần nhớ:** DMP có vòng đời riêng — soạn thảo, phê duyệt, rà soát định kỳ, cập nhật khi protocol thay đổi. DMP viết xong rồi cất tủ là DMP chết.

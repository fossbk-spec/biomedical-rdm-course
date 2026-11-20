# Bài 5 — FAIR, chia sẻ và kết thúc nghiên cứu

**Mục tiêu:** áp dụng được 4 nguyên tắc FAIR; biết khi nào chia sẻ, khi nào đóng, và kết thúc nghiên cứu thế nào.

## Nội dung chính

Lớp kiểm soát bảo mật, đạo đức và pháp lý áp dụng xuyên suốt mọi giai đoạn của vòng đời dữ liệu.

**FAIR** (Wilkinson và cộng sự, 2016) gồm 4 nguyên tắc: **Findable (tìm được), Accessible (truy cập được), Interoperable (liên thông được), Reusable (tái sử dụng được)**. FAIR không có nghĩa là “mở hết”: dữ liệu sức khỏe thường FAIR nhưng **không mở công khai** — metadata mở để người khác tìm được, còn dữ liệu thì truy cập có kiểm soát.

Quy trình **FAIRification 7 bước** (Jacobsen và cộng sự, 2020) gồm ba pha: tiền-FAIRification — (1) xác định mục tiêu dựa trên đánh giá FAIR ban đầu, (2) phân tích cấu trúc dữ liệu, metadata và yêu cầu riêng tư; FAIRification — (3) định nghĩa mô hình ngữ nghĩa, (4) chuẩn hóa bằng bản thể học và từ vựng chuẩn, (5) làm giàu metadata và gắn định danh bền vững, (6) cấp phép tái sử dụng và lưu ký trên kho tin cậy; hậu-FAIRification — (7) đánh giá lại mức độ trưởng thành FAIR sau triển khai. Sách công thức thực hành là FAIR Cookbook (Rocca-Serra và cộng sự, 2023).

Kết thúc nghiên cứu không phải là “xong thì thôi”. Cần có:

- **Báo cáo kết quả** (đăng ký ClinicalTrials.gov, chia sẻ dữ liệu theo tuyên bố đã cam kết).
- **Lưu trữ (archiving):** dữ liệu, metadata, code và tài liệu lưu theo thời hạn quy định — ở Việt Nam, Thông tư 33/2025/TT-BYT quy định thời hạn lưu trữ hồ sơ, tài liệu y tế.
- **Hủy an toàn (secure destruction):** khi hết hạn lưu trữ, hủy theo NIST SP 800-88 Rev. 2 (Clear / Purge / Destroy) — xóa thông thường không đủ.

**Điểm cần nhớ:** một nghiên cứu chỉ hoàn thành khi dữ liệu của nó có thể được tìm lại, hiểu lại và kiểm tra lại sau nhiều năm.

# Quiz — Bài 6

**6.1. Nguyên tắc FAIR (Wilkinson và cộng sự, 2016) có đồng nghĩa với việc dữ liệu nghiên cứu y sinh bắt buộc phải công khai mở hoàn toàn (Open Data) không?**
- A. Có — dữ liệu đã FAIR thì bắt buộc phải đưa lên internet cho bất kỳ ai tải về tự do.
- B. Không — FAIR đòi hỏi dữ liệu phải Tìm được, Truy cập được, Liên thông được và Tái sử dụng được. Trong y tế, dữ liệu thường "Truy cập có kiểm soát" (Controlled/Governed Access): Siêu dữ liệu mở công khai để tìm kiếm, còn dữ liệu thô được bảo vệ theo thỏa thuận chuyển giao dữ liệu (DUA).
- C. FAIR chỉ áp dụng cho nghiên cứu sinh học phân tử, không áp dụng cho dữ liệu lâm sàng.
- D. Không, FAIR cấm hoàn toàn việc chia sẻ dữ liệu y tế.
- **Đáp án: B.** Theo phương châm của Horizon Europe: *"As open as possible, as closed as necessary"*.

**6.2. Trong quy trình FAIRification 7 bước (Jacobsen và cộng sự, 2020), mục đích cốt lõi của bước "Cấp định danh bền vững (PID)" như DOI, ORCID hoặc ROR là gì?**
- A. Giúp tăng dung lượng lưu trữ của tệp dữ liệu.
- B. Bảo đảm khả năng định danh duy nhất toàn cầu và truy vết vĩnh viễn (Findable & Reusable), tránh hiện tượng đứt gãy liên kết (Link Rot) khi địa chỉ web thay đổi.
- C. Để mã hóa dữ liệu thành dạng không thể giải mã.
- D. Để tránh phải viết tài liệu mô tả dữ liệu.
- **Đáp án: B.** Định danh bền vững (PID) là nền tảng cốt lõi của nguyên tắc Findable và Reusable trong FAIR.

**6.3. Chuẩn tài liệu hóa "Datasheets for Datasets" (Gebru và cộng sự, 2021) được tạo ra nhằm giải quyết vấn đề gì khi cung cấp dữ liệu cho mô hình Trí tuệ Nhân tạo (AI)?**
- A. Giúp mô hình AI chạy nhanh hơn trên GPU.
- B. Minh bạch hóa toàn diện xuất xứ (Provenance), động cơ thu thập, thành phần dữ liệu, quy trình làm sạch nhãn và các giới hạn đạo đức/độ lệch (Bias) của tập dữ liệu để ngăn ngừa sai lệch thuật toán.
- C. Thay thế hoàn toàn mã nguồn huấn luyện AI.
- D. Dùng để tự động gắn nhãn dữ liệu hình ảnh.
- **Đáp án: B.** Tương tự như bảng thông số kỹ thuật của linh kiện điện tử, Datasheet giúp nhà nghiên cứu AI hiểu rõ nguồn gốc và giới hạn của dữ liệu y tế trước khi huấn luyện mô hình.

**6.4. Tình huống:** Khi chuẩn bị một bộ dữ liệu lâm sàng phục vụ huấn luyện mô hình học máy (Machine Learning) dự đoán biến cố tái phát bệnh, sai lầm nào dưới đây gây ra hiện tượng rò rỉ dữ liệu (Data Leakage) nghiêm trọng nhất?
- A. Loại bỏ các giá trị dị biệt trước khi huấn luyện.
- B. Phân chia ngẫu nhiên ở cấp độ dòng bản ghi (Record-level Split) thay vì phân chia ở cấp độ từng bệnh nhân (Patient-level Split), khiến các lần khám khác nhau của cùng một bệnh nhân xuất hiện ở cả tập Train và tập Test.
- C. Đặt tên biến số bằng tiếng Anh chuẩn.
- D. Đóng gói dữ liệu theo chuẩn RO-Crate.
- **Đáp án: B.** Rò rỉ dữ liệu xảy ra khi mô hình "nhìn thấy" thông tin sinh học của cùng một bệnh nhân ở tập huấn luyện và áp dụng ghi nhớ đó khi dự đoán ở tập kiểm thử, tạo ra độ chính xác giả tạo rất cao trên máy tính nhưng sụp đổ hoàn toàn khi triển khai thực tế.

---

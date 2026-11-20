# Bài 4 — Chất lượng dữ liệu, dữ liệu khuyết và tái lập

**Mục tiêu:** đánh giá được chất lượng dữ liệu theo 5 chiều; xử lý đúng dữ liệu khuyết.

## Nội dung chính

Lớp kiểm soát bảo mật, đạo đức và pháp lý áp dụng xuyên suốt mọi giai đoạn của vòng đời dữ liệu.

Dữ liệu EHR tái sử dụng cho nghiên cứu thường bẩn theo những cách có hệ thống. Khung của Weiskopf & Weng (2013) đánh giá chất lượng theo 5 chiều: **completeness (đầy đủ), correctness (đúng), concordance (nhất quán giữa các nguồn), plausibility (hợp lý), currency (cập nhật)**. Khung hài hòa của Kahn và cộng sự (2016) **[CẦN KIỂM CHỨNG thư mục]** bổ sung phân biệt **verification** (dữ liệu có đúng định dạng và quy tắc không) và **validation** (dữ liệu có đúng với thực tế không).

Dữ liệu khuyết không phải một loại. Theo Rubin (1976):

- **MCAR (Missing Completely At Random):** khuyết hoàn toàn ngẫu nhiên — ít gây chệch nhất.
- **MAR (Missing At Random):** khuyết có thể dự đoán được từ dữ liệu đã quan sát — dùng được multiple imputation.
- **MNAR (Missing Not At Random):** khuyết liên quan đến chính giá trị bị khuyết — không thể phân biệt được từ dữ liệu, cần phân tích độ nhạy.

Quy tắc thực hành (Sterne và cộng sự, 2009): **multiple imputation là cách khuyến nghị khi MAR; không dùng mean imputation hay last observation carried forward** vì chúng bóp méo phương sai và quan hệ giữa các biến. Mọi cách xử lý dữ liệu khuyết phải được ghi lại trong protocol phân tích trước khi nhìn kết quả.

Cuối cùng là tái lập: khảo sát của Baker (2016) trên 1.500 nhà khoa học cho thấy hơn 70% không tái lập được thí nghiệm của nhóm khác. Dữ liệu tốt mà không có code, phiên bản dữ liệu và môi trường phân tích đi kèm thì vẫn không tái lập được.

**Điểm cần nhớ:** câu hỏi đầu tiên khi thấy dữ liệu khuyết không phải “điền gì vào?”, mà là “vì sao nó khuyết?”.

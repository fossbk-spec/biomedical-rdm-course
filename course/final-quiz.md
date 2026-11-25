# Quiz tổng hợp — Workflow (10 câu, làm sau 6 bài)

**Q1.** Sắp xếp đúng thứ tự các giai đoạn: (a) Chuẩn hóa, (b) Thiết kế & DMP, (c) Lưu trữ & hủy an toàn, (d) Thu thập, (e) FAIR & chia sẻ, (f) Xử lý & làm sạch.
- A. b → d → f → a → e → c, theo tiến trình từ thiết kế đến lưu trữ.
- B. d → b → f → a → c → e, bắt đầu bằng thu thập trước khi hoàn thiện kế hoạch.
- C. b → a → d → f → e → c, đặt chuẩn hóa sớm hơn thu thập dữ liệu.
- D. a → b → d → f → e → c, đặt chuẩn hóa trước phần thiết kế.
- **Đáp án: A.** Vòng đời bắt đầu ở thiết kế và DMP, rồi thu thập, xử lý và làm sạch, chuẩn hóa, FAIR/chia sẻ và kết thúc bằng lưu trữ hoặc hủy an toàn. Giai đoạn phân tích và tái lập không có bài riêng trong khóa này nên không đưa vào câu hỏi.

**Q2.** Một nghiên cứu không viết DMP, thu thập xong mới nghĩ đến việc chia sẻ dữ liệu. Hậu quả nào có khả năng xảy ra nhất?
- A. Có thể mất thêm thời gian, nhưng nhiều quyết định quản trị khác vẫn giữ nguyên.
- B. Thiếu metadata và biến không thống nhất, làm khó phê duyệt chia sẻ.
- C. Có ít hậu quả vì quyết định chia sẻ có thể đưa ra ở cuối nghiên cứu.
- D. Dữ liệu tự động trở nên FAIR vì đã được thu thập đầy đủ trong nghiên cứu.
- **Đáp án: B.** Quyết định thượng nguồn bị bỏ qua có thể làm thiếu metadata, không nhất quán biến và hạn chế khả năng chia sẻ về sau.

**Q3.** Bệnh viện A dùng FHIR để gửi dữ liệu cho bệnh viện B, rồi cả hai cùng phân tích trên OMOP CDM. Nhận định nào đúng?
- A. Phải chuyển sang CDISC trước, dù mục tiêu là trao đổi rồi phân tích quan sát.
- B. Dùng thừa chuẩn; một chuẩn thường đủ cho cả trao đổi và phân tích.
- C. Đúng vai trò: FHIR để trao đổi, OMOP để phân tích.
- D. FHIR và OMOP thường khó dùng chung trong một quy trình liên cơ sở.
- **Đáp án: C.** FHIR phục vụ trao đổi dữ liệu; OMOP phục vụ chuẩn hóa và phân tích dữ liệu quan sát.

**Q4.** Dữ liệu khuyết vì bệnh nhân nặng không lấy được mẫu xét nghiệm. Cách xử lý đúng nhất là gì?
- A. Xóa toàn bộ bệnh nhân đó để bộ dữ liệu không còn ô khuyết.
- B. Bỏ qua và không ghi lại nguyên nhân vì mẫu xét nghiệm chưa từng được lấy.
- C. Điền giá trị trung bình cho nhiều bệnh nhân để giữ kích thước mẫu.
- D. Xem xét MNAR, ghi giả định, chọn phương pháp và phân tích độ nhạy.
- **Đáp án: D.** Cơ chế khuyết có thể liên quan đến mức độ bệnh; cần ghi giả định, chọn phương pháp phù hợp và kiểm tra độ nhạy.

**Q5.** Khi xử lý dữ liệu cá nhân trong nghiên cứu, nguyên tắc nào phù hợp nhất?
- A. Chủ yếu áp dụng văn bản có tại thời điểm viết đề cương, ít rà soát về sau.
- B. Có thể bỏ qua ngày hiệu lực nếu tên văn bản đã ghi trong DMP của nghiên cứu.
- C. Đối chiếu văn bản hiện hành và ngày hiệu lực áp dụng cho bối cảnh nghiên cứu.
- D. Chủ yếu tuân theo chính sách phần mềm thu thập dữ liệu, ít căn cứ khác.
- **Đáp án: C.** Tên văn bản không đủ để xác định nghĩa vụ; cần kiểm tra văn bản hiện hành, ngày hiệu lực và phạm vi áp dụng.

**Q6.** Một dataset đạt k-anonymity với k=5. Điều này đảm bảo điều gì?
- A. Dữ liệu đã được mã hóa và nhiều khóa liên kết đã bị loại bỏ.
- B. Mỗi quasi-identifier xuất hiện ít nhất 5 lần; vẫn còn nguy cơ từ thông tin nền.
- C. Không ai có thể tái định danh bằng bất kỳ cách nào, kể cả liên kết nguồn khác.
- D. Dữ liệu được phép công khai mà không cần xét duyệt hoặc kiểm soát truy cập.
- **Đáp án: B.** k-anonymity giới hạn liên kết trực tiếp, nhưng không loại bỏ mọi nguy cơ tái định danh hoặc suy luận thuộc tính nhạy cảm.

**Q7.** Nhận định nào mô tả đầy đủ hơn yêu cầu để dữ liệu y sinh sẵn sàng cho AI?
- A. Dữ liệu cần lớn, sạch và ở định dạng bảng tính phổ biến để mô hình đọc được.
- B. Dữ liệu chủ yếu cần có nhiều biến và ít ô trống, không cần provenance.
- C. AI-ready cần FAIR, provenance, giải trình, quản trị và khả năng tính toán.
- D. Dữ liệu nên được giữ kín để tránh rủi ro, không cần khả năng tái sử dụng.
- **Đáp án: C.** AI-ready là yêu cầu đa chiều về khả năng tìm thấy, hiểu, giải trình, quản trị và tính toán, không chỉ là dung lượng hoặc độ sạch.

**Q8.** Nghiên cứu kết thúc, nhóm xóa file dữ liệu bằng cách xóa thông thường trong hệ điều hành. Đủ chưa?
- A. Chưa chắc; xóa thông thường chưa đồng nghĩa khử hoặc hủy an toàn.
- B. Đủ trong nhiều trường hợp vì tệp không còn hiển thị trong thư mục.
- C. Không cần hủy, cứ giữ dữ liệu mãi mãi bất kể chính sách lưu giữ.
- D. Cần quan tâm khi dataset có kích thước lớn hoặc nhiều tệp.
- **Đáp án: A.** Cần có quy trình khử hoặc hủy phù hợp với loại lưu trữ, chính sách và yêu cầu áp dụng; xóa thông thường chưa đủ để kết luận an toàn.

**Q9.** Trong workflow FAIRification 7 bước, đánh giá FAIR được dùng như thế nào?
- A. Đánh giá bước 1 để tìm khoảng cách và bước 7 để kiểm tra cải thiện.
- B. Thường đánh giá một lần ở bước 7, sau khi đã hoàn tất nhiều thay đổi.
- C. Chủ yếu đánh giá khi dữ liệu được công khai và không còn hạn chế.
- D. Đánh giá FAIR thay thế cho việc lập kế hoạch và quản trị ở bước 1.
- **Đáp án: A.** Đánh giá ban đầu định hướng kế hoạch, còn đánh giá lại ở bước 7 kiểm tra mức cải thiện và kết quả đạt được.

**Q10.** Một học viên nói: “Dữ liệu của tôi đã FAIR nên tôi công khai toàn bộ lên mạng.” Sai ở đâu?
- A. Không sai, vì nhiều dữ liệu FAIR được công khai trên mạng.
- B. FAIR chủ yếu áp dụng cho dữ liệu mở và không áp dụng cho dữ liệu sức khỏe.
- C. Phải công khai mới gọi là FAIR, bất kể ràng buộc đạo đức hay pháp lý.
- D. FAIR không đồng nghĩa mở hết; dữ liệu sức khỏe có thể kiểm soát truy cập.
- **Đáp án: D.** FAIR yêu cầu khả năng tìm thấy, truy cập được theo điều kiện, liên thông và tái sử dụng; không buộc dữ liệu nhạy cảm phải mở công khai.

**Cách tính điểm:** mỗi câu 1 điểm, tổng 34 câu (24 câu theo bài + 10 câu tổng hợp). Đạt khi ≥ 24/34 **và đúng ít nhất 2/3 câu Q1–Q3** của quiz tổng hợp. Học viên nên làm quiz tổng hợp tối đa 2 lần như hướng dẫn tự học; site tĩnh không cưỡng chế giới hạn này.

---

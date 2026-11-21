# Quiz tổng hợp — Workflow (10 câu, làm sau 6 bài)

**Q1.** Sắp xếp đúng thứ tự workflow: (a) Chuẩn hóa, (b) Thiết kế & DMP, (c) Kết thúc/lưu trữ, (d) Thu thập, (e) FAIR & chia sẻ.
- A. b → d → a → e → c.
- B. d → b → a → c → e.
- C. b → a → d → e → c.
- D. a → b → d → e → c.
- **Đáp án: A.**
- **Giải thích:** Workflow bắt đầu ở thiết kế và DMP, rồi thu thập, chuẩn hóa, FAIR/chia sẻ và kết thúc bằng lưu trữ hoặc hủy an toàn.

**Q2.** Một nghiên cứu không viết DMP, thu thập xong mới nghĩ đến việc chia sẻ dữ liệu. Hậu quả nào có khả năng xảy ra nhất?
- A. Chỉ mất thêm 1 ngày.
- B. Thiếu metadata, biến không thống nhất, không xin được phê duyệt chia sẻ — phải làm lại phần lớn công việc quản trị.
- C. Không có hậu quả gì.
- D. Dữ liệu tự động trở nên FAIR.
- **Đáp án: B.**
- **Giải thích:** Quyết định thượng nguồn bị bỏ qua có thể làm thiếu metadata, không nhất quán biến và hạn chế khả năng chia sẻ về sau.

**Q3.** Bệnh viện A dùng FHIR để gửi dữ liệu cho bệnh viện B, rồi cả hai cùng phân tích trên OMOP CDM. Nhận định nào đúng?
- A. Phải chuyển sang CDISC trước.
- B. Dùng thừa chuẩn, chỉ cần một.
- C. Đúng vai trò: FHIR để trao đổi, OMOP để phân tích.
- D. FHIR và OMOP không thể dùng chung.
- **Đáp án: C.**
- **Giải thích:** FHIR phục vụ trao đổi dữ liệu; OMOP phục vụ chuẩn hóa và phân tích dữ liệu quan sát.

**Q4.** Dữ liệu khuyết vì bệnh nhân nặng không lấy được mẫu xét nghiệm. Cách xử lý đúng nhất là gì?
- A. Xóa toàn bộ bệnh nhân đó.
- B. Bỏ qua, không ghi lại.
- C. Điền giá trị trung bình cho tất cả.
- D. Nhận diện đây có thể là MNAR, ghi lại giả định, dùng phương pháp phù hợp và phân tích độ nhạy.
- **Đáp án: D.**
- **Giải thích:** Cơ chế khuyết có thể liên quan đến mức độ bệnh; cần ghi giả định, chọn phương pháp phù hợp và kiểm tra độ nhạy.

**Q5.** Khi xử lý dữ liệu cá nhân trong nghiên cứu, nguyên tắc nào phù hợp nhất?
- A. Chỉ cần áp dụng văn bản pháp luật có tại thời điểm viết đề cương.
- B. Có thể bỏ qua ngày hiệu lực nếu tên văn bản đã được ghi trong DMP.
- C. Cần đối chiếu văn bản hiện hành và ngày hiệu lực áp dụng cho bối cảnh nghiên cứu.
- D. Chỉ cần tuân theo chính sách của phần mềm thu thập dữ liệu.
- **Đáp án: C.** Tên văn bản không đủ để xác định nghĩa vụ; cần kiểm tra văn bản hiện hành, ngày hiệu lực và phạm vi áp dụng.

**Q6.** Một dataset đạt k-anonymity với k=5. Điều này đảm bảo điều gì?
- A. Dữ liệu đã được mã hóa.
- B. Mỗi tổ hợp quasi-identifier xuất hiện ít nhất 5 lần, nên không thể phân biệt một cá nhân chỉ bằng liên kết trực tiếp — nhưng vẫn có thể bị tấn công bằng thông tin nền hoặc thiếu đa dạng giá trị nhạy cảm.
- C. Không ai có thể tái định danh bằng bất kỳ cách nào.
- D. Dữ liệu được phép công khai.
- **Đáp án: B.**
- **Giải thích:** k-anonymity giới hạn liên kết trực tiếp, nhưng không loại bỏ mọi nguy cơ tái định danh hoặc suy luận thuộc tính nhạy cảm.

**Q7.** Nhận định nào mô tả đầy đủ hơn yêu cầu để dữ liệu y sinh sẵn sàng cho AI?
- A. Dữ liệu cần lớn, sạch và ở định dạng bảng tính phổ biến.
- B. Dữ liệu chỉ cần có nhiều biến và không có ô trống.
- C. Dữ liệu cần đáp ứng các tiêu chí về FAIR, provenance, characterization, explainability, ethics/legal/governance, sustainability và computability; nguồn Bridge2AI ở đây là preprint.
- D. Dữ liệu phải được giữ kín hoàn toàn để tránh mọi rủi ro.
- **Đáp án: C.** AI-ready là yêu cầu đa chiều về khả năng tìm thấy, hiểu, giải trình, quản trị và tính toán, không chỉ là dung lượng hoặc độ sạch.

**Q8.** Nghiên cứu kết thúc, nhóm xóa file dữ liệu bằng cách xóa thông thường trong hệ điều hành. Đủ chưa?
- A. Chưa chắc; xóa thông thường chưa đồng nghĩa với khử hoặc hủy dữ liệu an toàn.
- B. Đủ trong mọi trường hợp vì tệp không còn hiển thị.
- C. Không cần hủy, cứ giữ dữ liệu mãi mãi.
- D. Chỉ cần quan tâm nếu dataset có kích thước lớn.
- **Đáp án: A.** Cần có quy trình khử hoặc hủy phù hợp với loại lưu trữ, chính sách và yêu cầu áp dụng; xóa thông thường chưa đủ để kết luận an toàn.

**Q9.** Trong workflow FAIRification 7 bước, đánh giá FAIR được dùng như thế nào?
- A. Đánh giá ban đầu ở bước 1 để xác định khoảng cách; đánh giá lại ở bước 7 để kiểm tra kết quả sau triển khai.
- B. Chỉ đánh giá một lần ở bước 7.
- C. Chỉ đánh giá khi dữ liệu được công khai hoàn toàn.
- D. Đánh giá FAIR thay thế cho việc lập kế hoạch ở bước 1.
- **Đáp án: A.** Đánh giá ban đầu định hướng kế hoạch, còn đánh giá lại ở bước 7 kiểm tra mức cải thiện và kết quả đạt được.

**Q10.** Một học viên nói: “Dữ liệu của tôi đã FAIR nên tôi công khai toàn bộ lên mạng.” Sai ở đâu?
- A. Không sai.
- B. FAIR chỉ áp dụng cho dữ liệu mở.
- C. Phải công khai mới gọi là FAIR.
- D. FAIR không đồng nghĩa với mở hết; dữ liệu sức khỏe có thể cho truy cập có kiểm soát.
- **Đáp án: D.** FAIR yêu cầu khả năng tìm thấy, truy cập được theo điều kiện, liên thông và tái sử dụng; không buộc dữ liệu nhạy cảm phải mở công khai.

**Cách tính điểm:** mỗi câu 1 điểm, tổng 34 câu (24 câu theo bài + 10 câu tổng hợp). Đạt khi ≥ 24/34 **và đúng ít nhất 2/3 câu Q1–Q3** của quiz tổng hợp. Học viên nên làm quiz tổng hợp tối đa 2 lần như hướng dẫn tự học; site tĩnh không cưỡng chế giới hạn này.

---

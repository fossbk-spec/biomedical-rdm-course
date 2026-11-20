# Quiz tổng hợp — Workflow (10 câu, làm sau 6 bài)

**Q1.** Sắp xếp đúng thứ tự workflow: (a) Chuẩn hóa, (b) Thiết kế & DMP, (c) Kết thúc/lưu trữ, (d) Thu thập, (e) FAIR & chia sẻ.
- A. b → d → a → e → c.
- B. d → b → a → c → e.
- C. b → a → d → e → c.
- D. a → b → d → e → c.
- **Đáp án: A.**

**Q2.** Một nghiên cứu không viết DMP, thu thập xong mới nghĩ đến việc chia sẻ dữ liệu. Hậu quả nào có khả năng xảy ra nhất?
- A. Chỉ mất thêm 1 ngày.
- B. Thiếu metadata, biến không thống nhất, không xin được phê duyệt chia sẻ — phải làm lại phần lớn công việc quản trị.
- C. Không có hậu quả gì.
- D. Dữ liệu tự động trở nên FAIR.
- **Đáp án: B.**

**Q3.** Bệnh viện A dùng FHIR để gửi dữ liệu cho bệnh viện B, rồi cả hai cùng phân tích trên OMOP CDM. Nhận định nào đúng?
- A. Phải chuyển sang CDISC trước.
- B. Dùng thừa chuẩn, chỉ cần một.
- C. Đúng vai trò: FHIR để trao đổi, OMOP để phân tích.
- D. FHIR và OMOP không thể dùng chung.
- **Đáp án: C.**

**Q4.** Dữ liệu khuyết vì bệnh nhân nặng không lấy được mẫu xét nghiệm. Cách xử lý đúng nhất là gì?
- A. Xóa toàn bộ bệnh nhân đó.
- B. Bỏ qua, không ghi lại.
- C. Điền giá trị trung bình cho tất cả.
- D. Nhận diện đây có thể là MNAR, ghi lại giả định, dùng phương pháp phù hợp và phân tích độ nhạy.
- **Đáp án: D.**

**Q5.** Theo Thông tư 13/2025/TT-BYT, hạn triển khai bệnh án điện tử của bệnh viện là khi nào?
- A. 30/09/2025.
- B. 31/12/2026.
- C. 01/01/2027.
- D. Không có hạn.
- **Đáp án: A.** Hạn 31/12/2026 áp cho các cơ sở khác, không phải bệnh viện.

**Q6.** Một dataset đạt k-anonymity với k=5. Điều này đảm bảo điều gì?
- A. Dữ liệu đã được mã hóa.
- B. Mỗi tổ hợp quasi-identifier xuất hiện ít nhất 5 lần, nên không thể phân biệt một cá nhân chỉ bằng liên kết trực tiếp — nhưng vẫn có thể bị tấn công bằng thông tin nền hoặc thiếu đa dạng giá trị nhạy cảm.
- C. Không ai có thể tái định danh bằng bất kỳ cách nào.
- D. Dữ liệu được phép công khai.
- **Đáp án: B.**

**Q7.** Muốn dữ liệu dùng được cho AI, ngoài sạch, còn cần gì nhất?
- A. Định dạng Excel.
- B. Chỉ cần nhiều biến.
- C. Nguồn gốc rõ ràng (provenance), mô tả đặc tính, và quản trị đạo đức/pháp lý — theo 7 tiêu chí của Bridge2AI (preprint chưa bình duyệt).
- D. Dung lượng lớn.
- **Đáp án: C.**

**Q8.** Nghiên cứu kết thúc, nhóm xóa file dữ liệu bằng cách xóa thông thường trong hệ điều hành. Đủ chưa?
- A. Chỉ cần khi dữ liệu lớn.
- B. Không cần hủy, cứ giữ mãi.
- C. Đủ.
- D. Chưa — cần hủy an toàn theo chuẩn như NIST SP 800-88, và ghi lại việc hủy.
- **Đáp án: D.**

**Q9.** Vì sao bước 1 dựa trên đánh giá FAIR ban đầu và bước 7 đánh giá lại sau triển khai?
- A. Vì chỉ cần đánh giá ở hai thời điểm đó, các bước giữa không cần theo dõi.
- B. Vì đánh giá FAIR chỉ nhằm quyết định có công khai toàn bộ dữ liệu hay không.
- C. Vì đánh giá ban đầu giúp xác định khoảng cách cần cải thiện, còn đánh giá sau triển khai kiểm tra kết quả và mức trưởng thành đạt được.
- D. Vì bước 7 thay thế cho việc lập kế hoạch ở bước 1.
- **Đáp án: C.**

**Q10.** Một học viên nói: “Dữ liệu của tôi đã FAIR nên tôi công khai toàn bộ lên mạng.” Sai ở đâu?
- A. Không sai.
- B. FAIR không có nghĩa là mở hết; dữ liệu sức khỏe thường FAIR nhưng truy cập có kiểm soát.
- C. FAIR chỉ áp dụng cho dữ liệu mở.
- D. Phải công khai mới gọi là FAIR.
- **Đáp án: B.**

**Cách tính điểm:** mỗi câu 1 điểm, tổng 34 câu (24 câu theo bài + 10 câu tổng hợp). Đạt khi ≥ 24/34 **và đúng ít nhất 2/3 câu Q1–Q3** của quiz tổng hợp. Học viên nên làm quiz tổng hợp tối đa 2 lần như hướng dẫn tự học; site tĩnh không cưỡng chế giới hạn này.

---

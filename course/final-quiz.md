## Quiz tổng hợp — Workflow (10 câu, làm sau 6 bài)

**Q1.** Sắp xếp đúng thứ tự workflow: (a) Chuẩn hóa, (b) Thiết kế & DMP, (c) Kết thúc/lưu trữ, (d) Thu thập, (e) FAIR & chia sẻ.
- A. b → d → a → e → c.
- B. d → b → a → c → e.
- C. b → a → d → e → c.
- D. a → b → d → e → c.
- **Đáp án: A.**

**Q2.** Một nghiên cứu không viết DMP, thu thập xong mới nghĩ đến việc chia sẻ dữ liệu. Hậu quả nào có khả năng xảy ra nhất?
- A. Không có hậu quả gì.
- B. Thiếu metadata, biến không thống nhất, không xin được phê duyệt chia sẻ — phải làm lại phần lớn công việc quản trị.
- C. Chỉ mất thêm 1 ngày.
- D. Dữ liệu tự động trở nên FAIR.
- **Đáp án: B.**

**Q3.** Bệnh viện A dùng FHIR để gửi dữ liệu cho bệnh viện B, rồi cả hai cùng phân tích trên OMOP CDM. Nhận định nào đúng?
- A. Dùng thừa chuẩn, chỉ cần một.
- B. Đúng vai trò: FHIR để trao đổi, OMOP để phân tích.
- C. FHIR và OMOP không thể dùng chung.
- D. Phải chuyển sang CDISC trước.
- **Đáp án: B.**

**Q4.** Dữ liệu khuyết vì bệnh nhân nặng không lấy được mẫu xét nghiệm. Cách xử lý đúng nhất là gì?
- A. Điền giá trị trung bình cho tất cả.
- B. Xóa toàn bộ bệnh nhân đó.
- C. Nhận diện đây có thể là MNAR, ghi lại giả định, dùng phương pháp phù hợp và phân tích độ nhạy.
- D. Bỏ qua, không ghi lại.
- **Đáp án: C.**

**Q5.** Theo Thông tư 13/2025/TT-BYT, hạn triển khai bệnh án điện tử của bệnh viện là khi nào?
- A. 31/12/2026.
- B. 30/09/2025.
- C. 01/01/2027.
- D. Không có hạn.
- **Đáp án: B.** Hạn 31/12/2026 áp cho các cơ sở khác, không phải bệnh viện.

**Q6.** Một dataset đạt k-anonymity với k=5. Điều này đảm bảo điều gì?
- A. Không ai có thể tái định danh bằng bất kỳ cách nào.
- B. Mỗi tổ hợp quasi-identifier xuất hiện ít nhất 5 lần, nên không thể phân biệt một cá nhân chỉ bằng liên kết trực tiếp — nhưng vẫn có thể bị tấn công bằng thông tin nền hoặc thiếu đa dạng giá trị nhạy cảm.
- C. Dữ liệu đã được mã hóa.
- D. Dữ liệu được phép công khai.
- **Đáp án: B.**

**Q7.** Muốn dữ liệu dùng được cho AI, ngoài sạch, còn cần gì nhất?
- A. Dung lượng lớn.
- B. Nguồn gốc rõ ràng (provenance), mô tả đặc tính, và quản trị đạo đức/pháp lý — theo 7 tiêu chí Bridge2AI.
- C. Định dạng Excel.
- D. Chỉ cần nhiều biến.
- **Đáp án: B.**

**Q8.** Nghiên cứu kết thúc, nhóm xóa file dữ liệu bằng cách xóa thông thường trong hệ điều hành. Đủ chưa?
- A. Đủ.
- B. Chưa — cần hủy an toàn theo chuẩn như NIST SP 800-88, và ghi lại việc hủy.
- C. Chỉ cần khi dữ liệu lớn.
- D. Không cần hủy, cứ giữ mãi.
- **Đáp án: B.**

**Q9.** FAIRification bước “đánh giá mức độ FAIR” làm khi nào?
- A. Chỉ làm một lần lúc bắt đầu.
- B. Làm ở cuối quy trình, và lặp lại khi dữ liệu thay đổi.
- C. Không cần làm.
- D. Chỉ làm khi nộp bài báo.
- **Đáp án: B.**

**Q10.** Một học viên nói: “Dữ liệu của tôi đã FAIR nên tôi công khai toàn bộ lên mạng.” Sai ở đâu?
- A. Không sai.
- B. FAIR không có nghĩa là mở hết; dữ liệu sức khỏe thường FAIR nhưng truy cập có kiểm soát.
- C. FAIR chỉ áp dụng cho dữ liệu mở.
- D. Phải công khai mới gọi là FAIR.
- **Đáp án: B.**

**Cách tính điểm:** mỗi câu 1 điểm, tổng 34 câu (24 câu theo bài + 10 câu tổng hợp). Đạt khi ≥ 70% (≥ 24/34) và không sai quá 2 câu trong quiz tổng hợp về workflow (Q1, Q2, Q3). Quiz theo bài làm lại không giới hạn; quiz tổng hợp làm tối đa 2 lần.

---

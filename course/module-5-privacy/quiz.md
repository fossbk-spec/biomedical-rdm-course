# Quiz — Bài 5

**5.1. Theo GDPR và quy chuẩn quốc tế, dữ liệu giả danh (pseudonymised data) có còn là dữ liệu cá nhân không?**
- A. Có — vẫn là dữ liệu cá nhân vì về mặt kỹ thuật vẫn có thể tái định danh được nếu nắm giữ bảng mã/khóa giải mã riêng.
- B. Không, đã trở thành dữ liệu ẩn danh hoàn toàn (anonymized) không thể đảo ngược.
- C. Chỉ được coi là dữ liệu cá nhân nếu có lưu kèm họ tên thật.
- D. Không áp dụng đối với dữ liệu nghiên cứu y sinh.
- **Đáp án: A.** Theo Điều 4(5) GDPR, dữ liệu giả danh vẫn chịu sự điều chỉnh của luật bảo vệ dữ liệu cá nhân.

**5.2. Theo Nghị định 13/2023/NĐ-CP và Luật Bảo vệ dữ liệu cá nhân của Việt Nam, dữ liệu về tình trạng sức khỏe và hồ sơ bệnh án được xếp vào nhóm nào?**
- A. Dữ liệu công cộng.
- B. Dữ liệu cá nhân cơ bản.
- C. Dữ liệu cá nhân nhạy cảm — bắt buộc phải áp dụng các biện pháp bảo vệ tăng cường và lập Đánh giá tác động xử lý dữ liệu (DPIA).
- D. Dữ liệu không chịu sự quản lý pháp lý.
- **Đáp án: C.** Dữ liệu sức khỏe là dữ liệu cá nhân nhạy cảm, có nguy cơ xâm phạm trực tiếp quyền riêng tư nếu bị rò rỉ.

**5.3. Mô hình $l$-Diversity ra đời nhằm khắc phục điểm yếu chí mạng nào của $k$-Anonymity?**
- A. $k$-Anonymity xử lý thuật toán quá chậm trên dữ liệu lớn.
- B. $k$-Anonymity không bảo vệ được quyền riêng tư khi giá trị nhạy cảm trong một nhóm tương đương thiếu tính đa dạng (tấn công đồng nhất - Homogeneity Attack).
- C. $k$-Anonymity làm mất hoàn toàn dữ liệu nghiên cứu.
- D. $k$-Anonymity chỉ dùng được cho biến văn bản.
- **Đáp án: B.** Nếu tất cả $k$ bệnh nhân trong một nhóm đều mắc cùng một bệnh nhạy cảm (ví dụ HIV), kẻ tấn công biết đối tượng thuộc nhóm đó sẽ chắc chắn biết người đó mắc bệnh dù dữ liệu thỏa mãn $k$-anonymity.

**5.4. Tình huống:** Khi khử định danh một tập dữ liệu theo dõi dọc (longitudinal cohort), vì sao kỹ thuật "Dịch chuyển ngày tháng ngẫu nhiên theo từng bệnh nhân" (Patient-Level Date Shifting) lại được khuyến nghị áp dụng thay vì xóa bỏ hoàn toàn tất cả các cột ngày tháng?
- A. Để làm dữ liệu nhìn đẹp hơn.
- B. Giúp bảo toàn chính xác 100% khoảng cách thời gian giữa các biến cố lâm sàng (phục vụ phân tích sống còn và đánh giá liều lượng), đồng thời xóa bỏ mốc thời gian thực trên lịch để ngăn đối chiếu bệnh án gốc.
- C. Giúp tăng tốc độ xử lý của máy tính.
- D. Không có tác dụng bảo mật gì.
- **Đáp án: B.** Date shifting giữ nguyên khoảng cách tương đối giữa các sự kiện nhưng làm mất liên kết với thời gian thực tế tại viện.

---

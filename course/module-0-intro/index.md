# Nhập môn và cách học

**Mục tiêu duy nhất của phần này:** sau khi học xong, bạn nắm được **workflow quản lý dữ liệu từ thiết kế đề cương đến kết thúc nghiên cứu** và trả lời được “ở bước này phải làm gì, vì sao, và làm sai thì hậu quả gì”.

**Đối tượng:** sinh viên BME, bác sĩ và nghiên cứu viên mới bắt đầu. Không cần biết lập trình.
**Thời lượng:** khoảng 2–3 phút đọc mỗi bài + quiz (tổng khoảng 1 giờ), 6 bài.
**Nguồn:** tổng hợp từ bản *Tổng hợp literature review — RDM Y Sinh* (20/11/2026). Có 103 mục tham khảo, trong đó một số đang chờ kiểm chứng (xem Roadmap).
**Phạm vi:** chỉ lý thuyết và quiz. Lab, video, dữ liệu mẫu và chứng nhận sẽ bổ sung sau.

---

## Workflow tổng thể — 7 giai đoạn cần nhớ

```
1. Thiết kế & DMP → 2. Thu thập → 3. Làm sạch & kiểm tra
→ 4. Chuẩn hóa (CDISC / FHIR / OMOP) → 5. Bảo mật & khử định danh
→ 6. FAIR & AI-ready → 7. Kết thúc: lưu trữ / hủy an toàn
```

Quy tắc xuyên suốt: **quyết định càng sớm càng rẻ**. Một trường dữ liệu không định nghĩa ở bước 1 sẽ thành dữ liệu khuyết, không so sánh được, hoặc không dùng được cho AI ở bước 5–7. DMP không phải thủ tục hành chính — nó là bản hợp đồng về dữ liệu của cả nghiên cứu.

**Lớp kiểm soát xuyên suốt:** bảo mật, đạo đức và pháp lý áp dụng ở mọi giai đoạn của vòng đời dữ liệu, từ lập kế hoạch đến lưu trữ hoặc tiêu hủy; đây không phải một bước chỉ làm ở cuối.

| 7 bước của khóa học | 6 giai đoạn trong review §2.1 |
|---|---|
| Thiết kế & DMP | Lập kế hoạch |
| Thu thập | Thu thập |
| Làm sạch & kiểm tra | Xử lý và chuẩn hóa |
| Chuẩn hóa | Xử lý và chuẩn hóa |
| Phân tích | Bước 3–4: làm sạch, kiểm tra và chuẩn hóa để phân tích |
| Bảo mật & khử định danh | Áp dụng xuyên suốt |
| FAIR & AI-ready | Chia sẻ, công bố và tái sử dụng |
| Kết thúc: lưu trữ / hủy an toàn | Lưu trữ dài hạn hoặc tiêu hủy |

---

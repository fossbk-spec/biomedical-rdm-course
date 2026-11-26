# Capstone — Tự đánh giá cuối khóa: soạn hồ sơ RDM cho một dự án thật

**Vị trí:** module cuối, sau Bài 6 và quiz tổng hợp. **Tiên quyết:** M1–M6.
**Thời gian gợi ý:** 45–60 phút. **Ngày chốt:** 26/11/2026 · Rà soát 6 tháng/lần.
**Hình thức:** tự làm, tự chấm theo [checklist 1 trang](./capstone-checklist.md). **Không nộp bài, không chấm điểm, không có điểm đậu/rớt.**

## Tình huống chính: dự án DrMayDay (mày đay, Bệnh viện Da liễu Trung ương)

Đọc [case study DrMayDay](./case-study-drmayday.md) (bản v2, ngày chốt 25/11/2026, đồng bộ từ phụ lục của sách gốc `biomedical-rdm`): một đề tài thật đi trọn vòng đời 7 giai đoạn — 1.000 hồ sơ, 10.240 ảnh (mục tiêu), 200 ca đối đầu, 183 biến Data Dictionary, pipeline 8 chặng, dataset theo từng mô hình. Case study không chứa dữ liệu bệnh nhân thật nào; mọi ví dụ bản ghi đều là giả lập và ghi rõ như vậy.

Đóng vai Data Steward của dự án, soạn **3 sản phẩm**:

1. **DMP theo mẫu NIH 2026 (7 yếu tố).** Viết yếu tố 6 (bảng loại dữ liệu + kho lưu trữ) trong tối đa 100 từ, theo đáp án mẫu ở case study §9 bài 4; các yếu tố còn lại trả lời theo khung Có/Không của mẫu NIH, kèm lý do giới hạn chia sẻ tối đa 300 từ khi áp dụng. Đối chiếu với DMP v1.1 của dự án (tóm tắt ở case study §2, §5) và hai mẫu đối chiếu ở §8 (NIH, PERSIST).
2. **Kế hoạch FAIR 7 bước** (Jacobsen et al. 2020 — xem [Chương 6](/course/book/ch06) §3.3): đánh giá FAIR ban đầu, chọn kho cho từng loại dữ liệu (hồ sơ lâm sàng, ảnh + nhãn, biomarker, mã nguồn), gán định danh bền vững, viết metadata máy đọc được. Phân biệt rõ dữ liệu nào công khai, dữ liệu nào truy cập có kiểm soát — FAIR không có nghĩa là mở hết.
3. **Đánh giá rủi ro:** phân loại dữ liệu nhạy cảm theo Luật 91/2025; chọn lộ trình khử định danh — Safe Harbor hay Expert Determination — và giải thích vì sao (xem [Chương 5](/course/book/ch05)); thời hạn lưu trữ theo Thông tư 33/2025; hủy an toàn theo NIST SP 800-88 Rev. 2. Căn cứ pháp lý trỏ tới [Phụ lục pháp lý](/course/book/appendices/legal) (chốt 21/11/2026), không sao chép nội dung pháp lý sang đây.

**4 bài tập bắt buộc, lấy từ case study §9** (có đáp án để tự chấm):

- **Bài 3 — Ánh xạ chuẩn:** ánh xạ 5 biến (`ma_benh_nhan`, `ngay_sinh`, `gioi_tinh`, UAS7, IgE) sang OMOP. Lưu ý: UAS7 thuộc miền QS của SDTM, không phải LB.
- **Bài 5 — Tìm điểm rò rỉ:** nếu chia dataset ảnh theo ảnh thay vì theo bệnh nhân thì số đo hiệu năng của mô hình sẽ ra sao, và vì sao?
- **Bài 6 — Đọc cổng kiểm soát:** kể tên 3 điều kiện chặn mở tuyển bệnh nhân GĐ2 (bảng §6 của case study).
- **Bài 7 — Đối chiếu DMP:** kể tên 3 điểm bản thảo DMP v1.1 còn thiếu hoặc còn [CHƯA CHỐT] so với hai mẫu NIH và PERSIST (bảng §8.3).

**Thêm một bài tập phát hiện lỗi (§7 của case study):** chỉ ra 3 lỗi thật trong tài liệu của dự án — trích văn bản pháp luật hết hiệu lực, thẻ CCCD làm vật đối chuẩn khi chụp ảnh, gọi kiến trúc giả danh hóa là "Zero-PII" — và viết lại mỗi chỗ cho đúng.

## Tình huống thay thế: bàn giao cuối dự án (Chương 6 §6.2)

Nếu không làm tình huống DrMayDay, làm bài tập tình huống nâng cao ở [Chương 6 §6.2](/course/book/ch06): xây dựng **Final RDM Handover Package** cho một thử nghiệm lâm sàng (400 bệnh nhân REDCap, 800 ảnh nội soi, mã nguồn R) — đóng gói theo chuẩn RO-Crate, chọn kho lưu trữ cho từng loại dữ liệu, thiết lập chính sách bảo mật và cấp phép theo Luật 91/2025 và Nghị định 356/2025. Ba sản phẩm phải nộp vẫn là DMP + kế hoạch FAIR + đánh giá rủi ro, chấm bằng cùng một checklist dưới đây.

## Nguồn để tra cứu khi làm bài

- [Chương 1 — Tổng quan RDM và DMP](/course/book/ch01) · [Chương 2 — Thu thập và REDCap](/course/book/ch02) · [Chương 3 — CDISC, FHIR và OMOP](/course/book/ch03)
- [Chương 4 — Chất lượng và dữ liệu khuyết](/course/book/ch04) · [Chương 5 — Bảo mật và khử định danh](/course/book/ch05) · [Chương 6 — FAIR và AI-ready](/course/book/ch06)
- [Phụ lục mẫu nhà tài trợ](/course/book/appendices/funder-templates) (mẫu NIH 2026) · [Phụ lục pháp lý](/course/book/appendices/legal) · [Phụ lục chuẩn](/course/book/appendices/standards) · [Phụ lục lưu trữ](/course/book/appendices/retention)

## Tự nghiệm thu

Đối chiếu 3 sản phẩm của bạn với [checklist capstone](./capstone-checklist.md). Checklist là tiêu chí, không phải thang điểm có trọng số: thiếu mục nào thì quay lại chương tương ứng để sửa, làm lại bao nhiêu lần tùy ý. Không ai chấm điểm hay lưu kết quả của bạn.

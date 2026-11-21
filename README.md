# Biomedical RDM Course

Mini-course tiếng Việt về **Quản lý dữ liệu nghiên cứu y sinh**, dành cho sinh viên kỹ thuật y sinh, bác sĩ và nghiên cứu viên mới bắt đầu.

## Bản web và nguồn nội dung

Đây là **bản web** của khóa học. Nguồn chân lý nằm trong repo [biomedical-rdm](https://github.com/fossbk-spec/biomedical-rdm). Giáo trình đầy đủ trong `course/book/` được đồng bộ một chiều qua `scripts/sync_manifest.json`; các trang mini-course là bản ôn nhanh và được đồng bộ từ `docs/course-source/rdm-mini-course-source.md`.

Để đồng bộ, chạy `python scripts/sync_from_source.py` từ repo này. Dùng `python scripts/sync_from_source.py --check` để kiểm tra mà không ghi file. Không sửa trực tiếp các trang sinh trong `course/`.

## Phạm vi phiên bản đầu

- 01 module nhập môn.
- 06 bài lý thuyết.
- 24 câu quiz theo bài.
- 10 câu quiz tổng hợp.
- Thời lượng khoảng 2–3 phút đọc mỗi bài + quiz, tổng khoảng 1 giờ.
- Website Quarto và tài liệu hướng dẫn học.

Nguồn khoa học và quy trình kiểm chứng được quản lý tại [biomedical-rdm](https://github.com/fossbk-spec/biomedical-rdm).

## Trạng thái

Repo đang được khởi tạo. Nội dung triển khai được thực hiện qua pull request và chỉ merge sau khi được duyệt.

## Giấy phép

Nội dung phát hành theo [CC BY 4.0](LICENSE). Mã nguồn và công cụ hỗ trợ phát hành theo MIT.

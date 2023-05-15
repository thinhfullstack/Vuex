1. State

2. Getters
- Xử lý dữ liệu trước khi trả về kết quả cho Vue
- Có rất nhiều method để xử lý dữ liệu. Và các kết quả có được sẽ gọi ở các components khác nhau để sử dụng
ex: Danh sách và sẽ lấy ra điều kiện mong muốn 

3. Mutations
- Tập hợp các method được đĩnh nghĩa ở trong store
=> Giúp thay đổi giá trị của state.
- Tất cả các phương thức(method) đều chạy đồng bộ
- Để gọi đến 1 mutation trong store thì dùng commit.
ex: Đứng ở 1 component khác, muốn gọi đến mutations đó thì ta sẽ xử dụng commit
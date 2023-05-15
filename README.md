1. State
- Khai báo các giá trị cần lưu trữ 
# mapState: import 1 lúc nhiều state của store vào trong 1 component 

2. Getters
- Xử lý dữ liệu trước khi trả về kết quả cho Vue
- Có rất nhiều method để xử lý dữ liệu. Và các kết quả có được sẽ gọi ở các components khác nhau để sử dụng
# mapGetters: giống như mapState
ex: Danh sách và sẽ lấy ra điều kiện mong muốn 

3. Mutations
- Tập hợp các method được đĩnh nghĩa ở trong store
=> Giúp thay đổi giá trị của state.
- Tất cả các phương thức(method) đều chạy đồng bộ
- Để gọi đến 1 mutation trong store thì dùng commit.
    1. Commit : tương tác call dữ liệu vào Mutations hoặc Actions
    2. Dispatch: tương tác call dữ liệu vào Mutations hoặc Actions
ex: Đứng ở 1 component khác, muốn gọi đến mutations đó thì ta sẽ xử dụng commit

4. Actions
- Định nghĩa ra 1 method
- Quan hệ: Actions và Mutations khá giống nhau
- Bản chất: Tập hợp của các method
- Đặc biệt trong Actions có Bất Đồng Bộ
 
-> Khi gọi Actions ở bên ngoài component khác thì sẽ sử dụng dispatch
-> Từ Actions gọi đến Mutations thì sẽ commit
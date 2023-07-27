## dự án structure express js

## thư viện dev

1. nodemon : npm i nodemon --save-dev

    - giúp theo dõi file và reload lại file khi có sự thay đổi

## thư viên production

1.  express: npm i express

    -   tạo server express

2.  dotenv : npm i dotenv

    -   đọc file env

3.  thư viên babel : npm i @babel/cli @babel/core @babel/preset-env @babel/node

        -   Kích hoạt chuyển đổi version ES cao thành ES phù hợp với môi trường.
        -   Lưu ý : phải có file .babel cùng cấp với env
        -   cài đặt đủ @babel/cli @babel/core @babel/preset-env @babel/node
        -   Trong lệnh chạy dự án thêm : pro: thay node = babel-node

## prisma

npm i prisma
cd src => cd databases => cd prisma => npx prisma migrate dev

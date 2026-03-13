# TS-Homeworks

Kho này dùng để làm bài tập TypeScript cơ bản, tập trung vào:

- Khai báo kiểu dữ liệu
- Interface, type alias, tuple, enum
- Function typing và generic
- Class, kế thừa, access modifier
- Chạy bài và kiểm tra kết quả bằng TypeScript typecheck

## Cấu trúc dự án

- Ex1.ts: Bài tập nền tảng về type, function, object, array
- Ex2.ts: Bài tập OOP với class, inheritance, private/protected, interface lồng nhau
- Ex3.ts: Bài tập generic function, generic class, keyof

## Yêu cầu

- Node.js 18+ (khuyến nghị bản LTS mới)
- npm

## Cài đặt

```bash
npm install
```

## Chạy bài tập

Chạy từng file:

```bash
npm run run:ex1
npm run run:ex2
npm run run:ex3
```

Chạy tất cả:

```bash
npm run run:all
```

## Kiểm tra TypeScript

Chỉ typecheck:

```bash
npm run typecheck
```

Typecheck và chạy tất cả:

```bash
npm run check
```

## Ghi chú

- Một số dòng trong các file bài tập đang được comment để minh họa lỗi type.
- Nếu muốn xem lỗi TypeScript, bỏ comment các dòng được ghi chú trong bài.
- Cấu hình TypeScript được đặt trong tsconfig.json với chế độ strict và noEmit.

<h1 align="center">🚀 Online Testing & Candidate Management System</h1>
<p align="center">ระบบคัดกรองผู้สมัครงานอัตโนมัติด้วย AI + Online Assessment Platform</p>

---

## 🎯 Overview (ภาพรวม)

ระบบนี้คือ **HR/Recruitment Automation Platform** ที่ออกแบบมาเพื่อช่วยทีม HR คัดกรองผู้สมัครอย่างรวดเร็วและแม่นยำ โดยผสานการทำงานของ:

- 📄 การอัปโหลดไฟล์ผู้สมัคร (PNG, JPG, PDF)  
- 🤖 การสกัดคีย์เวิร์ดและประเมินด้วย AI  
- 🔊 การบันทึกวิดีโอและเสียงของผู้สมัคร  
- 📝 การทำข้อสอบออนไลน์แบบสุ่มตามตำแหน่ง  
- 🧮 ประเมินผลอัตโนมัติ + จัดอันดับ  
- 📊 Dashboard วิเคราะห์อัตราการผ่าน  
- 📤 ส่งอีเมลแจ้งผลผู้สมัคร  
- 🔐 Role-based Access (Candidate / Admin / SuperAdmin)

---

## 🛠️ Tech Stack

| Component | Technology | Description |
|----------|------------|-------------|
| **Backend Framework** | Node.js, Express.js | RESTful API |
| **Database** | MySQL | เก็บข้อมูลผู้สมัครและแบบทดสอบ |
| **ORM** | Prisma ORM | Type-safe, Migration-ready |
| **Language** | JavaScript (ESM) | Backend |
| **AI Processing** | Custom AI Keyword Extraction | ประเมินคุณสมบัติผู้สมัคร |

---

service

| path               | method | authen | params | query | body                                   | note           |
| :----------------- | :----: | :----: | :----: | :---: | :------------------------------------- | :------------- |
| /api/auth/register |  POST  |    ❌   |    -   |   -   | first_name, last_name, email, password | สมัคร Admin    |
| /api/auth/login    |  POST  |    ❌   |    -   |   -   | email, password                        | เข้าสู่ระบบ    |
| /api/auth/me       |   GET  |  Admin |    -   |   -   | -                                      | ดึงข้อมูล user |
| /api/auth/logout   |  POST  |  Admin |    -   |   -   | -                                      | logout         |
| /api/auth/refresh  |  POST  |    ❌   |    -   |   -   | refreshToken                           | ออก token ใหม่ |
| /api/candidates                      |  POST  |    ❌   |       -      |   -   | first_name, last_name, email, phone, gender, age, stack, expected_salary | สมัครผู้สมัคร    |
| /api/candidates/:candidate_id        |   GET  |  Admin | candidate_id |   -   | -                                                                        | ดูข้อมูลผู้สมัคร |
| /api/candidates/:candidate_id        |   PUT  |  Admin | candidate_id |   -   | fields…                                                                  | อัปเดตข้อมูล     |
| /api/candidates/:candidate_id/delete | DELETE |  Admin | candidate_id |   -   | -                                                                        | ลบผู้สมัคร       |
| /api/candidates/:candidate_id/address |  POST  | Candidate/Admin | candidate_id |   -   | address_line1, city, country, address_type | เพิ่มที่อยู่  |
| /api/address/:address_id              |   PUT  | Candidate/Admin |  address_id  |   -   | fields…                                    | อัปเดตที่อยู่ |
| /api/address/:address_id              | DELETE | Candidate/Admin |  address_id  |   -   | -                                          | ลบที่อยู่     |
| /api/candidates/:id/documents |  POST  |    ❌   |      id     |     -    | file | อัปโหลดไฟล์ PNG/JPG/PDF |
| /api/documents/:document_id   | DELETE |  Admin | document_id |     -    | -    | ลบไฟล์                  |
| /api/candidates/:id/documents |   GET  |  Admin |      id     | doc_type | -    | ดูไฟล์ของผู้สมัคร       |
| /api/candidates/:id/status             |   GET  |  Admin |   id   |   -   | -                                     | ดึงสถานะทั้งหมด                    |
| /api/candidates/:id/status             |  POST  |  Admin |   id   |   -   | status                                | เพิ่มสถานะใหม่ (pending/pass/fail) |
| /api/status-update-request             |  POST  |  Admin |    -   |   -   | candidate_status_id, requested_status | ขออัปเดตสถานะ                      |
| /api/status-update-request/:id/approve |  PATCH |  Admin |   id   |   -   | approve_by                            | อนุมัติคำขอ                        |
| /api/status-update-request/:id/reject  |  PATCH |  Admin |   id   |   -   | approve_by                            | ปฏิเสธคำขอ                         |
| /api/ai/screen/:candidate_id |  POST  |  Admin | candidate_id |   -   | -    | AI จับคีย์เวิร์ด + สร้างคะแนน |
| /api/ai/screen/bulk          |  POST  |  Admin |       -      | jobId | -    | Screen ทั้งหมดใน job          |
| /api/tests/start/:candidate_id |  POST  | Candidate | candidate_id |   -   | -                               | เริ่มชุด Test             |
| /api/tests/:test_id/questions  |   GET  | Candidate |    test_id   |   -   | -                               | ดึงคำถามที่ถูก map        |
| /api/tests/:test_id/answers    |  POST  | Candidate |    test_id   |   -   | question_id, selected_choice_id | ส่งคำตอบ                  |
| /api/tests/:test_id/submit     |  POST  | Candidate |    test_id   |   -   | -                               | ส่งข้อสอบเพื่อให้ระบบตรวจ |
| /api/tests/:test_id/result     |   GET  |   Admin   |    test_id   |   -   | -                               | คะแนนรวม                  |
| /api/questions             |   GET  |  Admin |     -     | difficulty, search | -                         | ดูคำถามทั้งหมด |
| /api/questions             |  POST  |  Admin |     -     |          -         | question_text, difficulty | สร้างคำถาม     |
| /api/questions/:id         |   PUT  |  Admin |     id    |          -         | fields…                   | อัปเดตคำถาม    |
| /api/questions/:id         | DELETE |  Admin |     id    |          -         | -                         | ลบคำถาม        |
| /api/questions/:id/choices |  POST  |  Admin |     id    |          -         | choice_text, is_correct   | เพิ่มตัวเลือก  |
| /api/choices/:choice_id    | DELETE |  Admin | choice_id |          -         | -                         | ลบตัวเลือก     |
| /api/dashboard/overview  |   GET  |  Admin |    -   |     -    | -    | จำนวนผู้สมัคร, อัตราผ่าน |
| /api/dashboard/tests     |   GET  |  Admin |    -   |   jobId  | -    | รวมผลคะแนน               |
| /api/dashboard/documents |   GET  |  Admin |    -   | doc_type | -    | ดูอัตราการอัปโหลดไฟล์    |
| /api/dashboard/status    |   GET  |  Admin |    -   |     -    | -    | ดูกราฟสถานะผู้สมัคร      |
| /api/admin/users     |   GET  | super_admin |    -   |   -   | -                                  | List admin ทั้งหมด |
| /api/admin/users     |  POST  | super_admin |    -   |   -   | first_name, last_name, email, role | เพิ่ม admin        |
| /api/admin/users/:id |   PUT  | super_admin |   id   |   -   | role                               | เปลี่ยนสิทธิ์      |
| /api/admin/users/:id | DELETE | super_admin |   id   |   -   | -                                  | ลบ admin           |



---

## 🏗️ Project Structure

```bash
/project-root
├── node_modules/
├── client/                 # 🌐 Frontend Application (ถ้ามี)
├── generated/              # 📦 Code Generated by Tools
│   └── prisma/             # 🔑 Prisma Client (Output Path)
├── prisma/                 # ⚙️ Prisma Configuration
│   ├── migrations/         # Migration files
│   ├── schema.prisma       # Main schema definition
│   └── seed.js             # Data seeding script
├── src/                    # 🚀 Server Source Code
│   ├── config/             # Configuration files (e.g., prisma-client.config.js)
│   ├── controllers/        # Business logic handlers
│   ├── dto/                # Data Transfer Objects
│   ├── libs/               # Utility libraries
│   ├── middlewares/        # Express middleware
│   ├── routes/             # 🛣️ API Routers (auth, admin, test, etc.)
│   ├── services/           # External service modules (e.g., Database, Email)
│   ├── validation/         # Validation schemas
│   ├── app.js              # Express App setup
│   └── server.js           # Main Server Entry Point
├── .env                    # Database URL and Environment Variables
├── .gitignore
├── jsconfig.json           # JS configuration for VS Code/Editor
├── package.json
├── pnpm-lock.yaml
├── prisma.config.js        # Prisma CLI Configuration (v7+)
└── README.md


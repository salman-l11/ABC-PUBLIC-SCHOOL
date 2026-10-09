# ABC Public School — Official School Web Portal & Admissions CRM

[![React](https://img.shields.io/badge/React-19.0-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-Node.js-black?logo=express)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, production-grade educational web application and admissions CRM designed for a premier CBSE Senior Secondary School. Built with a full-stack architecture combining a reactive **React 19** frontend, utility-first **Tailwind CSS v4** design system, and an **Express.js** REST API backend with resilient dual-layer persistence (REST API + localStorage fallback).

---

## 🌟 Key Features & Functional Modules

### 1. 🎓 Comprehensive Institutional Presentation
- **Hero & Core Credentials**: High-impact campus banner, CBSE affiliation validation, and key verified metrics (100% board pass rate, 28+ years of heritage, 1,850+ enrolled students).
- **Leadership & Vision**: Principal’s address desk, academic wing deans, and foundational educational pillars.
- **Academic Wings & Streams**: Dedicated pathways for Pre-Primary (Nursery/KG), Primary (Classes 1-5), Middle Wing (Classes 6-8), and Senior Secondary (Science PCM/PCB, Commerce, and Humanities).

### 2. 📸 Interactive Campus Life & School Photo Gallery
- Full high-resolution visual showcase of student morning assemblies, academic classrooms, annual cultural stage festivals, kindergarten activity spaces, STEM robotics clubs, and athletic grounds.
- **Dynamic Category Filter**: Filter photos by *All Photos*, *Campus*, *Student Life*, *Academics & Labs*, *Sports*, and *Events & Arts*.
- **Interactive Full-Screen Lightbox**: Click any photograph to view high-resolution view, descriptive captions, and image carousel navigation.

### 3. 🏫 Virtual Campus Infrastructure & Modal Lightbox
- High-fidelity visual cards for smart classrooms, STEM science research labs, athletic sports arena, enriched knowledge library, and GPS-tracked transport buses.
- **Interactive Category Filter**: Easily filter between Academics, Innovation, Sports, and Safety.
- **Full-Screen Modal Preview**: Detailed amenities breakdown and high-resolution view of campus facilities.

### 4. 📝 Real-Time Online Admission Enquiry Form
- Multi-step validation for parent name, student candidate, seeking grade, 10-digit mobile number, preferred callback window, and custom notes.
- Generates a unique tracking reference ID (e.g., `ENQ-4821`).
- Provides instant visual feedback and triggers real-time in-app toast alerts.

### 5. 🔒 Password-Protected Admissions CRM & Counselor Desk
- **Secure Access Gate**: Password-protected modal (`admin123`) ensuring only authorized school counselors can view leads.
- **Key Metrics Dashboard**: Instant KPI cards for Total Leads, New Inquiries, In Follow-Up, Confirmed Admissions, and Conversion Rate %.
- **One-Click Actions**:
  - Direct telephone callback dialer (`tel:` protocol).
  - Pre-formatted WhatsApp communication link.
  - Inline status update dropdown (`New`, `Contacted`, `Admitted`, `Closed`).
  - Counselor call log & internal notes editor.
  - Instant **CSV Export** to download full enquiry records for Excel/Google Sheets.
  - **"+ Add Demo Lead"** button for interviewers and recruiters to easily generate and test live admissions data.

### 6. 📢 Live Circulars, FAQs & Parent Testimonials
- Categorized circular notice board (Admissions, Academics, Events, Circulars).
- Instant search-filtered FAQ accordion answering common parent queries (fees, bus routes, required documents, scholarships).
- Verified parent testimonials featuring academic outcomes.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend Framework** | React 19 (Functional components, custom state hooks) |
| **Styling & Design** | Tailwind CSS v4, Custom CSS variables, Responsive Grid |
| **Icons & Visuals** | Lucide React, High-fidelity generated imagery |
| **Typography** | Cinzel (Display & Brand), Plus Jakarta Sans (Body), JetBrains Mono (Data) |
| **Backend & Server** | Node.js, Express.js REST API with middleware proxy |
| **Bundler & Tooling** | Vite 6, tsx, TypeScript, esbuild |
| **Data Persistence** | In-memory REST API store synced with browser `localStorage` fallback |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/abc-public-school.git
   cd abc-public-school
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000`.

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

---

## 🔑 Demo & Testing Credentials

- **Admissions Counselor Desk**: Click on **"Counselor Desk"** in the bottom right corner or via the footer **"Admin Panel"** link.
- **Default Password**: `admin123` (Also accepts `admin` or `1234`)
- Click **"+ Add Demo Lead"** inside the modal to generate mock admissions records.

---

## 📡 REST API Documentation

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/enquiries` | Retrieves all admission enquiries |
| `POST` | `/api/enquiries` | Submits a new admission enquiry |
| `PATCH` | `/api/enquiries/:id` | Updates status (`new`, `contacted`, `admitted`, `closed`) or notes |
| `DELETE` | `/api/enquiries/:id` | Deletes an enquiry record |

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

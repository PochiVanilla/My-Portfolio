"use client";

import React, { useState, useEffect } from "react";

const translations = {
  en: {
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      about: "About",
      skills: "Skills",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello!",
      intro: "I’m Phát.",
      role: "an automation engineer & technician.",
      summary: "My focus is on integrating hardware, designing robust automation layouts, and solving complex industrial OT/SCADA telemetry challenges.",
      badge1: "PLC & SCADA",
      badge2: "AutoCAD & SolidWorks",
      badge3: "C, Python, JS & TS"
    },
    quickCards: {
      card1: {
        title: "My Portfolio",
        desc: "Check out selected projects with creative OT architectures & web dashboards.",
        btn: "Portfolio"
      },
      card2: {
        title: "Technical Skills",
        desc: "Explore my expertise in industrial protocols, CAD drafting, and hardware configurations.",
        btn: "Skills"
      },
      card3: {
        title: "Contact Me",
        desc: "Let's collaborate to bring your automated systems and control panels to life.",
        btn: "Contact"
      }
    },
    works: {
      title: "Work Experience",
      subtitle: "With a keen eye for physical wiring and clean layout configurations, I specialize in crafting robust controllers, telemetry interfaces, and custom operational layouts.",
      items: [
        {
          title: "Automation & Hardware Engineer",
          tags: "Feb 2025 - Present • Saigon Valve Co., Ltd.",
          desc: "Propose technical designs and project solutions for water technology systems. Draft 2D technical drawings and develop 3D models using SolidWorks and AutoCAD. Perform control panel wiring and hardware assembly (PCBs, control devices). Compile technical documentation and Standard Operating Procedures (SOPs).",
          btn: "View Details"
        },
        {
          title: "Automation Intern",
          tags: "Oct 2024 - Nov 2024 • Minh Khoa Automation Co., Ltd.",
          desc: "Developed a React-based web interface for a SCADA system deployed at Asia Wood Company. Implemented real-time data streaming from PLCs to the web dashboard via an IoT Gateway using Django Channels (WebSockets).",
          btn: "View Details"
        }
      ],
      ctaText: "Are you ready to see more?",
      ctaBtn: "See All Works"
    },
    about: {
      title: "More about me",
      p1: "I am Châu Vương Phát, an Automation Engineer based in Ho Chi Minh, Vietnam. With a passion for industrial protocols and modern web-based monitoring, I bridge the gap between physical sensors and data loggers.",
      p2: "My journey centers on creating clean, maintainable systems—whether drawing 3D pipes in CAD, wiring a complex control panel, or setting up telemetry gateways. I strive to make industrial operations visible and easily controllable.",
      bullets: [
        "Innovative Design",
        "Rapid HW Prototyping",
        "Hardware Integration",
        "Detail-oriented Wiring"
      ],
      btn: "Learn More",
      available: "AVAILABLE FOR PROJECTS • CHÂU VƯƠNG PHÁT • "
    },
    capabilities: {
      title: "My capabilities",
      subtitle: "Tailored engineering services to optimize your manufacturing pipelines and monitoring control layers.",
      items: [
        "2D Technical Drawing (AutoCAD) & Electrical Panel Design",
        "Control Panel Wiring & Circuit Soldering",
        "Hardware Configuration & Field Installation",
        "Hardware Diagnostics & Troubleshooting",
        "\"Sai Gon Valve\" Controller Setup & Integration",
        "Programming & Scripting Languages (C, Python, JavaScript, TypeScript)",
        "Regulatory Compliance Research & BOM Creation",
        "Procurement Planning & End-to-End Project Execution"
      ]
    },
    keyProjects: {
      title: "Key Projects",
      subtitle: "Selected engineering milestones designed and implemented for regional water and wood enterprises.",
      viewMoreBtn: "View Project Details ↗",
      imagePlaceholderText: "Project Screenshot Slot",
      imagePlaceholderSubtext: "Drop image in /public/projects/ and update path in page.tsx",
      items: [
        {
          title: "Design and Implementation of Linear Pressure Reducing Valve Control System",
          meta: "Vietnam • 2026",
          desc: "Delivered the end-to-end hardware solution including PCB hardware assembly & soldering, control cabinet wiring, field installation, and client handover. Calibrated pressure reducing configurations to dynamically regulate output pressures and minimize water loss during off-peak hours.",
          image: "/projects/Linear Pressure Reducing Valve Project.jpg",
          link: "/project/pressure-valve-control"
        },
        {
          title: "Sluice Gate Design & Fabrication",
          meta: "Vietnam • 2026",
          desc: "Drafted the detailed 3D SolidWorks mechanical layout designs and AutoCAD blueprints for various sluice gate sizes ranging from 300x300mm to 2400x2400mm. Prototype manufactured based on designs is market-ready.",
          image: "/projects/Sluice Gate Design & Technical Drawing/Sluite Gate first build.jpg",
          link: "/project/sluice-gate-design"
        },
        {
          title: "Hue Water Quality Monitoring System",
          meta: "Hue, Vietnam • 2025",
          desc: "Designed cabinet layout and electrical panel wiring, researched environmental regulations for compliant equipment integration, configured controller telemetry/sensor calibration, and executed on-site field installation. (Excluding controller software coding).",
          image: "/projects/Water Monitoring Station.jpg",
          link: "/project/huewaco-monitoring"
        },
        {
          title: "Solar-Powered Automated Gate Valve Control System for Lawaco",
          meta: "Vietnam • 2026",
          desc: "Delivered the end-to-end hardware package including cabinet building, solar power charging integration, backup batteries, on-site setup, and user training. (Excluding controller software coding).",
          image: "/projects/Gate Valve Project.jpg",
          link: "/project/lawaco-solar-gate"
        }
      ]
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Ready to start your automation project? Let's talk.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      linkedinLabel: "LinkedIn",
      copy: "Copy",
      copied: "Copied!"
    }
  },
  vi: {
    nav: {
      home: "Trang chủ",
      portfolio: "Dự án",
      about: "Giới thiệu",
      skills: "Kỹ năng",
      contact: "Liên hệ"
    },
    hero: {
      greeting: "Xin chào!",
      intro: "Tôi là Phát.",
      role: "kỹ sư tự động hóa.",
      summary: "Định hướng của tôi là tích hợp phần cứng, thiết kế cấu trúc tự động hóa mạnh mẽ và giải quyết các bài toán truyền nhận dữ liệu công nghiệp OT/SCADA.",
      badge1: "Lập trình PLC",
      badge2: "AutoCAD & SolidWorks",
      badge3: "C, Python, JS & TS"
    },
    quickCards: {
      card1: {
        title: "Dự án tiêu biểu",
        desc: "Khám phá các thiết kế phần cứng OT và bảng điều khiển Web SCADA hiện đại của tôi.",
        btn: "Dự án"
      },
      card2: {
        title: "Kỹ năng chuyên môn",
        desc: "Tìm hiểu năng lực về giao thức công nghiệp, vẽ CAD kỹ thuật và cấu hình phần cứng của tôi.",
        btn: "Kỹ năng"
      },
      card3: {
        title: "Liên hệ tôi",
        desc: "Cùng hợp tác để thiết kế tủ điện điều khiển và tối ưu hệ thống tự động hóa của bạn.",
        btn: "Liên hệ"
      }
    },
    works: {
      title: "Kinh nghiệm làm việc",
      subtitle: "Với sự cẩn thận trong đấu nối phần cứng và tư duy mạch lạc trong thiết kế bố cục, tôi chuyên phát triển cấu hình bộ điều khiển, giao diện giám sát từ xa và quy trình vận hành trực quan.",
      items: [
        {
          title: "Kỹ sư Tự động hóa & Phần cứng",
          tags: "Tháng 2/2025 - Hiện tại • Công ty TNHH Van Sài Gòn (Saigon Valve Co., Ltd.)",
          desc: "Đề xuất thiết kế kỹ thuật và các giải pháp dự án cho hệ thống công nghệ nước. Phác thảo bản vẽ kỹ thuật 2D và phát triển mô hình 3D sử dụng SolidWorks và AutoCAD. Thực hiện đấu nối tủ điện điều khiển và lắp ráp phần cứng (PCB, thiết bị điều khiển). Biên soạn tài liệu kỹ thuật và Quy trình vận hành tiêu chuẩn (SOPs).",
          btn: "Xem chi tiết"
        },
        {
          title: "Thực tập sinh Tự động hóa",
          tags: "Tháng 10/2024 - Tháng 11/2024 • Công ty TNHH Tự động hóa Minh Khoa",
          desc: "Phát triển giao diện web dựa trên React cho hệ thống SCADA triển khai tại Công ty Gỗ Châu Á (Asia Wood Company). Triển khai truyền nhận dữ liệu thời gian thực từ PLC lên dashboard thông qua IoT Gateway sử dụng Django Channels (WebSockets).",
          btn: "Xem chi tiết"
        }
      ],
      ctaText: "Bạn muốn tìm hiểu thêm nhiều dự án khác?",
      ctaBtn: "Tất cả dự án"
    },
    about: {
      title: "Hiểu hơn về tôi",
      p1: "Tôi là Châu Vương Phát, Kỹ sư Điều khiển & Tự động hóa tại Thành phố Hồ Chí Minh. Nhờ sự yêu thích với truyền thông công nghiệp và giám sát hiện đại, tôi đóng vai trò cầu nối tích hợp cảm biến hiện trường với thiết bị thu thập dữ liệu.",
      p2: "Sản phẩm của tôi luôn hướng tới sự chuẩn chỉ và dễ bảo trì—cho dù đó là bản vẽ SolidWorks 3D, đấu dây tủ điện chi tiết hay cấu hình kết nối mạng truyền thông.",
      bullets: [
        "Tư duy thiết kế tốt",
        "Chế tạo thử nghiệm nhanh",
        "Tích hợp phần cứng tối ưu",
        "Đấu nối tủ điện chuẩn chỉ"
      ],
      btn: "Tìm hiểu thêm",
      available: "SẴN SÀNG HỢP TAC • CHÂU VƯƠNG PHÁT • "
    },
    capabilities: {
      title: "Năng lực chuyên môn",
      subtitle: "Cung cấp các dịch vụ kỹ thuật tối ưu hóa dây chuyền sản xuất và các lớp giám sát số hóa.",
      items: [
        "Vẽ kỹ thuật 2D (AutoCAD) & Thiết kế tủ điện điều khiển",
        "Đấu nối tủ điều khiển & Hàn mạch điện tử",
        "Cấu hình phần cứng & Lắp đặt thiết bị thực địa",
        "Chẩn đoán & Khắc phục sự cố phần cứng",
        "Cài đặt & Tích hợp bộ điều khiển \"Sai Gon Valve\"",
        "Lập trình & Ngôn ngữ kịch bản (C, Python, JavaScript, TypeScript)",
        "Nghiên cứu quy chuẩn pháp lý & Lập bảng kê vật tư BOM",
        "Lập kế hoạch mua sắm & Thực hiện dự án trọn gói (Từ xưởng đến công trường)"
      ]
    },
    keyProjects: {
      title: "Dự án trọng điểm",
      subtitle: "Các cột mốc kỹ thuật tiêu biểu được thiết kế và triển khai cho các doanh nghiệp cấp nước.",
      viewMoreBtn: "Xem chi tiết dự án ↗",
      imagePlaceholderText: "Khung ảnh dự án",
      imagePlaceholderSubtext: "Thêm ảnh vào /public/projects/ và cập nhật đường dẫn ở page.tsx",
      items: [
        {
          title: "Thiết kế & Triển khai bộ điều khiển van giảm áp tuyến tính",
          meta: "Việt Nam • 2026",
          desc: "Đảm nhận triển khai phần cứng trọn gói (End-to-End) bao gồm hàn lắp linh kiện PCB, gia công lắp ráp tủ điện, thi công lắp đặt thực địa và bàn giao hướng dẫn khách hàng. Hiệu chuẩn cấu hình để điều chỉnh áp suất linh hoạt theo lượng nước sử dụng của người dân để giảm tối đa thất thoát nước sạch.",
          image: "/projects/Linear Pressure Reducing Valve Project.jpg",
          link: "/project/pressure-valve-control"
        },
        {
          title: "Thiết kế & Chế tạo Van Cửa Phai",
          meta: "Việt Nam • 2026",
          desc: "Thiết kế bản vẽ cơ khí 3D trên SolidWorks và bản vẽ AutoCAD chế tạo cho nhiều kích cỡ van cửa phai từ 300x300mm đến 2400x2400mm. Bản vẽ thiết kế đã được ứng dụng chế tạo thành công mẫu thử nghiệm.",
          image: "/projects/Sluice Gate Design & Technical Drawing/Sluite Gate first build.jpg",
          link: "/project/sluice-gate-design"
        },
        {
          title: "Hệ thống giám sát chất lượng nước sạch tại Huế",
          meta: "Huế, Việt Nam • 2025",
          desc: "Chịu trách nhiệm thiết kế và đi dây điện cho tủ giám sát, nghiên cứu quy định pháp lý để bổ sung thiết bị tuân thủ quy chuẩn, cấu hình bộ điều khiển, hiệu chuẩn cảm biến đo và trực tiếp thi công lắp đặt tủ tại Huế. (Không bao gồm viết code phần mềm).",
          image: "/projects/Water Monitoring Station.jpg",
          link: "/project/huewaco-monitoring"
        },
        {
          title: "Hệ thống van cửa sập tự động dùng năng lượng mặt trời cho Lawaco",
          meta: "Việt Nam • 2026",
          desc: "Đảm nhận triển khai phần cứng trọn gói (End-to-End) bao gồm chế tạo tủ, tích hợp mạch sạc acquy solar, lắp dựng pin mặt trời thực địa, chạy thử nghiệm Modbus và hướng dẫn sử dụng. (Không bao gồm viết code phần mềm).",
          image: "/projects/Gate Valve Project.jpg",
          link: "/project/lawaco-solar-gate"
        }
      ]
    },
    contact: {
      title: "Liên hệ ngay",
      subtitle: "Bạn đã sẵn sàng nâng cấp hệ thống tự động hóa của mình? Hãy kết nối.",
      emailLabel: "Email",
      phoneLabel: "Điện thoại",
      locationLabel: "Địa chỉ",
      linkedinLabel: "LinkedIn",
      copy: "Sao chép",
      copied: "Đã sao chép!"
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "vi">("en");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("chauvuongphat.automation@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-[#09090b] dark:text-zinc-50 font-sans transition-colors duration-300">
      
      {/* NAVBAR */}
      <div className="border-b-3 border-[#09090b] dark:border-white bg-[#eae6f8] dark:bg-zinc-900 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-black uppercase tracking-tight flex items-center space-x-2">
            <span className="bg-[#fef3c7] dark:bg-yellow-600 border-2 border-[#09090b] dark:border-white px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(9,9,11,1)] text-xs">CVP</span>
            <span>Châu Vương Phát</span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="font-bold text-sm uppercase tracking-wide hover:underline">
              {t.nav.about}
            </a>
            <span className="w-1.5 h-1.5 bg-[#09090b] dark:bg-white rounded-full"></span>
            <a href="#portfolio" className="font-bold text-sm uppercase tracking-wide hover:underline">
              {t.nav.portfolio}
            </a>
            <span className="w-1.5 h-1.5 bg-[#09090b] dark:bg-white rounded-full"></span>
            <a href="#projects" className="font-bold text-sm uppercase tracking-wide hover:underline">
              Key Projects
            </a>
            <span className="w-1.5 h-1.5 bg-[#09090b] dark:bg-white rounded-full"></span>
            <a href="#skills" className="font-bold text-sm uppercase tracking-wide hover:underline">
              {t.nav.skills}
            </a>
            <span className="w-1.5 h-1.5 bg-[#09090b] dark:bg-white rounded-full"></span>
            <a href="#contact" className="font-bold text-sm uppercase tracking-wide hover:underline">
              {t.nav.contact}
            </a>
          </nav>

          {/* Header Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Lang toggle */}
            <div className="flex border-2 border-[#09090b] dark:border-white rounded-lg p-0.5 bg-white dark:bg-zinc-900 shadow-[2px_2px_0px_0px_rgba(9,9,11,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-0.5 text-xs font-bold rounded-md transition-all ${
                  lang === "en" ? "bg-[#eae6f8] text-[#09090b] border border-[#09090b]" : "text-zinc-500"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("vi")}
                className={`px-3 py-0.5 text-xs font-bold rounded-md transition-all ${
                  lang === "vi" ? "bg-[#eae6f8] text-[#09090b] border border-[#09090b]" : "text-zinc-500"
                }`}
              >
                VI
              </button>
            </div>

            {/* Dark mode */}
            <button
              onClick={toggleTheme}
              className="p-2 border-2 border-[#09090b] dark:border-white rounded-lg bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 shadow-[2px_2px_0px_0px_rgba(9,9,11,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-transform active:scale-95 cursor-pointer"
              aria-label="Toggle Dark Mode"
            >
              {theme === "light" ? (
                <svg className="w-4 h-4 text-[#09090b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 border-2 border-[#09090b] dark:border-white rounded-md bg-white dark:bg-zinc-800 shadow-[1px_1px_0px_0px_rgba(9,9,11,1)]"
            >
              {theme === "light" ? (
                <svg className="w-4 h-4 text-[#09090b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border-2 border-[#09090b] dark:border-white rounded-md bg-[#fef3c7] dark:bg-zinc-800 shadow-[1px_1px_0px_0px_rgba(9,9,11,1)] text-[#09090b] dark:text-white"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu list */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t-2 border-[#09090b] dark:border-white bg-[#eae6f8] dark:bg-zinc-900 px-6 py-4 flex flex-col space-y-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="font-bold text-sm uppercase tracking-wide">
              {t.nav.about}
            </a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="font-bold text-sm uppercase tracking-wide">
              {t.nav.portfolio}
            </a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="font-bold text-sm uppercase tracking-wide">
              Key Projects
            </a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="font-bold text-sm uppercase tracking-wide">
              {t.nav.skills}
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="font-bold text-sm uppercase tracking-wide">
              {t.nav.contact}
            </a>
            <div className="flex border-2 border-[#09090b] dark:border-white rounded-lg p-0.5 bg-white dark:bg-zinc-950 w-full shadow-[2px_2px_0px_0px_rgba(9,9,11,1)]">
              <button
                onClick={() => { setLang("en"); setMobileMenuOpen(false); }}
                className={`flex-1 py-1 text-center text-xs font-bold rounded-md ${
                  lang === "en" ? "bg-[#eae6f8] text-[#09090b] border border-[#09090b]" : "text-zinc-500"
                }`}
              >
                ENGLISH
              </button>
              <button
                onClick={() => { setLang("vi"); setMobileMenuOpen(false); }}
                className={`flex-1 py-1 text-center text-xs font-bold rounded-md ${
                  lang === "vi" ? "bg-[#eae6f8] text-[#09090b] border border-[#09090b]" : "text-zinc-500"
                }`}
              >
                TIẾNG VIỆT
              </button>
            </div>
          </div>
        )}
      </div>

      {/* HERO SECTION */}
      <section className="bg-[#eae6f8] dark:bg-zinc-900 border-b-3 border-[#09090b] dark:border-white py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight block">
                {t.hero.greeting}
              </h1>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-3 border-[#09090b] dark:border-white bg-[#fef3c7] dark:bg-zinc-800 flex items-center justify-center overflow-hidden shadow-[3px_3px_0px_0px_rgba(9,9,11,1)] transform rotate-3">
                <span className="font-black text-xl text-teal-600 dark:text-teal-400">CVP</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight block">
                {t.hero.intro}
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-extrabold uppercase text-teal-700 dark:text-teal-400">
              {t.hero.role}
            </h2>

            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl text-zinc-700 dark:text-zinc-300">
              {t.hero.summary}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="px-4 py-1.5 bg-[#dbeafe] dark:bg-blue-950 text-[#09090b] dark:text-blue-200 font-black rounded-full border-2 border-[#09090b] dark:border-white shadow-[2px_2px_0px_0px_rgba(9,9,11,1)] transform -rotate-1 text-sm">
                {t.hero.badge1}
              </div>
              <div className="px-4 py-1.5 bg-[#fce7f3] dark:bg-pink-950 text-[#09090b] dark:text-pink-200 font-black rounded-full border-2 border-[#09090b] dark:border-white shadow-[2px_2px_0px_0px_rgba(9,9,11,1)] transform rotate-2 text-sm">
                {t.hero.badge2}
              </div>
              <div className="px-4 py-1.5 bg-[#d1fae5] dark:bg-emerald-950 text-[#09090b] dark:text-emerald-200 font-black rounded-full border-2 border-[#09090b] dark:border-white shadow-[2px_2px_0px_0px_rgba(9,9,11,1)] transform -rotate-2 text-sm">
                {t.hero.badge3}
              </div>
            </div>
          </div>

          <div className="md:col-span-4 hidden md:flex justify-end relative">
            <div className="w-48 h-48 border-4 border-dashed border-[#09090b] dark:border-white rounded-full flex items-center justify-center p-8 transform rotate-12">
              <div className="text-center font-black uppercase text-xs tracking-wider">
                <span className="text-teal-600 dark:text-teal-400 block text-lg">1 Year</span>
                <span className="block mt-1">Experience</span>
              </div>
            </div>
            <div className="absolute top-0 right-4 px-3 py-1 bg-[#fef3c7] dark:bg-yellow-600 dark:text-white font-black border-2 border-[#09090b] dark:border-white shadow-[2px_2px_0px_0px_rgba(9,9,11,1)] text-xs uppercase tracking-widest transform -rotate-12">
              MECA 2024
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full overflow-hidden leading-none z-0">
          <svg className="relative block w-full h-[30px]" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
            <path className="text-white dark:text-zinc-950" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31.39,901.11,56.44,978.93,56.44c114.8,0,221.07-25,221.07-25v88.56H0V31.39S106.27,56.44,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* QUICK LINK CARDS */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#dbeafe] dark:bg-blue-950/80 border-3 border-[#09090b] dark:border-white rounded-2xl p-8 shadow-[6px_6px_0px_0px_rgba(9,9,11,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)] flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-xl border-2 border-[#09090b] dark:border-white flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(9,9,11,1)]">
                <svg className="w-6 h-6 text-[#09090b] dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight">{t.quickCards.card1.title}</h3>
              <p className="font-medium text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">{t.quickCards.card1.desc}</p>
            </div>
            <a href="#portfolio" className="mt-8 self-end w-12 h-12 rounded-full bg-white dark:bg-zinc-800 text-[#09090b] dark:text-white border-2 border-[#09090b] dark:border-white shadow-[3px_3px_0px_0px_rgba(9,9,11,1)] flex items-center justify-center hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0px_0px_rgba(9,9,11,1)] transition-all">
              <svg className="w-5 h-5 transform group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <div className="bg-[#fef3c7] dark:bg-yellow-950/80 border-3 border-[#09090b] dark:border-white rounded-2xl p-8 shadow-[6px_6px_0px_0px_rgba(9,9,11,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)] flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-xl border-2 border-[#09090b] dark:border-white flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(9,9,11,1)]">
                <svg className="w-6 h-6 text-[#09090b] dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364.364l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight">{t.quickCards.card2.title}</h3>
              <p className="font-medium text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">{t.quickCards.card2.desc}</p>
            </div>
            <a href="#skills" className="mt-8 self-end w-12 h-12 rounded-full bg-white dark:bg-zinc-800 text-[#09090b] dark:text-white border-2 border-[#09090b] dark:border-white shadow-[3px_3px_0px_0px_rgba(9,9,11,1)] flex items-center justify-center hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0px_0px_rgba(9,9,11,1)] transition-all">
              <svg className="w-5 h-5 transform group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <div className="bg-[#d1fae5] dark:bg-emerald-950/80 border-3 border-[#09090b] dark:border-white rounded-2xl p-8 shadow-[6px_6px_0px_0px_rgba(9,9,11,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)] flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-xl border-2 border-[#09090b] dark:border-white flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(9,9,11,1)]">
                <svg className="w-6 h-6 text-[#09090b] dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight">{t.quickCards.card3.title}</h3>
              <p className="font-medium text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">{t.quickCards.card3.desc}</p>
            </div>
            <a href="#contact" className="mt-8 self-end w-12 h-12 rounded-full bg-white dark:bg-zinc-800 text-[#09090b] dark:text-white border-2 border-[#09090b] dark:border-white shadow-[3px_3px_0px_0px_rgba(9,9,11,1)] flex items-center justify-center hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0px_0px_rgba(9,9,11,1)] transition-all">
              <svg className="w-5 h-5 transform group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>
      </section>

      {/* WORKS SECTION (Professional Experience) */}
      <section id="portfolio" className="py-20 bg-zinc-50 dark:bg-zinc-900 border-t-3 border-b-3 border-[#09090b] dark:border-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-center">
              {t.works.title}
            </h2>
            <p className="text-center text-base md:text-lg font-medium text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              {t.works.subtitle}
            </p>
          </div>

          <div className="space-y-12">
            {t.works.items.map((project, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-950 border-3 border-[#09090b] dark:border-white rounded-2xl p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(9,9,11,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.9)] flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="flex-1 space-y-4">
                  <span className="inline-block px-3 py-1 bg-[#eae6f8] dark:bg-zinc-800 text-[#09090b] dark:text-white border-2 border-[#09090b] dark:border-white font-black text-xs uppercase tracking-wider">
                    {project.tags}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-none uppercase">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-line">
                    {project.desc}
                  </p>
                </div>

                <div className="w-full md:w-64 h-48 bg-[#eae6f8] dark:bg-zinc-900 border-2 border-[#09090b] dark:border-white flex items-center justify-center relative overflow-hidden flex-shrink-0">
                  {idx === 0 ? (
                    <img src="/projects/Work at SaiGon Valve.jpg" alt="Saigon Valve" className="w-full h-full object-cover" />
                  ) : (
                    <img src="/projects/Minh Khoa Intern.jpg" alt="Minh Khoa Intern" className="w-full h-full object-cover" />
                  )}
                  <div className="absolute top-2 right-2 text-[10px] opacity-35 bg-white/70 dark:bg-zinc-800/70 px-1 py-0.5 rounded font-mono font-bold">REV 1.0</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="bg-[#eae6f8] dark:bg-zinc-900 py-20 border-b-3 border-[#09090b] dark:border-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-5 flex justify-center relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-28 h-8 bg-zinc-100/80 dark:bg-zinc-800/80 border-l-2 border-r-2 border-[#09090b] dark:border-white opacity-90 shadow-sm z-20 skew-x-3"></div>

            <div className="bg-white dark:bg-zinc-950 border-3 border-[#09090b] dark:border-white p-6 pb-12 shadow-[8px_8px_0px_0px_rgba(9,9,11,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.9)] transform -rotate-2 relative z-10 w-full max-w-sm">
              <div className="aspect-square bg-[#dbeafe] dark:bg-zinc-900 border-2 border-[#09090b] dark:border-white relative overflow-hidden rounded-lg">
                <img src="/avatar.jpg" alt="Châu Vương Phát" className="w-full h-full object-cover" style={{ transform: "scale(1.6)", transformOrigin: "center 75%" }} />
              </div>
              
              <div className="text-center font-bold font-mono text-xs mt-6 uppercase text-zinc-500">
                IUH GRADUATE • 2025
              </div>

              <a
                href="#contact"
                className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#fce7f3] dark:bg-pink-950 border-2 border-[#09090b] dark:border-white rounded-full flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(9,9,11,1)] group hover:scale-105 transition-transform z-30 overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-20 h-20 text-[#09090b] dark:text-pink-200 animate-spin-slow" viewBox="0 0 100 100">
                    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                    <text className="font-black uppercase text-[7px]" fill="currentColor">
                      <textPath href="#circlePath">
                        {t.about.available}
                      </textPath>
                    </text>
                  </svg>
                </div>
                <svg className="w-5 h-5 text-teal-600 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

            </div>
          </div>

          <div className="md:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none">
              {t.about.title}
            </h2>
            <div className="space-y-4 font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm md:text-base">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {t.about.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center space-x-3 font-bold text-sm">
                  <div className="w-6 h-6 rounded-md bg-white dark:bg-zinc-800 border-2 border-[#09090b] dark:border-white flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_rgba(9,9,11,1)]">
                    <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-white dark:bg-zinc-800 text-[#09090b] dark:text-white border-2 border-[#09090b] dark:border-white font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(9,9,11,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1.5px_1.5px_0px_0px_rgba(9,9,11,1)] transition-all"
            >
              {t.about.btn}
            </a>
          </div>

        </div>
      </section>

      {/* KEY PROJECTS TAB COMPONENT */}
      <section id="projects" className="py-20 bg-zinc-50 dark:bg-zinc-900 border-b-3 border-[#09090b] dark:border-white">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="mb-12 text-center space-y-3">
            <h2 className="text-4xl font-black uppercase tracking-tight">
              {t.keyProjects.title}
            </h2>
            <p className="font-medium text-zinc-500 dark:text-zinc-400">
              {t.keyProjects.subtitle}
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-950 border-3 border-[#09090b] dark:border-white rounded-2xl p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(9,9,11,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.9)] min-h-[400px] flex flex-col md:flex-row gap-8 justify-between relative overflow-hidden">
            
            {/* Left Content Column */}
            <div className="flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-[#eae6f8] dark:bg-zinc-800 border-2 border-[#09090b] dark:border-white flex items-center justify-center text-lg shadow-[2px_2px_0px_0px_rgba(9,9,11,1)]">
                  ⚡
                </div>
                
                <div className="space-y-2">
                  <span className="text-xs font-black uppercase tracking-widest text-teal-600 dark:text-teal-400 block">
                    {t.keyProjects.items[activeProjectTab].meta}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                    {t.keyProjects.items[activeProjectTab].title}
                  </h3>
                </div>

                <p className="text-base font-medium leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {t.keyProjects.items[activeProjectTab].desc}
                </p>
              </div>

              {/* View Case Study Page details Button & Selector Tabs */}
              <div className="space-y-6 pt-4">
                <a
                  href={t.keyProjects.items[activeProjectTab].link}
                  className="inline-block px-6 py-3 bg-[#d2f6ec] dark:bg-emerald-900 text-[#09090b] dark:text-white border-2 border-[#09090b] dark:border-white font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(9,9,11,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1.5px_1.5px_0px_0px_rgba(9,9,11,1)] transition-all cursor-pointer"
                >
                  {t.keyProjects.viewMoreBtn}
                </a>

                <div className="flex flex-wrap gap-2 border-t-2 border-zinc-100 dark:border-zinc-800 pt-6">
                  {t.keyProjects.items.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveProjectTab(idx)}
                      className={`px-4 py-2 rounded-lg border-2 border-[#09090b] dark:border-white font-black text-xs uppercase transition-all cursor-pointer ${
                        activeProjectTab === idx
                          ? "bg-[#fef3c7] dark:bg-yellow-600 text-[#09090b] dark:text-white shadow-[2px_2px_0px_0px_rgba(9,9,11,1)] translate-y-0.5"
                          : "bg-white dark:bg-zinc-800 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                      }`}
                    >
                      Project {idx + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image Slot Column */}
            <div className="w-full md:w-96 border-3 border-[#09090b] dark:border-white bg-zinc-100 dark:bg-zinc-900 rounded-xl flex items-center justify-center overflow-hidden min-h-[220px] shadow-[4px_4px_0px_0px_rgba(9,9,11,1)] relative">
              {t.keyProjects.items[activeProjectTab].image ? (
                <img
                  src={t.keyProjects.items[activeProjectTab].image}
                  alt={t.keyProjects.items[activeProjectTab].title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center space-y-3 p-4">
                  <svg className="w-12 h-12 mx-auto text-zinc-400 dark:text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div className="text-xs font-black uppercase text-zinc-500 tracking-wider">
                    {t.keyProjects.imagePlaceholderText}
                  </div>
                  <div className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono">
                    {t.keyProjects.imagePlaceholderSubtext}
                  </div>
                </div>
              )}
              
              <div className="absolute top-2 right-2 text-[9px] font-mono text-zinc-400/50">SLOT_{activeProjectTab + 1}</div>
            </div>

          </div>

        </div>
      </section>

      {/* CAPABILITIES & SKILLS BADGES GRID */}
      <section id="skills" className="py-20 max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-black uppercase tracking-tight">
            {t.capabilities.title}
          </h2>
          <p className="font-medium text-zinc-500 dark:text-zinc-400">
            {t.capabilities.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {t.capabilities.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 border-2.5 border-[#09090b] dark:border-white px-6 py-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(9,9,11,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.9)] flex items-center space-x-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[#fce7f3] dark:bg-pink-900 border-2 border-[#09090b] dark:border-white flex items-center justify-center text-[#09090b] dark:text-pink-200 font-black text-sm">
                ⚙️
              </div>
              <h3 className="font-black text-sm uppercase tracking-tight">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="bg-[#fce7f3] dark:bg-pink-950 border-2 border-[#09090b] dark:border-white px-3 py-1 font-black text-xs uppercase shadow-[2.5px_2.5px_0px_0px_rgba(9,9,11,1)] inline-block">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl font-black uppercase tracking-tight mt-4">
            {t.contact.title}
          </h2>
          <p className="font-medium text-zinc-500 dark:text-zinc-400">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Email Card */}
          <div className="bg-[#eae6f8] dark:bg-zinc-900 border-3 border-[#09090b] dark:border-white p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(9,9,11,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)] flex items-center justify-between">
            <div className="flex items-center space-x-4 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border-2 border-[#09090b] dark:border-white flex items-center justify-center flex-shrink-0 text-lg">
                ✉️
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-zinc-400 block font-black uppercase tracking-widest">{t.contact.emailLabel}</span>
                <span className="text-sm font-bold text-[#09090b] dark:text-zinc-200 block truncate">chauvuongphat.automation@gmail.com</span>
              </div>
            </div>
            <button
              onClick={copyEmail}
              className="px-4 py-2 bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-xs font-black rounded-lg border-2 border-[#09090b] dark:border-white shadow-[2.5px_2.5px_0px_0px_rgba(9,9,11,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(9,9,11,1)] transition-all flex-shrink-0 ml-3 cursor-pointer text-[#09090b] dark:text-white"
            >
              {copied ? t.contact.copied : t.contact.copy}
            </button>
          </div>

          {/* Phone call link */}
          <a
            href="tel:+84768846481"
            className="bg-[#d2f6ec] dark:bg-emerald-950 border-3 border-[#09090b] dark:border-white p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(9,9,11,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)] flex items-center space-x-4 hover:translate-x-0.5 hover:translate-y-0.5 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border-2 border-[#09090b] dark:border-white flex items-center justify-center flex-shrink-0 text-lg">
              📞
            </div>
            <div>
              <span className="text-[10px] text-zinc-400 block font-black uppercase tracking-widest">{t.contact.phoneLabel}</span>
              <span className="text-sm font-bold text-[#09090b] dark:text-zinc-200 block">+84 768 846 481</span>
            </div>
          </a>

          {/* Location */}
          <div className="bg-[#fef3c7] dark:bg-yellow-950 border-3 border-[#09090b] dark:border-white p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(9,9,11,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)] flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border-2 border-[#09090b] dark:border-white flex items-center justify-center flex-shrink-0 text-lg">
              📍
            </div>
            <div>
              <span className="text-[10px] text-zinc-400 block font-black uppercase tracking-widest">{t.contact.locationLabel}</span>
              <span className="text-sm font-bold text-[#09090b] dark:text-zinc-200 block">Ho Chi Minh City, Vietnam</span>
            </div>
          </div>

          {/* LinkedIn Link */}
          <a
            href="https://linkedin.com/in/chau-phat-70889a344"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#dbeafe] dark:bg-blue-950 border-3 border-[#09090b] dark:border-white p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(9,9,11,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)] flex items-center space-x-4 hover:translate-x-0.5 hover:translate-y-0.5 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border-2 border-[#09090b] dark:border-white flex items-center justify-center flex-shrink-0 text-lg">
              💬
            </div>
            <div>
              <span className="text-[10px] text-zinc-400 block font-black uppercase tracking-widest">{t.contact.linkedinLabel}</span>
              <span className="text-sm font-bold text-[#09090b] dark:text-zinc-200 block">Connect on LinkedIn</span>
            </div>
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-3 border-[#09090b] dark:border-white bg-[#eae6f8] dark:bg-zinc-900 py-8 text-center text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
        <p>&copy; {new Date().getFullYear()} Châu Vương Phát • Built with Meeko Neo-Brutalist Theme</p>
      </footer>
    </div>
  );
}

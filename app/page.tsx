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
      summary: "My focus is on integrating hardware and software, designing robust automation layouts, and solving complex industrial OT/SCADA telemetry challenges.",
      badge1: "PLC & SCADA",
      badge2: "C++ & Python"
    },
    quickCards: {
      card1: {
        title: "My Portfolio",
        desc: "Check out selected projects with creative OT architectures & web dashboards.",
        btn: "Portfolio"
      },
      card2: {
        title: "Technical Skills",
        desc: "Explore my expertise in industrial protocols, CAD drafting, and programming.",
        btn: "Skills"
      },
      card3: {
        title: "Contact Me",
        desc: "Let's collaborate to bring your automated systems and control panels to life.",
        btn: "Contact"
      }
    },
    works: {
      title: "My selected works",
      subtitle: "With a keen eye for physical wiring and clean software systems, I specialize in crafting robust controllers, telemetry interfaces, and custom operational experiences.",
      items: [
        {
          title: "SCADA System Web Interface",
          tags: "UI/UX, React.js, Web SCADA",
          desc: "Developed a responsive web-based SCADA interface deployed at Asia Wood Company, allowing operators to monitor wood processing machinery from any device.",
          btn: "View Project"
        },
        {
          title: "Real-Time Telemetry IoT Gateway",
          tags: "Django Channels, WebSockets, Python",
          desc: "Implemented sub-second data streaming pipelines from Siemens & Mitsubishi PLCs to the custom web dashboard using MQTT and Django Channels.",
          btn: "View Project"
        },
        {
          title: "Water Tech CAD Design & Prototyping",
          tags: "SolidWorks, AutoCAD, C++ Firmware",
          desc: "Drafted 2D drawings and 3D pipe models for industrial water filters at Saigon Valve Co. Designed C++ microcontroller controllers for valve automation.",
          btn: "View Project"
        }
      ],
      ctaText: "Are you ready to see more?",
      ctaBtn: "See All Works"
    },
    about: {
      title: "More about me",
      p1: "I am Châu Vương Phát, an Automation Engineer and Technician based in the energetic city of Ho Chi Minh, Vietnam. With a passion for industrial protocols and modern web-based monitoring, I bridge the gap between physical sensors and cloud analytics.",
      p2: "My journey centers on creating clean, maintainable systems—whether drawing 3D pipes in CAD, wiring a complex control panel, or writing WebSocket gateways. I strive to make industrial operations visible and easily controllable.",
      bullets: [
        "Innovative Logic Design",
        "Rapid HW Prototyping",
        "Clean Code Integration",
        "Detail-oriented Wiring"
      ],
      btn: "Learn More",
      available: "AVAILABLE FOR PROJECTS • CHÂU VƯƠNG PHÁT • "
    },
    capabilities: {
      title: "My capabilities",
      subtitle: "Tailored engineering services to optimize your manufacturing pipelines and monitoring control layers.",
      items: [
        "Industrial Protocols (Modbus, MQTT, OPC UA)",
        "React SCADA Interfaces & Web Integrations",
        "Embedded Controller Firmware (C/C++)",
        "PLC Programming (Siemens, Mitsubishi)",
        "2D & 3D Drafting (SolidWorks, AutoCAD)",
        "Control Panel Wiring & PCB Prototyping",
        "Telemetry Databases (SQL Server, MongoDB)"
      ]
    },
    testimonials: {
      items: [
        {
          quote: "Phát is an exceptional engineer. He built a high-performance React SCADA dashboard that enabled our wood drying control rooms to stream real-time data seamlessly.",
          name: "Nguyen Minh",
          title: "Director at Minh Khoa Automation"
        },
        {
          quote: "Phát works efficiently in drafting SolidWorks 3D models and prototyping controllers. He compiles outstanding operational documents (SOPs). Highly recommended!",
          name: "Tran Tuan",
          title: "Project Manager at Saigon Valve Co., Ltd."
        },
        {
          quote: "As a student, Phát was a key team member in our automation research team. Placed in the Top 20 at MECA 2024 showing excellent system logic skills.",
          name: "Prof. Le Huy",
          title: "IUH Control & Automation Department"
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
      role: "kỹ sư tự động hóa & kỹ thuật viên.",
      summary: "Định hướng của tôi là tích hợp phần cứng và phần mềm, thiết kế cấu trúc tự động hóa mạnh mẽ và giải quyết các bài toán truyền nhận dữ liệu công nghiệp OT/SCADA phức tạp.",
      badge1: "Lập trình PLC",
      badge2: "C++ & Python"
    },
    quickCards: {
      card1: {
        title: "Dự án tiêu biểu",
        desc: "Khám phá các thiết kế phần cứng OT và bảng điều khiển Web SCADA hiện đại của tôi.",
        btn: "Dự án"
      },
      card2: {
        title: "Kỹ năng chuyên môn",
        desc: "Tìm hiểu năng lực về giao thức công nghiệp, vẽ CAD kỹ thuật và lập trình của tôi.",
        btn: "Kỹ năng"
      },
      card3: {
        title: "Liên hệ tôi",
        desc: "Cùng hợp tác để thiết kế tủ điện điều khiển và tối ưu hệ thống tự động hóa của bạn.",
        btn: "Liên hệ"
      }
    },
    works: {
      title: "Các dự án tiêu biểu",
      subtitle: "Với sự cẩn thận trong đấu nối phần cứng và tư duy mạch lạc trong thiết kế phần mềm, tôi chuyên phát triển bộ điều khiển nhúng, giao diện giám sát từ xa và quy trình vận hành trực quan.",
      items: [
        {
          title: "Giao diện Web SCADA Giám sát gỗ",
          tags: "UI/UX, React.js, Web SCADA",
          desc: "Xây dựng ứng dụng web SCADA responsive triển khai tại Công ty Gỗ Châu Á, giúp kỹ thuật viên theo dõi dây chuyền sấy từ xa qua điện thoại hoặc máy tính.",
          btn: "Chi tiết dự án"
        },
        {
          title: "IoT Gateway Truyền dữ liệu thời gian thực",
          tags: "Django Channels, WebSockets, Python",
          desc: "Thiết lập hệ thống truyền dữ liệu tức thời (dưới 1 giây) từ PLC Siemens & Mitsubishi lên dashboard giám sát thông qua MQTT và Django Channels.",
          btn: "Chi tiết dự án"
        },
        {
          title: "Thiết kế CAD & Chế tạo bộ điều khiển nước",
          tags: "SolidWorks, AutoCAD, C++ Firmware",
          desc: "Thiết kế bản vẽ 2D/3D đường ống xử lý nước tại Saigon Valve. Lập trình vi điều khiển C++ tự động đóng mở van theo áp suất.",
          btn: "Chi tiết dự án"
        }
      ],
      ctaText: "Bạn muốn tìm hiểu thêm nhiều dự án khác?",
      ctaBtn: "Tất cả dự án"
    },
    about: {
      title: "Hiểu hơn về tôi",
      p1: "Tôi là Châu Vương Phát, Kỹ sư Điều khiển & Tự động hóa tại Thành phố Hồ Chí Minh. Nhờ sự yêu thích với truyền thông công nghiệp và giám sát hiện đại, tôi đóng vai trò cầu nối tích hợp cảm biến hiện trường với dịch vụ lưu trữ dữ liệu tập trung.",
      p2: "Sản phẩm của tôi luôn hướng tới sự chuẩn chỉ và dễ bảo trì—cho dù đó là bản vẽ SolidWorks 3D, đấu dây tủ điện chi tiết hay viết API truyền nhận WebSockets.",
      bullets: [
        "Tư duy thuật toán tốt",
        "Chế tạo thử nghiệm nhanh",
        "Tích hợp phần mềm tối ưu",
        "Đấu nối tủ điện chuẩn chỉ"
      ],
      btn: "Tìm hiểu thêm",
      available: "SẴN SÀNG HỢP TÁC • CHÂU VƯƠNG PHÁT • "
    },
    capabilities: {
      title: "Năng lực chuyên môn",
      subtitle: "Cung cấp các dịch vụ kỹ thuật tối ưu hóa dây chuyền sản xuất và các lớp giám sát số hóa.",
      items: [
        "Giao thức công nghiệp (Modbus, MQTT, OPC UA)",
        "Giao diện Web SCADA & Tích hợp ứng dụng web",
        "Lập trình nhúng điều khiển (C/C++ Firmware)",
        "Lập trình PLC hệ thống (Siemens, Mitsubishi)",
        "Thiết kế kỹ thuật bản vẽ 2D/3D (SolidWorks, AutoCAD)",
        "Đấu nối tủ điện điều khiển & Thiết kế PCB nguyên mẫu",
        "Cơ sở dữ liệuTelemetry (SQL Server, MongoDB)"
      ]
    },
    testimonials: {
      items: [
        {
          quote: "Phát là một kỹ sư xuất sắc. Cậu ấy đã xây dựng giao diện giám sát Web SCADA tốc độ cao chạy rất ổn định cho các buồng sấy gỗ của chúng tôi.",
          name: "Nguyễn Minh",
          title: "Giám đốc Công ty Tự động hóa Minh Khoa"
        },
        {
          quote: "Phát làm việc rất hiệu quả trong thiết kế bản vẽ 3D SolidWorks và lập trình firmware. Các tài liệu quy trình vận hành (SOP) do Phát viết rất chi tiết.",
          name: "Trần Tuấn",
          title: "Quản lý Dự án tại Saigon Valve Co., Ltd."
        },
        {
          quote: "Trong quá trình học tập, Phát là nhân tố nổi bật của đội tuyển robot và tự động hóa. Đạt giải Top 20 MECA 2024 nhờ tư duy logic vững chắc.",
          name: "Thầy Lê Huy",
          title: "Khoa Công nghệ Tự động hóa - Trường Đại học Công nghiệp (IUH)"
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
  const [activeTab, setActiveTab] = useState(0);

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
            <span className="bg-[#fef3c7] border-2 border-[#09090b] dark:border-white px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(9,9,11,1)] text-xs">CVP</span>
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
              className="p-2 border-2 border-[#09090b] dark:border-white rounded-lg bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 shadow-[2px_2px_0px_0px_rgba(9,9,11,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-transform active:scale-95"
            >
              {theme === "light" ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border-2 border-[#09090b] dark:border-white rounded-md bg-[#fef3c7] shadow-[1px_1px_0px_0px_rgba(9,9,11,1)] text-[#09090b]"
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
              {/* Profile image integrated inline with text */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-3 border-[#09090b] dark:border-white bg-[#fef3c7] flex items-center justify-center overflow-hidden shadow-[3px_3px_0px_0px_rgba(9,9,11,1)] transform rotate-3">
                <span className="font-black text-xl text-teal-600">CVP</span>
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

            {/* Doodles & floating Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="px-4 py-1.5 bg-[#dbeafe] dark:bg-blue-950 text-[#09090b] dark:text-blue-200 font-black rounded-full border-2 border-[#09090b] dark:border-white shadow-[2px_2px_0px_0px_rgba(9,9,11,1)] transform -rotate-1 text-sm">
                {t.hero.badge1}
              </div>
              <div className="px-4 py-1.5 bg-[#fce7f3] dark:bg-pink-950 text-[#09090b] dark:text-pink-200 font-black rounded-full border-2 border-[#09090b] dark:border-white shadow-[2px_2px_0px_0px_rgba(9,9,11,1)] transform rotate-2 text-sm">
                {t.hero.badge2}
              </div>
            </div>
          </div>

          {/* Doodles/Decorative column on right */}
          <div className="md:col-span-4 hidden md:flex justify-end relative">
            {/* Sketchy SVG circle badge */}
            <div className="w-48 h-48 border-4 border-dashed border-[#09090b] dark:border-white rounded-full flex items-center justify-center p-8 transform rotate-12">
              <div className="text-center font-black uppercase text-xs tracking-wider">
                <span className="text-teal-600 dark:text-teal-400 block text-lg">1 Year</span>
                <span className="block mt-1">Experience</span>
              </div>
            </div>
            {/* Absolute badge overlay */}
            <div className="absolute top-0 right-4 px-3 py-1 bg-[#fef3c7] dark:bg-yellow-950 font-black border-2 border-[#09090b] dark:border-white shadow-[2px_2px_0px_0px_rgba(9,9,11,1)] text-xs uppercase tracking-widest transform -rotate-12">
              MECA 2024
            </div>
          </div>
        </div>

        {/* Hand drawn dividing SVG wave path (bottom boundary decoration) */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none z-0">
          <svg className="relative block w-full h-[30px]" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
            <path className="text-white dark:text-zinc-950" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31.39,901.11,56.44,978.93,56.44c114.8,0,221.07-25,221.07-25v88.56H0V31.39S106.27,56.44,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* QUICK LINK CARDS */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 - Portfolio */}
          <div className="bg-[#dbeafe] dark:bg-blue-950/80 border-3 border-[#09090b] dark:border-white rounded-2xl p-8 shadow-[6px_6px_0px_0px_rgba(9,9,11,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)] flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-xl border-2 border-[#09090b] flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(9,9,11,1)]">
                <svg className="w-6 h-6 text-[#09090b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight">{t.quickCards.card1.title}</h3>
              <p className="font-medium text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">{t.quickCards.card1.desc}</p>
            </div>
            <a href="#portfolio" className="mt-8 self-end w-12 h-12 rounded-full bg-white text-[#09090b] border-2 border-[#09090b] shadow-[3px_3px_0px_0px_rgba(9,9,11,1)] flex items-center justify-center hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0px_0px_rgba(9,9,11,1)] transition-all">
              <svg className="w-5 h-5 transform group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Card 2 - Skills */}
          <div className="bg-[#fef3c7] dark:bg-yellow-950/80 border-3 border-[#09090b] dark:border-white rounded-2xl p-8 shadow-[6px_6px_0px_0px_rgba(9,9,11,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)] flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-xl border-2 border-[#09090b] flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(9,9,11,1)]">
                <svg className="w-6 h-6 text-[#09090b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364.364l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight">{t.quickCards.card2.title}</h3>
              <p className="font-medium text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">{t.quickCards.card2.desc}</p>
            </div>
            <a href="#skills" className="mt-8 self-end w-12 h-12 rounded-full bg-white text-[#09090b] border-2 border-[#09090b] shadow-[3px_3px_0px_0px_rgba(9,9,11,1)] flex items-center justify-center hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0px_0px_rgba(9,9,11,1)] transition-all">
              <svg className="w-5 h-5 transform group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Card 3 - Contact */}
          <div className="bg-[#d1fae5] dark:bg-emerald-950/80 border-3 border-[#09090b] dark:border-white rounded-2xl p-8 shadow-[6px_6px_0px_0px_rgba(9,9,11,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)] flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-xl border-2 border-[#09090b] flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(9,9,11,1)]">
                <svg className="w-6 h-6 text-[#09090b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight">{t.quickCards.card3.title}</h3>
              <p className="font-medium text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">{t.quickCards.card3.desc}</p>
            </div>
            <a href="#contact" className="mt-8 self-end w-12 h-12 rounded-full bg-white text-[#09090b] border-2 border-[#09090b] shadow-[3px_3px_0px_0px_rgba(9,9,11,1)] flex items-center justify-center hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0px_0px_rgba(9,9,11,1)] transition-all">
              <svg className="w-5 h-5 transform group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>
      </section>

      {/* WORKS SECTION (Selected projects styled with stacking look) */}
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

          {/* Stacking projects card container */}
          <div className="space-y-12">
            {t.works.items.map((project, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-950 border-3 border-[#09090b] dark:border-white rounded-2xl p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(9,9,11,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.9)] flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="flex-1 space-y-4">
                  <span className="inline-block px-3 py-1 bg-[#eae6f8] text-[#09090b] border-2 border-[#09090b] font-black text-xs uppercase tracking-wider">
                    {project.tags}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-none uppercase">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {project.desc}
                  </p>
                  <a
                    href="#contact"
                    className="inline-block px-5 py-2.5 bg-white text-[#09090b] border-2 border-[#09090b] hover:bg-zinc-100 font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(9,9,11,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1.5px_1.5px_0px_0px_rgba(9,9,11,1)] transition-all"
                  >
                    {project.btn}
                  </a>
                </div>

                {/* Conceptual Schematic Placeholder Graphic for Projects */}
                <div className="w-full md:w-64 h-48 bg-[#eae6f8] dark:bg-zinc-900 border-2 border-[#09090b] dark:border-white flex items-center justify-center p-4 relative overflow-hidden">
                  <div className="text-center uppercase font-black text-xs space-y-1">
                    {idx === 0 && (
                      <>
                        <div className="text-teal-600 dark:text-teal-400 text-lg">React.js</div>
                        <div className="text-[10px] text-zinc-500">SCADA GUI</div>
                      </>
                    )}
                    {idx === 1 && (
                      <>
                        <div className="text-teal-600 dark:text-teal-400 text-lg">WS / MQTT</div>
                        <div className="text-[10px] text-zinc-500">Telemetry</div>
                      </>
                    )}
                    {idx === 2 && (
                      <>
                        <div className="text-teal-600 dark:text-teal-400 text-lg">SolidWorks</div>
                        <div className="text-[10px] text-zinc-500">3D CAD model</div>
                      </>
                    )}
                  </div>
                  {/* Decorative sketch lines */}
                  <div className="absolute top-2 right-2 text-[10px] opacity-35">REV 1.0</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center space-y-4">
            <p className="text-lg font-black uppercase">{t.works.ctaText}</p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-[#fef3c7] text-[#09090b] border-3 border-[#09090b] font-black text-sm uppercase tracking-wider shadow-[5px_5px_0px_0px_rgba(9,9,11,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(9,9,11,1)] transition-all"
            >
              {t.works.ctaBtn}
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION (Lavender background with polaroid and rotating hire badge) */}
      <section id="about" className="bg-[#eae6f8] dark:bg-zinc-900 py-20 border-b-3 border-[#09090b] dark:border-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Polaroid image wrapper with adhesive tape graphic */}
          <div className="md:col-span-5 flex justify-center relative">
            
            {/* The adhesive Tape visual */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-28 h-8 bg-zinc-100/80 dark:bg-zinc-800/80 border-l-2 border-r-2 border-[#09090b] dark:border-white opacity-90 shadow-sm z-20 skew-x-3"></div>

            <div className="bg-white dark:bg-zinc-950 border-3 border-[#09090b] dark:border-white p-6 pb-12 shadow-[8px_8px_0px_0px_rgba(9,9,11,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.9)] transform -rotate-2 relative z-10 w-full max-w-sm">
              <div className="aspect-square bg-[#dbeafe] dark:bg-zinc-900 border-2 border-[#09090b] dark:border-white flex flex-col items-center justify-center p-6 select-none relative overflow-hidden">
                <svg className="w-16 h-16 text-teal-600/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
                <span className="text-lg font-black uppercase mt-4">Châu Vương Phát</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Automation Specialist</span>
              </div>
              
              {/* Polaroid writing space */}
              <div className="text-center font-bold font-mono text-xs mt-6 uppercase text-zinc-500">
                IUH GRADUATE • 2025
              </div>

              {/* Spinning circular badge available overlay */}
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
                {/* Envelope central icon */}
                <svg className="w-5 h-5 text-teal-600 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Text descriptions */}
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none">
              {t.about.title}
            </h2>
            <div className="space-y-4 font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm md:text-base">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* Bullets grid with hand-drawn visual check icon */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {t.about.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center space-x-3 font-bold text-sm">
                  <div className="w-6 h-6 rounded-md bg-white border-2 border-[#09090b] flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_rgba(9,9,11,1)]">
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
              className="inline-block px-6 py-3 bg-white text-[#09090b] border-2 border-[#09090b] font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(9,9,11,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1.5px_1.5px_0px_0px_rgba(9,9,11,1)] transition-all"
            >
              {t.about.btn}
            </a>
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

        {/* Badges block grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {t.capabilities.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 border-2.5 border-[#09090b] dark:border-white px-6 py-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(9,9,11,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.9)] flex items-center space-x-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[#fce7f3] border-2 border-[#09090b] flex items-center justify-center text-[#09090b] font-black text-sm">
                ⚙️
              </div>
              <h3 className="font-black text-sm uppercase tracking-tight">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL REFERENCE TABS (Client reviews) */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900 border-t-3 border-b-3 border-[#09090b] dark:border-white">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="bg-white dark:bg-zinc-950 border-3 border-[#09090b] dark:border-white rounded-2xl p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(9,9,11,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.9)] min-h-[320px] flex flex-col justify-between">
            
            {/* Active Testimonial Pane */}
            <div className="space-y-6">
              <svg className="w-10 h-10 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <blockquote className="text-xl md:text-2xl font-bold leading-relaxed text-zinc-800 dark:text-zinc-100">
                "{t.testimonials.items[activeTab].quote}"
              </blockquote>

              <div className="source">
                <h4 className="text-lg font-black uppercase text-teal-700 dark:text-teal-400">
                  {t.testimonials.items[activeTab].name}
                </h4>
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  {t.testimonials.items[activeTab].title}
                </p>
              </div>
            </div>

            {/* Testimonial selector tabs (Avatars placeholders) */}
            <div className="flex space-x-3 border-t-2 border-zinc-100 dark:border-zinc-800 pt-6 mt-8">
              {t.testimonials.items.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-12 h-12 rounded-full border-2 border-[#09090b] dark:border-white font-black text-xs uppercase flex items-center justify-center transition-all ${
                    activeTab === idx
                      ? "bg-[#fef3c7] shadow-[2.5px_2.5px_0px_0px_rgba(9,9,11,1)] translate-y-0.5"
                      : "bg-white dark:bg-zinc-800 text-zinc-500 hover:bg-zinc-100"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="bg-[#fce7f3] border-2 border-[#09090b] dark:border-white px-3 py-1 font-black text-xs uppercase shadow-[2.5px_2.5px_0px_0px_rgba(9,9,11,1)] inline-block">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl font-black uppercase tracking-tight mt-4">
            {t.contact.title}
          </h2>
          <p className="font-medium text-zinc-500 dark:text-zinc-400">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Email badge */}
          <div className="bg-[#eae6f8] dark:bg-zinc-900 border-3 border-[#09090b] dark:border-white p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(9,9,11,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)] flex items-center justify-between">
            <div className="flex items-center space-x-4 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-white border-2 border-[#09090b] flex items-center justify-center flex-shrink-0 text-lg">
                ✉️
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-zinc-400 block font-black uppercase tracking-widest">{t.contact.emailLabel}</span>
                <span className="text-sm font-bold text-[#09090b] dark:text-zinc-200 block truncate">chauvuongphat.automation@gmail.com</span>
              </div>
            </div>
            <button
              onClick={copyEmail}
              className="px-4 py-2 bg-white hover:bg-zinc-100 text-xs font-black rounded-lg border-2 border-[#09090b] shadow-[2.5px_2.5px_0px_0px_rgba(9,9,11,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(9,9,11,1)] transition-all flex-shrink-0 ml-3"
            >
              {copied ? t.contact.copied : t.contact.copy}
            </button>
          </div>

          {/* Phone call link */}
          <a
            href="tel:0768846481"
            className="bg-[#d2f6ec] dark:bg-emerald-950 border-3 border-[#09090b] dark:border-white p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(9,9,11,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)] flex items-center space-x-4 hover:translate-x-0.5 hover:translate-y-0.5 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-white border-2 border-[#09090b] flex items-center justify-center flex-shrink-0 text-lg">
              📞
            </div>
            <div>
              <span className="text-[10px] text-zinc-400 block font-black uppercase tracking-widest">{t.contact.phoneLabel}</span>
              <span className="text-sm font-bold text-[#09090b] dark:text-zinc-200 block">0768846481</span>
            </div>
          </a>

          {/* Location */}
          <div className="bg-[#fef3c7] dark:bg-yellow-950 border-3 border-[#09090b] dark:border-white p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(9,9,11,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)] flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-white border-2 border-[#09090b] flex items-center justify-center flex-shrink-0 text-lg">
              📍
            </div>
            <div>
              <span className="text-[10px] text-zinc-400 block font-black uppercase tracking-widest">{t.contact.locationLabel}</span>
              <span className="text-sm font-bold text-[#09090b] dark:text-zinc-200 block">Ho Chi Minh City, Vietnam</span>
            </div>
          </div>

          {/* LinkedIn mock link */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#dbeafe] dark:bg-blue-950 border-3 border-[#09090b] dark:border-white p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(9,9,11,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)] flex items-center space-x-4 hover:translate-x-0.5 hover:translate-y-0.5 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-white border-2 border-[#09090b] flex items-center justify-center flex-shrink-0 text-lg">
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

"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

const projectData = {
  en: {
    "sluice-gate-design": {
      title: "Sluice Gate Design & Drawing Layout (1000x1000)",
      duration: "2026",
      role: "Mechanical CAD Designer • Team Member (Drawing Design Only)",
      problem: "Water supply control systems require highly durable, leak-proof sluice gates capable of withstanding massive hydraulic pressures. The design demanded precise tolerance calculations, structural layouts, and material specs drafting to guide workshop manufacturing.",
      tools: "SolidWorks 3D Modeling, AutoCAD 2D Drafting, Technical Blueprint Drafting, GD&T (Geometric Dimensioning and Tolerancing)",
      impact: "Successfully modeled the entire 1000x1000mm sluice gate frame and gate assembly in SolidWorks 3D. Created complete AutoCAD fabrication drawings. The prototype fabricated by the manufacturing team based on these blueprints successfully passed water tightness tests and is commercialized.",
      image: "/projects/Sluice Gate Design & Technical Drawing/Sluite Gate first build.jpg",
      links: [
        { label: "Technical Blueprint (PDF) 📥", url: "/projects/Sluice Gate Design & Technical Drawing/Van cửa phai - 1000x1000.pdf" },
        { label: "Product Showroom (AD Page)", url: "/projects/Sluice Gate Design & Technical Drawing/Sluite Gate advertisement.jpg" }
      ],
      process: [
        {
          step: 1,
          title: "3D Mechanical Design Modeling",
          desc: "Designed and built the complete 3D assembly of the 1000x1000mm sluice gate on SolidWorks, planning physical dimensions and mechanical constraints. You can view the blueprint PDF on the right.",
          image: "/projects/Sluice Gate Design & Technical Drawing/Van cửa phai - 1000x1000.pdf"
        },
        {
          step: 2,
          title: "Fabrication Drawings Output",
          desc: "Drafted detailed fabrication drawings with precise tolerances and material specifications on AutoCAD, transferring blueprints to the manufacturing workshop for sample build.",
          image: "/projects/Sluice Gate Design & Technical Drawing/Sluite Gate first build.jpg"
        },
        {
          step: 3,
          title: "Testing & Market Handover",
          desc: "The physical prototype constructed from the CAD blueprints successfully passed leak-tightness testing and was approved for commercial distribution.",
          image: "/projects/Sluice Gate Design & Technical Drawing/Sluite Gate advertisement.jpg"
        }
      ]
    },
    "huewaco-monitoring": {
      title: "Hue Water Quality Monitoring System",
      duration: "Feb 2025 - Present",
      role: "Cabinet Designer & Electrical Integration Engineer • Team Member (Excluding Controller Software Coding)",
      problem: "Thua Thien Hue Water Supply Joint Stock Company (Huewaco) needed to deploy remote water quality, flow rate, and pressure monitoring stations. The system demanded strict compliance with environmental regulations, layout designs fitting restricted spaces, and precise hardware configurations.",
      tools: "AutoCAD 2D, AutoCAD Electrical, Control Panel Wiring, Cabinet Integration, Hardware Configuration, Sensor Calibration, Regulatory Compliance Analysis",
      impact: "Designed cabinet layout and electrical panel wiring, researched environmental regulations to select compliant equipment, configured controller telemetry/sensor calibration, and executed on-site field installation.",
      image: "/projects/Water Monitoring Station.jpg",
      links: [
        { label: "AutoCAD Schematics (PDF) 📥", url: "/projects/huewaco-monitoring/Tủ quan trắc Huế.pdf" },
        { label: "Company Website", url: "https://phat-portfolio.vercel.app" }
      ],
      process: [
        {
          step: 1,
          title: "Technical Cabinet Design & Compliance",
          desc: "Researched government environmental regulations to select and add compliant equipment. Utilized AutoCAD 2D to draft electrical schematics and hardware layouts for the monitoring cabinet. You can view the blueprint PDF on the right.",
          image: "/projects/huewaco-monitoring/Tủ quan trắc Huế.pdf"
        },
        {
          step: 2,
          title: "Workshop Assembly & Cabinet Wiring",
          desc: "Handled the wiring and assembly of the electrical cabinet panel in the workshop, laying terminal layouts and mounting hardware nodes.",
          image: "/projects/huewaco-monitoring/Workshop assemply.jpg"
        },
        {
          step: 3,
          title: "Telemetry Configuration & Sensor Calibration",
          desc: "Configured the central controller parameters and calibrated chemical/flow sensors to ensure accurate data reporting.",
          image: "/projects/huewaco-monitoring/Config the Controller.jpg"
        },
        {
          step: 4,
          title: "On-Site Installation & Field Deployment",
          desc: "Traveled to Hue to construct the physical station setup, mount cabinet units, connect local pipelines, and commission the system.",
          image: "/projects/huewaco-monitoring/Construction and Installation Water Quality Station .jpg"
        }
      ]
    },
    "lawaco-solar-gate": {
      title: "Solar-Powered Automated Gate Valve Control System",
      duration: "2026",
      role: "Automation & Hardware Integrator • End-to-End Delivery (Excluding Controller Software Coding)",
      problem: "Long An Water Supply Joint Stock Company (Lawaco) needed to automate hydraulic gate valves in remote rural sites. These locations lacked grid power, demanding a self-sustaining solar power layout and complete field cabinet construction.",
      tools: "Solar Power Management, PCB Layout, Modbus RTU, Relays, SolidWorks, Cabinet Assembly, Field Installation, User Training",
      impact: "Executed end-to-end hardware deployment including valve physical upgrades, cabinet assembly, solar module structural mounting, and customer training. (Excluding controller software coding).",
      image: "/projects/Gate Valve Project.jpg",
      links: [
        { label: "Project Demo Link", url: "https://phat-portfolio.vercel.app" }
      ],
      process: [
        {
          step: 1,
          title: "Mechanical Design & Protective Cover Layout",
          desc: "Designed the custom weather-resistant protective steel cover house for the gate valve actuator using AutoCAD and SolidWorks to shield internal machinery from rain, sun, and mud.",
          image: "/projects/lawaco-solar-gate/Desgin Cover house for actuator.jpg"
        },
        {
          step: 2,
          title: "Workshop Assembly & Wiring Integration",
          desc: "Fabricated and wired the electrical controller cabinet at the workshop, mounting circuit breaker switchgears, solar charger units, and backup lead-acid batteries.",
          image: "/projects/lawaco-solar-gate/Workshop Assemply Acuator_n.jpg"
        },
        {
          step: 3,
          title: "Controller Settings & Configuration",
          desc: "Configured and calibrated the controller parameters to establish optimal low-power sleep intervals and Modbus/RTU communication profiles.",
          image: "/projects/lawaco-solar-gate/Config Actuator Controller.jpg"
        },
        {
          step: 4,
          title: "On-Site Construction & Handover",
          desc: "Completed the physical assembly and mounting of the solar panels and actuator cabinet on-site at Lawaco, testing remote telemetry valves over Modbus and conducting user operational training.",
          image: "/projects/lawaco-solar-gate/Construction and Installation Acuator .jpg"
        }
      ]
    },
    "pressure-valve-control": {
      title: "Design and Implementation of Linear Pressure Reducing Valve Control System",
      duration: "2026",
      role: "Automation & Hardware Integrator • End-to-End Delivery (Excluding Controller Software Coding)",
      problem: "Municipal water distribution networks experience high rates of water loss (non-revenue water) due to pressure fluctuations. During off-peak hours when residents consume minimal water, pipeline pressure increases significantly. Without active pressure control, this elevated pressure dramatically accelerates water leakage through minor pipe cracks and joints.",
      tools: "Embedded Controllers, PCB Schematics, Hydraulic Control Logic, AutoCAD, Cabinet Assembly, Field Installation, User Training",
      impact: "Executed end-to-end hardware delivery including cabinet assembly, PCB shield circuit routing, on-site physical installation, calibration, and client handover. Maintained pipe output pressure within a strict ±0.2 bar tolerance window under all surge tests. (Excluding controller software coding).",
      image: "/projects/Linear Pressure Reducing Valve Project.jpg",
      links: [
        { label: "Technical Document", url: "https://phat-portfolio.vercel.app" }
      ],
      process: [
        {
          step: 1,
          title: "Assessment & Upgrade Design",
          desc: "Assessed the existing customer's hydraulic pressure reducing valve infrastructure and drafted layout diagrams to upgrade the station with precise linear control units.",
          image: "/projects/pressure-valve-control/Upgrade Customer Pressure Reducing Valve to Linear .jpg"
        },
        {
          step: 2,
          title: "Cabinet Assembly at Workshop",
          desc: "Assembled the linear valve controller cabinet at the workshop, wiring the power distribution blocks, surge protection modules, and central controller unit.",
          image: "/projects/pressure-valve-control/Linear pressure reducing valve Cabinet assemply at workshop.jpg"
        },
        {
          step: 3,
          title: "PCB Hardware Assembly & Soldering",
          desc: "Soldered components and integrated wiring on the pre-designed PCB board, complete-assembling the controller shield to route analog pressure sensor signals cleanly.",
          image: "/projects/pressure-valve-control/PCB hardware assembly.jpg"
        },
        {
          step: 4,
          title: "On-Site Construction & Calibration",
          desc: "Installed the upgraded linear valve control cabinet in the field, calibrating the inflow/outflow telemetry and tuning linear hydraulic response times.",
          image: "/projects/pressure-valve-control/Contruction and Installation Linear Pressure Reducing Valve.jpg"
        },
        {
          step: 5,
          title: "Technical Guiding & Handover",
          desc: "Provided hands-on operational training and technical guidance to the Lawaco engineering team, ensuring smooth handover and system maintenance procedures.",
          image: "/projects/pressure-valve-control/guiding lawaco customer using product.jpg"
        }
      ]
    }
  },
  vi: {
    "sluice-gate-design": {
      title: "Thiết kế cơ khí & Bản vẽ Van Cửa Phai (1000x1000)",
      duration: "2026",
      role: "Kỹ sư Bản vẽ Cơ khí (CAD) • Thành viên dự án (Chỉ thiết kế bản vẽ)",
      problem: "Các hệ thống quản lý nguồn nước yêu cầu các van cửa phai có độ bền cơ học cao, chịu lực tốt dưới áp suất thủy tĩnh lớn và tuyệt đối kín nước. Quá trình thiết kế yêu cầu tính toán dung sai tỉ mỉ, thiết kế khung kết cấu cơ khí và lập thông số chế tạo để bàn giao xưởng sản xuất.",
      tools: "Thiết kế 3D SolidWorks, Bản vẽ kỹ thuật AutoCAD 2D, Vẽ bản vẽ chế tạo cơ khí, GD&T (Dung sai hình học & Kích thước)",
      impact: "Xây dựng mô hình 3D hoàn chỉnh cụm khung và cánh van cửa phai kích thước 1000x1000mm trên SolidWorks. Thiết lập đầy đủ bản vẽ AutoCAD chế tạo. Mẫu thử nghiệm thực tế sản xuất theo bản vẽ thiết kế đạt độ kín nước 100% và sẵn sàng bán.",
      image: "/projects/Sluice Gate Design & Technical Drawing/Sluite Gate first build.jpg",
      links: [
        { label: "Bản vẽ Cơ khí chế tạo (PDF) 📥", url: "/projects/Sluice Gate Design & Technical Drawing/Van cửa phai - 1000x1000.pdf" },
        { label: "Trang thông tin sản phẩm", url: "/projects/Sluice Gate Design & Technical Drawing/Sluite Gate advertisement.jpg" }
      ],
      process: [
        {
          step: 1,
          title: "Thiết kế cơ khí 3D",
          desc: "Thiết kế mô hình 3D SolidWorks hoàn chỉnh cho van cửa phai, xác định kích thước cơ cấu và khớp động lực. Bạn có thể xem bản vẽ PDF lắp ráp chi tiết ở khung bên cạnh.",
          image: "/projects/Sluice Gate Design & Technical Drawing/Van cửa phai - 1000x1000.pdf"
        },
        {
          step: 2,
          title: "Xuất bản vẽ chế tạo cơ khí",
          desc: "Phác thảo bản vẽ chi tiết cơ khí AutoCAD với đầy đủ thông số dung sai để chuyển giao cho xưởng cơ khí gia công lắp ráp mẫu thử nghiệm.",
          image: "/projects/Sluice Gate Design & Technical Drawing/Sluite Gate first build.jpg"
        },
        {
          step: 3,
          title: "Nghiệm thu bản vẽ qua mẫu thử",
          desc: "Mẫu sản phẩm thực tế chế tạo từ bản vẽ thiết kế đã vượt qua các bài kiểm thử độ kín nước, được kiểm nghiệm và thương mại hóa thành công.",
          image: "/projects/Sluice Gate Design & Technical Drawing/Sluite Gate advertisement.jpg"
        }
      ]
    },
    "huewaco-monitoring": {
      title: "Hue Water Quality Monitoring System",
      duration: "Tháng 2/2025 - Hiện tại",
      role: "Kỹ sư Thiết kế Tủ điện & Tích hợp điện • Thành viên dự án (Không bao gồm viết code phần mềm)",
      problem: "Công ty Cổ phần Cấp nước Thừa Thiên Huế (Huewaco) yêu cầu lắp đặt các trạm quan trắc chất lượng nước, lưu lượng và áp suất tự động từ xa. Hệ thống đòi hỏi tủ điện thiết kế gọn gàng, tuân thủ nghiêm ngặt quy định môi trường pháp lý và cấu hình phần cứng tối ưu.",
      tools: "AutoCAD 2D, AutoCAD Electrical, Đấu nối tủ điều khiển, Cấu hình tủ điện, Hiệu chuẩn cảm biến, Nghiên cứu quy chuẩn pháp lý môi trường, Thi công thực địa",
      impact: "Thiết kế bố trí và đi dây điện tủ điều khiển, nghiên cứu quy định pháp lý môi trường để bổ sung thiết bị tuân thủ quy chuẩn, cấu hình bộ điều khiển, hiệu chuẩn cảm biến đo và trực tiếp thi công lắp đặt tủ tại Huế.",
      image: "/projects/Water Monitoring Station.jpg",
      links: [
        { label: "Bản vẽ Cơ điện AutoCAD (PDF) 📥", url: "/projects/huewaco-monitoring/Tủ quan trắc Huế.pdf" },
        { label: "Trang chủ Saigon Valve", url: "https://phat-portfolio.vercel.app" }
      ],
      process: [
        {
          step: 1,
          title: "Thiết kế tủ điện & Nghiên cứu pháp lý bổ sung thiết bị",
          desc: "Nghiên cứu quy định bảo vệ môi trường pháp luật để bổ sung các thiết bị tuân thủ tiêu chuẩn. Sử dụng AutoCAD 2D thiết kế bản vẽ sơ đồ điện tủ quan trắc. Bạn có thể trực tiếp cuộn xem bản vẽ sơ đồ chi tiết trên khung hiển thị bên cạnh.",
          image: "/projects/huewaco-monitoring/Tủ quan trắc Huế.pdf"
        },
        {
          step: 2,
          title: "Đấu nối tủ điện tại xưởng",
          desc: "Trực tiếp thực hiện đi dây điện chi tiết cho tủ điện điều khiển, gá lắp thiết bị và hàn mạch PCB kết nối tại xưởng.",
          image: "/projects/huewaco-monitoring/Workshop assemply.jpg"
        },
        {
          step: 3,
          title: "Hiệu chuẩn cảm biến & Cấu hình thiết bị",
          desc: "Cấu hình thông số truyền thông trên bộ điều khiển và hiệu chuẩn các đầu đo cảm biến nước sạch đạt thông số chuẩn xác.",
          image: "/projects/huewaco-monitoring/Config the Controller.jpg"
        },
        {
          step: 4,
          title: "Thi công lắp đặt tại Huế",
          desc: "Trực tiếp di chuyển ra Huế để thi công cơ cấu trạm, lắp đặt tủ điện điều khiển và chạy thử nghiệm thực địa.",
          image: "/projects/huewaco-monitoring/Construction and Installation Water Quality Station .jpg"
        }
      ]
    },
    "lawaco-solar-gate": {
      title: "Hệ thống van cửa sập tự động dùng năng lượng mặt trời cho Lawaco",
      duration: "2026",
      role: "Người tích hợp tự động hóa & Phần cứng • Triển khai trọn gói (Không bao gồm viết code phần mềm)",
      problem: "Công ty Cổ phần Cấp nước Long An (Lawaco) cần tự động hóa các cụm van cửa sập tại các vị trí nông thôn xa xôi. Các điểm này không có lưới điện lưới quốc gia, đòi hỏi giải pháp tự cấp nguồn mặt trời và gá lắp trọn gói.",
      tools: "Quản lý nguồn Solar, Thiết kế mạch PCB, Modbus RTU, Rơ-le, SolidWorks, Lắp ráp tủ điện, Thi công thực địa, Đào tạo bàn giao",
      impact: "Đảm nhận triển khai phần cứng trọn gói (End-to-End) bao gồm chế tạo tủ, tích hợp sạc solar và acquy lưu điện, lắp dựng pin mặt trời thực địa, chạy thử nghiệm Modbus và hướng dẫn sử dụng. (Không bao gồm viết code phần mềm).",
      image: "/projects/Gate Valve Project.jpg",
      links: [
        { label: "Đường dẫn dự án", url: "https://phat-portfolio.vercel.app" }
      ],
      process: [
        {
          step: 1,
          title: "Thiết kế cơ khí & Vỏ bảo vệ thiết bị",
          desc: "Thiết kế vỏ bảo vệ cơ khí bằng thép chống chịu thời tiết cho bộ truyền động van sử dụng AutoCAD và SolidWorks nhằm che nắng, che mưa và bùn cát tại hiện trường.",
          image: "/projects/lawaco-solar-gate/Desgin Cover house for actuator.jpg"
        },
        {
          step: 2,
          title: "Lắp ráp & Đấu nối thiết bị tại xưởng",
          desc: "Gia công lắp ráp và đấu dây hoàn thiện tủ điều khiển điện tại xưởng, lắp đặt CB bảo vệ, bộ điều khiển sạc năng lượng mặt trời và acquy lưu điện dự phòng.",
          image: "/projects/lawaco-solar-gate/Workshop Assemply Acuator_n.jpg"
        },
        {
          step: 3,
          title: "Cấu hình thông số bộ điều khiển",
          desc: "Cấu hình thông số bộ điều khiển để cài đặt chu kỳ nghỉ tiết kiệm điện năng và tích hợp truyền thông Modbus/RTU.",
          image: "/projects/lawaco-solar-gate/Config Actuator Controller.jpg"
        },
        {
          step: 4,
          title: "Thi công lắp đặt và Bàn giao thực địa",
          desc: "Hoàn tất thi công lắp ráp hệ khung pin mặt trời, gá đặt tủ điều khiển van cửa sập tại Long An, chạy thử nghiệm đường truyền đóng mở van Modbus từ xa và bàn giao hướng dẫn vận hành cho khách hàng.",
          image: "/projects/lawaco-solar-gate/Construction and Installation Acuator .jpg"
        }
      ]
    },
    "pressure-valve-control": {
      title: "Thiết kế & Triển khai bộ điều khiển van giảm áp tuyến tính",
      duration: "2026",
      role: "Người tích hợp tự động hóa & Phần cứng • Triển khai trọn gói (Không bao gồm viết code phần mềm)",
      problem: "Mạng lưới cấp nước đô thị thường gặp phải tỷ lệ thất thoát nước sạch cao do sự biến động áp suất lớn. Vào các khung giờ thấp điểm khi người dân sử dụng ít nước (ví dụ như ban đêm), áp suất trong đường ống tăng cao đáng kể. Nếu không được chủ động điều chỉnh giảm áp, áp suất lớn này sẽ làm gia tăng nghiêm trọng lưu lượng nước thất thoát qua các vị trí rò rỉ hoặc khớp nối trên mạng lưới.",
      tools: "Vi điều khiển nhúng, Thiết kế PCB, Thuật toán điều khiển thủy lực, AutoCAD, Lắp ráp tủ điện, Thi công thực địa, Đào tạo bàn giao",
      impact: "Đảm nhận triển khai phần cứng trọn gói (End-to-End) bao gồm thiết kế mạch PCB, gia công lắp ráp tủ điện, thi công lắp đặt thực địa, hiệu chuẩn và bàn giao hướng dẫn khách hàng. Giữ áp suất đầu ra ổn định trong biên độ sai số chỉ ±0.2 bar trong tất cả các bài test áp lực. (Không bao gồm viết code phần mềm).",
      image: "/projects/Linear Pressure Reducing Valve Project.jpg",
      links: [
        { label: "Tài liệu kỹ thuật", url: "https://phat-portfolio.vercel.app" }
      ],
      process: [
        {
          step: 1,
          title: "Khảo sát và Lập phương án nâng cấp tuyến tính",
          desc: "Khảo sát hiện trạng trạm van giảm áp thủy lực cũ của khách hàng, lên phương án bản vẽ nâng cấp trạm sang hệ thống điều khiển tuyến tính thông minh.",
          image: "/projects/pressure-valve-control/Upgrade Customer Pressure Reducing Valve to Linear .jpg"
        },
        {
          step: 2,
          title: "Lắp ráp tủ điều khiển điện tại xưởng",
          desc: "Gia công cơ khí lắp ráp tủ điện điều khiển van tuyến tính tại xưởng, đấu nối các thiết bị bảo vệ chống sét, khối phân phối nguồn điện và thiết bị đầu cuối.",
          image: "/projects/pressure-valve-control/Linear pressure reducing valve Cabinet assemply at workshop.jpg"
        },
        {
          step: 3,
          title: "Lắp ráp & Hàn mạch PCB",
          desc: "Thực hiện hàn linh kiện và đấu nối dây dẫn trên bo mạch PCB có sẵn để hoàn thiện bộ điều khiển thu nhận tín hiệu cảm biến áp suất analog ổn định.",
          image: "/projects/pressure-valve-control/PCB hardware assembly.jpg"
        },
        {
          step: 4,
          title: "Thi công lắp đặt và Cấu hình thực địa",
          desc: "Thi công gá lắp tủ điều khiển tuyến tính tại trạm van cấp nước, hiệu chuẩn cảm biến đo áp suất đầu vào và đầu ra mạng lưới ống dẫn.",
          image: "/projects/pressure-valve-control/Contruction and Installation Linear Pressure Reducing Valve.jpg"
        },
        {
          step: 5,
          title: "Hướng dẫn kỹ thuật & Bàn giao sản phẩm",
          desc: "Trực tiếp hướng dẫn vận hành, chuyển giao công nghệ cho đội ngũ kỹ sư của khách hàng Lawaco nhằm đảm bảo quá trình bảo trì và vận hành trơn tru.",
          image: "/projects/pressure-valve-control/guiding lawaco customer using product.jpg"
        }
      ]
    }
  }
};

export default function ProjectDetail() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const [lang, setLang] = useState<"en" | "vi">("en");
  const [theme, setTheme] = useState<"light" | "dark">("light");

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

  const project = projectData[lang]?.[id as keyof typeof projectData["en"]];

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-[#09090b] dark:text-zinc-50 flex flex-col items-center justify-center font-sans space-y-6">
        <h1 className="text-3xl font-black uppercase">Project Not Found</h1>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-[#fef3c7] text-[#09090b] border-3 border-[#09090b] font-black uppercase shadow-[4px_4px_0px_0px_rgba(9,9,11,1)]"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-[#09090b] dark:text-zinc-50 font-sans transition-colors duration-300">
      
      {/* NAVBAR */}
      <div className="border-b-3 border-[#09090b] dark:border-white bg-[#eae6f8] dark:bg-zinc-900 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => router.push("/")} className="text-xl font-black uppercase tracking-tight flex items-center space-x-2 cursor-pointer bg-transparent border-0 text-[#09090b] dark:text-white">
            <span className="bg-[#fef3c7] dark:bg-yellow-600 border-2 border-[#09090b] dark:border-white px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(9,9,11,1)] text-xs">CVP</span>
            <span>Châu Vương Phát</span>
          </button>

          <div className="flex items-center space-x-4">
            {/* Lang toggle */}
            <div className="flex border-2 border-[#09090b] dark:border-white rounded-lg p-0.5 bg-white dark:bg-zinc-900 shadow-[2px_2px_0px_0px_rgba(9,9,11,1)]">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-0.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
                  lang === "en" ? "bg-[#eae6f8] text-[#09090b] border border-[#09090b]" : "text-zinc-500"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("vi")}
                className={`px-3 py-0.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
                  lang === "vi" ? "bg-[#eae6f8] text-[#09090b] border border-[#09090b]" : "text-zinc-500"
                }`}
              >
                VI
              </button>
            </div>

            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 border-2 border-[#09090b] dark:border-white rounded-lg bg-white dark:bg-zinc-800 text-[#09090b] dark:text-white shadow-[2px_2px_0px_0px_rgba(9,9,11,1)] cursor-pointer"
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
        </div>
      </div>

      {/* HEADER SECTION */}
      <section className="bg-[#eae6f8] dark:bg-zinc-900 border-b-3 border-[#09090b] dark:border-white py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <button
            onClick={() => router.push("/")}
            className="px-4 py-1.5 bg-white dark:bg-zinc-800 border-2 border-[#09090b] dark:border-white text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(9,9,11,1)] hover:translate-y-0.5 transition-all cursor-pointer"
          >
            ← {lang === "en" ? "Back Home" : "Về Trang Chủ"}
          </button>
          <span className="block text-xs font-black uppercase tracking-widest text-teal-600 dark:text-teal-400">
            {project.duration}
          </span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            {project.title}
          </h1>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        
        {/* Main Cover Image */}
        <div className="border-3 border-[#09090b] dark:border-white bg-[#dbeafe] dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(9,9,11,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.9)] relative aspect-video flex items-center justify-center">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <span className="font-black text-zinc-500 uppercase tracking-widest text-sm">Project Schematic Diagram</span>
          )}
        </div>

        {/* Roles, Context, Stack, Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#fce7f3] dark:bg-pink-950/60 border-2.5 border-[#09090b] dark:border-white p-6 rounded-xl shadow-[4px_4px_0px_0px_rgba(9,9,11,1)]">
            <h3 className="text-lg font-black uppercase tracking-tight text-teal-700 dark:text-teal-400 mb-2">
              {lang === "en" ? "My Role" : "Vai trò của tôi"}
            </h3>
            <p className="font-medium text-sm leading-relaxed">{project.role}</p>
          </div>

          <div className="bg-[#fef3c7] dark:bg-yellow-950/60 border-2.5 border-[#09090b] dark:border-white p-6 rounded-xl shadow-[4px_4px_0px_0px_rgba(9,9,11,1)]">
            <h3 className="text-lg font-black uppercase tracking-tight text-teal-700 dark:text-teal-400 mb-2">
              {lang === "en" ? "Tools & Tech Stack" : "Công cụ & Kỹ năng"}
            </h3>
            <p className="font-medium text-sm leading-relaxed">{project.tools}</p>
          </div>

          <div className="bg-white dark:bg-zinc-900 border-2.5 border-[#09090b] dark:border-white p-6 rounded-xl shadow-[4px_4px_0px_0px_rgba(9,9,11,1)] md:col-span-2">
            <h3 className="text-lg font-black uppercase tracking-tight text-teal-700 dark:text-teal-400 mb-2">
              {lang === "en" ? "Context & Problem" : "Bối cảnh & Vấn đề"}
            </h3>
            <p className="font-medium text-sm md:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">{project.problem}</p>
          </div>

          <div className="bg-[#d1fae5] dark:bg-emerald-950/60 border-2.5 border-[#09090b] dark:border-white p-6 rounded-xl shadow-[4px_4px_0px_0px_rgba(9,9,11,1)] md:col-span-2">
            <h3 className="text-lg font-black uppercase tracking-tight text-teal-700 dark:text-teal-400 mb-2">
              {lang === "en" ? "Results & Impact" : "Kết quả & Tác động"}
            </h3>
            <p className="font-medium text-sm md:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">{project.impact}</p>
          </div>
        </div>

        {/* WORK PROCESS TIMELINE SECTION */}
        <div className="space-y-8 pt-8">
          <h2 className="text-3xl font-black uppercase tracking-tight text-center">
            {lang === "en" ? "Working Process" : "Quá trình thực hiện"}
          </h2>
          <div className="border-t-3 border-dashed border-[#09090b] dark:border-white my-4"></div>

          <div className="space-y-12">
            {project.process.map((step, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-950 border-3 border-[#09090b] dark:border-white rounded-2xl p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(9,9,11,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)] flex flex-col md:flex-row gap-8 items-center"
              >
                {/* Step number badge & Info */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 rounded-full bg-[#eae6f8] dark:bg-zinc-800 border-2 border-[#09090b] dark:border-white flex items-center justify-center font-black text-xs">
                      {step.step}
                    </span>
                    <h4 className="text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-sm md:text-base font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Step Image frame / PDF Frame (Conditional) */}
                <div className="w-full md:w-96 h-64 bg-zinc-100 dark:bg-zinc-900 border-2 border-[#09090b] dark:border-white rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(9,9,11,1)] relative">
                  {step.image.endsWith(".pdf") ? (
                    <iframe
                      src={step.image}
                      className="w-full h-full border-0 rounded-lg"
                      title={step.title}
                    />
                  ) : (
                    <>
                      <img
                        src={step.image}
                        alt={step.title}
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                          const sibling = (e.target as HTMLElement).nextElementSibling as HTMLElement;
                          if (sibling) sibling.style.display = "block";
                        }}
                        className="w-full h-full object-cover"
                      />
                      
                      <div className="hidden text-center p-4 space-y-1 select-none">
                        <svg className="w-8 h-8 mx-auto text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div className="text-[10px] font-black uppercase text-zinc-500">
                          Step {step.step} Photo Slot
                        </div>
                        <div className="text-[9px] text-zinc-400 font-mono break-all px-2">
                          src: {step.image.substring(step.image.lastIndexOf("/") + 1)}
                        </div>
                      </div>
                    </>
                  )}
                  <div className="absolute top-2 right-2 text-[8px] font-mono text-zinc-400/40">STEP_{step.step}</div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Action Link Footer */}
        <div className="bg-white dark:bg-zinc-900 border-2.5 border-[#09090b] dark:border-white p-6 rounded-xl shadow-[4px_4px_0px_0px_rgba(9,9,11,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.9)]">
          <h3 className="text-lg font-black uppercase tracking-tight text-teal-700 dark:text-teal-400 mb-4">
            {lang === "en" ? "Project Links" : "Đường dẫn liên kết"}
          </h3>
          <div className="flex flex-wrap gap-4">
            {project.links.map((link, lIdx) => (
              <a
                key={lIdx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white border-2 border-[#09090b] dark:border-white font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(9,9,11,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t-3 border-[#09090b] dark:border-white bg-[#eae6f8] dark:bg-zinc-900 py-8 text-center text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
        <p>&copy; {new Date().getFullYear()} Châu Vương Phát • Project Case Study Detail</p>
      </footer>
    </div>
  );
}

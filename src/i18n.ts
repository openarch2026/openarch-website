import type { Lang } from './context'

export const AEC_FULL: Record<Lang, string> = {
  en: 'Architecture · Engineering · Construction',
  vi: 'Kiến trúc · Kỹ thuật · Xây dựng',
  zh: '建筑 · 工程 · 施工',
}

export const T = {
  brand: 'OPENARCH',

  nav: {
    services: { en: 'SERVICES', vi: 'DỊCH VỤ', zh: '服务' },
    ecosystem: { en: 'ECOSYSTEM', vi: 'HỆ SINH THÁI', zh: '生态' },
    capabilities: { en: 'CAPABILITIES', vi: 'NĂNG LỰC', zh: '能力' },
    mission: { en: 'MISSION', vi: 'SỨ MỆNH', zh: '使命' },
    cta: { en: 'BOOK A CONSULTATION', vi: 'ĐẶT LỊCH TƯ VẤN', zh: '预约咨询' },
    ctaShort: { en: 'CONSULT', vi: 'TƯ VẤN', zh: '咨询' },
  },

  hero: {
    eyebrow: {
      en: 'ARCHITECTURE · ENGINEERING · CONSTRUCTION — VIETNAM',
      vi: 'KIẾN TRÚC · KỸ THUẬT · XÂY DỰNG — VIỆT NAM',
      zh: '建筑 · 工程 · 施工 — 越南',
    },
    title1: 'OPEN',
    title2: 'ARCH',
    lead: {
      en: 'OpenArch connects AEC (Architecture, Engineering & Construction) expertise with technology development — helping enterprises build more effective workflows, apply AI in practice, and develop digital solutions tailored to their own platform.',
      vi: 'OpenArch kết nối kiến thức chuyên ngành AEC (Architecture — Kiến trúc, Engineering — Kỹ thuật & Construction — Xây dựng) với năng lực phát triển công nghệ, giúp doanh nghiệp xây dựng quy trình làm việc hiệu quả hơn, ứng dụng AI thực tiễn và phát triển giải pháp số phù hợp với nền tảng riêng của mình.',
      zh: 'OpenArch 将 AEC（建筑 Architecture、工程 Engineering、施工 Construction）专业知识与技术开发能力相连接，帮助企业构建更高效的工作流程、切实应用 AI，并开发适合自身平台的数字化解决方案。',
    },
    tagline: {
      en: 'Expert. Resource. Solution.',
      vi: 'Chuyên gia. Tài nguyên. Giải pháp.',
      zh: '专家. 资源. 方案.',
    },
    notes: {
      en: [
        'Not locked into a single software — open-source first',
        'Solutions built on your real business operations',
        'Long-term partnership after delivery',
      ],
      vi: [
        'Không giới hạn vào một phần mềm — ưu tiên Open Source',
        'Giải pháp dựa trên nghiệp vụ thực tế của doanh nghiệp',
        'Đồng hành lâu dài sau triển khai và bàn giao',
      ],
      zh: ['不绑定单一软件 — 优先开源方案', '基于企业真实业务需求构建方案', '交付后长期伴随支持'],
    },
    caps: {
      en: ['AI-DRIVEN DESIGN', 'DATA-INFORMED DECISIONS', 'BIM & DIGITAL WORKFLOW', 'SMART CONSTRUCTION'],
      vi: ['THIẾT KẾ DẪN DẮT BỞI AI', 'QUYẾT ĐỊNH DỰA TRÊN DỮ LIỆU', 'BIM & QUY TRÌNH SỐ', 'XÂY DỰNG THÔNG MINH'],
      zh: ['AI 驱动设计', '数据驱动决策', 'BIM 与数字化流程', '智能建造'],
    },
    site: 'WWW.OPENARCH.VN',
  },

  marquee: {
    en: ['OpenArch', 'Expert', 'Resource', 'Solution', 'BIM', 'AI Assistant', 'Open Source', 'Digital Workflow'],
    vi: ['OpenArch', 'Chuyên gia', 'Tài nguyên', 'Giải pháp', 'BIM', 'AI Assistant', 'Open Source', 'Quy trình số'],
    zh: ['OpenArch', '专家', '资源', '方案', 'BIM', 'AI 助手', '开源', '数字化流程'],
  },

  mission: {
    label: { en: '01 — MISSION', vi: '01 — SỨ MỆNH', zh: '01 — 使命' },
    headingA: {
      en: 'Applying technology to construction —',
      vi: 'Ứng dụng công nghệ vào ngành xây dựng —',
      zh: '将技术应用于建造行业 —',
    },
    headingB: {
      en: 'starting from real business problems, not from imposed software.',
      vi: 'bắt đầu từ bài toán nghiệp vụ thực tế, không áp đặt một phần mềm cố định.',
      zh: '从真实的业务问题出发，而非强行套用固定软件。',
    },
    body: {
      en: 'From training, workflow standardization and tool selection to plugin development, AI or internal management systems — OpenArch always starts from real business problems instead of imposing a fixed software. We believe sustainable digital transformation only comes from combining industry expertise with technology capability.',
      vi: 'Từ đào tạo, chuẩn hóa quy trình, lựa chọn công cụ cho đến phát triển plugin, AI hay hệ thống quản lý nội bộ — OpenArch luôn bắt đầu từ bài toán nghiệp vụ thực tế thay vì áp đặt một phần mềm cố định. Chúng tôi tin rằng chuyển đổi số bền vững chỉ đến từ sự kết hợp giữa chuyên môn ngành và năng lực công nghệ.',
      zh: '从培训、流程标准化、工具选型，到插件开发、AI 应用或内部管理系统 — OpenArch 始终从真实业务问题出发，而不是强行套用固定软件。我们相信，只有将行业专业与技术能力相结合，才能实现可持续的数字化转型。',
    },
    caption: {
      en: 'Bridging traditional construction with AI-driven design',
      vi: 'Kết nối xây dựng truyền thống với thiết kế dẫn dắt bởi AI',
      zh: '连接传统建造与 AI 驱动设计',
    },
  },

  services: {
    label: { en: '02 — CORE SERVICES', vi: '02 — DỊCH VỤ CHÍNH', zh: '02 — 核心服务' },
    headingA: {
      en: 'Core services',
      vi: 'Dịch vụ chính',
      zh: '核心服务',
    },
    headingB: { en: ' now deploying', vi: ' đang triển khai', zh: ' 正在部署' },
    detail: { en: 'DETAILS →', vi: 'CHI TIẾT →', zh: '详情 →' },
    status: { en: 'NOW DEPLOYING', vi: 'ĐANG TRIỂN KHAI', zh: '正在部署' },
    back: { en: '← BACK TO SERVICES', vi: '← QUAY LẠI DANH MỤC DỊCH VỤ', zh: '← 返回服务列表' },
    notFound: { en: 'Service not found.', vi: 'Không tìm thấy dịch vụ.', zh: '未找到该服务。' },
    home: { en: '← BACK TO HOME', vi: '← TRỞ VỀ TRANG CHỦ', zh: '← 返回首页' },
    items: {
      'expert-network': {
        name: { en: 'EXPERT NETWORK', vi: 'EXPERT NETWORK', zh: 'EXPERT NETWORK' },
        desc: {
          en: 'AEC expert network',
          vi: 'Mạng lưới Chuyên gia ngành AEC',
          zh: 'AEC 行业专家网络',
        },
        articleTitle: {
          en: 'Connecting enterprises with experts who have real AEC deployment experience',
          vi: 'Kết nối doanh nghiệp với chuyên gia đã triển khai thực tế trong ngành AEC',
          zh: '连接企业与拥有 AEC 实战经验的专家',
        },
        paragraphs: {
          en: [
            'Expert Network connects enterprises with experts who have hands-on deployment experience across the AEC industry (Architecture, Engineering & Construction) — BIM, Revit, Rhino, Blender, Grasshopper, AI, Automation, BIM Standards, ISO 19650, Project Management and Digital Construction.',
            'Instead of searching blindly, your needs are matched with the right expert who has solved similar problems: from design consulting and engineering consulting to project management and workflow standardization.',
            'Every connection comes with a roadmap tailored to your company size — starting from real operational problems, never imposing off-the-shelf software.',
          ],
          vi: [
            'Expert Network kết nối doanh nghiệp với mạng lưới chuyên gia đã có kinh nghiệm triển khai trong ngành AEC (Architecture — Kiến trúc, Engineering — Kỹ thuật, Construction — Xây dựng) — BIM, Revit, Rhino, Blender, Grasshopper, AI, Automation, BIM Standard, ISO 19650, Project Management và Digital Construction.',
            'Thay vì tìm kiếm rờ rạm, doanh nghiệp được đối chiếu nhu cầu với đúng chuyên gia có kinh nghiệm xử lý bài toán tương tự: từ tư vấn thiết kế, tư vấn kỹ thuật đến quản lý dự án và chuẩn hóa quy trình.',
            'Mỗi kết nối đều đi kèm lộ trình đề xuất phù hợp với quy mô doanh nghiệp — bắt đầu từ bài toán vận hành thực tế, không áp đặt phần mềm có sẵn.',
          ],
          zh: [
            'Expert Network 连接企业与在 AEC 行业（建筑、工程、施工）拥有实战部署经验的专家 — BIM、Revit、Rhino、Blender、Grasshopper、AI、自动化、BIM 标准、ISO 19650、项目管理与数字建造。',
            '您无需盲目搜寻，我们会根据需求匹配曾解决过类似问题的专家：从设计咨询、工程咨询，到项目管理与流程标准化。',
            '每次对接都会根据企业规模提供量身定制的路线图 — 从真实运营问题出发，绝不强行套用现成软件。',
          ],
        },
        cta: { en: 'Book a consultation', vi: 'Đặt lịch tư vấn', zh: '预约咨询' },
      },
      'resource-hub': {
        name: { en: 'RESOURCE HUB', vi: 'RESOURCE HUB', zh: 'RESOURCE HUB' },
        desc: {
          en: 'Shared digital resource center',
          vi: 'Trung tâm Tài nguyên số dùng chung',
          zh: '共享数字资源中心',
        },
        articleTitle: {
          en: 'One place for the entire design and construction workflow',
          vi: 'Một nơi duy nhất cho toàn bộ quy trình thiết kế và thi công',
          zh: '设计与施工全流程的一站式资源库',
        },
        paragraphs: {
          en: [
            'Resource Hub is a shared digital library for the AEC industry: Software, Plugins, Mini Tools, Digital Assets, 3D Models, Families, Materials, CAD Blocks, Templates, Scripts, Workflows, Prompt Libraries and a Knowledge Base.',
            'All resources are standardized and organized around real business workflows, helping design and construction teams look up, reuse and synchronize data across multiple software and platforms.',
            'Instead of rebuilding a library from scratch for every project, your enterprise builds consistent digital assets that scale across all projects.',
          ],
          vi: [
            'Resource Hub là thư viện tài nguyên số dùng chung cho ngành AEC: Software, Plugin, Mini Tools, Digital Assets, 3D Models, Families, Materials, CAD Blocks, Templates, Scripts, Workflow, Prompt Library và Knowledge Base.',
            'Toàn bộ tài nguyên được chuẩn hóa và tổ chức theo quy trình nghiệp vụ thực tế, giúp đội ngũ thiết kế và thi công tra cứu, tái sử dụng và đồng bộ dữ liệu trên nhiều phần mềm và nền tảng.',
            'Thay vì mỗi dự án một thư viện rồi lại bắt đầu từ con số không, doanh nghiệp xây dựng được tài sản số nhất quán, dễ nhân rộng cho toàn bộ dự án.',
          ],
          zh: [
            'Resource Hub 是面向 AEC 行业的共享数字资源库：软件、插件、小工具、数字资产、3D 模型、族库、材质、CAD 图块、模板、脚本、工作流、提示词库与知识库。',
            '所有资源均围绕真实业务流程进行标准化与组织，帮助设计与施工团队跨软件、跨平台检索、复用并同步数据。',
            '企业无需每个项目从零重建资源库，而是积累可扩展至所有项目的一致性数字资产。',
          ],
        },
        cta: { en: 'Explore resources', vi: 'Khám phá tài nguyên', zh: '探索资源' },
      },
      'solution-development': {
        name: { en: 'SOLUTION DEVELOPMENT', vi: 'SOLUTION DEVELOPMENT', zh: 'SOLUTION DEVELOPMENT' },
        desc: {
          en: 'Custom solution development',
          vi: 'Phát triển Giải pháp theo yêu cầu',
          zh: '按需定制方案开发',
        },
        articleTitle: {
          en: 'Solutions developed around your exact business needs',
          vi: 'Phát triển giải pháp theo đúng nhu cầu doanh nghiệp',
          zh: '围绕企业真实需求开发解决方案',
        },
        paragraphs: {
          en: [
            'Solution Development builds plugins, add-ons, internal AI assistants, software and web apps tailored to your enterprise — extending the software you already use instead of replacing it.',
            'From BIM workflow standardization, automating repetitive tasks, standardizing data and digital libraries, to consulting and deploying AI systems into your team’s real daily work — not just experiments.',
            'OpenArch favors open-source solutions and open integrations, ensuring you never depend on a single platform and can keep improving after handover.',
          ],
          vi: [
            'Solution Development phát triển plugin, addon, AI Assistant nội bộ, phần mềm và web app theo đúng yêu cầu riêng của doanh nghiệp — mở rộng phần mềm bạn đang dùng thay vì thay thế nó.',
            'Từ chuẩn hóa quy trình BIM, tự động hóa công việc lặp lại, chuẩn hóa dữ liệu và thư viện số, đến tư vấn và triển khai hệ thống AI vào công việc thực tế của đội ngũ — không chỉ dừng ở thử nghiệm.',
            'OpenArch ưu tiên các giải pháp mã nguồn mở và tích hợp mở, đảm bảo doanh nghiệp không phụ thuộc vào một nền tảng duy nhất và tiếp tục cải tiến sau khi bàn giao.',
          ],
          zh: [
            'Solution Development 按企业具体需求开发插件、扩展、内部 AI 助手、软件与 Web 应用 — 在您现有软件基础上扩展，而非推倒重来。',
            '从 BIM 流程标准化、重复工作自动化、数据与数字资源库标准化，到将 AI 系统真正落地到团队日常工作中 — 而不仅仅是试验。',
            'OpenArch 优先采用开源方案与开放集成，确保企业不被单一平台绑定，并在交付后持续迭代优化。',
          ],
        },
        cta: { en: 'Discuss your needs', vi: 'Trao đổi nhu cầu', zh: '洽谈需求' },
      },
      'training-consulting': {
        name: { en: 'TRAINING & CONSULTING', vi: 'TRAINING & CONSULTING', zh: 'TRAINING & CONSULTING' },
        desc: {
          en: 'Experts · Training · Consulting',
          vi: 'Chuyên gia · Đào tạo · Tư vấn',
          zh: '专家 · 培训 · 咨询',
        },
        articleTitle: {
          en: 'From training to operation — industry experts alongside your technology team',
          vi: 'Đồng hành từ đào tạo đến vận hành — chuyên gia ngành đi cùng đội ngũ công nghệ',
          zh: '从培训到运营全程伴随 — 行业专家与技术团队同行',
        },
        paragraphs: {
          en: [
            'OpenArch combines construction industry experts with a technology development team, accompanying enterprises from training and workflow standardization to choosing the right tools for each role: design consultants, contractors, developers, manufacturers and training institutions.',
            'Training programs are designed around each team’s real operations, turning digital-transformation knowledge into daily practice instead of staying in the classroom.',
            'Not sure where to start? Talk directly with the OpenArch team for advice specific to your enterprise.',
          ],
          vi: [
            'OpenArch kết hợp chuyên gia ngành xây dựng với đội ngũ phát triển công nghệ, đồng hành cùng doanh nghiệp từ khâu đào tạo, chuẩn hóa quy trình đến lựa chọn công cụ phù hợp với từng vai trò: tư vấn thiết kế, nhà thầu thi công, chủ đầu tư, nhà sản xuất và cơ sở đào tạo.',
            'Chương trình đào tạo được thiết kế theo nghiệp vụ thực tế của từng đội ngũ, giúp kiến thức chuyển đổi số đi vào vận hành hằng ngày thay vì dừng lại ở lớp học.',
            'Chưa chắc bắt đầu từ đâu? Liên hệ trực tiếp với đội ngũ OpenArch để được tư vấn cụ thể cho doanh nghiệp của bạn.',
          ],
          zh: [
            'OpenArch 将建筑行业专家与技术开发团队相结合，从培训、流程标准化到针对不同角色（设计咨询、施工单位、业主方、制造商与培训机构）的工具选型，全程伴随企业。',
            '培训项目围绕各团队真实业务设计，让数字化知识真正融入日常运营，而不是停留在课堂。',
            '不确定从哪里开始？直接与 OpenArch 团队沟通，获得针对您企业的具体建议。',
          ],
        },
        cta: { en: 'Book a consultation', vi: 'Đặt lịch tư vấn', zh: '预约咨询' },
      },
    } as Record<string, {
      name: Record<Lang, string>
      desc: Record<Lang, string>
      articleTitle: Record<Lang, string>
      paragraphs: Record<Lang, string[]>
      cta: Record<Lang, string>
    }>,
  },

  ecosystem: {
    label: { en: '03 — ECOSYSTEM', vi: '03 — HỆ SINH THÁI', zh: '03 — 生态' },
    headingA: {
      en: 'Working alongside many roles ',
      vi: 'Đồng hành cùng nhiều vai trò ',
      zh: '与行业中的多种角色 ',
    },
    headingB: { en: 'across the AEC industry.', vi: 'trong ngành AEC.', zh: '并肩同行。' },
    body: {
      en: 'From design firms to contractors, developers and training institutions — OpenArch connects experts across fields with a technology team to create solutions that fit each enterprise (AEC = Architecture, Engineering & Construction).',
      vi: 'Từ đơn vị thiết kế đến nhà thầu, chủ đầu tư và đơn vị đào tạo — OpenArch kết nối chuyên gia nhiều lĩnh vực với đội ngũ phát triển công nghệ để tạo ra giải pháp phù hợp với đặc thù từng doanh nghiệp (AEC = Architecture — Kiến trúc, Engineering — Kỹ thuật, Construction — Xây dựng).',
      zh: '从设计单位到施工方、业主与培训机构 — OpenArch 将各领域专家与技术团队相连接，为每家企业打造合适的解决方案（AEC = 建筑、工程、施工）。',
    },
    groups: {
      en: [
        { title: 'Design & Consulting', items: ['Design consultants', 'Engineering consultants', 'Project management consultants'] },
        { title: 'Construction & Operation', items: ['Contractors', 'Owners / Developers', 'Manufacturers', 'Suppliers'] },
        { title: 'Technology & Training', items: ['Construction-tech startups', 'Training institutions', 'Government agencies'] },
      ],
      vi: [
        { title: 'Thiết kế & Tư vấn', items: ['Tư vấn thiết kế', 'Tư vấn kỹ thuật', 'Tư vấn quản lý dự án'] },
        { title: 'Thi công & Vận hành', items: ['Nhà thầu thi công', 'Chủ đầu tư / Nhà phát triển', 'Nhà sản xuất', 'Nhà cung cấp'] },
        { title: 'Công nghệ & Đào tạo', items: ['Startup công nghệ xây dựng', 'Cơ sở đào tạo', 'Cơ quan nhà nước'] },
      ],
      zh: [
        { title: '设计与咨询', items: ['设计咨询', '工程咨询', '项目管理咨询'] },
        { title: '施工与运营', items: ['施工单位', '业主 / 开发商', '制造商', '供应商'] },
        { title: '科技与培训', items: ['建筑科技初创', '培训机构', '政府机构'] },
      ],
    },
  },

  gallery: {
    label: { en: '04 — CAPABILITIES', vi: '04 — NĂNG LỰC TRIỂN KHAI', zh: '04 — 实施能力' },
    headingA: {
      en: 'From workflow standardization to ',
      vi: 'Từ chuẩn hóa quy trình đến ',
      zh: '从流程标准化到',
    },
    headingB: { en: 'digital solution development.', vi: 'phát triển giải pháp số.', zh: '数字化方案开发。' },
    items: {
      en: ['BIM WORKFLOW STANDARDIZATION', 'AUTOMATION & PLUGINS', 'INTERNAL AI ASSISTANT', 'DATA & DIGITAL LIBRARIES'],
      vi: ['CHUẨN HÓA QUY TRÌNH BIM', 'TỰ ĐỘNG HÓA & PLUGIN', 'AI ASSISTANT NỘI BỘ', 'DỮ LIỆU & THƯ VIỆN SỐ'],
      zh: ['BIM 流程标准化', '自动化与插件', '内部 AI 助手', '数据与数字资源库'],
    },
  },

  cta: {
    label: { en: '05 — GET STARTED', vi: '05 — BẮT ĐẦU', zh: '05 — 开始' },
    headingA: { en: 'Start from your own ', vi: 'Hãy bắt đầu từ bài toán ', zh: '从您企业自身的 ' },
    headingB: { en: 'business problem.', vi: 'của doanh nghiệp.', zh: '业务问题开始。' },
    body: {
      en: 'Whether you want to standardize BIM workflows, build a digital library, develop plugins, apply AI or deploy a new management system — OpenArch will analyze your current state and propose a fitting roadmap.',
      vi: 'Dù bạn muốn chuẩn hóa quy trình BIM, xây dựng thư viện số, phát triển plugin, ứng dụng AI hay triển khai một hệ thống quản lý mới — OpenArch sẽ cùng bạn phân tích hiện trạng và đề xuất lộ trình phù hợp.',
      zh: '无论您希望标准化 BIM 流程、建设数字资源库、开发插件、应用 AI，还是部署新的管理系统 — OpenArch 都将与您一起分析现状并提出合适的发展路线图。',
    },
    button: { en: 'BOOK A CONSULTATION', vi: 'ĐẶT LỊCH TƯ VẤN', zh: '预约咨询' },
    benefits: {
      en: ['MORE EFFECTIVE WORKFLOWS', 'STANDARDIZED DATA', 'TASK AUTOMATION', 'AI IN REAL WORK'],
      vi: ['QUY TRÌNH HIỆU QUẢ HƠN', 'DỮ LIỆU CHUẨN HÓA', 'TỰ ĐỘNG HÓA TÁC VỤ', 'AI VÀO VIỆC THỰC TẾ'],
      zh: ['更高效的工作流程', '标准化数据', '任务自动化', 'AI 落地实际工作'],
    },
    phone1: { en: 'WHATSAPP / ZALO', vi: 'WHATSAPP / ZALO', zh: 'WHATSAPP / ZALO' },
    phone2: { en: 'ZALO', vi: 'ZALO', zh: 'ZALO' },
  },

  footer: {
    tagline: {
      en: 'The digital transformation platform for Architecture, Engineering & Construction (AEC). Connecting AEC expertise with technology capability.',
      vi: 'Nền tảng chuyển đổi số cho ngành Kiến trúc, Kỹ thuật và Xây dựng (AEC). Kết nối chuyên môn AEC với năng lực công nghệ.',
      zh: '面向建筑、工程与施工（AEC）行业的数字化转型平台，连接 AEC 专业能力与技术实力。',
    },
    services: { en: 'SERVICES', vi: 'DỊCH VỤ', zh: '服务' },
    contact: { en: 'CONTACT', vi: 'LIÊN HỆ', zh: '联系方式' },
    legal: { en: 'LEGAL', vi: 'PHÁP LÝ', zh: '法律' },
    policy: { en: 'Policy', vi: 'Chính sách', zh: '隐私政策' },
    terms: { en: 'Terms', vi: 'Điều khoản', zh: '使用条款' },
    copyright: {
      en: '© 2026 OpenArch. Digital transformation for the AEC industry.',
      vi: '© 2026 OpenArch. Chuyển đổi số ngành AEC.',
      zh: '© 2026 OpenArch. AEC 行业数字化转型。',
    },
    status: 'EXPERT NETWORK · RESOURCE HUB · SOLUTION DEVELOPMENT',
  },

  modal: {
    title: { en: 'Book a Consultation', vi: 'Đặt lịch tư vấn', zh: '预约咨询' },
    name: { en: 'Full name', vi: 'Họ và tên', zh: '姓名' },
    email: { en: 'Email', vi: 'Email', zh: '邮箱' },
    phone: { en: 'Phone', vi: 'Số điện thoại', zh: '电话' },
    message: { en: 'What do you need help with?', vi: 'Nội dung cần tư vấn', zh: '咨询内容' },
    submit: { en: 'SEND', vi: 'GỬI', zh: '发送' },
    note: {
      en: 'We will get back to you at info@openarch.vn',
      vi: 'Chúng tôi sẽ phản hồi qua email info@openarch.vn',
      zh: '我们将通过 info@openarch.vn 与您联系',
    },
    close: { en: 'Close', vi: 'Đóng', zh: '关闭' },
    sending: { en: 'Sending…', vi: 'Đang gửi…', zh: '发送中…' },
    sent: {
      en: 'Thank you. We will get back to you soon.',
      vi: 'Cảm ơn bạn. Chúng tôi sẽ liên hệ lại sớm nhất.',
      zh: '感谢您的咨询，我们会尽快与您联系。',
    },
    error: {
      en: 'Something went wrong. Please try again.',
      vi: 'Có lỗi xảy ra, vui lòng thử lại.',
      zh: '发生错误，请重试。',
    },
  },

  meta: {
    title: {
      en: 'OpenArch — Digital transformation for Architecture, Engineering & Construction',
      vi: 'OpenArch — Nền tảng chuyển đổi số cho ngành Kiến trúc, Kỹ thuật và Xây dựng',
      zh: 'OpenArch — 建筑、工程与施工行业数字化转型平台',
    },
    description: {
      en: 'OpenArch connects AEC (Architecture, Engineering & Construction) expertise with technology development: Expert Network, Resource Hub and Solution Development — helping construction, architecture and engineering enterprises transform digitally.',
      vi: 'OpenArch kết nối kiến thức chuyên ngành AEC (Kiến trúc, Kỹ thuật, Xây dựng) với năng lực phát triển công nghệ: Expert Network, Resource Hub và Solution Development — giúp doanh nghiệp xây dựng, kiến trúc, kỹ thuật chuyển đổi số hiệu quả hơn.',
      zh: 'OpenArch 将 AEC（建筑、工程、施工）专业知识与技术开发能力相连接：专家网络、资源中心与方案开发 — 帮助建筑、工程与施工企业更高效地实现数字化转型。',
    },
  },
} as const

export const CONTACT = {
  email: 'info@openarch.vn',
  phone1: '(+84) 939 460 468',
  phone1Intl: '+84939460468',
  phone2: '(+84) 918 099 336',
  phone2Intl: '+84918099336',
}

export const SERVICE_SLUGS = ['expert-network', 'resource-hub', 'solution-development', 'training-consulting'] as const

export const SERVICE_META: Record<(typeof SERVICE_SLUGS)[number], { code: string; image: string; mailSubject: Record<Lang, string> }> = {
  'expert-network': {
    code: 'OA-01',
    image: '/images/facility-expert-network.jpg',
    mailSubject: { en: 'Expert Network consultation', vi: 'Tư vấn Expert Network', zh: 'Expert Network 咨询' },
  },
  'resource-hub': {
    code: 'OA-02',
    image: '/images/facility-resource-hub.jpg',
    mailSubject: { en: 'Resource Hub consultation', vi: 'Tư vấn Resource Hub', zh: 'Resource Hub 咨询' },
  },
  'solution-development': {
    code: 'OA-03',
    image: '/images/facility-solution-dev.jpg',
    mailSubject: { en: 'Solution Development consultation', vi: 'Tư vấn Solution Development', zh: 'Solution Development 咨询' },
  },
  'training-consulting': {
    code: 'OA-04',
    image: '/images/facility-consulting.jpg',
    mailSubject: { en: 'Training consultation', vi: 'Tư vấn Đào tạo', zh: '培训咨询' },
  },
}

export const GALLERY_IMAGES = [
  '/images/archive-bim.jpg',
  '/images/archive-automation.jpg',
  '/images/archive-ai.jpg',
  '/images/archive-library.jpg',
]

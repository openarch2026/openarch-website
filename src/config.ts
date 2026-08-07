export interface SiteConfig {
  language: string
  siteTitle: string
  siteDescription: string
}

export interface NavigationLink {
  label: string
  href: string
}

export interface NavigationConfig {
  brandName: string
  links: NavigationLink[]
}

export interface HeroConfig {
  eyebrow: string
  titleLines: string[]
  leadText: string
  supportingNotes: string[]
}

export interface ManifestoConfig {
  videoPath: string
  text: string
}

export interface FacilityArticle {
  title: string
  paragraphs: string[]
}

export interface FacilityItem {
  slug: string
  name: string
  code: string
  address: string
  status: string
  email: string
  phone: string
  ctaText: string
  ctaHref: string
  image: string
  utcOffset: number
  article: FacilityArticle
}

export interface FacilitiesConfig {
  sectionLabel: string
  detailBackText: string
  detailNotFoundText: string
  detailReturnText: string
  items: FacilityItem[]
}

export interface ObservationConfig {
  sectionLabel: string
  videoPath: string
  statusText: string
  latLabel: string
  lonLabel: string
  initialLat: number
  initialLon: number
}

export interface ArchiveItem {
  src: string
  label: string
}

export interface ArchivesConfig {
  sectionLabel: string
  vaultTitle: string
  closeText: string
  items: ArchiveItem[]
}

export interface FooterConfig {
  copyrightText: string
  statusText: string
}

export const siteConfig: SiteConfig = {
  language: "vi",
  siteTitle: "OpenArch — Nền tảng chuyển đổi số cho ngành Kiến trúc, Kỹ thuật và Xây dựng",
  siteDescription:
    "OpenArch kết nối kiến thức chuyên ngành AEC với năng lực phát triển công nghệ: Expert Network, Resource Hub và Solution Development — giúp doanh nghiệp xây dựng, kiến trúc, kỹ thuật chuyển đổi số hiệu quả hơn.",
}

export const navigationConfig: NavigationConfig = {
  brandName: "OPENARCH",
  links: [
    { label: "Dịch vụ", href: "#facilities" },
    { label: "Hệ sinh thái", href: "#ecosystem" },
    { label: "Tài nguyên", href: "#archives" },
    { label: "Sứ mệnh", href: "#manifesto" },
  ],
}

export const heroConfig: HeroConfig = {
  eyebrow: "KIẾN TRÚC · KỸ THUẬT · XÂY DỰNG — VIỆT NAM",
  titleLines: ["CHUYỂN ĐỔI SỐ", "NGÀNH AEC"],
  leadText:
    "OpenArch kết nối kiến thức chuyên ngành AEC với năng lực phát triển công nghệ, giúp doanh nghiệp xây dựng quy trình làm việc hiệu quả hơn, ứng dụng AI thực tiễn và phát triển giải pháp số phù hợp với nền tảng riêng của mình.",
  supportingNotes: [
    "Không giới hạn vào một phần mềm — ưu tiên Open Source",
    "Giải pháp dựa trên nghiệp vụ thực tế của doanh nghiệp",
    "Đồng hành lâu dài sau triển khai và bàn giao",
  ],
}

export const manifestoConfig: ManifestoConfig = {
  videoPath: "/videos/manifesto.mp4",
  text: "Ứng dụng công nghệ vào ngành xây dựng. Từ đào tạo, chuẩn hóa quy trình, lựa chọn công cụ cho đến phát triển plugin, AI hay hệ thống quản lý nội bộ — OpenArch luôn bắt đầu từ bài toán nghiệp vụ thực tế thay vì áp đặt một phần mềm cố định. Chúng tôi tin rằng chuyển đổi số bền vững chỉ đến từ sự kết hợp giữa chuyên môn ngành và năng lực công nghệ.",
}

export const facilitiesConfig: FacilitiesConfig = {
  sectionLabel: "01 · DỊCH VỤ CHÍNH",
  detailBackText: "← Quay lại danh mục dịch vụ",
  detailNotFoundText: "Không tìm thấy dịch vụ.",
  detailReturnText: "← Trở về trang chủ",
  items: [
    {
      slug: "expert-network",
      name: "EXPERT NETWORK",
      code: "OA-01",
      address: "Mạng lưới Chuyên gia ngành AEC",
      status: "ĐANG TRIỂN KHAI",
      email: "info@openarch.vn",
      phone: "0939 460 468",
      ctaText: "Đặt lịch tư vấn",
      ctaHref: "mailto:info@openarch.vn?subject=T%C6%B0%20v%E1%BA%A5n%20Expert%20Network",
      image: "/images/facility-expert-network.jpg",
      utcOffset: 7,
      article: {
        title: "Kết nối doanh nghiệp với chuyên gia đã triển khai thực tế trong ngành AEC",
        paragraphs: [
          "Expert Network kết nối doanh nghiệp với mạng lưới chuyên gia đã có kinh nghiệm triển khai trong ngành AEC — BIM, Revit, Rhino, Blender, Grasshopper, AI, Automation, BIM Standard, ISO 19650, Project Management và Digital Construction.",
          "Thay vì tìm kiếm rờ rạm, doanh nghiệp được đối chiếu nhu cầu với đúng chuyên gia có kinh nghiệm xử lý bài toán tương tự: từ tư vấn thiết kế, tư vấn kỹ thuật đến quản lý dự án và chuẩn hóa quy trình.",
          "Mỗi kết nối đều đi kèm lộ trình đề xuất phù hợp với quy mô doanh nghiệp — bắt đầu từ bài toán vận hành thực tế, không áp đặt phần mềm có sẵn.",
        ],
      },
    },
    {
      slug: "resource-hub",
      name: "RESOURCE HUB",
      code: "OA-02",
      address: "Trung tâm Tài nguyên số dùng chung",
      status: "ĐANG TRIỂN KHAI",
      email: "info@openarch.vn",
      phone: "0939 460 468",
      ctaText: "Khám phá tài nguyên",
      ctaHref: "mailto:info@openarch.vn?subject=T%C6%B0%20v%E1%BA%A5n%20Resource%20Hub",
      image: "/images/facility-resource-hub.jpg",
      utcOffset: 7,
      article: {
        title: "Một nơi duy nhất cho toàn bộ quy trình thiết kế và thi công",
        paragraphs: [
          "Resource Hub là thư viện tài nguyên số dùng chung cho ngành AEC: Software, Plugin, Mini Tools, Digital Assets, 3D Models, Families, Materials, CAD Blocks, Templates, Scripts, Workflow, Prompt Library và Knowledge Base.",
          "Toàn bộ tài nguyên được chuẩn hóa và tổ chức theo quy trình nghiệp vụ thực tế, giúp đội ngũ thiết kế và thi công tra cứu, tái sử dụng và đồng bộ dữ liệu trên nhiều phần mềm và nền tảng.",
          "Thay vì mỗi dự án một thư viện rồi lại bắt đầu từ con số không, doanh nghiệp xây dựng được tài sản số nhất quán, dễ nhân rộng cho toàn bộ dự án.",
        ],
      },
    },
    {
      slug: "solution-development",
      name: "SOLUTION DEVELOPMENT",
      code: "OA-03",
      address: "Phát triển Giải pháp theo yêu cầu",
      status: "ĐANG TRIỂN KHAI",
      email: "info@openarch.vn",
      phone: "0939 460 468",
      ctaText: "Trao đổi nhu cầu",
      ctaHref: "mailto:info@openarch.vn?subject=T%C6%B0%20v%E1%BA%A5n%20Solution%20Development",
      image: "/images/facility-solution-dev.jpg",
      utcOffset: 7,
      article: {
        title: "Phát triển giải pháp theo đúng nhu cầu doanh nghiệp",
        paragraphs: [
          "Solution Development phát triển plugin, addon, AI Assistant nội bộ, phần mềm và web app theo đúng yêu cầu riêng của doanh nghiệp — mở rộng phần mềm bạn đang dùng thay vì thay thế nó.",
          "Từ chuẩn hóa quy trình BIM, tự động hóa công việc lặp lại, chuẩn hóa dữ liệu và thư viện số, đến tư vấn và triển khai hệ thống AI vào công việc thực tế của đội ngũ — không chỉ dừng ở thử nghiệm.",
          "OpenArch ưu tiên các giải pháp mã nguồn mở và tích hợp mở, đảm bảo doanh nghiệp không phụ thuộc vào một nền tảng duy nhất và tiếp tục cải tiến sau khi bàn giao.",
        ],
      },
    },
    {
      slug: "training-consulting",
      name: "TRAINING & CONSULTING",
      code: "OA-04",
      address: "Chuyên gia · Đào tạo · Tư vấn",
      status: "ĐANG TRIỂN KHAI",
      email: "info@openarch.vn",
      phone: "0939 460 468",
      ctaText: "Đặt lịch tư vấn",
      ctaHref: "mailto:info@openarch.vn?subject=T%C6%B0%20v%E1%BA%A5n%20%C4%90%C3%A0o%20t%E1%BA%A1o",
      image: "/images/facility-consulting.jpg",
      utcOffset: 7,
      article: {
        title: "Đồng hành từ đào tạo đến vận hành — chuyên gia ngành đi cùng đội ngũ công nghệ",
        paragraphs: [
          "OpenArch kết hợp chuyên gia ngành xây dựng với đội ngũ phát triển công nghệ, đồng hành cùng doanh nghiệp từ khâu đào tạo, chuẩn hóa quy trình đến lựa chọn công cụ phù hợp với từng vai trò: tư vấn thiết kế, nhà thầu thi công, chủ đầu tư, nhà sản xuất và cơ sở đào tạo.",
          "Chương trình đào tạo được thiết kế theo nghiệp vụ thực tế của từng đội ngũ, giúp kiến thức chuyển đổi số đi vào vận hành hằng ngày thay vì dừng lại ở lớp học.",
          "Chưa chắc bắt đầu từ đâu? Liên hệ trực tiếp với đội ngũ OpenArch để được tư vấn cụ thể cho doanh nghiệp của bạn.",
        ],
      },
    },
  ],
}

export const observationConfig: ObservationConfig = {
  sectionLabel: "02 · HỆ SINH THÁI OPENARCH",
  videoPath: "/videos/observation.mp4",
  statusText: "CHUYÊN GIA + CÔNG NGHỆ · ĐỒNG HÀNH LÂU DÀI",
  latLabel: "VĨ ĐỘ",
  lonLabel: "KINH ĐỘ",
  initialLat: 10.82,
  initialLon: 106.63,
}

export const archivesConfig: ArchivesConfig = {
  sectionLabel: "03 · NĂNG LỰC TRIỂN KHAI",
  vaultTitle: "KHO TÀI NGUYÊN",
  closeText: "ĐÓNG",
  items: [
    { src: "/images/archive-bim.jpg", label: "CHUẨN HÓA QUY TRÌNH BIM" },
    { src: "/images/archive-automation.jpg", label: "TỰ ĐỘNG HÓA & PLUGIN" },
    { src: "/images/archive-ai.jpg", label: "AI ASSISTANT NỘI BỘ" },
    { src: "/images/archive-library.jpg", label: "DỮ LIỆU & THƯ VIỆN SỐ" },
  ],
}

export const footerConfig: FooterConfig = {
  copyrightText: "© 2026 OpenArch. Chuyển đổi số ngành AEC.",
  statusText: "EXPERT NETWORK · RESOURCE HUB · SOLUTION DEVELOPMENT",
}

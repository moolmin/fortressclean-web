import type { Icon, IconWeight } from "./icons";
import {
  BellRinging,
  Broom,
  Buildings,
  CalendarCheck,
  CalendarPlus,
  Camera,
  CheckCircle,
  CheckSquareOffset,
  Fan,
  Headset,
  HouseLine,
  Image,
  MagnifyingGlass,
  MapPinLine,
  OfficeChair,
  Package,
  ShieldCheck,
  Sparkle,
  Stairs,
  ThermometerCold,
  Trash,
  WashingMachine,
  Wind,
} from "./icons";

type IconItem = {
  icon: Icon;
  weight?: IconWeight;
};

type SectionIntro = {
  eyebrow?: string;
  title: string;
  description: string;
};

type FeatureItem = IconItem & {
  title: string;
  description: readonly [string, string];
};

type ServiceItem = IconItem & {
  title: string;
  desc: string;
  features: readonly string[];
};

type ProcessStep = IconItem & {
  step: string;
  title: string;
  active: boolean;
};

type Testimonial = {
  initial: string;
  name: string;
  service: string;
  text: string;
};

type QuoteMethod = IconItem & {
  badge: string;
  badgeClassName: string;
  title: string;
  description: string;
  detailTitle: string;
  detailText: string;
};

type AssuranceItem = IconItem & {
  title: string;
  description: string;
  note: string;
};

export const PHONE_NUMBER = "010-8115-9256";
export const PHONE_HREF = `tel:${PHONE_NUMBER.replaceAll("-", "")}`;

export const NAV_ITEMS = [
  { href: "#services", label: "서비스" },
  { href: "#process", label: "작업과정" },
  { href: "#gallery", label: "작업사진" },
  { href: "#reviews", label: "후기" },
  { href: "#quote", label: "견적안내" },
  { href: "#as", label: "A/S" },
  { href: "#faq", label: "FAQ" },
] as const;

export const HERO_HIGHLIGHTS = [
  { icon: ShieldCheck, weight: "fill", label: "직영 전문인력" },
  { icon: CheckCircle, weight: "fill", label: "체계적인 작업 과정" },
  { icon: Headset, weight: "fill", label: "책임감 있는 사후 관리" },
] as const satisfies readonly (IconItem & { label: string })[];

export const FEATURE_ITEMS = [
  {
    icon: MagnifyingGlass,
    weight: "fill",
    title: "꼼꼼한 작업",
    description: ["보이지 않는 곳까지", "철저하게 청소합니다"],
  },
  {
    icon: Package,
    weight: "fill",
    title: "제품 보호",
    description: ["가전 및 주변 환경을", "안전하게 보호합니다"],
  },
  {
    icon: BellRinging,
    weight: "fill",
    title: "사전 안내",
    description: ["방문 전 일정과", "주의사항을 안내합니다"],
  },
  {
    icon: CheckSquareOffset,
    weight: "fill",
    title: "작업 후 확인",
    description: ["고객님과 함께", "최종 결과를 확인합니다"],
  },
  {
    icon: ShieldCheck,
    weight: "fill",
    title: "30일 A/S 보증",
    description: ["작업 후 문제 발생 시", "확실하게 책임집니다"],
    emphasized: true,
  },
] as const satisfies readonly (FeatureItem & { emphasized?: boolean })[];

export const HOME_CARE_INTRO: SectionIntro = {
  eyebrow: "HOME CARE",
  title: "가전 홈케어 서비스",
  description:
    "완전 분해 청소로 가전제품의 수명을 늘리고 쾌적한 실내 공기를 만듭니다.",
};

export const HOME_CARE_SERVICES = [
  {
    icon: Wind,
    title: "에어컨 관리",
    desc: "내부 곰팡이와 먼지를 고압 세척으로 완벽하게 제거하여 맑은 바람을 찾아드립니다.",
    features: ["벽걸이/스탠드/시스템", "완전 분해 고압 세척"],
  },
  {
    icon: WashingMachine,
    title: "세탁기 관리",
    desc: "보이지 않는 세탁조 안팎의 찌든 때와 유해 세균을 살균 소독하여 세탁 품질을 높입니다.",
    features: ["통돌이/드럼 세탁기", "이물질 완벽 제거"],
  },
  {
    icon: Fan,
    title: "공기청정기 관리",
    desc: "필터 교체만으로는 부족한 내부 팬과 센서의 오염을 정밀하게 청소합니다.",
    features: ["내부 부품 분해 세척", "성능 저하 방지"],
  },
  {
    icon: ThermometerCold,
    title: "냉장고 관리",
    desc: "음식물 냄새와 얼룩, 고무패킹의 곰팡이를 스팀 살균하여 위생적인 보관 환경을 만듭니다.",
    features: ["내부 스팀 살균", "선반/서랍 탈거 세척"],
  },
] as const satisfies readonly ServiceItem[];

export const COMPREHENSIVE_INTRO: SectionIntro = {
  eyebrow: "COMPREHENSIVE CLEANING",
  title: "종합 청소 서비스",
  description:
    "주거공간부터 상업공간까지, 전문 장비와 약품으로 쾌적한 환경을 조성합니다.",
};

export const COMPREHENSIVE_ITEMS = [
  {
    icon: Sparkle,
    weight: "fill",
    title: "종합청소",
    desc: "공간 전체의 오염을 제거하는 맞춤형 대청소 서비스",
  },
  {
    icon: CalendarCheck,
    weight: "fill",
    title: "정기청소",
    desc: "주/월 단위로 방문하여 항상 청결한 상태를 유지",
  },
  {
    icon: Buildings,
    weight: "fill",
    title: "건물청소",
    desc: "상가, 빌라 등 건물 내외부 공용 공간 위생 관리",
  },
  {
    icon: HouseLine,
    weight: "fill",
    title: "입주·이사·거주청소",
    desc: "새집증후군 완화 및 묵은 때 제거로 안전한 입주 준비",
  },
  {
    icon: OfficeChair,
    weight: "fill",
    title: "사무실·병원·학원",
    desc: "업무 및 진료 환경에 맞는 전문적인 살균 청소",
  },
  {
    icon: Stairs,
    weight: "fill",
    title: "계단·아파트·공장·외벽",
    desc: "특수 장비가 필요한 대형 공간 및 고난이도 구역 청소",
  },
] as const satisfies readonly (IconItem & {
  title: string;
  desc: string;
})[];

export const PROCESS_INTRO: SectionIntro = {
  title: "체계적인 작업 과정",
  description: "상담부터 사후 관리까지 투명하고 꼼꼼하게 진행됩니다.",
};

export const PROCESS_STEPS = [
  { step: "STEP 01", icon: Headset, title: "상담", active: false },
  {
    step: "STEP 02",
    icon: Camera,
    title: "사진/방문 견적",
    active: false,
  },
  {
    step: "STEP 03",
    icon: CalendarPlus,
    title: "일정 예약",
    active: false,
  },
  {
    step: "STEP 04",
    icon: Broom,
    weight: "fill",
    title: "방문 작업",
    active: true,
  },
  { step: "STEP 05", icon: Trash, title: "정리", active: false },
  {
    step: "STEP 06",
    icon: CheckCircle,
    title: "작업 후 확인",
    active: false,
  },
] as const satisfies readonly ProcessStep[];

export const QUOTE_INTRO: SectionIntro = {
  title: "편리한 견적 안내",
  description: "고객님의 편의를 위해 서비스별 맞춤 견적 방식을 제공합니다.",
};

export const QUOTE_METHODS = [
  {
    icon: Image,
    weight: "fill",
    badge: "가전 홈케어",
    badgeClassName: "bg-brand-100 text-brand-900",
    title: "사진 견적 가능",
    description:
      "에어컨, 세탁기 등 가전제품은 제품의 전체 사진과 모델명이 보이는 라벨 사진을 보내주시면 빠르고 정확하게 견적을 안내해 드립니다.",
    detailTitle: "사진 2장 전송",
    detailText: "제품 전면 사진 + 모델명 라벨 사진",
  },
  {
    icon: MapPinLine,
    weight: "fill",
    badge: "종합/건물 청소",
    badgeClassName: "bg-gray-200 text-gray-700",
    title: "무료 방문 견적",
    description:
      "오염도와 평수에 따라 비용이 달라지는 종합청소, 정기청소 등은 전문가가 직접 현장을 방문하여 정확한 견적을 산출해 드립니다.",
    detailTitle: "일정 조율 후 방문",
    detailText: "현장 상황 파악 및 투명한 견적 제시",
  },
] as const satisfies readonly QuoteMethod[];

export const GALLERY_INTRO: SectionIntro = {
  title: "실제 작업 사례",
  description: "포트리스 클린의 확실한 변화를 확인하세요.",
};

export const GALLERY_ITEMS = [
  {
    title: "세탁기 완전 분해 청소",
    desc: "세탁조 외부의 찌든 때와 곰팡이 완벽 제거",
  },
  {
    title: "에어컨 내부 고압 세척",
    desc: "냉각핀 사이의 먼지와 세균층 고압 살균 세척",
  },
  {
    title: "주차장 바닥 찌든 때 제거",
    desc: "건물 주차장 바닥의 오랜 오일 마크 및 오염 제거",
  },
  {
    title: "주방 후드 기름때 제거",
    desc: "거주 청소 시 주방 후드망의 굳은 기름때 완전 분해",
  },
] as const;

export const REVIEW_INTRO: SectionIntro = {
  title: "고객 후기",
  description: "실제 이용 고객님들의 생생한 후기를 확인하세요.",
};

export const REVIEW_ITEMS = [
  {
    initial: "김",
    name: "김OO 고객님",
    service: "스탠드 에어컨 청소",
    text: "작업 전에 상태를 하나씩 설명해 주시고 분해 과정도 깔끔했습니다. 청소 후 냄새가 확실히 줄어서 바로 체감됐어요.",
  },
  {
    initial: "박",
    name: "박OO 고객님",
    service: "입주 청소",
    text: "눈에 잘 안 보이는 창틀과 욕실 모서리까지 꼼꼼하게 봐주셨습니다. 마감 확인까지 같이 해줘서 믿음이 갔습니다.",
  },
  {
    initial: "이",
    name: "이OO 고객님",
    service: "세탁기 분해 청소",
    text: "세탁조 안쪽 오염을 직접 보여주고 작업해 주셔서 좋았습니다. 예약 시간도 잘 지켜주셨고 뒷정리도 깔끔했습니다.",
  },
] as const satisfies readonly Testimonial[];

export const ASSURANCE_ITEMS = [
  {
    icon: MapPinLine,
    weight: "fill",
    title: "서비스 가능 지역",
    description: "서울 남부 및 경기, 인천 등 수도권역 전역",
    note: "*상세 지역은 상담 시 확인 가능합니다.",
  },
  {
    icon: ShieldCheck,
    weight: "fill",
    title: "포트리스 30일 안심 A/S",
    description: "작업 다음날로부터 30일까지 무상 보증",
    note: "*고객 과실 제외, 청소 불량 및 장비 이상 발생 시",
  },
] as const satisfies readonly AssuranceItem[];

export const FAQ_INTRO: SectionIntro = {
  title: "자주 묻는 질문",
  description: "고객님들께서 가장 많이 궁금해하시는 내용을 모았습니다.",
};

export const FAQ_ITEMS = [
  {
    q: "예약은 어떻게 진행하나요?",
    a: `전화(${PHONE_NUMBER}) 또는 문자 메시지로 원하시는 서비스와 일정을 남겨주시면, 담당자가 확인 후 신속하게 상담 및 예약을 도와드립니다.`,
  },
  {
    q: "가전 청소 시간은 얼마나 걸리나요?",
    a: "제품의 종류와 오염도에 따라 다릅니다만, 일반적으로 벽걸이 에어컨은 1시간~1시간 30분, 스탠드 에어컨은 1시간 30분~2시간, 드럼 세탁기는 2시간~3시간 정도 소요됩니다.",
  },
  {
    q: "결제는 언제 어떻게 하나요?",
    a: "모든 청소 작업이 완료된 후, 고객님과 함께 현장을 꼼꼼히 확인하고 이상이 없을 시 전액 후불 결제로 진행됩니다. 계좌이체 등 편리한 방법으로 결제 가능합니다.",
  },
  {
    q: "주말이나 공휴일에도 작업이 가능한가요?",
    a: "네, 고객님의 일정에 맞춰 주말 및 공휴일에도 예약 및 작업이 가능합니다. 단, 주말 예약은 조기 마감될 수 있으니 미리 연락 주시면 감사하겠습니다.",
  },
] as const;

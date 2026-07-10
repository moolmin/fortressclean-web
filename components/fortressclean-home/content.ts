import type { StaticImageData } from "next/image";

import airconAfterImage from "./case-images/aircon-after.jpg";
import airconBeforeImage from "./case-images/aircon-before.jpg";
import hoodAfterImage from "./case-images/hood-after.jpg";
import hoodBeforeImage from "./case-images/hood-before.jpg";
import parkingAfterImage from "./case-images/parking-after.jpg";
import parkingBeforeImage from "./case-images/parking-before.jpg";
import washerAfterImage from "./case-images/washer-after.jpg";
import washerBeforeImage from "./case-images/washer-before.jpg";

import type { Icon, IconWeight } from "./icons";
import {
  Broom,
  Building,
  Buildings,
  CalendarCheck,
  CalendarPlus,
  Camera,
  CheckCircle,
  Fan,
  FileText,
  Headset,
  Image,
  Leaf,
  MagnifyingGlass,
  MapPinLine,
  OfficeChair,
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

type GalleryItem = {
  title: string;
  desc: string;
  beforeSrc: StaticImageData;
  beforeAlt: string;
  afterSrc: StaticImageData;
  afterAlt: string;
};

export const PHONE_NUMBER = "010-8115-9256";
export const PHONE_HREF = `tel:${PHONE_NUMBER.replaceAll("-", "")}`;
export const EMAIL_ADDRESS = "hardy@fortressclean.com";
export const EMAIL_HREF = `mailto:${EMAIL_ADDRESS}`;

export const NAV_ITEMS = [
  { href: "/intro", label: "소개" },
  { href: "/scope", label: "작업범위" },
  { href: "/cases", label: "작업사례" },
  { href: "/quote-guide", label: "견적안내" },
  { href: "/faq", label: "FAQ" },
] as const;

export const HERO_HIGHLIGHTS = [
  { icon: CheckCircle, weight: "fill", label: "체계적인 작업 과정" },
  { icon: Headset, weight: "fill", label: "책임감 있는 사후 관리" },
] as const satisfies readonly (IconItem & { label: string })[];

export const FEATURE_ITEMS = [
  {
    icon: MagnifyingGlass,
    weight: "fill",
    title: "꼼꼼한 작업",
    description: ["보이지 않는 곳까지", "세심하게 청소합니다"],
  },
  {
    icon: ShieldCheck,
    weight: "fill",
    title: "시설물 보호",
    description: ["가전과 주변 시설을", "안전하게 보호하며 작업합니다"],
  },
  {
    icon: Leaf,
    weight: "fill",
    title: "친환경 세제 사용",
    description: ["공간과 오염에 적합한", "친환경 세제를 사용합니다"],
  },
  {
    icon: FileText,
    weight: "fill",
    title: "공공기관 서류 대응",
    description: ["견적서부터 완료보고서까지", "정확하게 처리합니다"],
  },
  {
    icon: Headset,
    weight: "fill",
    title: "30일 A/S 보증",
    description: ["작업 후 문제 발생 시", "책임 있게 대응합니다"],
  },
] as const satisfies readonly FeatureItem[];

export const HOME_CARE_INTRO: SectionIntro = {
  eyebrow: "HOME CARE",
  title: "가전 홈케어 서비스",
  description: "완전 분해 청소로 가전제품의 수명을 늘리고 쾌적하게 관리합니다.",
};

export const HOME_CARE_SERVICES = [
  {
    icon: Wind,
    title: "에어컨 청소",
    desc: "내부 곰팡이와 먼지를 고압 세척으로 완벽하게 제거하여 맑은 바람을 찾아드립니다.",
    features: [
      "시스템 에어컨 / 스탠드 / 벽걸이",
      "냉각핀, 송풍팬, 커버 등 분해 세척",
    ],
  },
  {
    icon: WashingMachine,
    title: "세탁기 관리",
    desc: "눈에 보이지 않는 세탁조 내부 오염과 세제 찌꺼기를 확인하여 세탁 품질을 높입니다.",
    features: ["드럼 세탁기 / 통돌이 / 건조기", "세탁조, 가스켓 등 분해 세척"],
  },
  {
    icon: Fan,
    title: "공기청정기 청소",
    desc: "공기가 지나가는 내부 부품과 필터 주변의 먼지를 정리해 쾌적한 실내 환경을 돕습니다.",
    features: ["필터 주변 먼지 제거", "내부 팬, 흡입구, 토출구 분해 세척"],
  },
  {
    icon: ThermometerCold,
    title: "냉장고 청소",
    desc: "냉장고 외부와 후면 기계실에 쌓인 먼지를 제거해 위생 관리와 화재 예방을 돕습니다.",
    features: [
      "외부 표면과 손잡이 스팀 세척",
      "후면 기계실 먼지 제거로 화재 위험 예방",
    ],
  },
] as const satisfies readonly ServiceItem[];

export const COMPREHENSIVE_INTRO: SectionIntro = {
  eyebrow: "COMPREHENSIVE CLEANING",
  title: "공간·시설 청소 서비스",
  description:
    "가정부터 시설까지, 공간마다 필요한 청소는 다릅니다.\n포트리스 클린은 현장 환경을 먼저 확인하고, 깨끗함이 유지될 수 있도록 책임감 있게 관리합니다.",
};

export const COMPREHENSIVE_ITEMS = [
  {
    icon: Stairs,
    weight: "fill",
    title: "시설·단체 청소",
    desc: "지하주차장·군부대·공장 등 규모 있는 현장도 책임감 있게 진행합니다.",
  },
  {
    icon: OfficeChair,
    weight: "fill",
    title: "상업 공간 청소",
    desc: "사무실, 병원, 학원, 상가 등 이용자가 많은 공간을 쾌적하게 관리합니다.",
  },
  {
    icon: Building,
    weight: "fill",
    title: "학교·교육시설 청소",
    desc: "친환경 세제로 교실과 공용공간을 청소해 안전하고 쾌적한 교육 환경을 만듭니다.",
  },
  {
    icon: CalendarCheck,
    weight: "fill",
    title: "정기 관리 청소",
    desc: "주기적인 방문 관리로 사무실, 매장, 공용 공간의 청결한 상태를 유지합니다.",
  },

  {
    icon: Buildings,
    weight: "fill",
    title: "건물·공용공간 청소",
    desc: "계단, 아파트, 건물 내외부 등 반복 관리가 필요한 공용 공간을 체계적으로 청소합니다.",
  },

  {
    icon: Sparkle,
    weight: "fill",
    title: "입주·이사 청소",
    desc: "입주 전후, 이사 전후 공간의 먼지와 오염을 정리해 깨끗한 시작을 돕습니다.",
  },
] as const satisfies readonly (IconItem & {
  title: string;
  desc: string;
})[];

export const COMPREHENSIVE_BADGES = [
  "친환경 세제 사용",
  "정기 관리 가능",
  "방문 견적 가능",
  "대량 작업 문의 가능",
  "수도권 작업 가능",
] as const;

export const PROCESS_INTRO: SectionIntro = {
  title: "체계적인 작업 과정",
  description:
    "상담부터 작업 후 확인까지, 단계별로 투명하고 꼼꼼하게 진행합니다.",
};

export const PROCESS_STEPS = [
  { step: "STEP 01", icon: Headset, title: "상담 접수" },
  {
    step: "STEP 02",
    icon: Camera,
    title: "맞춤 견적 안내",
  },
  {
    step: "STEP 03",
    icon: CalendarPlus,
    title: "일정 확정",
  },
  {
    step: "STEP 04",
    icon: Broom,
    weight: "fill",
    title: "방문 작업",
  },
  {
    step: "STEP 05",
    icon: CheckCircle,
    title: "작업 후 확인",
  },
  {
    step: "STEP 06",
    icon: Headset,
    title: "A/S 및 사후관리",
  },
] as const satisfies readonly ProcessStep[];

export const QUOTE_INTRO: SectionIntro = {
  title: "간편한 견적 안내",
  description:
    "서비스 유형과 현장 상황에 맞춰 사진 견적 또는 방문 견적으로 안내드립니다.",
};

export const QUOTE_METHODS = [
  {
    icon: Image,
    weight: "fill",
    badge: "가전 홈케어",
    badgeClassName: "bg-brand-100 text-brand-900",
    title: "사진 견적 가능",
    description:
      "에어컨, 세탁기 등 가전 청소는 제품 전체 사진과 모델명 라벨 사진을 보내주시면 확인 후 견적을 안내드립니다.",
    detailTitle: "사진 전송 안내",
    detailText: "제품 전체 사진 + 모델명 라벨 사진",
  },
  {
    icon: MapPinLine,
    weight: "fill",
    badge: "종합·시설 청소",
    badgeClassName: "bg-gray-200 text-gray-700",
    title: "방문 견적 가능",
    description:
      " 학교청소, 종합청소, 정기청소 등은 현장 규모와 오염 상태에 따라 작업 범위가 달라질 수 있어 방문 견적으로 안내드립니다.",
    detailTitle: "방문 견적 안내",
    detailText: "일정 조율 후 현장 확인",
  },
] as const satisfies readonly QuoteMethod[];

export const GALLERY_INTRO: SectionIntro = {
  title: "실제 작업 사례",
  description: "포트리스 클린의 작업 전후 변화를 확인해보세요.",
};

export const GALLERY_ITEMS = [
  {
    title: "세탁기 분해 세척",
    desc: "세탁조 내부에 쌓인 오염과 찌든 때를 꼼꼼하게 제거했습니다.",
    beforeSrc: washerBeforeImage,
    beforeAlt: "세탁기 완전 분해 청소 작업 전 임시 이미지",
    afterSrc: washerAfterImage,
    afterAlt: "세탁기 완전 분해 청소 작업 후 임시 이미지",
  },
  {
    title: "에어컨 내부 세척",
    desc: "냉각핀과 내부 부품 사이의 먼지, 오염을 세척해 쾌적한 바람을 돕습니다.",
    beforeSrc: airconBeforeImage,
    beforeAlt: "에어컨 내부 고압 세척 작업 전 임시 이미지",
    afterSrc: airconAfterImage,
    afterAlt: "에어컨 내부 고압 세척 작업 후 임시 이미지",
  },
  {
    title: "주차장 바닥 청소",
    desc: "오래 쌓인 바닥 오염과 자국을 정리해 깨끗한 주차 환경을 만들었습니다.",
    beforeSrc: parkingBeforeImage,
    beforeAlt: "주차장 바닥 찌든 때 제거 작업 전 임시 이미지",
    afterSrc: parkingAfterImage,
    afterAlt: "주차장 바닥 찌든 때 제거 작업 후 임시 이미지",
  },
  {
    title: "주방 후드 청소",
    desc: "후드망과 내부에 쌓인 기름때를 제거해 위생적인 주방 환경을 관리했습니다.",
    beforeSrc: hoodBeforeImage,
    beforeAlt: "주방 후드 기름때 제거 작업 전 임시 이미지",
    afterSrc: hoodAfterImage,
    afterAlt: "주방 후드 기름때 제거 작업 후 임시 이미지",
  },
] as const satisfies readonly GalleryItem[];

export const REVIEW_INTRO: SectionIntro = {
  title: "고객 만족 후기",
  description: "실제 작업 과정에서 고객님이 느낀 안심과 만족을 확인해보세요.",
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
    description: "서울 및 경기 수도권 전역",
    note: "*상세 지역은 상담 시 확인 가능합니다.",
  },
  {
    icon: ShieldCheck,
    weight: "fill",
    title: "30일 안심 A/S",
    description: "작업 다음날로부터 30일까지 무상 보증",
    note: "*고객 과실 제외, 작업 관련 문제 발생 시 적용됩니다.",
  },
] as const satisfies readonly AssuranceItem[];

export const FAQ_INTRO: SectionIntro = {
  title: "자주 묻는 질문",
  description: "상담 전 고객님들께서 자주 궁금해하시는 내용을 정리했습니다.",
};

export const FAQ_ITEMS = [
  {
    q: "예약은 어떻게 진행하나요?",
    a: `전화(${PHONE_NUMBER}) 또는 이메일(${EMAIL_ADDRESS})로 원하시는 서비스와 희망 일정을 알려주시면, 담당자가 확인 후 상담과 예약을 도와드립니다.`,
  },
  {
    q: "견적은 어떻게 받을 수 있나요?",
    a: "에어컨·세탁기 등 가전 청소는 제품 사진과 모델명 확인 후 견적 안내가 가능합니다. 종합청소, 정기청소, 시설 청소는 현장 상황에 따라 방문 견적으로 안내드립니다.",
  },
  {
    q: "가전 청소 시간은 얼마나 걸리나요?",
    a: "제품 종류와 오염도에 따라 다르지만, 일반적으로 벽걸이 에어컨은 약 1시간~1시간 30분, 스탠드 에어컨은 약 1시간 30분~2시간, 드럼 세탁기는 약 2~3시간 정도 소요됩니다.",
  },
  {
    q: "결제는 언제 어떻게 진행하나요?",
    a: "작업 완료 후 고객님과 현장을 함께 확인한 뒤 결제를 진행합니다. 카드 및 현금 결제가 가능하며, 세금계산서도 발행해드립니다. 자세한 결제 방법은 상담 시 안내드립니다.",
  },
  {
    q: "주말이나 공휴일에도 작업이 가능한가요?",
    a: "네, 일정 조율 후 주말 및 공휴일 작업도 가능합니다. 다만 예약이 빠르게 마감될 수 있어 미리 문의해주시면 좋습니다.",
  },
  {
    q: "서비스 가능 지역은 어디인가요?",
    a: "서울 및 경기 등 수도권을 중심으로 방문합니다. 상세 가능 지역은 상담 시 확인해드립니다.",
  },
  {
    q: "추가 비용이 발생할 수 있나요?",
    a: "제품 구조, 현장 환경, 오염도, 요청 작업 범위에 따라 추가 비용이 발생할 수 있습니다. 추가 작업이 필요한 경우 작업 전 먼저 안내드립니다.",
  },
  {
    q: "A/S는 어떻게 진행되나요?",
    a: "작업 완료 다음 날부터 30일간 사후관리를 보증합니다. 고객 과실을 제외한 작업 관련 문제 발생 시 상담 후 안내드립니다.",
  },
] as const;

export const HOME_FAQ_ITEMS = [
  FAQ_ITEMS[0],
  FAQ_ITEMS[2],
  FAQ_ITEMS[3],
  FAQ_ITEMS[4],
] as const;

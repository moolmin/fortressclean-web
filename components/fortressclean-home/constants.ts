export const PHONE_NUMBER = "010-8115-9256";

export const NAV_ITEMS = [
  { href: "#services", label: "서비스" },
  { href: "#process", label: "작업과정" },
  { href: "#gallery", label: "작업사진" },
  { href: "#reviews", label: "후기" },
  { href: "#quote", label: "견적안내" },
  { href: "#as", label: "A/S" },
  { href: "#faq", label: "FAQ" },
] as const;

export const FEATURE_ITEMS = [
  {
    icon: "ph-fill ph-magnifying-glass",
    title: "꼼꼼한 작업",
    line1: "보이지 않는 곳까지",
    line2: "철저하게 청소합니다",
  },
  {
    icon: "ph-fill ph-package",
    title: "제품 보호",
    line1: "가전 및 주변 환경을",
    line2: "안전하게 보호합니다",
  },
  {
    icon: "ph-fill ph-bell-ringing",
    title: "사전 안내",
    line1: "방문 전 일정과",
    line2: "주의사항을 안내합니다",
  },
  {
    icon: "ph-fill ph-check-square-offset",
    title: "작업 후 확인",
    line1: "고객님과 함께",
    line2: "최종 결과를 확인합니다",
  },
] as const;

export const HOME_CARE_SERVICES = [
  {
    icon: "ph ph-wind",
    title: "에어컨 관리",
    desc: "내부 곰팡이와 먼지를 고압 세척으로 완벽하게 제거하여 맑은 바람을 찾아드립니다.",
    features: ["벽걸이/스탠드/시스템", "완전 분해 고압 세척"],
  },
  {
    icon: "ph ph-washing-machine",
    title: "세탁기 관리",
    desc: "보이지 않는 세탁조 안팎의 찌든 때와 유해 세균을 살균 소독하여 세탁 품질을 높입니다.",
    features: ["통돌이/드럼 세탁기", "이물질 완벽 제거"],
  },
  {
    icon: "ph ph-fan",
    title: "공기청정기 관리",
    desc: "필터 교체만으로는 부족한 내부 팬과 센서의 오염을 정밀하게 청소합니다.",
    features: ["내부 부품 분해 세척", "성능 저하 방지"],
  },
  {
    icon: "ph ph-thermometer-cold",
    title: "냉장고 관리",
    desc: "음식물 냄새와 얼룩, 고무패킹의 곰팡이를 스팀 살균하여 위생적인 보관 환경을 만듭니다.",
    features: ["내부 스팀 살균", "선반/서랍 탈거 세척"],
  },
] as const;

export const COMPREHENSIVE_ITEMS = [
  {
    icon: "ph-fill ph-sparkle",
    title: "종합청소",
    desc: "공간 전체의 오염을 제거하는 맞춤형 대청소 서비스",
  },
  {
    icon: "ph-fill ph-calendar-check",
    title: "정기청소",
    desc: "주/월 단위로 방문하여 항상 청결한 상태를 유지",
  },
  {
    icon: "ph-fill ph-buildings",
    title: "건물청소",
    desc: "상가, 빌라 등 건물 내외부 공용 공간 위생 관리",
  },
  {
    icon: "ph-fill ph-house-line",
    title: "입주·이사·거주청소",
    desc: "새집증후군 완화 및 묵은 때 제거로 안전한 입주 준비",
  },
  {
    icon: "ph-fill ph-office-chair",
    title: "사무실·병원·학원",
    desc: "업무 및 진료 환경에 맞는 전문적인 살균 청소",
  },
  {
    icon: "ph-fill ph-stairs",
    title: "계단·아파트·공장·외벽",
    desc: "특수 장비가 필요한 대형 공간 및 고난이도 구역 청소",
  },
] as const;

export const PROCESS_STEPS = [
  { step: "STEP 01", icon: "ph ph-headset", title: "상담", active: false },
  {
    step: "STEP 02",
    icon: "ph ph-camera",
    title: "사진/방문 견적",
    active: false,
  },
  {
    step: "STEP 03",
    icon: "ph ph-calendar-plus",
    title: "일정 예약",
    active: false,
  },
  {
    step: "STEP 04",
    icon: "ph-fill ph-broom",
    title: "방문 작업",
    active: true,
  },
  { step: "STEP 05", icon: "ph ph-trash", title: "정리", active: false },
  {
    step: "STEP 06",
    icon: "ph ph-check-circle",
    title: "작업 후 확인",
    active: false,
  },
] as const;

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

export const REVIEW_ITEMS = [
  {
    initial: "김",
    name: "김OO 고객님",
    service: "스탠드 에어컨 청소",
    text:
      "작업 전에 상태를 하나씩 설명해 주시고 분해 과정도 깔끔했습니다. 청소 후 냄새가 확실히 줄어서 바로 체감됐어요.",
  },
  {
    initial: "박",
    name: "박OO 고객님",
    service: "입주 청소",
    text:
      "눈에 잘 안 보이는 창틀과 욕실 모서리까지 꼼꼼하게 봐주셨습니다. 마감 확인까지 같이 해줘서 믿음이 갔습니다.",
  },
  {
    initial: "이",
    name: "이OO 고객님",
    service: "세탁기 분해 청소",
    text:
      "세탁조 안쪽 오염을 직접 보여주고 작업해 주셔서 좋았습니다. 예약 시간도 잘 지켜주셨고 뒷정리도 깔끔했습니다.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "예약은 어떻게 진행하나요?",
    a: "전화(010-8115-9256) 또는 문자 메시지로 원하시는 서비스와 일정을 남겨주시면, 담당자가 확인 후 신속하게 상담 및 예약을 도와드립니다.",
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

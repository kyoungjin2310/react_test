type ListProps = {
  title: string;
  content: string[];
  description: string;
};
export const List: ListProps = {
  title: "오프라인 매장 서비스 메뉴",
  content: [
    "매장 내 서비스 메뉴판으로 실제 매장내 비치 된 사진을 촬영해주세요.",
    "가격 정보가 잘 나타날 수 있도록 촬영해주세요.",
    "메뉴 정보 혹은 가격 정보가 보이지 않으면 가입 승인 미달될 수 있습니다. (미달 시 가격 정보와 애프터 뷰 정보는 소비자에게 노출되지 않습니다.)",
  ],
  description: "오프라인 매장 서비스 메뉴 사진 (가격정보 포함)",
};

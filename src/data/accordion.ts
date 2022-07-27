export type AccodionProps = {
  id: number;
  title: string;
  contents: string;
};

type AccodionListProps = AccodionProps[];

export const faqList: AccodionListProps = [
  {
    id: 1,
    title: "질문입니다.",
    contents:
      "<p>회원 차단이 되지 않도록 유의사항을 꼭 지켜주시기 바랍니다.</p>",
  },
  {
    id: 2,
    title: "질문입니다.",
    contents: "<p><b>질문2번에</b> 대한 답변입니다.</p>",
  },
  {
    id: 3,
    title: "질문2입니다.",
    contents:
      "<p>회원 차단이 되지 않도록 유의사항을<br/> 꼭 지켜주시기 바랍니다.</p>",
  },
  {
    id: 4,
    title: "질문입니다.",
    contents:
      "<p>회원 차단이<br/> 되지 않도록 유의사항을 꼭 지켜주시기 바랍니다.</p>",
  },
];

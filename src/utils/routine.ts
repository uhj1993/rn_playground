export type TabRoutineType = {
  key: number;
  title: string;
};

export type RoutineType = {
  key: number;
  content: string[];
};

export const TabRoutineJson: TabRoutineType[] = [
  {
    key: 0,
    title: '건강',
  },
  {
    key: 1,
    title: '셀프케어',
  },
  {
    key: 2,
    title: '성장',
  },
  {
    key: 3,
    title: '생산성',
  },
  {
    key: 4,
    title: '기타',
  },
];

export const RoutineJson: RoutineType[] = [
  {
    key: 0,
    content: [
      '모닝 스트레칭',
      '아침에 물 한잔',
      '유산균 챙겨 먹기',
      '영양제 먹기',
      '아침 챙겨먹기',
      '30분 아침 러닝',
    ],
  },
  {
    key: 1,
    content: [
      '지난 수면 시간 체크',
      '빈 속 커피 금지',
      '선크림 꼭 바르기',
      '오늘 나에게 응원 한 마디',
      '좋아하는 향수 뿌리기',
    ],
  },
  {
    key: 2,
    content: [
      '모닝 페이지 15분',
      '출근길 10분 독서',
      '출근길 뉴스레터',
      '오전 20분 성장 시간',
      '관심 분야 콘텐츠 1개 읽기',
      '영감 주는 영상 1개',
    ],
  },
  {
    key: 3,
    content: [
      '침대 나가면 이불 정리',
      '자기 확언하기',
      '모닝 샤워하기',
      '모닝페이지 쓰기(15분)',
      '출근 시간 체크',
      '아침 러닝',
      '아침 전화영어',
    ],
  },
  {
    key: 4,
    content: [
      '출근 후 책상 정리',
      '오늘 중요한 일 3개 정리',
      '커피 마시며 카페인 충전',
      '뽀모도로(25분 집중, 5분 쉼)',
    ],
  },
];

// lib/api.js

const notices = [
  { slug: 'welcome', title: '새로운 공지사항 게시판이 열렸습니다.', content: '환영합니다! 다양한 소식을 전해드리겠습니다.' },
  { slug: 'event-start', title: '이벤트 시작 안내', content: '봄맞이 이벤트가 시작되었습니다! 많은 참여 부탁드립니다.' },
  { slug: 'maintenance-notice', title: '점검 안내', content: '서비스 안정화를 위한 정기 점검이 예정되어 있습니다.' },
];

export function getAllNotices() {
  // 모든 공지사항 목록을 반환합니다.
  return notices.map(({ slug, title }) => ({ slug, title }));
}

export function getNoticeBySlug(slug) {
  // 특정 slug에 해당하는 공지사항을 반환합니다.
  return notices.find(notice => notice.slug === slug) || null;
}
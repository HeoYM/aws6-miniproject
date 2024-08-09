export function logout() {
    localStorage.removeItem('token'); // JWT 토큰 삭제
    alert('로그아웃 되었습니다.');
    window.location.href = '/login'; // 로그인 페이지로 리다이렉트
}
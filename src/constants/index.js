export const API_END_POINT = "http://i8b305.p.ssafy.io:3030";
export const SOCKET_SUB_END_POINT = "/sub/message/user";
export const SOCKET_PUB_END_POINT = "/pub/message/user";
export const CHAT_SUB_END_POINT = "/sub/chat/user";
export const CHAT_PUB_END_POINT = "/pub/chat/user";

export const API_BUSINESS = "https://i8b305.p.ssafy.io:8000";
export const API_SOCKET = "http://i8b305.p.ssafy.io:9001";

// Kakao API_KEY, REDIRECT_URL
const REST_API_KEY = "e21948e5e842e29a34dd1216456745dd";
const REDIRECT_URL = "http://localhost:3000/oauth/kakao";
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;

import { Api } from "./api";


// Instantiate API client
const http = new Api();

// ✅ Set baseURL from Next.js env
http.instance.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

// ✅ Attach token interceptor for browser-side requests
if (typeof window !== "undefined") {
  http.instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
}

export default http;

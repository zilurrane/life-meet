const isDevelopment: boolean =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

const devApiConfig = {
  baseUrl: "http://13.126.254.175:5000/api/v1",
  url: "http://13.126.254.175:5000",
  docsUrl: "http://13.126.254.175:5000/api/v1/docs",
};

const prodApiConfig = {
  baseUrl: "https://api.meet.nettubooking.com/api/v1",
  url: "https://api.meet.nettubooking.com",
  docsUrl: "https://api.meet.nettubooking.com/api/v1/docs",
};

const frontendUrl = !isDevelopment
  ? "https://meet.nettubooking.com"
  : "http://13.126.254.175:3000";

const apiConfig = !isDevelopment ? prodApiConfig : devApiConfig;

export { apiConfig, frontendUrl };

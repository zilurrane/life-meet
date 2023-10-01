const isDevelopment: boolean =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

const devApiConfig = {
  baseUrl: "http://13.126.254.175:5000/api/v1",
  url: "http://13.126.254.175:5000",
  docsUrl: "http://13.126.254.175:5000/api/v1/docs",
};

const prodApiConfig = {
  baseUrl: "http://13.126.254.175:5000/api/v1",
  url: "http://13.126.254.175:5000",
  docsUrl: "http://13.126.254.175:5000/api/v1/docs",
};

const frontendUrl = !isDevelopment
  ? "https://meet.lifecompilers.in"
  : "https://meet.lifecompilers.in";

const apiConfig = !isDevelopment ? prodApiConfig : devApiConfig;

export { apiConfig, frontendUrl };

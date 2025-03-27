export const config = {
	apiUrl:
		import.meta.env.VITE_API_URL || "http://localhost:8000/api/plan-tasks",
	isDevelopment: import.meta.env.DEV,
	isProduction: import.meta.env.PROD,
};

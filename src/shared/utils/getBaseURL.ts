export function getBaseURL() {
  const config = useRuntimeConfig()
  return config.public.baseURL ?? "/"
}

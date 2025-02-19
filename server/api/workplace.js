export default defineEventHandler((e)=>{
  const config = useRuntimeConfig();
  return {
    arr: [
      {id: 1, title: config.CLIENT_APP_URL },
      {id: 2, title: "Backend" },
      {id: 3, title: "PM" },
    ]
  }
})

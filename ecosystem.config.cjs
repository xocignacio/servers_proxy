module.exports = {
  apps : [
    {
    name   : "server 1",
    script : "src/app.js",
    watch:true,
    env: {
      PORT:8080
    },
     exec_mode:"cluster",
     instances:3,   
  },
  {
    name   : "server 2",
    script : "src/app.js",
    watch:true,
    env: {
      PORT:8081
    }
  }

]
}

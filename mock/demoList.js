let demoList = {
  status: 200,
  message: "success",
  data: {
    "data|100": [
      {
        "ID|+1": 1,
        name: "@cname",
        idCode: "@id",
        "age|20-30": 23,
        city: "@county(true)",
        code: "@zip",
        "job|1": ["前端工程师", "后端工程师", "UI工程师", "需求工程师"],
        des: "@cparagraph",
        time: "@datetime('yyyy-MM-dd A HH:mm:ss')"
      }
    ]
  }
};
export default {
  "get|/getDemoList": demoList
};

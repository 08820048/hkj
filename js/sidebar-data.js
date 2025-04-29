// 产品展示二级分类菜单结构（严格按用户指定层级结构，key 与 productsData 匹配）
const sidebarGroups = [
  {
    title: "产品分类",
    icon: "\uD83D\uDCC4",
    items: [
      {
        label: "防静电系列",
        key: "anti-static-series",
        items: [
          { label: "防静电母粒", key: "anti-static-masterbatch" },
          { label: "防静电袋子", key: "anti-static" }
        ]
      },
      { label: "防锈袋", key: "rust-proof" },
      { label: "降解袋", key: "degradable" },
      {
        label: "PE袋系列",
        key: "pe-bag-series",
        items: [
          { label: "印刷袋", key: "printed-bag" },
          { label: "平口袋", key: "flat-bag" },
          { label: "折边袋", key: "folded-bag" },
          { label: "有底袋", key: "bottom-bag" }
        ]
      },
      {
        label: "复合袋",
        key: "composite",
        items: [
          { label: "铝箔袋", key: "aluminum" },
          { label: "真空袋", key: "vacuum" }
        ]
      }
    ]
  }
];

// 产品数据配置（分类简介全部采用 doc/产品分类信息.md 内容）
const productsData = {
    // 防静电系列
    "anti-static-series": {
        title: "防静电系列",
        description: "防静电系列产品包括防静电母粒和防静电袋子，用于有防静电要求的电子产品包装。",
        subCategories: {
            "anti-static-masterbatch": {
                title: "防静电母粒",
                description: "防静电母粒是一种用于生产防静电塑料制品的原材料，本公司母粒与日本四国化工深度合作。",
                image: "images/product/six/防静电母粒.png",
                items:[],
            },
            "anti-static-bags": {
                title: "防静电袋子",
                description: "通常使用的普通塑料袋一般都是绝缘材质制成的，而装敏感器件的袋子，在设计上是采用防静电物质制作成的，用于有防静电要求的电子产品包装，如各类PC板、IC集成电路、光驱、 硬盘、 电子元器件等，可根据客户防静电级别进行定制化生产。",
                items: [
                    {
                        id: "anti-static-bag",
                        name: "防静电袋",
                        image: "images/product/防静电袋.jpg",
                        description: "专业防静电材料，保护电子元件不受静电损害。"
                    },
                    {
                        id: "anti-static-red",
                        name: "防静电红色",
                        image: "images/product/防静电红色.jpg",
                        description: "红色防静电材料，醒目且实用。"
                    },
                    {
                        id: "anti-static-blue",
                        name: "防静电蓝色",
                        image: "images/product/防静电蓝色.jpg",
                        description: "蓝色防静电材料，专业可靠。"
                    },
                    {
                        id: "lDPE-anti-static-folded",
                        name: "LDPE防静电折边袋",
                        image: "images/product/LDPE防静电折边袋.jpg",
                        description: "LDPE材料，防静电功能，折边设计。"
                    },
                    {
                        id: "lDPE-anti-static-square",
                        name: "LDPE防静电方底袋",
                        image: "images/product/LDPE防静电方底袋.jpg",
                        description: "LDPE材料，防静电功能，方底设计。"
                    },
                    {
                        id: "anti-static-printing",
                        name: "防静电印刷袋",
                        image: "images/product/防静电印刷袋.jpg",
                        description: "防静电材料，印刷清晰，适用于电子元件包装。"
                    }
                ]
            }
        }
    },
    // 防锈袋
    "rust-proof": {
        title: "防锈袋",
        description: "防锈袋是一种用于金属制品防锈的包装材料，通过缓蚀剂分子在金属表面形成保护膜，隔绝氧气与湿气，实现长效防锈。具有免涂油、即拆即用、环保无毒等特点，适用于机械零件、工具、电子元件等储存运输。可根据客户不同规格定制化生产。",
        items: [
            {
                id: "blue-rust-proof-bag",
                name: "蓝色防锈袋",
                image: "images/product/蓝色防锈袋.jpg",
                description: "专业防锈材料，保护金属制品不受腐蚀。"
            }
        ]
    },
    // 降解袋
    "degradable": {
        title: "降解袋",
        description: "降解袋是一种环保包装材料，通过生物降解、光降解或氧化分解等方式自然分解，减少环境污染。具有与传统塑料袋相近的强度，但废弃后降解周期短（数月到数年），适用于食品包装、农业地膜、垃圾袋等领域，助力减少白色污染，符合可持续发展需求。可根据不同客户的要求定制化生产。",
        items: [
            {
                id: "degradable-bag",
                name: "降解袋",
                image: "images/product/降解袋.png",
                description: "环保可降解材料，减少环境污染。"
            }
        ]
    },
    // PE袋系列
    "pe-series": {
        title: "PE袋系列",
        description: "PE袋系列包括多种类型的聚乙烯包装袋，适用于不同场景的包装需求。",
        subCategories: {
            "printing": {
                title: "印刷袋",
                description: "表面可定制印刷图案、标识的包装袋。采用凹版/柔版工艺，色彩鲜明、附着力强，兼具防水防潮、耐磨损特性，部分含手提或自封设计。广泛用于食品、日用品、化妆品等零售包装，提升品牌辨识度。支持尺寸、厚度定制，适应商超、电商、礼品等多场景需求。",
                items: [
                    {
                        id: "hDPE-printing",
                        name: "HDPE印刷袋",
                        image: "images/product/HDPE印刷袋.jpg",
                        description: "高品质HDPE材料，印刷清晰，适用于多种包装需求。"
                    },
                    {
                        id: "lDPE-printing",
                        name: "LDPE印刷袋",
                        image: "images/product/LDPE印刷袋.jpg",
                        description: "柔软耐用的LDPE材料，印刷效果优良。"
                    },
                    {
                        id: "lDPE-printing-2",
                        name: "LDPE印刷袋2",
                        image: "images/product/LDPE印刷袋2.jpg",
                        description: "LDPE材料，印刷精美，适用于多种包装场景。"
                    },
                    {
                        id: "lDPE-printing-3",
                        name: "LDPE印刷袋3",
                        image: "images/product/LDPE印刷袋3.jpg",
                        description: "LDPE材料，印刷清晰，适用于多种包装需求。"
                    },
                    {
                        id: "lDPE-printing-3-horizontal",
                        name: "LDPE印刷袋3横版",
                        image: "images/product/LDPE印刷袋3横版.jpg",
                        description: "LDPE材料，横版设计，印刷精美。"
                    }
                ]
            },
            "flat-mouth": {
                title: "平口袋",
                description: "具有柔韧、防水、耐撕裂等特性。其开口平整，结构简单，便于快速装填，常用于食品、日用品、五金零件等包装。透明度高可直观内容物，密封后可手动或机器封口。支持尺寸定制及表面印刷，适用于零售、物流及工业领域。",
                items: [
                    {
                        id: "hDPE-flat-mouth",
                        name: "平口袋-HDPE袋",
                        image: "images/product/平口袋-HDPE袋.jpg",
                        description: "HDPE材料，平口设计，适用于多种包装需求。"
                    },
                    {
                        id: "lDPE-flat-mouth",
                        name: "平口袋-LDPE袋",
                        image: "images/product/平口袋-LDPE袋.jpg",
                        description: "LDPE材料，平口设计，柔软耐用。"
                    }
                ]
            },
            "folded": {
                title: "折边袋",
                description: "拆边袋是侧边设有易撕压线或易拆结构的包装袋，其边缘经特殊工艺处理，可沿预设线轻松撕开，无需工具辅助，开袋便捷。常用于小商品、电子元件、药品等包装，兼具密封防潮与快速取用功能。支持定制尺寸及印刷，适用于零售，是兼顾实用性与效率的轻型包装解决方案。",
                items: [
                    {
                        id: "lDPE-folded",
                        name: "LDPE折边袋",
                        image: "images/product/LDPE折边袋.jpg",
                        description: "LDPE材料，折边设计，使用方便。"
                    }
                ]
            },
            "square-bottom": {
                title: "方底袋",
                description: "其底部平整且结构稳定，可直立摆放，容量较大，便于商品展示与收纳。袋口常搭配自封条、手提孔或热封设计，便于开合与携带。具有防水防潮、抗撕裂性，适用于食品、日用品、化妆品、服装等零售包装，兼具实用性与美观性。支持不同规格定制及印刷。",
                items: [
                    {
                        id: "lDPE-square-bottom",
                        name: "LDPE方底袋",
                        image: "images/product/LDPE方底袋.jpg",
                        description: "LDPE材料，方底设计，稳定性好。"
                    }
                ]
            }
        }
    },
    // 复合袋
    "composite": {
        title: "复合袋",
        description: "复合袋是由多种材料复合制成的包装袋，具有优异的阻隔性能和机械强度。",
        subCategories: {
            "aluminum": {
                title: "铝箔袋",
                description: "铝箔袋是以铝箔与塑料薄膜复合制成的多层包装袋，具备高阻隔性，防潮、避光、隔氧、防静电，延长内容物保质期。适用于食品、药品、精密电子元件等需严苛防护的领域。轻便柔韧但抗穿刺，部分可抽真空或添加自封条。虽铝材可回收，但复合结构难降解，需分类处理以减少环境负担，是工业与消费级高端包装的常见选择。",
                items: [
                    {
                        id: "aluminum-foil-bag",
                        name: "铝箔袋",
                        image: "images/product/铝箔袋.png",
                        description: "铝箔材料，阻隔性能好，适用于食品包装。"
                    }
                ]
            },
            "vacuum": {
                title: "真空袋",
                description: "真空袋是专为抽真空设计的密封包装，多由多层复合材料制成，通过抽气设备排出空气后热封，隔绝氧气与湿气，延缓食品氧化腐败或电子元件受潮。具有高阻隔性、耐穿刺、可高温灭菌（部分材质），广泛用于肉类、海鲜、腌制品保鲜，以及精密器械、医药防霉防氧化。部分含纹理表面防滑，支持定制尺寸与印刷。",
                items: [
                    {
                        id: "vacuum-bag",
                        name: "真空袋",
                        image: "images/product/真空袋.jpg",
                        description: "专业真空包装，延长食品保鲜期。"
                    }
                ]
            }
        }
    }
};
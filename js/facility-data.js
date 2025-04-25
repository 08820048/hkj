// 设备数据配置
const facilityData = {
    "FQL-1600PA": {
        id: "FQL-1600PA",
        name: {
            zh: "FQL-1600PA型电脑控制分切机",
            en: "FQL-1600PA Computer Control Slitting Machine"
        },
        image: "images/facilities/FQL-1600PA型电脑控制分切机_PhotoGrid.png",
        intro: {
            zh: "FQL-1600PA型电脑控制分切机（圆刀、平刀选用）是一款适用于各类白膜、印刷膜、复合膜、纸张等材质进行分切的理想设备。该设备是一款自动化程度高，性能稳定的分切设备。",
            en: "The FQL-1600PA Computer Control Slitting Machine (with optional round knife and flat knife) is an ideal equipment for slitting various white films, printed films, composite films, and paper materials. This is a high-automation, stable-performance slitting equipment."
        },
        features: {
            zh: [
                "触摸屏人机界面及PLC可编程控制器集中控制",
                "矢量变频电机及电控精密气胀滑差轴传动",
                "PLC自动计算卷径及控制气压实现收卷张力及滑差控制",
                "矢量变频电机传动实现恒线速度控制",
                "LPC&EPC（跟边跟线）光电静态自动纠偏系统"
            ],
            en: [
                "Touch screen HMI and PLC programmable controller centralized control",
                "Vector frequency conversion motor and electronic control precision air expansion slip shaft transmission",
                "PLC automatic calculation of roll diameter and air pressure control for winding tension and slip control",
                "Vector frequency conversion motor drive for constant linear speed control",
                "LPC & EPC (edge and line following) photoelectric static automatic correction system"
            ]
        },
        details: {
            "适用材料": {
                zh: [
                    "各类白膜",
                    "印刷膜",
                    "复合膜",
                    "纸张"
                ],
                en: [
                    "Various white films",
                    "Printed films",
                    "Composite films",
                    "Paper materials"
                ]
            },
            "产品特点": {
                zh: [
                    "自动化程度高",
                    "性能稳定",
                    "操作简单",
                    "分切精度高",
                    "适用范围广"
                ],
                en: [
                    "High automation",
                    "Stable performance",
                    "Easy operation",
                    "High slitting accuracy",
                    "Wide application range"
                ]
            }
        }
    },
    "JGZ-1300": {
        id: "JGZ-1300",
        name: {
            zh: "JGZ-1300型电脑控制无拉伸底封制袋机",
            en: "JGZ-1300 Computer Control Non-stretch Bottom Sealing Bag Making Machine"
        },
        image: "images/facilities/JGZ-1300型电脑控制无拉伸底封制袋机_PhotoGrid.png",
        intro: {
            zh: "JGZ-1300型电脑控制无拉伸底封制袋机是一款自动化程度高，使用性能优越，技术性能稳定，一经推出，深受用户好评和推崇。",
            en: "The JGZ-1300 Computer Control Non-stretch Bottom Sealing Bag Making Machine is a highly automated, superior performance, and stable technical performance equipment that has been well received and highly praised by users since its launch."
        },
        features: {
            zh: [
                "电脑控制，操作简单",
                "无拉伸底封，保证产品质量",
                "高速生产，效率高",
                "自动化程度高",
                "技术性能稳定"
            ],
            en: [
                "Computer control, easy operation",
                "Non-stretch bottom sealing, ensuring product quality",
                "High-speed production, high efficiency",
                "High automation",
                "Stable technical performance"
            ]
        },
        details: {
            "适用材料": {
                zh: [
                    "筒膜（高压低压）",
                    "药包",
                    "化工",
                    "水产类抽真空用"
                ],
                en: [
                    "Tube film (high/low pressure)",
                    "Pharmaceutical packaging",
                    "Chemical industry",
                    "Vacuum packaging for aquatic products"
                ]
            },
            "产品特点": {
                zh: [
                    "自动化程度高",
                    "使用性能优越",
                    "技术性能稳定",
                    "深受用户好评"
                ],
                en: [
                    "High automation",
                    "Superior performance",
                    "Stable technical performance",
                    "Well received by users"
                ]
            }
        }
    },
    "JGZ-500": {
        id: "JGZ-500",
        name: {
            zh: "JGZ-500型电脑控制双通道制袋机",
            en: "JGZ-500 Computer Control Dual-channel Bag Making Machine"
        },
        image: "images/facilities/JGZ-500型电脑控制双通道制袋机_PhotoGrid.png",
        intro: {
            zh: "JGZ-500型电脑控制双通道制袋机是一款自动化程度高，使用性能优越，技术性能扎实的制袋机。",
            en: "The JGZ-500 Computer Control Dual-channel Bag Making Machine is a highly automated, superior performance, and solid technical performance bag making machine."
        },
        features: {
            zh: [
                "双通道设计，提高生产效率",
                "电脑控制，操作简单",
                "精准定位，保证产品质量",
                "自动化程度高",
                "技术性能扎实"
            ],
            en: [
                "Dual-channel design, improving production efficiency",
                "Computer control, easy operation",
                "Precise positioning, ensuring product quality",
                "High automation",
                "Solid technical performance"
            ]
        },
        details: {
            "适用材料": {
                zh: [
                    "筒膜（高压低压）",
                    "各种彩袋",
                    "手挽袋"
                ],
                en: [
                    "Tube film (high/low pressure)",
                    "Various color bags",
                    "Handle bags"
                ]
            },
            "产品特点": {
                zh: [
                    "自动化程度高",
                    "使用性能优越",
                    "技术性能扎实",
                    "双通道设计提高效率"
                ],
                en: [
                    "High automation",
                    "Superior performance",
                    "Solid technical performance",
                    "Dual-channel design improves efficiency"
                ]
            }
        }
    },
    "JZR-500": {
        id: "JZR-500",
        name: {
            zh: "JZR-500型电脑控制热封热切制袋机",
            en: "JZR-500 Computer Control Heat Sealing and Cutting Bag Making Machine"
        },
        image: "images/facilities/JZR-500型电脑控制热封热切制袋机(全自动高速)_PhotoGrid.png",
        intro: {
            zh: "JZR-500型电脑控制热封热切制袋机是一款适用于OPP、PE、复合膜的热封热切制袋设备。该设备是一款自动化程度高，性能稳定的分切复卷设备。",
            en: "The JZR-500 Computer Control Heat Sealing and Cutting Bag Making Machine is suitable for heat sealing and cutting of OPP, PE, and composite films. This is a highly automated, stable-performance slitting and rewinding equipment."
        },
        features: {
            zh: [
                "全自动高速生产",
                "电脑控制，操作简单",
                "热封热切，保证产品质量",
                "自动化程度高",
                "性能稳定"
            ],
            en: [
                "Fully automatic high-speed production",
                "Computer control, easy operation",
                "Heat sealing and cutting, ensuring product quality",
                "High automation",
                "Stable performance"
            ]
        },
        details: {
            "适用材料": {
                zh: [
                    "OPP",
                    "PE",
                    "复合膜"
                ],
                en: [
                    "OPP",
                    "PE",
                    "Composite films"
                ]
            },
            "产品特点": {
                zh: [
                    "自动化程度高",
                    "性能稳定",
                    "热封热切工艺",
                    "全自动高速生产"
                ],
                en: [
                    "High automation",
                    "Stable performance",
                    "Heat sealing and cutting process",
                    "Fully automatic high-speed production"
                ]
            }
        }
    },
    "FJGR-1300": {
        id: "FJGR-1300",
        name: {
            zh: "FJGR-1300型全自动高速熔边机",
            en: "FJGR-1300 Fully Automatic High-speed Edge Melting Machine"
        },
        image: "images/facilities/FJGR-1300型全自动高速熔边机_PhotoGrid.png",
        intro: {
            zh: "FJGR-1300型全自动高速熔边机是一款适用于PE片材熔成筒料（卫生巾、尿不湿、手提袋）等的制袋设备，该设备自动化程度高，使用性能优越。",
            en: "The FJGR-1300 Fully Automatic High-speed Edge Melting Machine is suitable for PE sheet material melting into tube material (sanitary napkins, diapers, shopping bags) and other bag making equipment. This equipment has high automation and superior performance."
        },
        features: {
            zh: [
                "全自动高速生产",
                "电脑控制，操作简单",
                "精准熔边，保证产品质量",
                "自动化程度高",
                "使用性能优越"
            ],
            en: [
                "Fully automatic high-speed production",
                "Computer control, easy operation",
                "Precise edge melting, ensuring product quality",
                "High automation",
                "Superior performance"
            ]
        },
        details: {
            "适用材料": {
                zh: [
                    "PE片材熔成筒料",
                    "卫生巾",
                    "尿不湿",
                    "手提袋"
                ],
                en: [
                    "PE sheet material melting into tube material",
                    "Sanitary napkins",
                    "Diapers",
                    "Shopping bags"
                ]
            },
            "技术参数": {
                zh: [
                    "对折速度：180M/min",
                    "热熔速度：150M/min视材料而定",
                    "放卷Φ：800mm",
                    "收卷Φ：800mm",
                    "放卷宽度：1000mm",
                    "收卷宽度：500mm"
                ],
                en: [
                    "Folding speed: 180M/min",
                    "Heat melting speed: 150M/min depending on material",
                    "Unwinding Φ: 800mm",
                    "Rewinding Φ: 800mm",
                    "Unwinding width: 1000mm",
                    "Rewinding width: 500mm"
                ]
            },
            "产品特点": {
                zh: [
                    "自动化程度高",
                    "使用性能优越",
                    "高速生产",
                    "精准熔边"
                ],
                en: [
                    "High automation",
                    "Superior performance",
                    "High-speed production",
                    "Precise edge melting"
                ]
            }
        }
    }
}; 
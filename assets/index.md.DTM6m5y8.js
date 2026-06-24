import { _ as _export_sfc, o as openBlock, c as createElementBlock, F as Fragment, B as renderList, j as createBaseVNode, t as toDisplayString, a as createTextVNode, n as normalizeClass, C as resolveComponent, b as createBlock, e as createCommentVNode, af as createStaticVNode, E as createVNode } from "./chunks/framework.Bobd30gA.js";
const yituLogo = "/assets/6_yitutech_logo.C51oo3sm.jpeg";
const _hoisted_1$2 = { class: "experience-timeline" };
const _hoisted_2$2 = { class: "experience-item__content" };
const _hoisted_3$2 = { class: "experience-item__date-row" };
const _hoisted_4$2 = ["src", "alt"];
const _hoisted_5$2 = { class: "experience-item__date" };
const _hoisted_6$2 = { class: "experience-item__title" };
const _hoisted_7$2 = { class: "experience-item__role" };
const _hoisted_8$2 = { class: "experience-item__org" };
const _hoisted_9$2 = { class: "experience-item__desc" };
const _hoisted_10$2 = ["href"];
const _hoisted_11$2 = { key: 1 };
const _sfc_main$3 = {
  __name: "HomeExperienceTimeline",
  setup(__props) {
    const experiences = [
      {
        date: "Sep. 2024 - Jan. 2025",
        role: "Multimodal LLM Intern",
        organization: "YITU",
        description: [
          { text: "Mentor: " },
          {
            label: "Zhichao Zhang",
            href: "https://scholar.google.com/citations?hl=zh-CN&user=-UGfavEAAAAJ&view_op=list_works&sortby=pubdate"
          }
        ],
        logo: yituLogo,
        side: "right"
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        (openBlock(), createElementBlock(Fragment, null, renderList(experiences, (item) => {
          return createBaseVNode("article", {
            key: `${item.date}-${item.role}`,
            class: normalizeClass(["experience-item", `experience-item--${item.side}`])
          }, [
            createBaseVNode("div", _hoisted_2$2, [
              createBaseVNode("div", _hoisted_3$2, [
                createBaseVNode("img", {
                  class: "experience-item__logo",
                  src: item.logo,
                  alt: item.organization
                }, null, 8, _hoisted_4$2),
                createBaseVNode("div", _hoisted_5$2, toDisplayString(item.date), 1)
              ]),
              createBaseVNode("h3", _hoisted_6$2, [
                createBaseVNode("span", _hoisted_7$2, toDisplayString(item.role), 1),
                _cache[0] || (_cache[0] = createBaseVNode("span", { class: "experience-item__at" }, "@", -1)),
                createBaseVNode("span", _hoisted_8$2, toDisplayString(item.organization), 1)
              ]),
              createBaseVNode("p", _hoisted_9$2, [
                typeof item.description === "string" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createTextVNode(toDisplayString(item.description), 1)
                ], 64)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(item.description, (part, index) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: part.href || part.label || part.text || index
                  }, [
                    part.href ? (openBlock(), createElementBlock("a", {
                      key: 0,
                      href: part.href,
                      target: "_blank",
                      rel: "noreferrer"
                    }, toDisplayString(part.label), 9, _hoisted_10$2)) : (openBlock(), createElementBlock("span", _hoisted_11$2, toDisplayString(part.text), 1))
                  ], 64);
                }), 128))
              ])
            ]),
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "experience-item__axis" }, [
              createBaseVNode("span", { class: "experience-item__dot" })
            ], -1)),
            _cache[2] || (_cache[2] = createBaseVNode("div", { class: "experience-item__spacer" }, null, -1))
          ], 2);
        }), 64))
      ]);
    };
  }
};
const HomeExperienceTimeline = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4cbf5c21"]]);
const _hoisted_1$1 = { class: "home-profile-grid" };
const _hoisted_2$1 = { class: "home-profile-column" };
const _hoisted_3$1 = { class: "home-interest-list" };
const _hoisted_4$1 = { class: "home-interest-item__name" };
const _hoisted_5$1 = { class: "home-interest-item__links" };
const _hoisted_6$1 = ["href"];
const _hoisted_7$1 = { class: "home-profile-column" };
const _hoisted_8$1 = { class: "home-education-list" };
const _hoisted_9$1 = { class: "home-education-item__school" };
const _hoisted_10$1 = { class: "home-education-item__details" };
const _hoisted_11$1 = ["href"];
const _hoisted_12$1 = { key: 1 };
const _sfc_main$2 = {
  __name: "HomeProfileIntro",
  setup(__props) {
    const interestGroups = [
      {
        title: "Universal Low-Level Vision",
        links: [
          { label: "PALoss", href: "https://arxiv.org/pdf/2604.08172" }
        ]
      },
      {
        title: "Low-Light Image Enhancement",
        links: [
          { label: "ATP", href: "https://arxiv.org/pdf/2603.15472" }
        ]
      },
      {
        title: "3D Reconstruction",
        links: [
          { label: "IOVS4NeRF", href: "https://arxiv.org/pdf/2407.18611" },
          { label: "TRes-NeRF", href: "https://drive.google.com/file/d/1XeIqlg95fsuKsRB9YEx9KvXf6-Ru6zF4/view" }
        ]
      }
    ];
    const educations = [
      {
        school: "Tianjin University",
        details: [
          {
            prefix: "M.S. in ",
            label: "X-Lab",
            href: "https://tjuxlab.github.io/team.html",
            suffix: ", Sep.2025 - Now"
          },
          {
            prefix: "Mentor: ",
            label: "Prof. Xiaojie Guo",
            href: "https://sites.google.com/view/xjguo"
          }
        ]
      },
      {
        school: "Nanchang University",
        details: [
          "B.Eng in Software Engineering, Sep.2021 - Jun.2025",
          {
            prefix: "Mentor: ",
            label: "Assoc. Prof. Wei Li",
            href: "https://teacher.ncu.edu.cn/publish/092744/"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("section", _hoisted_2$1, [
          _cache[0] || (_cache[0] = createBaseVNode("h3", { class: "home-profile-column__title" }, "⭐️ Research Interests", -1)),
          createBaseVNode("div", _hoisted_3$1, [
            (openBlock(), createElementBlock(Fragment, null, renderList(interestGroups, (item) => {
              return createBaseVNode("div", {
                key: item.title,
                class: "home-interest-item"
              }, [
                createBaseVNode("div", _hoisted_4$1, toDisplayString(item.title), 1),
                createBaseVNode("div", _hoisted_5$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(item.links, (link) => {
                    return openBlock(), createElementBlock("a", {
                      key: link.label,
                      href: link.href,
                      target: "_blank",
                      rel: "noreferrer"
                    }, " [" + toDisplayString(link.label) + "] ", 9, _hoisted_6$1);
                  }), 128))
                ])
              ]);
            }), 64))
          ])
        ]),
        createBaseVNode("section", _hoisted_7$1, [
          _cache[1] || (_cache[1] = createBaseVNode("h3", { class: "home-profile-column__title" }, "🎓️ Education", -1)),
          createBaseVNode("div", _hoisted_8$1, [
            (openBlock(), createElementBlock(Fragment, null, renderList(educations, (education) => {
              return createBaseVNode("div", {
                key: education.school,
                class: "home-education-item"
              }, [
                createBaseVNode("div", _hoisted_9$1, toDisplayString(education.school), 1),
                createBaseVNode("div", _hoisted_10$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(education.details, (detail) => {
                    return openBlock(), createElementBlock("div", {
                      key: typeof detail === "string" ? detail : detail.label
                    }, [
                      typeof detail !== "string" && detail.href ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        createBaseVNode("span", null, toDisplayString(detail.prefix), 1),
                        createBaseVNode("a", {
                          href: detail.href,
                          target: "_blank",
                          rel: "noreferrer"
                        }, toDisplayString(detail.label), 9, _hoisted_11$1),
                        createBaseVNode("span", null, toDisplayString(detail.suffix || ""), 1)
                      ], 64)) : (openBlock(), createElementBlock("span", _hoisted_12$1, toDisplayString(detail), 1))
                    ]);
                  }), 128))
                ])
              ]);
            }), 64))
          ])
        ])
      ]);
    };
  }
};
const HomeProfileIntro = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2709b037"]]);
const tresImage = "/assets/0_TRes-NeRF.DSbXcnll.png";
const iovsImage = "/assets/1_IOVS4NeRF.BYKZSPU2.png";
const atpImage = "/assets/2_ATP.CRY8sY73.png";
const palImage = "/assets/3_PALoss.BTLpqk2Q.png";
const _hoisted_1 = { class: "paper-page" };
const _hoisted_2 = { class: "paper-page__header" };
const _hoisted_3 = ["id"];
const _hoisted_4 = {
  class: "paper-list",
  "aria-label": "Paper List"
};
const _hoisted_5 = { class: "paper-item__thumb" };
const _hoisted_6 = ["src", "alt"];
const _hoisted_7 = { class: "paper-item__network-tag" };
const _hoisted_8 = { class: "paper-item__body" };
const _hoisted_9 = { class: "paper-item__title" };
const _hoisted_10 = ["innerHTML"];
const _hoisted_11 = { class: "paper-item__footer" };
const _hoisted_12 = { class: "paper-item__links" };
const _hoisted_13 = ["href"];
const _hoisted_14 = { class: "paper-item__year" };
const _hoisted_15 = {
  class: "competition-section",
  "aria-label": "Competitions"
};
const _hoisted_16 = ["id"];
const _hoisted_17 = { class: "competition-list" };
const _hoisted_18 = ["innerHTML"];
const _sfc_main$1 = {
  __name: "PaperListPage",
  props: {
    anchorId: {
      type: String,
      default: ""
    },
    competitionAnchorId: {
      type: String,
      default: ""
    },
    showUpdatedAt: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const props = __props;
    const papers = [
      {
        title: "On the Global Photometric Alignment for Low-Level Vision",
        networkName: "PALoss",
        authors: "Mingjia Li<sup>†</sup>, <strong>Tianle Du</strong><sup>†</sup>, Hainuo Wang, Qiming Hu, Xiaojie Guo*",
        venueShort: "arXiv 2026",
        image: palImage,
        links: [
          { label: "Paper", href: "https://arxiv.org/pdf/2604.08172" }
        ]
      },
      {
        title: "Anchor then Polish for Low-light Enhancement",
        networkName: "ATP",
        authors: "<strong>Tianle Du</strong><sup>†</sup>, Mingjia Li<sup>†</sup>, Hainuo Wang, Xiaojie Guo*",
        venueShort: "arXiv 2026",
        image: atpImage,
        links: [
          { label: "Paper", href: "https://arxiv.org/pdf/2603.15472" },
          { label: "Project", href: "https://tianledu.github.io/ATP/" }
        ]
      },
      {
        title: "IOVS4NeRF: Incremental Optimal View Selection for Large-Scale NeRFs",
        networkName: "IOVS4NeRF",
        authors: "Jingpeng Xie<sup>†</sup>, Shiyu Tan<sup>†</sup>, Yuanlei Wang, <strong>Tianle Du</strong>, Yifei Xue*, Yizhen Lao*",
        venueShort: "ICASSP 2025",
        image: iovsImage,
        links: [
          { label: "Paper", href: "https://arxiv.org/pdf/2407.18611" }
        ]
      },
      {
        title: "TRes-NeRF: Temporal Residual Neural Radiance Fields for Monocular Video Dynamic Human Body Reconstruction",
        networkName: "TRes-NeRF",
        authors: "<strong>Tianle Du</strong>, Jie Wang, Xiaolong Xie, Wei Li*, Pengxiang Su, Jie Liu",
        venueShort: "JEI 2024",
        image: tresImage,
        links: [
          { label: "Paper", href: "https://drive.google.com/file/d/1XeIqlg95fsuKsRB9YEx9KvXf6-Ru6zF4/view" }
        ]
      }
    ];
    const competitions = [
      "Jun. 2023: The 25th China Robot and Artificial Intelligence Competition, <strong>First Prize</strong>",
      "Sep. 2023: The 8th China University Computer Competition: Network Technology Challenge, Third Prize",
      "Dec. 2022: The 8th Shuwei Cup International College Student Mathematical Modeling Challenge, Second Prize",
      "Aug. 2023: The 16th China College Students Computer Design Competition, Third Prize",
      "May. 2023: The 14th National Software and Information Technology Professional Talent Competition, Second Prize at the Provincial Level",
      "Jun. 2023: The 18th Jiangxi Provincial College Student Computer Competition, Second Prize at the Provincial Level"
    ];
    return (_ctx, _cache) => {
      const _component_AutoLastUpdated = resolveComponent("AutoLastUpdated");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("header", _hoisted_2, [
          createBaseVNode("h2", {
            id: props.anchorId || void 0,
            class: "paper-page__title"
          }, "📄 Publications", 8, _hoisted_3)
        ]),
        createBaseVNode("section", _hoisted_4, [
          (openBlock(), createElementBlock(Fragment, null, renderList(papers, (paper) => {
            return createBaseVNode("article", {
              key: paper.title,
              class: "paper-item"
            }, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("img", {
                  src: paper.image,
                  alt: paper.title
                }, null, 8, _hoisted_6),
                createBaseVNode("span", _hoisted_7, toDisplayString(paper.networkName), 1)
              ]),
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("h2", _hoisted_9, toDisplayString(paper.title), 1),
                createBaseVNode("p", {
                  class: "paper-item__authors",
                  innerHTML: paper.authors
                }, null, 8, _hoisted_10),
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("div", _hoisted_12, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(paper.links, (link) => {
                      return openBlock(), createElementBlock("a", {
                        key: link.label,
                        href: link.href,
                        target: "_blank",
                        rel: "noreferrer"
                      }, " [" + toDisplayString(link.label) + "] ", 9, _hoisted_13);
                    }), 128))
                  ]),
                  createBaseVNode("span", _hoisted_14, toDisplayString(paper.venueShort), 1)
                ])
              ])
            ]);
          }), 64))
        ]),
        createBaseVNode("section", _hoisted_15, [
          createBaseVNode("h2", {
            id: props.competitionAnchorId || void 0,
            class: "paper-page__title competition-section__title"
          }, " 🏆 Competitions ", 8, _hoisted_16),
          createBaseVNode("ul", _hoisted_17, [
            (openBlock(), createElementBlock(Fragment, null, renderList(competitions, (item) => {
              return createBaseVNode("li", {
                key: item,
                innerHTML: item
              }, null, 8, _hoisted_18);
            }), 64))
          ])
        ]),
        props.showUpdatedAt ? (openBlock(), createBlock(_component_AutoLastUpdated, {
          key: 0,
          "show-divider": ""
        })) : createCommentVNode("", true)
      ]);
    };
  }
};
const PaperListPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7e8e32ff"]]);
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"缝合算法的HD_Swag","text":"灵魂和身体都要在路上","tagline":"代码🤖|健身💪|旅行🌍|摄影📷|篮球🏀|游戏🎮","image":{"src":"/logo.png","alt":"史迪仔"},"actions":[{"theme":"brand","text":"Start","link":"#about-me"},{"theme":"alt","text":"Experiences","link":"#my-background"},{"theme":"alt","text":"Publications","link":"#my-papers"},{"theme":"alt","text":"Competitions","link":"#my-competitions"}]}},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdatedText":"2026-04-10 15:54:35"}');
const __default__ = { name: "index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_AutoLastUpdated = resolveComponent("AutoLastUpdated");
      return openBlock(), createElementBlock("div", null, [
        _cache[0] || (_cache[0] = createStaticVNode('<h2 id="about-me" class="home-section-title">🪪 About me</h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>追风赶月莫停留，平芜尽处是春山</span></span></code></pre></div><p>Welcome to my blog! I am <code>Tianle Du</code>, a master&#39;s student at the School of Software Engineering, <code>Tianjin University</code>. Under the supervision of <a href="https://sites.google.com/view/xjguo" target="_blank" rel="noreferrer">Prof. Xiaojie Guo</a>, my research focuses on Computer Vision, with a particular emphasis on Low-Light Image Enhancement and 3D Reconstruction.</p>', 3)),
        createVNode(HomeProfileIntro),
        _cache[1] || (_cache[1] = createBaseVNode("h2", {
          id: "my-background",
          class: "home-section-title"
        }, "🎞️ Experiences", -1)),
        createVNode(HomeExperienceTimeline),
        createVNode(PaperListPage, {
          "anchor-id": "my-papers",
          "competition-anchor-id": "my-competitions",
          "show-updated-at": false
        }),
        createVNode(_component_AutoLastUpdated, { "show-divider": "" })
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};

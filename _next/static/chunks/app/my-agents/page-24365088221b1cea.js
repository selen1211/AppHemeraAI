(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [991],
  {
    19376: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 21911)),
        Promise.resolve().then(a.bind(a, 74909));
    },
    21911: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return F;
        },
      });
      var s = a(57437),
        l = a(66648),
        n = a(2265),
        r = {
          src: "/_next/static/media/createdAgentImage.696e7d96.svg",
          height: 163,
          width: 1239,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAABlBMVEUAVVUAPz9H/wHlAAAAAnRSTlMDBFrTWuIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAARSURBVHicY2BkYGBgYGRgAAAAFAADVw+IsQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 1,
        },
        i = a(37692),
        d = a(97118),
        o = a(14536),
        c = a(62408),
        x = a(88726),
        u = a(28730),
        h = a(23051),
        m = a(44694),
        f = a(4867),
        A = a(37440);
      let g = m.fC;
      m.xz;
      let p = m.h_;
      m.x8;
      let w = n.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, s.jsx)(m.aV, {
          ref: t,
          className: (0, A.cn)(
            "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            a
          ),
          ...l,
        });
      });
      w.displayName = m.aV.displayName;
      let j = n.forwardRef((e, t) => {
        let { className: a, children: l, ...n } = e;
        return (0, s.jsxs)(p, {
          children: [
            (0, s.jsx)(w, {}),
            (0, s.jsxs)(m.VY, {
              ref: t,
              className: (0, A.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-neutral-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-neutral-800 dark:bg-neutral-950",
                a
              ),
              ...n,
              children: [
                l,
                (0, s.jsxs)(m.x8, {
                  className:
                    "absolute text-white  right-4 top-8 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-400",
                  children: [
                    (0, s.jsx)(f.Pxu, { className: "h-4 w-4" }),
                    (0, s.jsx)("span", {
                      className: "sr-only",
                      children: "Close",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      });
      (j.displayName = m.VY.displayName),
        (n.forwardRef((e, t) => {
          let { className: a, ...l } = e;
          return (0, s.jsx)(m.Dx, {
            ref: t,
            className: (0, A.cn)(
              "text-lg font-semibold leading-none tracking-tight",
              a
            ),
            ...l,
          });
        }).displayName = m.Dx.displayName),
        (n.forwardRef((e, t) => {
          let { className: a, ...l } = e;
          return (0, s.jsx)(m.dk, {
            ref: t,
            className: (0, A.cn)(
              "text-sm text-neutral-500 dark:text-neutral-400",
              a
            ),
            ...l,
          });
        }).displayName = m.dk.displayName);
      var N = (e) => {
          let {
            isOpen: t,
            onOpenChange: a,
            children: l,
            width: n,
            hideCloseIcon: r,
          } = e;
          return (0, s.jsx)(g, {
            open: t,
            modal: !0,
            onOpenChange: a,
            children: (0, s.jsxs)(j, {
              "aria-describedby": void 0,
              className: "".concat(
                r && "[&>button]:hidden",
                " px-2 shadow-none border-none bg-transparent sm:max-w-full"
              ),
              style: { maxWidth: n ? "".concat(n, "px") : "500px" },
              children: [(0, s.jsx)(m.$N, { className: "sr-only" }), l],
            }),
          });
        },
        y = a(37261),
        b = a(66676),
        v = (e) => {
          let { onClose: t, threadId: a, userId: l } = e,
            [r, i] = (0, n.useState)(""),
            [d, o] = (0, n.useState)(!1),
            [u, h] = (0, n.useState)(null),
            m = async (e) => {
              try {
                if (!l) {
                  x.ZP.error("User not authenticated. Please log in.");
                  return;
                }
                if (!a) {
                  x.ZP.error(
                    "Thread ID is missing. Please create a thread first."
                  );
                  return;
                }
                h(e);
              } catch (e) {
                o(!1),
                  console.error("Failed to upload file:", e),
                  x.ZP.error("File upload failed.");
              }
            },
            f = async (e, a) => {
              try {
                if (!l) {
                  x.ZP.error("User not authenticated. Please log in first.");
                  return;
                }
                if (!e) {
                  x.ZP.error(
                    "Thread ID is missing. Please create a thread first."
                  );
                  return;
                }
                if (!u && !a) {
                  x.ZP.error(
                    "Please upload a file or enter system information."
                  );
                  return;
                }
                o(!0),
                  u &&
                    a &&
                    (console.log("file", u),
                    (await c.Z.trainAgent(u, l, e, a)) &&
                      (x.ZP.success("File uploaded successfully!"),
                      i(""),
                      h(null),
                      t(),
                      o(!1)));
              } catch (e) {
                o(!1),
                  console.error("Failed to update system info:", e),
                  x.ZP.error("Failed to update system info.");
              }
            };
          return (0, s.jsxs)("div", {
            className:
              "bg-[#46B2A30A] rounded-2xl flex flex-col gap-6 shadow-heroInnerShadow px-6 py-8",
            children: [
              d && (0, s.jsx)(b.Z, {}),
              (0, s.jsx)("h1", {
                className: "text-white text-3xl",
                children: "Train Agent",
              }),
              (0, s.jsx)("input", {
                type: "text",
                placeholder: "System Information",
                className:
                  "w-full h-12 focus:outline-none rounded-xl placeholder:text-[#46B2A34D] bg-[#0C1A1F] border border-[#3A464A] text-white  px-4",
                value: r,
                onChange: (e) => {
                  i(e.target.value);
                },
              }),
              u &&
                (0, s.jsx)("div", {
                  className: "bg-white bg-opacity-10 py-1.5 px-4",
                  children: (0, s.jsx)("p", {
                    className: "text-white",
                    children: u ? u.name : "Upload File",
                  }),
                }),
              (0, s.jsxs)("div", {
                className:
                  "flex items-center flex-col w-full sm:flex-row gap-4 mt-2",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "bg-[#0E605705] rounded-full w-full  h-14 flex items-center justify-center gap-2 shadow-buttonInnerShadow text-white text-lg",
                    onClick: () => {
                      var e;
                      return null ===
                        (e = document.getElementById("fileInput")) ||
                        void 0 === e
                        ? void 0
                        : e.click();
                    },
                    children: [
                      (0, s.jsx)(y.oSY, { className: "text-white text-2xl" }),
                      (0, s.jsx)("input", {
                        id: "fileInput",
                        type: "file",
                        accept: ".txt,.pdf,application/pdf,text/plain",
                        style: { display: "none" },
                        onChange: (e) => {
                          e.target.files && m(e.target.files[0]);
                        },
                      }),
                      "Upload File",
                    ],
                  }),
                  (0, s.jsx)("button", {
                    className: "bg-[#0E6057] rounded-full ".concat(
                      u ? "w-[257px] mx-auto" : "w-full",
                      "  h-14 flex items-center justify-center gap-2 shadow-buttonInnerShadow text-white text-lg"
                    ),
                    onClick: () => {
                      r && u
                        ? f(a, r)
                        : x.ZP.error("Please enter system information.");
                    },
                    disabled: !u || !r || d,
                    children: "Submit",
                  }),
                ],
              }),
            ],
          });
        },
        I = (e) => {
          let {
              onClose: t,
              assistantId: a,
              userId: l,
              handleDeleteAgent: n,
              isLoading: r,
            } = e,
            i = async () => {
              await n(a), t();
            };
          return (0, s.jsxs)("div", {
            className:
              "bg-[#0A1619] shadow-heroInnerShadow rounded-xl px-4 h-[300px] flex items-center justify-center flex-col gap-4",
            children: [
              r && (0, s.jsx)(b.Z, {}),
              (0, s.jsx)(h.qy0, {
                className: "text-4xl sm:text-5xl  text-[#FF0004]",
              }),
              (0, s.jsx)("p", {
                className: "text-white text-center font-light sm:text-lg",
                children: "Are you sure you want to delete the agent?",
              }),
              (0, s.jsxs)("div", {
                className:
                  "flex justify-center items-center flex-col w-full sm:flex-row gap-4",
                children: [
                  (0, s.jsx)("button", {
                    className:
                      "bg-[#46B2A30A] w-full sm:w-[185px] h-11 rounded-full focus:outline-none shadow-deleteModalBtnShadow text-white font-medium ",
                    onClick: t,
                    children: "Cancel",
                  }),
                  (0, s.jsx)("button", {
                    className:
                      "bg-[#FF00042E] w-full sm:w-[185px] h-11 rounded-full focus:outline-none shadow-deleteModalBtnShadow text-[#FF0004] font-medium \n            ".concat(
                        r && "cursor-not-allowed opacity-50",
                        "\n            "
                      ),
                    onClick: () => {
                      i();
                    },
                    disabled: r,
                    children: "Delete",
                  }),
                ],
              }),
            ],
          });
        },
        k = (e) => {
          let { agent: t, api: a, onDelete: l } = e,
            r = "text-white sm:text-lg flex-1",
            [i, d] = (0, n.useState)(!1),
            [o, u] = (0, n.useState)(!1),
            [m, f] = (0, n.useState)(!1),
            A = async (e) => {
              try {
                d(!0),
                  await c.Z.deleteAgent(e),
                  l(e),
                  d(!1),
                  x.ZP.success("Agent deleted successfully");
              } catch (e) {
                d(!1),
                  console.error("Failed to delete agent:", e),
                  x.ZP.error("Failed to delete agent.");
              }
            };
          return (0, s.jsxs)("div", {
            children: [
              (0, s.jsx)(N, {
                width: 653,
                onOpenChange: u,
                isOpen: o,
                children: (0, s.jsx)(v, {
                  onClose: () => u(!1),
                  threadId: t.assistantId,
                  userId: t.userId._id,
                }),
              }),
              (0, s.jsx)(N, {
                width: 653,
                hideCloseIcon: !0,
                onOpenChange: f,
                isOpen: m,
                children: (0, s.jsx)(I, {
                  onClose: () => f(!1),
                  assistantId: t.assistantId,
                  userId: t.userId._id,
                  handleDeleteAgent: A,
                  isLoading: i,
                }),
              }),
              (0, s.jsxs)("div", {
                className: "flex items-center justify-between py-3",
                children: [
                  (0, s.jsx)("h1", { className: r, children: t.agentName }),
                  (0, s.jsx)("h1", { className: r, children: t.category }),
                  (0, s.jsx)("h1", {
                    className: r,
                    children: new Date(t.createdAt).toLocaleDateString(),
                  }),
                  (0, s.jsx)("h1", {
                    className: r,
                    children: new Date(t.expiryDate).toLocaleDateString(),
                  }),
                  (0, s.jsx)("h1", { className: r, children: a || "N/A" }),
                  (0, s.jsx)("h1", {
                    className: r,
                    children: t.secret ? t.secret : "N/A",
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex-1 flex items-center gap-3",
                    children: [
                      (0, s.jsx)("button", {
                        className:
                          "w-[126px] rounded-full h-11 bg-[#0E605733] shadow-tableButtonShadow text-sm text-white",
                        onClick: () => u(!o),
                        children: "Train Agent",
                      }),
                      (0, s.jsx)(h.qy0, {
                        className: "text-[#FF0004] text-2xl cursor-pointer",
                        onClick: () => f(!0),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        F = () => {
          let e = "text-[#46B2A3] sm:text-lg flex-1",
            {
              userId: t,
              agents: a,
              setAgents: h,
              setApi: m,
              api: f,
            } = (0, d.Z)(),
            { address: A, isConnected: g, chainId: p } = (0, o.Zc)(),
            [w, j] = (0, n.useState)(!1),
            N = async () => {
              if (t && A && g)
                try {
                  if (!t || "default userId" === t) return;
                  j(!0);
                  let e = await c.Z.getAgents();
                  (null == e ? void 0 : e.agents)
                    ? (h(e.agents), m(e.api))
                    : h([]),
                    j(!1);
                } catch (e) {
                  j(!1),
                    console.error("Failed to list agents", e),
                    x.ZP.error("Failed to list agents.");
                } finally {
                  j(!1);
                }
            },
            y = (e) => {
              h(a.filter((t) => t.assistantId !== e));
            };
          return (
            (0, n.useEffect)(() => {
              h([]), N();
            }, [t]),
            (0, s.jsxs)("div", {
              className: "relative",
              children: [
                w && (0, s.jsx)(b.Z, {}),
                (0, s.jsx)("div", {
                  className:
                    "absolute top-12 sm:top-8 left-1/2 -translate-x-1/2 z-[-1] w-full mx-auto block",
                  children: (0, s.jsx)(l.default, {
                    src: r,
                    alt: "createdAgentImage",
                    className: "select-none max-xl:w-[800px] mx-auto block ",
                    draggable: !1,
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: "container pt-16 lg:pt-28",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "flex items-center flex-wrap gap-y-4 justify-between",
                      children: [
                        (0, s.jsx)("p", {
                          className:
                            "text-white text-xl sm:text-2xl  lg:text-3xl",
                          children: "My Agents",
                        }),
                        (0, s.jsx)("div", {
                          className: "",
                          children: (0, s.jsx)("div", {
                            className:
                              "bg-[#FFFFFF05] md:mx-auto flex items-center justify-center w-fit gap-3 rounded-full  px-4 py-3 shadow-heroInnerShadow",
                            children: (0, s.jsxs)("p", {
                              className:
                                "text-white sm:text-lg flex items-center justify-center gap-2",
                              children: [
                                (0, s.jsx)(i.irA, {
                                  className:
                                    "text-[#46B2A3] text-xl sm:text-2xl",
                                }),
                                "My Agents",
                              ],
                            }),
                          }),
                        }),
                        (0, s.jsx)("div", {}),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "inline-flex flex-col mt-5 sm:mt-8 overflow-x-auto w-full",
                      children: (0, s.jsx)("div", {
                        className: "w-full min-w-[1100px]",
                        children: (0, s.jsx)("div", {
                          className:
                            "bg-[#46B2A30A] rounded-xl shadow-heroInnerShadow pr-2 pl-3 sm:pl-8 py-6",
                          children: (0, s.jsxs)("div", {
                            className:
                              "max-h-[450px] overflow-y-auto table-scrollbar",
                            children: [
                              (0, s.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  (0, s.jsx)("h1", {
                                    className: e,
                                    children: "Agent Name",
                                  }),
                                  (0, s.jsx)("h1", {
                                    className: e,
                                    children: "Category",
                                  }),
                                  (0, s.jsx)("h1", {
                                    className: e,
                                    children: "Created Date",
                                  }),
                                  (0, s.jsx)("h1", {
                                    className: e,
                                    children: "Expiry Date",
                                  }),
                                  (0, s.jsx)("h1", {
                                    className: e,
                                    children: "API",
                                  }),
                                  (0, s.jsx)("h1", {
                                    className: e,
                                    children: "Key Secret",
                                  }),
                                  (0, s.jsx)("h1", {
                                    className: e,
                                    children: "Action",
                                  }),
                                ],
                              }),
                              (0, s.jsx)("div", {
                                children:
                                  (null == a ? void 0 : a.length) > 0
                                    ? null == a
                                      ? void 0
                                      : a.map((e, t) =>
                                          (0, s.jsx)(
                                            k,
                                            { api: f, agent: e, onDelete: y },
                                            t
                                          )
                                        )
                                    : (0, s.jsx)("div", {
                                        className:
                                          "min-h-[300px] flex items-center justify-center",
                                        children: (0, s.jsx)(u.Z, {}),
                                      }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
    37440: function (e, t, a) {
      "use strict";
      a.d(t, {
        cn: function () {
          return n;
        },
      });
      var s = a(44839),
        l = a(96164);
      function n() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, l.m6)((0, s.W)(t));
      }
    },
    66676: function (e, t, a) {
      "use strict";
      var s = a(57437),
        l = a(66648);
      a(2265);
      var n = a(76854);
      t.Z = () =>
        (0, s.jsx)("div", {
          className:
            "fixed bg-black bg-opacity-60 backdrop-blur-sm inset-0 w-full h-full z-50 flex flex-col justify-center items-center",
          children: (0, s.jsx)("div", {
            className: "animate-spin transition-all duration-1000",
            children: (0, s.jsx)(l.default, {
              src: n.default,
              alt: "loaderImg",
            }),
          }),
        });
    },
    28730: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = a(57437),
        l = a(66648);
      a(2265);
      var n = {
          src: "/_next/static/media/noDataImg.a7d4ceeb.svg",
          height: 60,
          width: 61,
          blurWidth: 0,
          blurHeight: 0,
        },
        r = () =>
          (0, s.jsxs)("div", {
            className: "flex items-center justify-center flex-col gap-2",
            children: [
              (0, s.jsx)(l.default, { src: n, alt: "noDataImg" }),
              (0, s.jsx)("p", {
                className: "text-white text-lg",
                children: "No data found",
              }),
            ],
          });
    },
    76854: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/loaderImg.4a681d1e.svg",
          height: 94,
          width: 94,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEUziodMaXEDJ0IAIiIXUV4eXmgpd3oPQlUxiIQVS1kKMkkja3A4lY5Cq547nJM/ppolcXQug4FApps5lo8vf4FAppvOpEylAAAAFXRSTlMdABwFW3OcM7dHEIfK3uHLZX6ikys0buOlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nAXBhxHAIAwAsQdcqSmX/VeNROEamr2A2VCVzh02VMSJCJPMJOac7u68ey+qVzjfotdG4Tm0Vn5CnwHYWx6R9wAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
  },
  function (e) {
    e.O(
      0,
      [
        522, 452, 764, 840, 665, 706, 310, 212, 173, 78, 494, 935, 816, 850,
        694, 534, 971, 23, 744,
      ],
      function () {
        return e((e.s = 19376));
      }
    ),
      (_N_E = e.O());
  },
]);

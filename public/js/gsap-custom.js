let vw = window.innerWidth || document.documentElement.clientWidth,
            maxVw = 320;
        vw > maxVw && document.querySelectorAll(".js-hover-img-item").forEach(function (e) {
            let t = e,
                r = (t.getBoundingClientRect(),
                    e.querySelector("img")),
                a = r.offsetHeight,
                l = r.offsetWidth;
            e.addEventListener("mouseenter",
                    s => {
                        e.classList.contains("is-hover") || e.classList.add("is-hover");
                        let o = s.clientX - t.offsetLeft - l / 2,
                            u = s.offsetY - a / 2;
                        gsap.set(r, {
                            x: o,
                            y: u,
                        })
                    }),
                e.addEventListener("mousemove",
                    e => {
                        let s = e.clientX - t.offsetLeft - l / 2,
                            o = e.offsetY - r.offsetTop - a * .5;
                        gsap.to(r, {
                            x: s,
                            y: o,
                            rotate: -4,
                        })
           }),
           e.addEventListener("mouseleave", () => {
          e.classList.contains("is-hover") && e.classList.remove("is-hover")
         })
        });
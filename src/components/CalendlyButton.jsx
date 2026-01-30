useEffect(() => {
  const initCalendly = () => {
    const el = document.getElementById("calendly-embed");
    if (!el || !window.Calendly) return;

    // 🔒 Prevent duplicate embeds
    el.innerHTML = "";

    window.Calendly.initInlineWidget({
      url: "https://calendly.com/happinessx",
      parentElement: el,
    });
  };

  if (window.Calendly) {
    initCalendly();
  } else {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = initCalendly;
    document.body.appendChild(script);
  }
}, []);

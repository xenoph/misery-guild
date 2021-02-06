const size = {
  tiny: "400px",
  mobile: "600px",
  tablet: "1024px",
  smallDesktop: "1200px",
  smallDesktopUp: "1201px",
  desktop: "1025px",
};

export const device = {
  tiny: `(max-width: ${size.tiny})`,
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  smallDesktop: `(max-width: ${size.smallDesktop})`,
  smallDesktopUp: `(min-width: ${size.smallDesktopUp})`,
  desktopL: `(min-width: ${size.desktop})`,
};

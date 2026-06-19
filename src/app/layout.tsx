import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";

import classNames from "classnames";

import {
    Background,
    Button,
    Column,
    Flex,
    Meta,
    opacity,
    SpacingToken,
} from "@once-ui-system/core";
import { Footer, Header, RouteGuard, Providers } from "@/components";
import { baseURL, effects, fonts, style, dataStyle, home } from "@/resources";
import Script from "next/script";

export async function generateMetadata() {
    return Meta.generate({
        title: home.title,
        description: home.description,
        baseURL: baseURL,
        path: home.path,
        image: home.image,
    });
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Flex
            suppressHydrationWarning
            as="html"
            lang="en"
            fillWidth
            className={classNames(
                fonts.heading.variable,
                fonts.body.variable,
                fonts.label.variable,
                fonts.code.variable,
            )}
        >
            <head>
                <script
                    id="theme-init"
                    dangerouslySetInnerHTML={{
                        __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  const defaultTheme = 'system';
                  
                  // Set defaults from config
                  const config = ${JSON.stringify({
                      brand: style.brand,
                      accent: style.accent,
                      neutral: style.neutral,
                      solid: style.solid,
                      "solid-style": style.solidStyle,
                      border: style.border,
                      surface: style.surface,
                      transition: style.transition,
                      scaling: style.scaling,
                      "viz-style": dataStyle.variant,
                  })};
                  
                  // Apply default values
                  Object.entries(config).forEach(([key, value]) => {
                    root.setAttribute('data-' + key, value);
                  });
                  
                  // Resolve theme
                  const resolveTheme = (themeValue) => {
                    if (!themeValue || themeValue === 'system') {
                      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    }
                    return themeValue;
                  };
                  
                  // Apply saved theme
                  const savedTheme = localStorage.getItem('data-theme');
                  const resolvedTheme = resolveTheme(savedTheme);
                  root.setAttribute('data-theme', resolvedTheme);
                  
                  // Apply any saved style overrides
                  const styleKeys = Object.keys(config);
                  styleKeys.forEach(key => {
                    const value = localStorage.getItem('data-' + key);
                    if (value) {
                      root.setAttribute('data-' + key, value);
                    }
                  });
                } catch (e) {
                  console.error('Failed to initialize theme:', e);
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
                    }}
                />
                <Script
                    src="https://staging-widget.braoza.com/v1/assets/static-pages/injector.js"
                    type="module"
                    data-account="mqi0x8tkfw"
                ></Script>

                <Script
                    data-bot-id="mqjckmb19a"
                    src="https://staging-widget.custama.com/scripts/injector.js?chatbotKey=mqjckmb19a"
                    type="module"
                ></Script>
            </head>
            <Providers>
                <Column
                    as="body"
                    background="page"
                    fillWidth
                    style={{ minHeight: "100vh" }}
                    margin="0"
                    padding="0"
                    horizontal="center"
                >
                    <Background
                        position="fixed"
                        mask={{
                            x: effects.mask.x,
                            y: effects.mask.y,
                            radius: effects.mask.radius,
                            cursor: effects.mask.cursor,
                        }}
                        gradient={{
                            display: effects.gradient.display,
                            opacity: effects.gradient.opacity as opacity,
                            x: effects.gradient.x,
                            y: effects.gradient.y,
                            width: effects.gradient.width,
                            height: effects.gradient.height,
                            tilt: effects.gradient.tilt,
                            colorStart: effects.gradient.colorStart,
                            colorEnd: effects.gradient.colorEnd,
                        }}
                        dots={{
                            display: effects.dots.display,
                            opacity: effects.dots.opacity as opacity,
                            size: effects.dots.size as SpacingToken,
                            color: effects.dots.color,
                        }}
                        grid={{
                            display: effects.grid.display,
                            opacity: effects.grid.opacity as opacity,
                            color: effects.grid.color,
                            width: effects.grid.width,
                            height: effects.grid.height,
                        }}
                        lines={{
                            display: effects.lines.display,
                            opacity: effects.lines.opacity as opacity,
                            size: effects.lines.size as SpacingToken,
                            thickness: effects.lines.thickness,
                            angle: effects.lines.angle,
                            color: effects.lines.color,
                        }}
                    />
                    <Flex fillWidth minHeight="16" hide="s" />
                    <Header />
                    <Flex
                        zIndex={0}
                        fillWidth
                        padding="l"
                        horizontal="center"
                        flex={1}
                    >
                        <Flex horizontal="center" fillWidth minHeight="0">
                            <RouteGuard>{children}</RouteGuard>
                            <Button
                                id="guidy-widget-button"
                                style={{
                                    borderRadius: "50%",
                                    width: "60px",
                                    height: "60px",
                                    position: "fixed",
                                    bottom: "20px",
                                    right: "20px",
                                }}
                            >
                                <div style={{ width: "40px", height: "40px" }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon"
                                        viewBox="0 0 1024 1024"
                                    >
                                        <path
                                            fill="#E73B37"
                                            d="M502 512a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"
                                        />
                                        <path
                                            fill="#39393A"
                                            d="M512 306.8c27.7 0 54.6 5.4 79.8 16.1 24.4 10.3 46.4 25.1 65.2 44s33.6 40.8 44 65.2c10.7 25.3 16.1 52.1 16.1 79.8 0 27.7-5.4 54.6-16.1 79.8-10.3 24.4-25.1 46.4-44 65.2-18.8 18.8-40.8 33.6-65.2 44-25.3 10.7-52.1 16.1-79.8 16.1-27.7 0-54.6-5.4-79.8-16.1-24.4-10.3-46.4-25.1-65.2-44-18.8-18.8-33.6-40.8-44-65.2-10.7-25.3-16.1-52.1-16.1-79.8 0-27.7 5.4-54.6 16.1-79.8 10.3-24.4 25.1-46.4 44-65.2s40.8-33.6 65.2-44c25.2-10.6 52.1-16.1 79.8-16.1m0-22c-125.4 0-227.1 101.7-227.1 227.1S386.6 739.1 512 739.1c125.4 0 227.1-101.7 227.1-227.1S637.4 284.8 512 284.8z"
                                        />
                                        <path
                                            fill="#E73B37"
                                            d="M512 618.7c-58.9 0-106.8-47.9-106.8-106.8S453.1 405.1 512 405.1 618.8 453 618.8 511.9 570.9 618.7 512 618.7zm0-193.5c-47.9 0-86.8 38.9-86.8 86.8s38.9 86.8 86.8 86.8 86.8-38.9 86.8-86.8-38.9-86.8-86.8-86.8z"
                                        />
                                        <path
                                            fill="#39393A"
                                            d="m544.2 107.3 34.1 92.3 7.4 19.9 20.2 6.6c10.3 3.4 32.1 12.9 43.4 18.1l18.7 8.6 18.6-8.9 87.9-41.8 46.4 46.5-41.2 89.4-8.9 19.3 9.6 19c6.8 13.4 12.6 27.5 17.4 41.9l6.7 20.5 20.3 7.2 91.7 32.6v65.7l-92.3 34.1-19.9 7.4-6.6 20.2c-4.7 14.4-10.6 28.4-17.4 41.9l-9.8 19.3 9.3 19.5 41.8 87.9-46.5 46.5-89.1-41.3-19.3-8.9-19 9.6c-13.4 6.8-27.5 12.6-41.9 17.4l-20.5 6.7-7.2 20.3-32.6 91.7h-65.7l-34.1-92.3-7.4-19.9-20.2-6.6c-10.3-3.4-32.1-12.9-43.4-18.1L356 771l-18.6 8.9-87.9 41.8-46.4-46.5 41.2-89.3 8.9-19.3-9.6-19c-6.8-13.4-12.6-27.5-17.4-41.9l-6.7-20.5-20.3-7.2-91.7-32.6v-65.7l92.3-34.1 19.9-7.4 6.6-20.2c3.4-10.3 12.9-32.1 18.1-43.4l8.6-18.7-8.9-18.6-41.8-87.9 46.4-46.4 89.3 41.2 19.3 8.9 19-9.6c13.4-6.8 27.5-12.6 41.9-17.4l20.5-6.7 7.2-20.3 32.6-91.7h65.7m30.7-44.1H447.4l-43 121c-16.6 5.5-32.7 12.1-48.1 19.9l-117.2-54-90.1 90.1 55.2 116s-14.5 31.4-19.9 48.1l-121 44.7v127.4l121 43c5.5 16.6 12.1 32.6 19.9 48l-54 117.2 90.1 90.1 116-55.2s31.4 14.5 48.1 19.9l44.7 121h127.4l43-121c16.6-5.5 32.6-12.1 48-19.9l117.2 54 90.1-90.1-55.2-116c7.8-15.4 14.5-31.4 19.9-48l121-44.7V447.4l-121-43c-5.5-16.6-12.1-32.6-19.9-48l54-117.2-90.1-90.1-115.9 55.2s-31.5-14.5-48.1-19.9L574.9 63.3z"
                                        />
                                    </svg>
                                </div>
                            </Button>
                        </Flex>
                    </Flex>
                    <Footer />
                </Column>
            </Providers>
        </Flex>
    );
}
